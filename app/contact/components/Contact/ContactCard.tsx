import React, { useState, useEffect } from 'react';
import { useSpring, animated } from "@react-spring/web";

type Props = {
    children: React.ReactNode
    backgroundColor: string
    direction: string
    left: string
};

const ContactCard: React.FC<Props> = ({children, backgroundColor, direction, left}) => {
    const [hovered, setIsHovered] = useState(false);
    const [cursorCoords, setCursorCoords] = useState({ x: 0, y: 0 });

    const calc = (x: number, y: number): [number, number, number] => [
        -(y - window.innerHeight / 2) / 500,
        (x - window.innerWidth / 2) / 400,
        1.01,
    ];

    const trans = (x: number, y: number, s: number): string => 
        `perspective(1200px) rotateX(${-x}deg) rotateY(${-y}deg) scale(${s})`;

    const [springProps, set] = useSpring(() => ({
        xys: [0, 0, 1],
        config: { mass: 4, tension: 350, friction: 40 },
    }));

    useEffect(() => {
        const handleMousePosition = (event: MouseEvent) => {
            setCursorCoords({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMousePosition);
        return () => window.removeEventListener('mousemove', handleMousePosition);
    }, []);

    const calcTranslate = (coordinate: number, containerSize: number, itemSize: number) =>
        ((coordinate / containerSize) * (containerSize - itemSize) * 0.5);

    const translateX = typeof window !== 'undefined' ? calcTranslate(cursorCoords.x, window.innerWidth, 600) : 0;
    const translateY = typeof window !== 'undefined' ? calcTranslate(cursorCoords.y, window.innerHeight, 500) : 0;

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const { clientX: x, clientY: y } = event;
        set({ xys: calc(x, y) });
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        set({ xys: [0, 0, 1] });
        setIsHovered(false);
    };

    return (
        <animated.div
            className="overflow-hidden mb-5 md:mb-8 rounded-2xl transition-all duration-300"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ 
                transform: springProps.xys.to(trans),
                willChange: 'transform',
            }}
        >
            <div className={`z-[1] relative bg-gradient-to-br from-[#1a202c] to-[#161b22] h-full 
                            border-[#30363d] border-[1px] rounded-2xl
                            shadow-[0_10px_30px_rgba(0,0,0,0.2)] 
                            md:flex ${direction} justify-between overflow-hidden`}>
                {children}
                <div
                    className={`absolute w-[600px] border-none bottom-[0px] h-[800px] z-[-1] 
                               transition-opacity duration-500 ease-in-out ${hovered ? "opacity-70" : "opacity-0"}`}
                    style={{
                        transform: `translateX(${translateX}px) translateY(${translateY}px)`,
                        background: backgroundColor,
                        borderRadius: '60% 40% 50% 50% / 50% 40% 60% 50%',
                        filter: 'blur(80px)',
                        mixBlendMode: 'soft-light',
                        left: left,
                        willChange: 'transform, opacity',
                        transition: 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.3s ease-in-out',
                    }}
                ></div>
            </div>
        </animated.div>
    );
};

export default ContactCard;
