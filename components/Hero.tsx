'use client';

import { useState, useEffect, useRef } from 'react';

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMounted, setIsMounted] = useState(false);
    const [currentRole, setCurrentRole] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    const roles = [
        "Interface Architect",
        "UX Strategist",
        "Design Systems Architect",
        "Product Designer"
    ];

    useEffect(() => {
        setIsMounted(true);
        const handleMouseMove = (e: MouseEvent) => {
            if (!sectionRef.current) return;
            const { left, top } = sectionRef.current.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - left,
                y: e.clientY - top,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    const name = "Nandini Yadav";
    const nameChars = name.split("");

    return (
        <section
            ref={sectionRef}
            id="overview"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAF9F6] selection:bg-violet-100 selection:text-violet-900"
        >
            {/* --- ADVANCED INTERACTIVE BACKGROUND SYSTEM --- */}
            {isMounted && (
                <>
                    {/* 1. Dynamic Magnetic Spotlight (Follows Mouse) */}
                    <div
                        className="pointer-events-none absolute inset-0 z-0 transition-all duration-300"
                        style={{
                            background: `radial-gradient(1200px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.12), transparent 70%)`,
                        }}
                    />

                    {/* 2. Animated Particle System */}
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        {[...Array(30)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute animate-particle-float"
                                style={{
                                    top: `${(i * 7) % 100}%`,
                                    left: `${(i * 13) % 100}%`,
                                    animationDelay: `${i * 0.2}s`,
                                    animationDuration: `${8 + (i % 12)}s`,
                                }}
                            >
                                <div
                                    className={`rounded-full blur-[2px] ${i % 4 === 0 ? 'w-2 h-2 bg-violet-400/20' :
                                        i % 4 === 1 ? 'w-1.5 h-1.5 bg-purple-300/25' :
                                            i % 4 === 2 ? 'w-1 h-1 bg-fuchsia-300/20' :
                                                'w-2.5 h-2.5 bg-indigo-300/15'
                                        }`}
                                    style={{
                                        transform: `translate(${mousePosition.x / (100 + i)}px, ${mousePosition.y / (100 + i)}px)`,
                                        transition: 'transform 0.3s ease-out'
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* 3. Morphing Gradient Orbs (Large, Attention-Grabbing) */}
                    <div className="absolute top-1/4 -right-1/4 w-[900px] h-[900px] bg-gradient-to-br from-violet-200/40 via-purple-100/30 to-transparent blur-[160px] rounded-full animate-blob-morph opacity-50" />
                    <div className="absolute -bottom-1/4 -left-1/4 w-[900px] h-[900px] bg-gradient-to-tr from-fuchsia-200/30 via-violet-100/30 to-transparent blur-[160px] rounded-full animate-blob-morph-alt opacity-50" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-100/20 to-indigo-100/20 blur-[140px] rounded-full animate-pulse-slow opacity-40" />

                    {/* 4. Interactive Geometric Shapes */}
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        {[...Array(8)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute transition-all duration-500"
                                style={{
                                    top: `${15 + (i * 12) % 70}%`,
                                    left: `${10 + (i * 15) % 80}%`,
                                    transform: `translate(${mousePosition.x / (30 + i * 5)}px, ${mousePosition.y / (30 + i * 5)}px) rotate(${i * 45}deg)`,
                                }}
                            >
                                <div className={`
                                    ${i % 3 === 0 ? 'w-32 h-32 border-2 border-violet-200/30 rounded-2xl animate-spin-slow' :
                                        i % 3 === 1 ? 'w-24 h-24 border-2 border-purple-200/25 rounded-full animate-pulse-slow' :
                                            'w-20 h-20 bg-gradient-to-br from-fuchsia-100/10 to-violet-100/10 rounded-xl animate-float-slow'}
                                `} />
                            </div>
                        ))}
                    </div>

                    {/* 5. Design System Swatches (Interactive) */}
                    <div className="absolute top-20 left-10 hidden lg:flex flex-col gap-3 opacity-40 group-hover:opacity-60 transition-opacity">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-violet-600 shadow-lg animate-pulse-glow cursor-pointer hover:scale-110 transition-transform" />
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 shadow-lg animate-pulse-glow delay-75 cursor-pointer hover:scale-110 transition-transform"
                            style={{ animationDelay: '0.3s' }} />
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-400 to-purple-500 shadow-lg animate-pulse-glow delay-150 cursor-pointer hover:scale-110 transition-transform"
                            style={{ animationDelay: '0.6s' }} />
                        <div className="w-8 h-[2px] bg-gradient-to-r from-violet-300 to-transparent mt-2" />
                        <span className="text-[7px] font-mono text-stone-500 tracking-widest">BRAND</span>
                    </div>

                    {/* 6. Floating Wireframe Grid */}
                    <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
                        <div
                            className="w-full h-full animate-grid-pulse"
                            style={{
                                backgroundImage: `linear-gradient(#8B5CF6 1px, transparent 1px), linear-gradient(90deg, #8B5CF6 1px, transparent 1px)`,
                                backgroundSize: '100px 100px',
                            }}
                        />
                    </div>

                    {/* 7. UX Metrics Dashboard */}
                    <div className="absolute bottom-20 right-10 hidden xl:block opacity-30 hover:opacity-50 transition-opacity cursor-default">
                        <div className="bg-white/40 backdrop-blur-xl rounded-2xl p-4 border border-violet-100 shadow-lg">
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center justify-between gap-4">
                                    <span className="text-[8px] font-bold uppercase tracking-wider text-stone-600">Accessibility</span>
                                    <div className="w-20 h-2 bg-stone-200 rounded-full overflow-hidden">
                                        <div className="h-full w-[95%] bg-gradient-to-r from-violet-500 to-purple-500 animate-progress-fill" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between gap-4">
                                    <span className="text-[8px] font-bold uppercase tracking-wider text-stone-600">Usability</span>
                                    <div className="w-20 h-2 bg-stone-200 rounded-full overflow-hidden">
                                        <div className="h-full w-[92%] bg-gradient-to-r from-fuchsia-500 to-violet-500 animate-progress-fill delay-75" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between gap-4">
                                    <span className="text-[8px] font-bold uppercase tracking-wider text-stone-600">Aesthetic</span>
                                    <div className="w-20 h-2 bg-stone-200 rounded-full overflow-hidden">
                                        <div className="h-full w-[98%] bg-gradient-to-r from-purple-500 to-indigo-500 animate-progress-fill delay-150" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* --- CORE CONTENT --- */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center">

                    {/* Status Badge */}
                    <div className="mb-10 opacity-0 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-violet-100 bg-white/60 backdrop-blur-xl shadow-sm hover:shadow-md transition-shadow cursor-default">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-600" />
                            </span>
                            <span className="text-[8px] font-bold uppercase tracking-[0.5em] text-violet-700">
                                Available for Collaboration
                            </span>
                        </div>
                    </div>

                    {/* The Name: Glitch Animation - LARGER SIZE */}
                    <div className="relative mb-8">
                        <h1 className="flex justify-center flex-wrap -space-x-0.5 md:space-x-1 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
                            {nameChars.map((char, i) => (
                                <span
                                    key={i}
                                    className={`inline-block animate-glitch-shimmer ${char === " " ? "w-4 md:w-8" : "text-stone-900 hover:text-violet-700 transition-colors duration-300 cursor-default"}`}
                                    style={{
                                        animationDelay: `${i * 0.12}s`,
                                        display: char === " " ? 'inline' : 'inline-block'
                                    }}
                                >
                                    {char}
                                </span>
                            ))}
                        </h1>
                        <div className="w-24 h-[2px] mx-auto bg-gradient-to-r from-transparent via-violet-500 to-transparent mt-6 animate-width-pulse" />
                    </div>

                    {/* Rotating Role - LARGER SIZE */}
                    <div className="relative mb-12 opacity-0 animate-fade-in delay-500 h-10 flex items-center">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 animate-gradient-shift">
                                {roles[currentRole]}
                            </span>
                        </h2>
                    </div>

                    {/* Description - Updated for Fresher */}
                    <p className="max-w-2xl text-base md:text-lg text-stone-600 leading-relaxed mb-14 opacity-0 animate-fade-in delay-700">
                        Passionate about creating <span className="text-stone-900 font-semibold border-b-2 border-violet-200 hover:border-violet-400 transition-colors cursor-default">intuitive digital experiences</span> that blend aesthetic appeal with user-centered design principles.
                        Eager to bring fresh perspectives to <span className="italic text-violet-700 font-medium">modern UI/UX challenges</span> and contribute to meaningful design solutions.
                    </p>

                    {/* Action Hub - Modern Classic Buttons */}
                    <div className="flex flex-col sm:flex-row gap-5 items-center opacity-0 animate-fade-in-up delay-1200">
                        {/* Primary CTA - Elegant Gradient Button */}
                        <button className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-xl font-medium text-[15px] text-white tracking-wide transition-all duration-400 hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5 active:translate-y-0">
                            <span className="relative flex items-center gap-2.5">
                                View Portfolio
                                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>

                            {/* Subtle shine effect */}
                            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            </div>
                        </button>

                        {/* Secondary CTA - Clean Outline Button */}
                        <button className="group relative px-8 py-4 rounded-xl border-2 border-stone-300 font-medium text-[15px] text-stone-700 tracking-wide transition-all duration-400 hover:border-violet-400 hover:text-violet-700 hover:-translate-y-0.5 active:translate-y-0">
                            <span className="relative flex items-center gap-2.5">
                                Download Resume
                                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </span>

                            {/* Subtle background on hover */}
                            <div className="absolute inset-0 rounded-xl bg-violet-50 opacity-0 group-hover:opacity-100 transition-opacity duration-400" style={{ zIndex: -1 }} />
                        </button>
                    </div>

                    {/* Social Proof Tags - Enhanced */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mt-10 mb-16 opacity-0 animate-fade-in delay-[1400ms]">
                        {['Figma', 'Adobe XD', 'Design Systems', 'Prototyping', 'User Research'].map((tag, i) => (
                            <span
                                key={tag}
                                className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-violet-100 text-xs font-medium text-stone-700 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 transition-all duration-300 cursor-default shadow-sm hover:shadow-md"
                                style={{ animationDelay: `${1400 + i * 50}ms` }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                </div>
            </div>



        </section>
    );
};

export default Hero;
