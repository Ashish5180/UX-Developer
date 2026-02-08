'use client';

import { useState, useEffect } from 'react';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('overview');
    const [isScrolled, setIsScrolled] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMounted, setIsMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { id: 'overview', label: 'Overview', icon: '◆' },
        { id: 'biography', label: 'Biography', icon: '◈' },
        { id: 'showcase', label: 'Showcase', icon: '◇' },
        { id: 'capabilities', label: 'Capabilities', icon: '◊' },
        { id: 'collaboration', label: 'Collaboration', icon: '◉' },
    ];

    useEffect(() => {
        setIsMounted(true);

        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            if (!mobile) {
                setIsMobileMenuOpen(false);
            }
        };

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        // Intersection Observer to track scroll position
        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observerOptions = {
            threshold: 0.5,
            rootMargin: "-10% 0px -40% 0px"
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        navItems.forEach(item => {
            const element = document.getElementById(item.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isMounted || isMobile) return;
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const handleNavItemClick = (id: string) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // Offset for navbar height
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <nav
                className={`fixed ${isMobile ? 'top-3 left-3 right-3' : 'top-6 left-1/2 -translate-x-1/2'} z-50 transition-all duration-700 ease-out ${isScrolled ? 'scale-[0.96]' : 'scale-100'
                    }`}
            >
                {/* Main Navbar Container - RESPONSIVE */}
                <div
                    className={`relative ${isMobile ? 'px-4 py-3' : 'px-10 py-2.5'} rounded-full overflow-visible ${isMobile ? 'w-full' : 'min-w-[920px] lg:min-w-[1020px]'}`}
                    onMouseMove={handleMouseMove}
                >
                    {/* Animated Border Gradient - CLASSIC & ELEGANT */}
                    <div className="absolute inset-0 rounded-full p-[1.5px] bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 animate-border-rotate">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-stone-50/95 via-amber-50/90 to-stone-100/95 backdrop-blur-2xl" />
                    </div>

                    {/* Subtle Animated Laser Beam Background - REFINED */}
                    {isMounted && !isMobile && (
                        <div
                            className="absolute inset-0 opacity-0 hover:opacity-60 transition-opacity duration-700 rounded-full"
                            style={{
                                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.06), transparent 40%)`,
                            }}
                        />
                    )}

                    {/* Subtle Laser Grid Pattern */}
                    <div className="absolute inset-0 opacity-5 rounded-full">
                        <div
                            className="laser-grid w-full h-full"
                            style={{
                                backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.12) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 92, 246, 0.12) 1px, transparent 1px)
              `,
                                backgroundSize: '20px 20px',
                            }}
                        />
                    </div>

                    {/* MOBILE VIEW - Hamburger Menu */}
                    {isMobile ? (
                        <div className="relative flex items-center justify-between">
                            <span className="text-sm font-bold bg-gradient-to-r from-violet-700 via-purple-700 to-fuchsia-700 bg-clip-text text-transparent">
                                Portfolio
                            </span>

                            {/* Hamburger Button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="relative z-10 p-2 rounded-lg hover:bg-violet-100/50 transition-all duration-300"
                                aria-label="Toggle menu"
                            >
                                <div className="w-6 h-5 flex flex-col justify-between">
                                    <span className={`block h-0.5 w-full bg-gradient-to-r from-violet-600 to-purple-600 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                                    <span className={`block h-0.5 w-full bg-gradient-to-r from-violet-600 to-purple-600 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                                    <span className={`block h-0.5 w-full bg-gradient-to-r from-violet-600 to-purple-600 rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                                </div>
                            </button>
                        </div>
                    ) : (
                        /* DESKTOP VIEW - Full Navigation */
                        <div className="relative flex items-center gap-1.5 justify-center lg:gap-2">
                            {/* Navigation Items */}
                            {navItems.map((item, index) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavItemClick(item.id)}
                                    className={`
                group relative px-5 py-2 text-xs lg:px-6 lg:text-sm rounded-full font-medium
                transition-all duration-500 ease-out
                ${activeSection === item.id
                                            ? 'text-white shadow-lg'
                                            : 'text-stone-700 hover:text-violet-900'
                                        }
              `}
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                    }}
                                >
                                    {/* Active Item - CLASSIC GRADIENT */}
                                    {activeSection === item.id && (
                                        <>
                                            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 rounded-full opacity-90" />
                                            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 rounded-full blur-md opacity-30" />
                                        </>
                                    )}

                                    {/* Hover Effect - SUBTLE & SMOOTH */}
                                    <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-violet-200/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]" />
                                    </div>

                                    <div className="absolute inset-0 rounded-full bg-violet-100/0 group-hover:bg-violet-100/25 transition-all duration-400" />

                                    {/* Refined Border on Hover */}
                                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                                        <div className="absolute inset-0 rounded-full border border-violet-400/30" />
                                    </div>

                                    {/* Content */}
                                    <span className="relative flex items-center gap-1.5 z-10">
                                        <span className="text-[10px] opacity-50 group-hover:opacity-70 transition-opacity">
                                            {item.icon}
                                        </span>
                                        <span className="font-sans tracking-wide font-semibold">{item.label}</span>
                                    </span>

                                    {/* Active Indicator - SUBTLE */}
                                    {activeSection === item.id && (
                                        <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full shadow-md shadow-violet-200" />
                                    )}
                                </button>
                            ))}

                            {/* Separator */}
                            <div className="w-[1px] h-6 bg-gradient-to-b from-transparent via-violet-300/40 to-transparent mx-1.5" />

                            {/* CTA Button - DESKTOP */}
                            <button
                                onClick={() => handleNavItemClick('collaboration')}
                                className="group relative px-5 py-2 text-xs lg:px-6 rounded-full overflow-hidden"
                            >
                                {/* Animated Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-[length:200%_100%] animate-gradient-flow" />
                                <div className="absolute inset-[1.5px] rounded-full bg-gradient-to-br from-stone-50 to-amber-50 group-hover:opacity-0 transition-opacity duration-500" />

                                {/* Classic Sliding Effect - REFINED */}
                                <>
                                    <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
                                        <div className="absolute inset-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-[cubic-bezier(0.34,1.2,0.64,1)]" />
                                    </div>
                                    <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
                                        <div className="absolute inset-0 w-[150%] h-full bg-gradient-to-l from-transparent via-violet-100/30 to-transparent translate-x-full group-hover:-translate-x-full transition-transform duration-1400 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75" />
                                    </div>
                                </>

                                <span className="relative font-bold bg-gradient-to-r from-violet-700 via-purple-700 to-fuchsia-700 bg-clip-text text-transparent group-hover:from-white group-hover:via-white group-hover:to-white transition-all duration-500 tracking-wide z-10">
                                    Let's Collaborate
                                </span>
                            </button>
                        </div>
                    )}

                    {/* Floating Particles - DESKTOP ONLY, SUBTLE */}
                    {isMounted && !isMobile && (
                        <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
                            {[...Array(4)].map((_, i) => (
                                <div
                                    key={i}
                                    className="particle absolute w-0.5 h-0.5 bg-violet-400/60 rounded-full animate-float-particles"
                                    style={{
                                        left: `${Math.random() * 100}%`,
                                        animationDelay: `${i * 0.8}s`,
                                        animationDuration: `${4 + Math.random() * 2}s`,
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Subtle Ambient Glow - REFINED */}
                <div className={`absolute -inset-6 bg-gradient-to-r from-violet-300/8 via-purple-300/8 to-fuchsia-300/8 blur-2xl -z-10 ${isMobile ? 'hidden' : ''}`} />
            </nav>

            {/* MOBILE MENU DROPDOWN - Classic & Elegant */}
            {isMobile && (
                <>
                    {/* Backdrop Overlay */}
                    <div
                        className={`fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                            }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    />

                    {/* Mobile Menu Panel */}
                    <div
                        className={`fixed top-20 left-3 right-3 z-40 rounded-2xl overflow-hidden transition-all duration-500 ease-out ${isMobileMenuOpen
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 -translate-y-4 pointer-events-none'
                            }`}
                    >
                        {/* Animated Border */}
                        <div className="p-[1.5px] bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 rounded-2xl animate-border-rotate">
                            <div className="bg-gradient-to-br from-stone-50 via-amber-50 to-stone-100 backdrop-blur-xl rounded-2xl p-4">
                                {/* Navigation Items */}
                                <div className="flex flex-col gap-2">
                                    {navItems.map((item, index) => (
                                        <button
                                            key={item.id}
                                            onClick={() => handleNavItemClick(item.id)}
                                            className={`
                        relative px-5 py-3 rounded-xl font-medium text-sm text-left
                        transition-all duration-300 ease-out
                        ${activeSection === item.id
                                                    ? 'text-white bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 shadow-lg'
                                                    : 'text-stone-700 hover:bg-violet-100/40'
                                                }
                      `}
                                            style={{
                                                animationDelay: `${index * 50}ms`,
                                            }}
                                        >
                                            <span className="flex items-center gap-3">
                                                <span className={`text-sm ${activeSection === item.id ? 'opacity-80' : 'opacity-50'}`}>
                                                    {item.icon}
                                                </span>
                                                <span className="font-semibold tracking-wide">{item.label}</span>
                                            </span>
                                        </button>
                                    ))}

                                    {/* Divider */}
                                    <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-300/40 to-transparent my-2" />

                                    {/* CTA Button - Mobile */}
                                    <button className="group relative px-5 py-3 rounded-xl overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-[length:200%_100%] animate-gradient-flow" />
                                        <div className="absolute inset-[1.5px] rounded-xl bg-gradient-to-br from-stone-50 to-amber-50 group-active:opacity-0 transition-opacity duration-300" />
                                        <span className="relative font-bold text-sm bg-gradient-to-r from-violet-700 via-purple-700 to-fuchsia-700 bg-clip-text text-transparent group-active:from-white group-active:via-white group-active:to-white transition-all duration-300 tracking-wide">
                                            Let's Collaborate
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Navbar;


