'use client';

import { useState, useEffect, useRef } from 'react';
import { Cormorant_Garamond, Jost } from 'next/font/google';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '600'], style: ['normal', 'italic'] });
const jost = Jost({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600'] });

const skills = [
    {
        id: 'uiux',
        title: 'Experience Architecture',
        shortTitle: 'UX STRATEGY',
        tools: ['User Psychology', 'Information Logic', 'Wireframe Sprints', 'Empathy Mapping'],
        description: 'Developing the logical backbone of digital products. I focus on user behavior analysis to create intuitive navigation systems that reduce cognitive load.',
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        color: 'from-amber-600/10 to-stone-500/10',
        accent: 'text-amber-700'
    },
    {
        id: 'visual',
        title: 'Visual Identity Systems',
        shortTitle: 'SYSTEMS',
        tools: ['Grid Theory', 'Typography Systems', 'Color Science', 'Brand Cohesion'],
        description: 'Crafting the visual language of a brand. I develop scalable design systems that ensure aesthetic consistency across every pixel and platform.',
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
        ),
        color: 'from-stone-900/10 to-stone-600/10',
        accent: 'text-stone-900'
    },
    {
        id: 'prototype',
        title: 'Interface Logic & Prototyping',
        shortTitle: 'LOGIC',
        tools: ['Advanced Figma', 'Component Theory', 'Accessibility', 'Variable Systems'],
        description: 'Bridging the gap between static design and interactive reality. I build complex, high-fidelity prototypes that simulate final production experiences.',
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
        color: 'from-stone-400/10 to-stone-300/10',
        accent: 'text-stone-500'
    },
    {
        id: 'motion',
        title: 'Cinematic Motion Design',
        shortTitle: 'NARRATIVE',
        tools: ['Interaction Loops', 'Micro-Animations', 'Temporal Logic', 'Lottie Systems'],
        description: 'Utilizing motion as a storytelling tool. I design purposeful transitions that guide the user’s eye and provide tactile feedback to interactions.',
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        color: 'from-stone-500/10 to-amber-700/10',
        accent: 'text-amber-800'
    }
];

const Expertise = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeIdx, setActiveIdx] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`${jost.className} relative py-20 md:py-32 px-6 bg-[#FAF8F5] overflow-hidden`}
            id="expertise"
        >
            {/* Background Texture & Grain */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.4] mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="flex flex-col mb-24 items-start max-w-4xl">
                    <div className="inline-flex items-center gap-4 mb-10">
                        <div className="h-[1px] w-12 bg-[#B8965A]" />
                        <span className={`text-[11px] font-bold text-stone-400 uppercase tracking-[0.6em] transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                            Specialization
                        </span>
                    </div>
                    
                    <h2 className={`text-6xl md:text-9xl font-bold text-[#2A2520] tracking-tighter leading-[0.95] transition-all duration-1000 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        Visual <br />
                        <span className={`${cormorant.className} italic font-normal text-[#B8965A] block mt-4`}>Specialization.</span>
                    </h2>
                </div>

                {/* Interactive Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
                    
                    {/* Navigation Rail */}
                    <div className="lg:col-span-5 space-y-3">
                        {skills.map((skill, idx) => (
                            <button
                                key={skill.id}
                                onMouseEnter={() => setActiveIdx(idx)}
                                onClick={() => setActiveIdx(idx)}
                                className={`w-full text-left group relative p-10 transition-all duration-700 border-b border-stone-200/50 ${
                                    activeIdx === idx 
                                    ? 'bg-[#2A2520] -translate-y-1' 
                                    : 'hover:bg-white hover:border-transparent'
                                }`}
                            >
                                <div className="flex items-center gap-10">
                                    <span className={`${cormorant.className} text-4xl transition-colors duration-700 ${
                                        activeIdx === idx ? 'text-[#B8965A]' : 'text-stone-300'
                                    }`}>
                                        {idx + 1}.
                                    </span>
                                    
                                    <div className="flex-1">
                                        <span className={`block text-[10px] font-bold uppercase tracking-[0.4em] mb-2 transition-colors duration-700 ${
                                            activeIdx === idx ? 'text-stone-500' : 'text-stone-400'
                                        }`}>
                                            {skill.shortTitle}
                                        </span>
                                        <h3 className={`text-2xl md:text-3xl font-medium tracking-tight transition-colors duration-700 ${
                                            activeIdx === idx ? 'text-white' : 'text-[#2A2520]'
                                        }`}>
                                            {skill.title}
                                        </h3>
                                    </div>

                                    <div className={`w-10 h-10 flex items-center justify-center transition-all duration-700 ${
                                        activeIdx === idx ? 'rotate-45 text-[#B8965A]' : 'text-stone-300'
                                    }`}>
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Showcase Panel */}
                    <div className="lg:col-span-7 lg:sticky lg:top-40 h-fit">
                        <div className={`relative bg-white p-12 md:p-20 shadow-[0_60px_100px_-20px_rgba(42,37,32,0.08)] border border-stone-100 overflow-hidden transition-all duration-1000 ${
                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                        }`}>
                            
                            {/* Accent Branding */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-stone-50 flex items-center justify-center opacity-40">
                                <span className={`${cormorant.className} text-[15rem] text-stone-100 font-bold select-none`}>
                                    {skills[activeIdx].id.charAt(0).toUpperCase()}
                                </span>
                            </div>

                            <div key={activeIdx} className="relative z-10 space-y-12 animate-in fade-in slide-in-from-right-4 duration-700">
                                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#FAF8F5] border border-stone-100 ${skills[activeIdx].accent}`}>
                                    {skills[activeIdx].icon}
                                </div>

                                <div className="space-y-6">
                                    <h4 className="text-4xl md:text-5xl font-medium text-[#2A2520] tracking-tight leading-tight">
                                        {skills[activeIdx].title}
                                    </h4>
                                    <p className="text-[#6B5F52] text-xl font-light leading-relaxed max-w-xl">
                                        {skills[activeIdx].description}
                                    </p>
                                </div>

                                <div className="space-y-8">
                                    <div className="flex items-center gap-4">
                                        <div className="h-px w-8 bg-[#B8965A]/40" />
                                        <span className="text-[11px] font-bold text-stone-400 uppercase tracking-[0.4em]">
                                            Domain Expertise
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        {skills[activeIdx].tools.map((tool, tIdx) => (
                                            <span
                                                key={tIdx}
                                                className="px-6 py-3 bg-[#FAF8F5] border border-stone-100 text-stone-600 text-[12px] font-bold uppercase tracking-wider hover:bg-[#2A2520] hover:text-white transition-all cursor-default"
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Philosophical Footer */}
                <div className={`mt-32 pt-20 border-t border-stone-200 flex flex-col md:flex-row justify-between items-start gap-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex gap-24">
                        <div className="space-y-3">
                            <span className={`${cormorant.className} text-7xl text-[#2A2520]`}>100%</span>
                            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.5em] block">Pixel Precision</span>
                        </div>
                        <div className="space-y-3">
                            <span className={`${cormorant.className} text-7xl text-[#2A2520] flex items-center`}>
                                AESTHETIC
                            </span>
                            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.5em] block">Visual Strategy</span>
                        </div>
                    </div>
                    
                    <div className="max-w-md">
                        <p className={`${cormorant.className} text-[#6B5F52] italic text-3xl leading-snug`}>
                            &quot;Visual thinking is not about decorating a page; it is about clarifying the <span className="text-[#2A2520] not-italic font-bold">intent</span> of the interface.&quot;
                        </p>
                        <div className="mt-8 flex items-center gap-6">
                            <div className="w-12 h-px bg-[#B8965A]" />
                            <span className="text-[11px] font-bold text-stone-400 uppercase tracking-[0.5em]">The Design Creed</span>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .animate-in {
                    animation-duration: 700ms;
                    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
                    animation-fill-mode: forwards;
                }
                .fade-in { animation-name: fade-in; }
                .slide-in-from-right-4 { animation-name: slide-in-from-right-4; }
                @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
                @keyframes slide-in-from-right-4 { 
                    from { transform: translateX(1rem); } 
                    to { transform: translateX(0); } 
                }
            `}</style>
        </section>
    );
};

export default Expertise;


