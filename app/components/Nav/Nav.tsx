"use client";

import React, { useState, useEffect, memo, useMemo, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { 
  Home, 
  Cpu, 
  Brain, 
  BadgeDollarSign, 
  MessageCircle, 
  EqualApproximately, 
  CircleUserRound,
  Menu,
  X
} from "lucide-react";

type NavItemConfig = {
  icon: React.ReactElement;
  text: string;
  href: string;
  id: string;
};

// Optimized navigation items with smaller icons - removed chat page as requested
const NAV_ITEMS = [
  { icon: <Home size={26} />, text: "Home", href: "/home", id: "Home" },
  { icon: <EqualApproximately size={26} />, text: "About Us", href: "/about", id: "About" },
  { icon: <Brain size={26} />, text: "AI", href: "/ai", id: "AI" },
  { icon: <Cpu size={26} />, text: "Technology", href: "/technology", id: "Technology" },
  { icon: <BadgeDollarSign size={26} />, text: "Marketing", href: "/marketing", id: "Marketing" },
  { icon: <MessageCircle size={26} />, text: "Contact", href: "/contact", id: "Contact" },
  { icon: <CircleUserRound size={26} />, text: "Careers", href: "/careers", id: "Careers" },
] as const;

// Custom hook for mobile detection
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  return isMobile;
};

