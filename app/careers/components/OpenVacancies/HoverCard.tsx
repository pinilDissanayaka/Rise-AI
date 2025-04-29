import React, { useState, useEffect } from 'react';
import { useSpring, animated } from "@react-spring/web";

type Props = {
    children: React.ReactNode
    backgroundColor: string
    direction: string
    left: string
};

// Adjust calculation based on screen size
const calc = (x: number, y: number, isMobile: boolean): [number, number, number] => {
  const dampingFactor = isMobile ? 1000 : 360; // Increased damping for mobile
  const xFactor = isMobile ? 800 : 240; // Increased x factor for mobile
  
  return [
    -(y - window.innerHeight / 2) / dampingFactor,
    (x - window.innerWidth / 2) / xFactor,
    isMobile ? 1.005 : 1.02, // Reduced effect on mobile further
  ];
};

const trans = (x: number, y: number, s: number): string => 
  `perspective(900px) rotateX(${-x}deg) rotateY(${-y}deg)`;

const HoverCard: React.FC<Props> = ({children, backgroundColor, direction, left}) => {
    const [hovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    
    // Enhanced device detection
    useEffect(() => {
      const checkDevice = () => {
        setIsMobile(window.innerWidth < 768);
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
      };
      
      checkDevice();
      window.addEventListener('resize', checkDevice);
      
      return () => window.removeEventListener('resize', checkDevice);
    }, []);
    
    // Adjust spring config for better mobile performance
    const [springProps, set] = useSpring(() => ({
      xys: [0, 0, 1],
      config: { 
        mass: isMobile ? 2 : 5, // Lighter mass for mobile
        tension: isMobile ? 1500 : 6000, // Lower tension for smoother mobile animation
        friction: isMobile ? 40 : 100, // Less friction for mobile
        precision: 0.001,
      },
    }));

    const [cursorCoords, setCursorCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {
      // Only track mouse position on non-touch devices
      if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
        const handleMousePosition = (event: MouseEvent) => {
          const { clientX: x, clientY: y } = event;
          setCursorCoords({ x, y });
        };

        window.addEventListener('mousemove', handleMousePosition);

        return () => {
          window.removeEventListener('mousemove', handleMousePosition);
        };
      }
    }, []);

    // Static glow animation for touch devices - enhanced for mobile
    useEffect(() => {
      if (isTouchDevice) {
        // Subtle pulse animation for touch devices
        const interval = setInterval(() => {
          setIsHovered(prev => !prev);
        }, isMobile ? 4000 : 3000); // Slower on mobile for less distraction
        
        return () => clearInterval(interval);
      }
    }, [isTouchDevice, isMobile]);

    // Adjust calculation for different screen sizes
    const calcTranslate = (coordinate: number, containerSize: number, itemSize: number) => {
      const baseSize = isMobile ? 200 : 600; // Smaller base size for mobile
      return ((coordinate / containerSize) * (containerSize - (itemSize || baseSize)));
    };

    const translateX = typeof window !== 'undefined' 
      ? calcTranslate(cursorCoords.x, window.innerWidth, isMobile ? 300 : 600) 
      : 0;
      
    const translateY = typeof window !== 'undefined' 
      ? calcTranslate(cursorCoords.y, window.innerHeight, isMobile ? 250 : 500) 
      : 0;

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
      // Skip effect on touch devices
      if (typeof window !== 'undefined' && !window.matchMedia('(hover: hover)').matches) return;
      
      const { clientX: x, clientY: y } = event;
      set({ xys: calc(x, y, isMobile) });
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      set({ xys: [0, 0, 1] });
      setIsHovered(false);
    };

    return (
      <animated.div
        className="overflow-hidden mb-3 md:mb-8 rounded-xl active:scale-[0.99] transition-transform touch-manipulation"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={() => isTouchDevice && setIsHovered(true)}
        onTouchEnd={() => isTouchDevice && setTimeout(() => setIsHovered(false), 500)}
        style={isTouchDevice ? {} : { transform: springProps.xys.to(trans) }}
      >
        <div className={`z-[1] relative bg-[#161b22] h-full border-[#30363d] border-[0.5px] rounded-xl shadow-xl flex flex-col ${isMobile ? 'p-2.5 gap-2' : direction + ' p-3 sm:p-4'} md:flex-row justify-between`}>
          {children}
          <div
            className={`absolute w-full md:w-[500px] border-none ${isMobile ? '-bottom-[150px]' : '-bottom-[100px] md:bottom-[50px]'} h-[300px] md:h-[1000px] z-[-1] back ${hovered ? "opacity-75" : "opacity-0"} transition-opacity duration-700 ${isTouchDevice && isMobile ? "blur-md" : isTouchDevice ? "blur-xl" : ""}`}
            style={{
              transform: isTouchDevice ? 
                `translate(${isMobile ? "0, 30%" : left + ", 50%"})` : 
                `translateX(${translateX}px) translateY(${isMobile ? translateY*0.6 : 2*translateY}px)`,
              background: backgroundColor,
              borderRadius: isMobile ? '50%' : '100%',
              mixBlendMode: 'soft-light',
              left: isMobile ? '0' : left,
              willChange: 'transform, opacity',
              transition: isTouchDevice ? 'opacity 0.8s ease-in-out' : 'transform 0.2s cubic-bezier, opacity 0.3s ease',
            }}
          ></div>
        </div>
      </animated.div>
    );
};

export default HoverCard;
