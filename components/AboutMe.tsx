'use client';

import { useState, useEffect, useRef } from 'react';

const AboutMe = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [activeTab, setActiveTab] = useState('philosophy');
    const sectionRef = useRef<HTMLDivElement>(null);

    // Track mouse for subtle 3D parallax
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!sectionRef.current) return;
            const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
            const x = (e.clientX - (left + width / 2)) / (width / 2);
            const y = (e.clientY - (top + height / 2)) / (height / 2);
            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Intersection Observer for reveal animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const designPillars = [
        { id: 'philosophy', title: 'Philosophy', icon: '✦', text: "Design is a bridge between intent and experience. I focus on creating clean, purposeful interfaces that prioritize clarity and user intuition." },
        { id: 'process', title: 'Process', icon: '⚙', text: "From initial vector-based conceptualization to high-fidelity interactive prototypes, I ensure every design element is strategically placed and functional." },
        { id: 'focus', title: 'Focus', icon: '◎', text: "Dedicated to visual consistency and systemic design, I build scalable interfaces that maintain a premium aesthetic while solving core user problems." }
    ];

    return (
        <section
            ref={sectionRef}
            className="relative py-16 sm:py-24 px-4 sm:px-8 overflow-hidden bg-[#FAF9F6] min-h-screen flex flex-col justify-center"
            id="about"
        >
            {/* Background Texture & Ambient Layer */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] grayscale"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />

            <div className="max-w-7xl mx-auto w-full relative z-10">
                {/* Section Header - Editorial Style */}
                <div className={`mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    <div className="max-w-3xl">
                        <span className="text-[11px] font-bold text-stone-400 uppercase tracking-[0.4em] mb-4 block">Section 02 — Identity</span>
                        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-stone-900 leading-[1.5] tracking-tighter font-syne py-4">
                            VISUAL <br />
                            <span className="inline-block py-10 px-6 -my-10 -mx-6 text-transparent bg-clip-text bg-gradient-to-r from-stone-900 via-stone-700 to-stone-500 italic font-serif font-light">Narratives.</span>
                        </h2>
                    </div>
                    <div className="md:text-right">
                        <p className="text-stone-500 font-medium text-sm sm:text-base max-w-xs md:ml-auto leading-relaxed font-outfit">
                            A focused designer specializing in the intersection of visual precision and digital utility.
                        </p>
                    </div>
                </div>

                {/* Main Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:auto-rows-[120px]">

                    {/* The Big Profile Card */}
                    <div className={`md:col-span-12 lg:col-span-8 md:row-span-4 bg-white rounded-[2.5rem] p-6 sm:p-12 border border-stone-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] group relative overflow-hidden transition-all duration-1000 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div className="max-w-2xl">
                                <h3 className="text-2xl sm:text-4xl font-bold text-stone-900 mb-8 font-syne leading-tight">
                                    I am <span className="relative inline-block">
                                        <span className="relative z-10">Nandini Yadav,</span>
                                        <span className="absolute bottom-1 left-0 w-full h-3 bg-stone-100 -z-10 group-hover:h-full transition-all duration-500" />
                                    </span> a visual designer dedicated to crafting purposeful digital journeys.
                                </h3>
                                <p className="text-lg sm:text-xl text-stone-600 leading-relaxed font-outfit font-light">
                                    Specializing in the transition from conceptual vector artwork to high-fidelity interface design. I focus on building cohesive visual systems and pixel-perfect layouts that prioritize ease of use. Based in India, I bridge the gap between creative storytelling and functional digital requirements.
                                </p>
                            </div>

                            <div className="mt-12 flex flex-wrap gap-12">
                                <div>
                                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block mb-2">Location</span>
                                    <span className="text-sm font-bold text-stone-900 font-syne uppercase">New Delhi, IN</span>
                                </div>
                                <div>
                                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block mb-2">Primary Focus</span>
                                    <span className="text-sm font-bold text-stone-900 font-syne uppercase">UI · UX · Brand Systems</span>
                                </div>
                                <div>
                                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block mb-2">Specialization</span>
                                    <span className="text-sm font-bold text-stone-900 font-syne uppercase">Visual Precision</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating Decorative Elements */}
                        <div className="absolute top-10 right-10 w-24 h-24 rounded-full border border-stone-100 animate-spin-slow opacity-20 pointer-events-none" />
                        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-stone-50 rounded-full opacity-50 blur-3xl pointer-events-none" />
                    </div>

                    {/* Skill Tags - Vertical Stack */}
                    <div className={`md:col-span-6 lg:col-span-4 md:row-span-4 bg-stone-900 rounded-[2.5rem] p-6 sm:p-10 text-white flex flex-col justify-between transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
                        <div className="space-y-8">
                            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.3em]">Design Toolkit</span>
                            <div className="flex flex-wrap gap-2">
                                {['Figma Prototyping', 'Vector Illustration', 'Visual Identity', 'Interface Design', 'Typography', 'Adobe Creative Suite', 'Layout Theory', 'Strategic Design'].map((skill) => (
                                    <span key={skill} className="px-4 py-2 bg-stone-800 border border-stone-700 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-stone-900 transition-colors cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="mt-12">
                            <div className="flex items-end gap-1 mb-2">
                                <span className="text-5xl font-black font-syne">100%</span>
                                <span className="text-[10px] font-bold text-stone-400 uppercase mb-2">Precision</span>
                            </div>
                            <p className="text-xs text-stone-400 leading-relaxed font-outfit">
                                Committed to the details that define a high-end experience. I believe in quality over quantity.
                            </p>
                        </div>
                    </div>

                    {/* Interactive Selection Card */}
                    <div className={`md:col-span-7 lg:col-span-8 md:row-span-3 bg-white rounded-[2.5rem] p-6 sm:p-10 border border-stone-100 shadow-sm transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                        <div className="flex flex-col md:flex-row h-full gap-8">
                            <div className="w-full md:w-1/3 flex flex-col gap-3">
                                {designPillars.map((pillar) => (
                                    <button
                                        key={pillar.id}
                                        onClick={() => setActiveTab(pillar.id)}
                                        className={`px-6 py-4 rounded-2xl text-sm font-bold font-syne uppercase tracking-wider text-left transition-all ${activeTab === pillar.id ? 'bg-stone-900 text-white shadow-lg' : 'bg-stone-50 text-stone-400 hover:bg-stone-100'}`}
                                    >
                                        <span className="mr-3">{pillar.icon}</span>
                                        {pillar.title}
                                    </button>
                                ))}
                            </div>
                            <div className="flex-1 flex flex-col justify-center">
                                <p className="text-xl sm:text-2xl font-serif italic text-stone-800 leading-snug">
                                    &quot;{designPillars.find(p => p.id === activeTab)?.text}&quot;
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Status/Availability Card */}
                    <div className={`md:col-span-5 lg:col-span-4 md:row-span-3 bg-stone-100 rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between group transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                        <div className="flex justify-between items-start">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-stone-900 shadow-sm">
                                <svg className="w-5 h-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <span className="text-[10px] font-bold text-stone-900 uppercase tracking-widest bg-white px-3 py-1 rounded-full shadow-sm">Status: Open</span>
                        </div>
                        <div>
                            <h4 className="text-xl sm:text-2xl font-bold text-stone-900 font-syne uppercase leading-tight mb-2">Available for <br />Collaborations</h4>
                            <p className="text-xs text-stone-500 font-medium font-outfit">Open to full-time roles & professional design partnerships worldwide.</p>
                        </div>
                        <div className="w-full h-1 bg-white rounded-full overflow-hidden mt-6">
                            <div className="h-full w-full bg-stone-900 group-hover:translate-x-full transition-transform duration-[2000ms] ease-in-out" />
                        </div>
                    </div>

                </div>

                {/* Perspective Floating Title (Background) */}
                <div className="absolute top-1/2 -right-40 hidden xl:block select-none pointer-events-none z-[-1] opacity-[0.02]"
                    style={{
                        transform: `translateY(-50%) rotate(-90deg) translateX(${mousePosition.y * 30}px)`,
                        fontSize: '20vh',
                        fontWeight: 950,
                        lineHeight: 1
                    }}>
                    THECRAFT.
                </div>
            </div>

            <style jsx>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 12s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default AboutMe;