// Custom hook for scroll position
const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const previousScrollPosition = useRef(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollPosition(currentScrollY);
      
      if (currentScrollY > previousScrollPosition.current) {
        setScrollDirection('down');
      } else if (currentScrollY < previousScrollPosition.current) {
        setScrollDirection('up');
      }
      
      previousScrollPosition.current = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return { scrollPosition, scrollDirection };
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIcon, setActiveIcon] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isMobile = useIsMobile();
  const { scrollPosition, scrollDirection } = useScrollPosition();
  const router = useRouter();
  
  // Automatic hide nav on scroll down, show on scroll up
  const [navVisible, setNavVisible] = useState(true);
  
  useEffect(() => {
    // Hide nav when scrolling down past a threshold, show when scrolling up
    if (scrollDirection === 'down' && scrollPosition > 300) {
      setNavVisible(false);
    } else if (scrollDirection === 'up' || scrollPosition < 100) {
      setNavVisible(true);
    }
  }, [scrollDirection, scrollPosition]);

  // Detect active navigation item
  useEffect(() => {
    const path = pathname.toLowerCase();
    const matchedItem = NAV_ITEMS.find(item => 
      path.includes(item.id.toLowerCase()) || 
      (item.id === "Home" && (path === "/" || path === ""))
    );
    
    if (matchedItem) {
      setActiveIcon(matchedItem.id);
    }
  }, [pathname]);

  // Scroll to section handler for smooth navigation
  const scrollToSection = useCallback((sectionId: string, href: string) => {
    // If already on the page, scroll to section
    if (pathname.includes(href) || (href === "/home" && pathname === "/")) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    // Otherwise navigate to the page normally
  }, [pathname]);

  // Handlers for navigation interactions
  const handleIconClick = useCallback((icon: string, href: string) => {
    setActiveIcon(icon);
    
    // Direct navigation for mobile menu items
    if (isMobile) {
      setIsMobileMenuOpen(false);
      // Use Next.js router for client-side navigation
      router.push(href);
      return;
    }
    
    // For desktop: If we're navigating to sections within the same page
    scrollToSection(icon, href);
  }, [isMobile, scrollToSection, router]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  // Desktop hover handlers
  const handleMouseEnter = useCallback(() => {
    if (isMobile) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  }, [isMobile]);

  const handleMouseLeave = useCallback(() => {
    if (isMobile) return;
    timeoutRef.current = setTimeout(() => setIsOpen(false), 300);
  }, [isMobile]);

  // Keyboard navigation and cleanup
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isOpen && !isMobile) setIsOpen(false);
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isOpen, isMobileMenuOpen, isMobile]);

  // Handle clicks outside the navigation to close it
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node) && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleOutsideClick);
    
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  // Optimized class name calculations
  const desktopNavClasses = useMemo(() => [
    "fixed left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white",
    "transition-all duration-500 rounded-2xl shadow-xl z-50",
    isOpen ? "w-40" : "w-16",
    "border border-gray-700", 
    "backdrop-blur-sm bg-opacity-90",
    "hidden md:block",
    navVisible ? "translate-x-0 opacity-100" : "translate-x-[-100%] opacity-0"
  ].join(" "), [isOpen, navVisible]);

  // Skip rendering Nav on chat page
  if (pathname.includes('/chat')) {
    return null;
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        id="desktop-navigation"
        ref={navRef}
        className={desktopNavClasses}
        aria-label="Main navigation"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
      >
        <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 h-12 w-1.5 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/70 to-purple-700/70 
                         rounded-r-lg blur-[1px] opacity-70"></div>
        </div>
        <ul className="flex flex-col items-center gap-4 py-4 px-2 list-none m-0">
          {NAV_ITEMS.map((item) => (
            <li key={item.id} className="w-full">
              <NavItem
                icon={item.icon}
                text={item.text}
                isOpen={isOpen}
                href={item.href}
                isActive={activeIcon === item.id}
                onClick={() => handleIconClick(item.id, item.href)}
              />
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation Button - Centered in semicircle */}
      <button
        onClick={toggleMobileMenu}
        className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 p-3 rounded-full
                 bg-gradient-to-r from-purple-700 to-purple-800
                 shadow-lg shadow-purple-900/30 text-white
                 md:hidden touch-manipulation
                 border border-purple-500
                 transition-all duration-300 hover:scale-105 active:scale-95
                 w-14 h-14 flex items-center justify-center"
        style={{
          opacity: navVisible ? 1 : 0,
          transform: navVisible 
            ? 'translateY(-50%)' 
            : 'translateY(-50%) translateX(-100%)',
          transition: 'opacity 0.3s ease, transform 0.3s ease'
        }}
        aria-expanded={isMobileMenuOpen}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        aria-controls="mobile-navigation"
      >
        <span className="transition-all duration-300">
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </span>
      </button>

      {/* Mobile Menu - Optimized Semicircle Layout */}
      <div 
        id="mobile-navigation"
        className="fixed md:hidden z-40 inset-0"
        style={{ pointerEvents: isMobileMenuOpen ? 'auto' : 'none' }}
        aria-hidden={!isMobileMenuOpen}
        role="navigation"
        aria-label="Mobile navigation"
      >
        {/* Backdrop for mobile menu */}
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
          style={{ 
            opacity: isMobileMenuOpen ? 1 : 0,
            pointerEvents: isMobileMenuOpen ? 'auto' : 'none' 
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        <div 
          className="fixed left-6 top-1/2 transform -translate-y-1/2 transition-opacity duration-500"
          style={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        >
          <ul className="relative list-none m-0 p-0">
            {NAV_ITEMS.map((item, index) => {
              const totalItems = NAV_ITEMS.length;
              // Wider arc for better spacing
              const startAngle = -Math.PI * 5/10;
              const endAngle = Math.PI * 5/10;
              const angleStep = (endAngle - startAngle) / (totalItems - 1);
              const angle = startAngle + angleStep * index;
              // Increased radius for better spacing
              const radius = 120;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const itemStyle = {
                position: 'absolute' as const,
                transform: isMobileMenuOpen 
                  ? `translate(${x}px, ${y}px) scale(1)` 
                  : 'translate(0, 0) scale(0.5)',
                transition: `transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.04}s, 
                            opacity 0.4s ease ${index * 0.04}s`,
                opacity: isMobileMenuOpen ? 1 : 0,
                left: 0,
                top: 0,
                zIndex: 50 - index,
                pointerEvents: (isMobileMenuOpen ? 'auto' : 'none') as React.CSSProperties['pointerEvents'],
                WebkitTapHighlightColor: 'transparent' // Remove tap highlight on mobile
              };
              
              return (
                <li key={item.id} style={itemStyle}>
                  <RadialNavItem
                    icon={item.icon}
                    text={item.text}
                    href={item.href}
                    isActive={activeIcon === item.id}
                    onClick={() => handleIconClick(item.id, item.href)}
                    angle={angle}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      
      {/* Progress indicator */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-700"
          style={{ 
            width: `${(() => {
              try {
                // Safely calculate scroll percentage with fallbacks
                const docHeight = document.body?.scrollHeight || 1;
                const winHeight = window.innerHeight || 1;
                const scrollableDistance = Math.max(docHeight - winHeight, 1);
                return Math.min((scrollPosition / scrollableDistance) * 100, 100);
              } catch (error) {
                // Return 0 if there's an error in calculation
                console.error("Error calculating scroll progress:", error);
                return 0;
              }
            })()}%`,
            transition: 'width 0.2s ease-out'
          }}
        />
      </div>
    </>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  isOpen: boolean;
  href: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem = memo<NavItemProps>(({ icon, text, isOpen, href, isActive, onClick }) => {
  const classes = useMemo(() => [
    "relative z-50 transition-all rounded-xl p-2.5 transform duration-300 w-full",
    "flex items-center",
    isOpen ? "justify-start pl-3" : "justify-center",
    isActive 
      ? "bg-gradient-to-r from-purple-700 to-purple-800 shadow-md shadow-purple-900/20"
      : "hover:bg-gray-700/70 hover:translate-y-[-5px] hover:shadow-lg",
    "border border-transparent",
    isActive ? "border-purple-500/50" : "hover:border-gray-600",
    "group"
  ].join(" "), [isOpen, isActive]);
  
  return (
    <Link 
      href={href} 
      onClick={onClick}
      title={text}
      className={classes}
      aria-current={isActive ? "page" : undefined}
    >
      <div 
        className={`flex items-center justify-center transition-transform duration-200 ${
          !isActive && "group-hover:scale-110"
        }`} 
        aria-hidden="true"
      >
        {icon}
      </div>
      {isOpen && (
        <span className="ml-3 text-sm font-medium whitespace-nowrap truncate opacity-90">
          {text}
        </span>
      )}
      
      {!isOpen && isActive && (
        <span className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
      )}
      
      {/* Enhanced hover effect */}
      <span className={`absolute inset-0 rounded-xl transition-opacity duration-300 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 pointer-events-none ${isActive ? 'opacity-30' : ''}`}></span>
    </Link>
  );
});

NavItem.displayName = "NavItem";

interface RadialNavItemProps extends Omit<NavItemProps, 'isOpen'> {
  angle?: number;
}

const RadialNavItem = memo<RadialNavItemProps>(({ icon, text, href, isActive, onClick, angle = 0 }) => {
  const getTooltipPosition = useCallback(() => {
    if (typeof window === 'undefined') return 'right';
    if (window.innerWidth < 480) return 'top';
    const degrees = angle * (180 / Math.PI);
    if (degrees > -45 && degrees < 45) return 'right';
    if (degrees > 135 || degrees < -135) return 'left';
    if (degrees >= 45 && degrees <= 135) return 'bottom';
    return 'top';
  }, [angle]);
  
  const [tooltipPosition, setTooltipPosition] = useState<'right' | 'left' | 'top' | 'bottom'>(
    getTooltipPosition()
  );
  
  useEffect(() => {
    const updateTooltipPosition = () => {
      setTooltipPosition(getTooltipPosition());
    };
    
    updateTooltipPosition();
    window.addEventListener('resize', updateTooltipPosition);
    return () => window.removeEventListener('resize', updateTooltipPosition);
  }, [getTooltipPosition]);
  
  // Direct navigation handler to ensure mobile touch works reliably
  const handleNavigation = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault(); // Prevent default to take control of navigation
    
    // First execute any onClick handlers (to close menu, etc.)
    if (typeof onClick === 'function') {
      onClick();
    }
  }, [onClick]);
  
  const classes = useMemo(() => [
    "flex items-center justify-center rounded-full p-3 w-14 h-14",
    "transition-all duration-200 relative",
    "bg-gray-800/90 backdrop-blur-md text-white",
    isActive 
      ? "bg-gradient-to-r from-purple-700 to-purple-800 shadow-md shadow-purple-900/30"
      : "hover:bg-gray-700 active:scale-95", // Add active state for touch devices
    "border border-gray-700",
    isActive ? "border-purple-500" : "hover:border-gray-500",
    "shadow-lg",
    "touch-manipulation" // Improve touch handling
  ].join(" "), [isActive]);
  
  const tooltipClasses = useMemo(() => {
    const baseClasses = [
      "absolute px-3 py-1.5 rounded-lg bg-gray-800/90 backdrop-blur-sm text-white",
      "opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100",
      "pointer-events-none whitespace-nowrap",
      "border border-gray-700 shadow-lg z-10",
      "text-sm",
    ];
    
    switch (tooltipPosition) {
      case 'right':
        baseClasses.push("left-full ml-2 top-1/2 -translate-y-1/2");
        break;
      case 'left':
        baseClasses.push("right-full mr-2 top-1/2 -translate-y-1/2");
        break;
      case 'top':
        baseClasses.push("bottom-full mb-2 left-1/2 -translate-x-1/2");
        break;
      case 'bottom':
        baseClasses.push("top-full mt-2 left-1/2 -translate-x-1/2");
        break;
    }
    
    return baseClasses.join(" ");
  }, [tooltipPosition]);
  
  return (
    <div className="relative group touch-manipulation">
      <a 
        href={href} 
        onClick={handleNavigation}
        onTouchEnd={handleNavigation}
        className={classes}
        aria-current={isActive ? "page" : undefined}
        title={text}
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        <div aria-hidden="true" className="transform transition-transform duration-200 group-hover:scale-110">
          {icon}
        </div>
        
        {isActive && (
          <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-purple-400 border border-purple-600 animate-pulse"></span>
        )}
      </a>
      
      <div className={tooltipClasses}>
        {text}
        <span className="absolute w-2 h-2 bg-gray-800/90 border-t border-l border-gray-700 rotate-45 
                         transform transition-opacity duration-200 delay-100
                         opacity-0 group-hover:opacity-100
                         pointer-events-none"
              style={{
                [tooltipPosition === 'right' ? 'left' : tooltipPosition === 'left' ? 'right' : 'left']: 
                  tooltipPosition === 'right' ? '-4px' : tooltipPosition === 'left' ? '-4px' : '50%',
                [tooltipPosition === 'top' ? 'bottom' : tooltipPosition === 'bottom' ? 'top' : 'top']: 
                  tooltipPosition === 'top' ? '-4px' : tooltipPosition === 'bottom' ? '-4px' : '50%',
                transform: `${
                  (tooltipPosition === 'right' || tooltipPosition === 'left') 
                    ? 'translateY(-50%)' 
                    : 'translateX(-50%)'
                } rotate(${
                  tooltipPosition === 'right' ? '225deg' : 
                  tooltipPosition === 'left' ? '45deg' : 
                  tooltipPosition === 'top' ? '135deg' : 
                  '-45deg'
                })`
              }}
        ></span>
      </div>
    </div>
  );
});

RadialNavItem.displayName = "RadialNavItem";

// Fix the export to make it a proper named default export
const NavComponent = memo(Nav);
NavComponent.displayName = "Nav";

export default NavComponent;


