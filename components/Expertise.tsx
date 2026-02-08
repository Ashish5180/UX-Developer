'use client';

import { useState, useEffect, useRef } from 'react';

const skills = [
    {
        id: 'uiux',
        title: 'UI/UX MASTERY',
        tools: ['Figma', 'Adobe XD', 'Prototyping'],
        description: 'Architecting seamless user journeys through high-fidelity wireframes and interactive prototypes. Expert in design handovers and systems.',
        icon: (
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
        ),
        color: 'from-violet-500 to-fuchsia-500'
    },
    {
        id: 'visual',
        title: 'VISUAL CRAFT',
        tools: ['Illustrator', 'Photoshop', 'Branding'],
        description: 'Vector-perfect precision and branding strategies that define digital identities. Specializing in icons, logos, and complex illustrations.',
        icon: (
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
        ),
        color: 'from-orange-400 to-rose-500'
    },
    {
        id: 'frontend',
        title: 'FRONTEND ENGINE',
        tools: ['Next.js', 'React', 'Tailwind'],
        description: 'Translating designs into performant, accessible code. Building scalable component libraries with the latest web standards.',
        icon: (
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        color: 'from-blue-500 to-cyan-400'
    },
    {
        id: 'motion',
        title: 'MOTION & INTERACTION',
        tools: ['Framer Motion', 'Interaction', 'Lottie'],
        description: 'Bringing interfaces to life with purposeful motion. Ensuring every transition tells a story and guides the user naturally.',
        icon: (
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        color: 'from-indigo-500 to-purple-600'
    }
];

const Expertise = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeIdx, setActiveIdx] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);

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

    return (
        <section
            ref={sectionRef}
            className="relative py-40 px-6 bg-[#FAF9F6] overflow-hidden"
            id="capabilities"
        >
            {/* Background Grid System - Rotating Blueprint */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                        transform: 'rotate(15deg) scale(1.5)'
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-col mb-24 items-center text-center">
                    <span className={`text-xs font-bold text-stone-400 uppercase tracking-[0.4em] mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>Capabilities</span>
                    <h2 className={`text-6xl md:text-8xl font-black text-stone-900 tracking-tighter mb-6 transition-all duration-1000 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        CRAFT & <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">INTELLECT</span>
                    </h2>
                    <div className={`h-1 bg-stone-900 transition-all duration-1000 delay-300 ${isVisible ? 'w-32 opacity-100' : 'w-0 opacity-0'}`} />
                </div>

                {/* Split Interactive Container */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Left: Navigation List */}
                    <div className="lg:col-span-5 space-y-4">
                        {skills.map((skill, idx) => (
                            <div
                                key={idx}
                                onMouseEnter={() => setActiveIdx(idx)}
                                className={`group cursor-pointer p-8 rounded-[2rem] transition-all duration-500 border-2 ${activeIdx === idx
                                    ? 'bg-stone-900 border-stone-900 translate-x-4'
                                    : 'bg-white border-stone-100 hover:border-stone-300'
                                    }`}
                            >
                                <div className="flex items-center justify-between gap-6">
                                    <span className={`text-4xl font-black ${activeIdx === idx ? 'text-white' : 'text-stone-200'}`}>0{idx + 1}</span>
                                    <h3 className={`text-xl md:text-2xl font-bold tracking-tight flex-1 ${activeIdx === idx ? 'text-white' : 'text-stone-900'}`}>{skill.title}</h3>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${activeIdx === idx ? 'bg-violet-500 rotate-90' : 'bg-stone-100'}`}>
                                        <svg className={`w-5 h-5 ${activeIdx === idx ? 'text-white' : 'text-stone-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Dynamic Details Panel */}
                    <div className="lg:col-span-7 sticky top-40 min-h-[500px]">
                        <div className={`relative w-full h-full bg-white rounded-[3rem] p-12 shadow-2xl shadow-stone-200 border border-stone-100 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>

                            {/* Skill Detail Content */}
                            <div key={activeIdx} className="animate-fade-in">
                                <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${skills[activeIdx].color} flex items-center justify-center text-white mb-10 shadow-lg`}>
                                    {skills[activeIdx].icon}
                                </div>

                                <h4 className="text-4xl font-black text-stone-900 mb-6 tracking-tight">{skills[activeIdx].title}</h4>
                                <p className="text-stone-600 text-lg leading-relaxed mb-10 font-medium">{skills[activeIdx].description}</p>

                                <div className="space-y-6">
                                    <span className="text-xs font-bold text-stone-400 uppercase tracking-widest block">Primary Ecosystem</span>
                                    <div className="flex flex-wrap gap-4">
                                        {skills[activeIdx].tools.map((tool, tIdx) => (
                                            <div
                                                key={tIdx}
                                                className="px-6 py-3 rounded-2xl bg-stone-50 border border-stone-100 text-stone-900 font-bold group-hover:scale-105 transition-transform"
                                            >
                                                {tool}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Dynamic Visual Element (Blueprint) */}
                                <div className="absolute bottom-10 right-10 opacity-10 pointer-events-none">
                                    <div className="relative w-40 h-40">
                                        <div className="absolute inset-0 border-2 border-dashed border-stone-900 rounded-full animate-spin-slow" />
                                        <div className="absolute inset-4 border-2 border-stone-900 rounded-xl rotate-45" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Stats / Quote */}
                <div className={`mt-32 border-t border-stone-200 pt-16 flex flex-col md:flex-row justify-between items-center gap-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex gap-16">
                        <div>
                            <span className="block text-4xl font-black text-stone-900">100%</span>
                            <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">Pixel Perfection</span>
                        </div>
                        <div>
                            <span className="block text-4xl font-black text-stone-900">NEXT.GEN</span>
                            <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">Workflow Ready</span>
                        </div>
                    </div>
                    <p className="text-stone-500 italic max-w-xs text-right font-medium">
                        "Tools are just leverage for the imagination. I leverage them with precision."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Expertise;
