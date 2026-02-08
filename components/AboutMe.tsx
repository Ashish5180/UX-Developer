'use client';

import { useState, useEffect, useRef } from 'react';

const AboutMe = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [time, setTime] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    // Continuous Animation loop
    useEffect(() => {
        let frame: number;
        const animate = (t: number) => {
            setTime(t / 1000); // seconds
            frame = requestAnimationFrame(animate);
        };
        frame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frame);
    }, []);

    // Track mouse for 3D tilt and spotlight effects
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!sectionRef.current) return;
            const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
            const x = (e.clientX - left) / width - 0.5;
            const y = (e.clientY - top) / height - 0.5;
            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Intersection Observer for entrance animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const skills = [
        { name: 'React', level: 95, color: 'from-blue-400 to-cyan-500' },
        { name: 'TypeScript', level: 90, color: 'from-blue-600 to-indigo-500' },
        { name: 'Next.js', level: 92, color: 'from-slate-700 to-slate-900' },
        { name: 'Tailwind CSS', level: 98, color: 'from-cyan-400 to-teal-500' },
        { name: 'Node.js', level: 85, color: 'from-green-500 to-emerald-600' },
        { name: 'Figma', level: 88, color: 'from-purple-500 to-pink-500' },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden bg-[#FAF9F6] min-h-screen flex flex-col justify-center"
            id="biography"
            style={{ perspective: '2000px' }}
        >
            {/* Background Kinetic Layer - Continuous & Reactive */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
                    backgroundSize: '60px 60px',
                    transform: `translateZ(-200px) 
                                rotateX(${isDesktop ? mousePosition.y * 5 + Math.sin(time * 0.5) * 2 : 0}deg) 
                                rotateY(${isDesktop ? mousePosition.x * 5 + Math.cos(time * 0.5) * 2 : 0}deg) 
                                scale(1.3)`,
                    transition: 'transform 0.6s cubic-bezier(0.2, 0, 0.2, 1)'
                }}
            />

            <div className="max-w-7xl mx-auto w-full relative z-10">
                {/* Header with Split Reveal */}
                <div className="mb-12 sm:mb-20 overflow-hidden">
                    <h2
                        className={`text-4xl sm:text-6xl md:text-8xl font-black text-stone-900 mb-4 transition-all duration-1000 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                        style={{ letterSpacing: '-0.04em' }}
                    >
                        THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 font-syne">HUMAN</span><br />
                        BEHIND THE CODE.
                    </h2>
                    <div className={`h-1 bg-stone-900 rounded-full transition-all duration-1000 delay-500 ${isVisible ? 'w-24 sm:w-48 opacity-100' : 'w-0 opacity-0'}`} />
                </div>

                {/* Main Identity Grid (Bento) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:auto-rows-[120px]">

                    {/* Bio Card - Expansive & Clean */}
                    <div
                        className={`md:col-span-8 md:row-span-4 bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 shadow-sm border border-stone-200 relative group overflow-hidden transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                        style={{
                            transform: isDesktop ? `rotateX(${mousePosition.y * -1.5}deg) rotateY(${mousePosition.x * 1.5}deg)` : 'none',
                            transformStyle: 'preserve-3d'
                        }}
                    >
                        <div className="relative z-10 flex flex-col h-full">
                            <span className="text-[10px] sm:text-xs font-bold text-violet-700 uppercase tracking-widest mb-4 sm:mb-6 block border-b border-stone-100 pb-2 w-fit">Biography</span>
                            <div className="flex-1">
                                <p className="text-xl sm:text-2xl md:text-3xl leading-snug text-stone-900 font-semibold max-w-2xl font-outfit">
                                    I'm an <span className="text-violet-600">aspiring full-stack developer</span> and <span className="text-fuchsia-600 font-syne">creative problem solver</span> with a relentless drive for building precision digital tools.
                                </p>
                                <p className="text-base sm:text-lg text-stone-600 mt-4 sm:mt-6 leading-relaxed max-w-xl font-medium">
                                    I approach programming as an art form of logic. As a fresher, my "experience" is measured in hours of deep-work, curiosity-driven projects, and a rapid ability to master new architectures. Based in India, building for the world.
                                </p>
                            </div>
                            <div className="mt-6 sm:mt-8 flex items-center gap-4">
                                <div className="flex -space-x-2 sm:-space-x-3">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white bg-violet-50 flex items-center justify-center overflow-hidden">
                                            <div className="w-full h-full bg-gradient-to-br from-violet-100 to-fuchsia-100" />
                                        </div>
                                    ))}
                                </div>
                                <span className="text-xs sm:text-sm text-stone-500 font-bold">Driven by innovation & clean architecture</span>
                            </div>
                        </div>
                    </div>

                    {/* Fresh Perspective Card - Replaces Experience */}
                    <div
                        className={`md:col-span-4 md:row-span-2 bg-stone-900 rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 text-white flex flex-col justify-between group transition-all duration-700 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                    >
                        <div className="flex items-center justify-between mb-4 md:mb-0">
                            <span className="text-[10px] sm:text-xs font-bold text-stone-400 uppercase tracking-widest font-syne">Current Status</span>
                            <div className="w-2 h-2 rounded-full bg-violet-400 animate-ping" />
                        </div>
                        <div className="mb-4 md:mb-0">
                            <span className="text-3xl sm:text-4xl font-black block font-outfit leading-tight mb-1">FRESHER</span>
                            <span className="text-stone-300 text-[10px] sm:text-sm font-medium uppercase tracking-tight">Eager to Build & Evolve</span>
                        </div>
                        <div className="w-full h-1 bg-stone-800 rounded-full overflow-hidden">
                            <div className="h-full w-full bg-gradient-to-r from-violet-400 to-fuchsia-400" />
                        </div>
                    </div>

                    {/* Power Stack - Vibrant Bento */}
                    <div
                        className={`md:col-span-4 md:row-span-2 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 text-white relative overflow-hidden transition-all duration-700 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                    >
                        <span className="text-[10px] sm:text-xs font-bold text-white/80 uppercase tracking-widest mb-4 block font-syne">Power Stack</span>
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 relative z-10">
                            {skills.slice(0, 4).map((skill, i) => (
                                <div key={i} className="bg-white/10 backdrop-blur-md rounded-xl p-2 sm:p-3 border border-white/20">
                                    <span className="text-xs sm:text-sm font-bold block">{skill.name}</span>
                                    <div className="w-full h-0.5 bg-white/20 rounded-full mt-2">
                                        <div className="h-full bg-white rounded-full" style={{ width: `${skill.level}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Philosophy Card - Wide Bento */}
                    <div
                        className={`md:col-span-6 md:row-span-2 bg-white rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 border border-stone-200 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 group transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    >
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-stone-900 flex items-center justify-center shrink-0 rotate-3 group-hover:rotate-0 transition-transform">
                            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-base sm:text-lg font-bold text-stone-900 mb-1">Philosophy</h4>
                            <p className="text-stone-600 text-[13px] sm:text-sm italic font-semibold leading-tight pr-4">"Logic is the foundation; aesthetics is the bridge. I build bridges that last."</p>
                        </div>
                    </div>

                    {/* Location / Availability - Small Bento */}
                    <div
                        className={`md:col-span-3 md:row-span-2 bg-stone-50 rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 border border-stone-200 flex flex-col justify-between overflow-hidden relative transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    >
                        <div className="flex items-center gap-2 mb-4 md:mb-0">
                            <div className="w-2 h-2 rounded-full bg-stone-900 animate-pulse" />
                            <span className="text-[10px] sm:text-xs font-bold text-stone-500 uppercase tracking-widest font-syne">Available</span>
                        </div>
                        <h4 className="text-xl sm:text-2xl font-black text-stone-900 leading-tight font-outfit">Open to<br className="hidden sm:block" /> Opportunities</h4>
                    </div>

                    {/* Curiosity Card - Interactive Ticker - Small Bento */}
                    <div
                        className={`md:col-span-3 md:row-span-2 bg-white rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 border border-stone-200 overflow-hidden transition-all duration-700 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    >
                        <span className="text-[10px] sm:text-xs font-bold text-stone-500 uppercase tracking-widest mb-4 block font-syne">Interests</span>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-violet-50 flex items-center justify-center text-base sm:text-lg">📚</div>
                                <div className="text-[10px] sm:text-xs">
                                    <span className="block font-bold text-stone-800">Mastering</span>
                                    <span className="text-stone-500 font-semibold italic">System Design</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-violet-50 flex items-center justify-center text-base sm:text-lg">🎧</div>
                                <div className="text-[10px] sm:text-xs">
                                    <span className="block font-bold text-stone-800">Listening</span>
                                    <span className="text-stone-500 font-semibold italic">Focus Beats</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Perspective Floating Words - Continuous Animation and Deep Z-index */}
                <div
                    className="absolute top-1/2 -right-20 hidden lg:flex flex-col gap-12 opacity-[0.05] select-none pointer-events-none z-0"
                    style={{
                        transform: `translateZ(-300px) 
                                    rotateY(${mousePosition.x * -10 + Math.sin(time * 0.4) * 5}deg) 
                                    translateY(${mousePosition.y * 20 + Math.cos(time * 0.4) * 10}px)`
                    }}
                >
                    {['INNOVATION', 'STRUCTURE', 'SPEED', 'PRECISION'].map(word => (
                        <span key={word} className="text-9xl font-black text-stone-900 tracking-tighter">{word}</span>
                    ))}
                </div>

                {/* Final Interactive Callout - Button Text Color Updated to Match UI Color */}
                <div className={`mt-16 sm:mt-24 p-0.5 bg-stone-900 rounded-full inline-block transition-all duration-1000 delay-1000 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
                    <div className="px-6 sm:px-10 py-4 sm:py-5 bg-white rounded-full flex items-center gap-3 sm:gap-4 group cursor-pointer hover:bg-stone-900 transition-all">
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 group-hover:text-white transition-colors uppercase tracking-widest text-[10px] sm:text-xs">
                            Start the collaboration
                        </span>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-fuchsia-600 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* SVG Filter for Texture */}
            <svg style={{ visibility: 'hidden', position: 'absolute' }} width="0" height="0">
                <filter id="noiseFilter">
                    <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
                </filter>
            </svg>
        </section>
    );
};

export default AboutMe;
