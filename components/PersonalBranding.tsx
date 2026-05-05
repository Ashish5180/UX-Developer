'use client';

import { useState, useEffect, useRef } from 'react';

const PersonalBranding = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [activeSkill, setActiveSkill] = useState<number | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
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
        const currentRef = sectionRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.08 }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const skills = [
        {
            name: 'Figma',
            category: 'Interface Design',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/>
                    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/>
                    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/>
                    <path d="M12 9h3.5a3.5 3.5 0 1 1 0 7H12V9z"/>
                    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/>
                </svg>
            ),
            accent: '#A259FF',
            glow: 'rgba(162, 89, 255, 0.15)'
        },
        {
            name: 'Photoshop',
            category: 'Raster Mastery',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <path d="M9 8h2.5c1.4 0 2.5 1.1 2.5 2.5S12.9 13 11.5 13H9v4"/>
                    <path d="M14 13c1.1 0 2 .9 2 2s-.9 2-2 2h-1"/>
                </svg>
            ),
            accent: '#31A8FF',
            glow: 'rgba(49, 168, 255, 0.15)'
        },
        {
            name: 'Illustrator',
            category: 'Vector Precision',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                    <path d="M2 17L12 22L22 17"/>
                    <path d="M2 12L12 17L22 12"/>
                </svg>
            ),
            accent: '#FF9A00',
            glow: 'rgba(255, 154, 0, 0.15)'
        },
        {
            name: 'Framer',
            category: 'Interactive Motion',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 2h14v7h-7L5 2z"/>
                    <path d="M5 9h7l7 7H5V9z"/>
                    <path d="M5 16l7 7v-7H5z"/>
                </svg>
            ),
            accent: '#0055FF',
            glow: 'rgba(0, 85, 255, 0.15)'
        },
        {
            name: 'Canva',
            category: 'Visual Layouts',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M8 12h8"/>
                    <path d="M12 8v8"/>
                </svg>
            ),
            accent: '#00C4CC',
            glow: 'rgba(0, 196, 204, 0.15)'
        }
    ];

    const whyMe = [
        {
            question: 'What defines my approach?',
            title: 'Strategic Architecture',
            text: 'I design scalable interface systems that align with core user needs while maintaining visual elegance and brand consistency.',
            number: '01',
            accentColor: '#8BA88B'
        },
        {
            question: 'What drives my execution?',
            title: 'Precision & Craft',
            text: 'Every pixel is intentional. I focus on the subtle details—typography, spacing, and micro-interactions—that define a premium product.',
            number: '02',
            accentColor: '#C9A49B'
        },
        {
            question: 'Why choose my vision?',
            title: 'Professional Adaptability',
            text: 'In an evolving industry, I prioritize a growth-oriented mindset, ensuring every project benefits from the latest design patterns and standards.',
            number: '03',
            accentColor: '#7B91AA'
        }
    ];

    return (
        <section
            ref={sectionRef}
            className="relative py-24 md:py-32 px-6 overflow-hidden"
            id="personal-branding"
            style={{ background: 'linear-gradient(180deg, #FAFAF7 0%, #F5F0EB 50%, #F0EDE8 100%)' }}
        >
            {/* Ambient Light Orb */}
            <div
                className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-[2000ms]"
                style={{
                    background: `radial-gradient(1000px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(165, 146, 128, 0.08), transparent 70%)`,
                    opacity: isVisible ? 1 : 0
                }}
            />

            {/* Subtle grain texture */}
            <div
                className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* ===== HEADER ===== */}
                <div className={`text-center mb-16 md:mb-24 transition-all duration-[1200ms] ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    <div className="flex justify-center mb-8">
                        <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#A69280] to-transparent" />
                    </div>
                    <p className="font-outfit text-[11px] tracking-[0.5em] uppercase text-[#A69280] mb-6">Professional Ecosystem</p>
                    <h2
                        className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#3D3229] mb-8 leading-[0.9] tracking-tighter"
                    >
                        Tools &<br />
                        <span
                            className="text-transparent bg-clip-text"
                            style={{
                                backgroundImage: 'linear-gradient(135deg, #A69280 0%, #C9A49B 40%, #8BA88B 70%, #7B91AA 100%)',
                                WebkitBackgroundClip: 'text',
                            }}
                        >
                            Precision
                        </span>
                    </h2>
                    <p className="font-outfit text-[#8A7E73] text-lg md:text-xl max-w-xl mx-auto leading-relaxed opacity-80" style={{ letterSpacing: '0.01em' }}>
                        Bridging the gap between conceptual visual art and high-fidelity interactive logic through a refined design stack.
                    </p>
                </div>

                {/* ===== SKILLS CAPSULES ===== */}
                <div className={`mb-24 md:mb-32 transition-all duration-[1200ms] delay-300 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                        {skills.map((skill, idx) => (
                            <div
                                key={idx}
                                className="group relative"
                                onMouseEnter={() => setActiveSkill(idx)}
                                onMouseLeave={() => setActiveSkill(null)}
                            >
                                {/* Capsule Body */}
                                <div
                                    className="relative flex items-center gap-4 pl-4 pr-6 py-3 md:pl-5 md:pr-8 md:py-4 rounded-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-default overflow-hidden border"
                                    style={{
                                        background: activeSkill === idx
                                            ? 'rgba(255, 255, 255, 1)'
                                            : 'rgba(255, 255, 255, 0.4)',
                                        backdropFilter: 'blur(20px)',
                                        WebkitBackdropFilter: 'blur(20px)',
                                        borderColor: activeSkill === idx ? `${skill.accent}30` : 'rgba(212, 197, 181, 0.25)',
                                        boxShadow: activeSkill === idx
                                            ? `0 20px 40px -10px ${skill.glow}, 0 0 0 1px ${skill.accent}10`
                                            : '0 4px 20px -10px rgba(107, 91, 78, 0.05)',
                                        transform: activeSkill === idx ? 'translateY(-5px) scale(1.02)' : 'translateY(0) scale(1)',
                                    }}
                                >
                                    {/* Icon Container */}
                                    <div 
                                        className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-700"
                                        style={{ 
                                            background: activeSkill === idx ? `${skill.accent}10` : 'rgba(245, 240, 235, 0.8)',
                                            color: skill.accent,
                                            transform: activeSkill === idx ? 'rotate(-10deg)' : 'rotate(0)'
                                        }}
                                    >
                                        <div className="w-4 h-4 md:w-5 md:h-5">
                                            {skill.icon}
                                        </div>
                                    </div>

                                    {/* Text Label */}
                                    <div className="flex flex-col">
                                        <span 
                                            className="font-outfit text-[9px] tracking-[0.25em] uppercase transition-colors duration-500"
                                            style={{ color: activeSkill === idx ? skill.accent : '#A69280' }}
                                        >
                                            {skill.category}
                                        </span>
                                        <h3 className="font-serif text-lg md:text-xl text-[#3D3229] transition-all duration-500">
                                            {skill.name}
                                        </h3>
                                    </div>

                                    {/* Animated Background Highlight */}
                                    <div 
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                        style={{
                                            background: `linear-gradient(135deg, ${skill.accent}05, transparent 80%)`
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ===== WHY ME SECTION ===== */}
                <div className={`mb-24 md:mb-32 transition-all duration-[1200ms] delay-600 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                    <div className="text-center mb-16 md:mb-20">
                        <div className="flex justify-center mb-8">
                            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9A49B] to-transparent" />
                        </div>
                        <h3
                            className="font-serif text-4xl md:text-6xl text-[#3D3229] mb-4 tracking-tight"
                        >
                            Why Collaborate?
                        </h3>
                        <p className="font-outfit text-[#A69280] text-[10px] tracking-[0.4em] uppercase">
                            The pillars of my professional craft
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {whyMe.map((item, idx) => (
                            <div
                                key={idx}
                                className="group relative rounded-[2rem] p-8 md:p-10 transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] hover:-translate-y-3"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.5)',
                                    backdropFilter: 'blur(30px)',
                                    WebkitBackdropFilter: 'blur(30px)',
                                    border: '1px solid rgba(212, 197, 181, 0.2)',
                                }}
                            >
                                {/* Hover Glow Effect */}
                                <div
                                    className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
                                    style={{
                                        boxShadow: `0 40px 80px -20px ${item.accentColor}15, 0 0 0 1px ${item.accentColor}10`,
                                    }}
                                />

                                <div className="relative z-10">
                                    <div className="mb-8 flex justify-between items-start">
                                        <span
                                            className="font-serif text-6xl md:text-7xl font-light opacity-[0.15] transition-all duration-700 group-hover:opacity-30 group-hover:scale-110 origin-left"
                                            style={{ color: item.accentColor }}
                                        >
                                            {item.number}
                                        </span>
                                        <div 
                                            className="w-8 h-8 rounded-full border border-current opacity-20 flex items-center justify-center"
                                            style={{ color: item.accentColor }}
                                        >
                                            <div className="w-1 h-1 rounded-full bg-current" />
                                        </div>
                                    </div>

                                    <p className="font-outfit text-[9px] tracking-[0.3em] uppercase mb-3 opacity-60" style={{ color: item.accentColor }}>
                                        {item.question}
                                    </p>

                                    <h4 className="font-serif text-2xl text-[#3D3229] mb-4 leading-tight tracking-tight">
                                        {item.title}
                                    </h4>

                                    <p className="font-outfit text-[#8A7E73] text-xs md:text-sm leading-relaxed opacity-90">
                                        {item.text}
                                    </p>

                                    <div className="mt-8 flex items-center gap-4 group-hover:gap-6 transition-all duration-700">
                                        <div className="h-[1px] w-8 transition-all duration-700 group-hover:w-12" style={{ backgroundColor: item.accentColor }} />
                                        <svg
                                            className="w-3 h-3 transition-transform duration-700 group-hover:translate-x-2"
                                            style={{ color: item.accentColor }}
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ===== CTA SECTION ===== */}
                <div className={`transition-all duration-[1500ms] delay-800 ease-[cubic-bezier(0.19,1,0.22,1)] transform ${isVisible ? 'scale-100 opacity-100' : 'scale-[0.98] opacity-0'}`}>
                    <div
                        className="relative rounded-[2.5rem] md:rounded-[3.5rem] p-10 md:p-16 lg:p-20 overflow-hidden"
                        style={{
                            background: 'linear-gradient(145deg, #3D3229 0%, #2A231C 50%, #1E1914 100%)',
                        }}
                    >
                        {/* Dynamic Ambient Light */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.1] -mr-40 -mt-40" style={{ background: 'radial-gradient(circle, #C9A49B, transparent)' }} />
                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-[0.08] -ml-30 -mb-30" style={{ background: 'radial-gradient(circle, #8BA88B, transparent)' }} />

                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                            <div className="max-w-xl text-center lg:text-left">
                                <div className="inline-flex items-center gap-3 mb-6">
                                    <div className="w-6 h-[1px] bg-[#A69280]" />
                                    <p className="font-outfit text-[10px] tracking-[0.4em] uppercase text-[#A69280]">Collaboration</p>
                                </div>
                                <h3
                                    className="font-serif text-3xl md:text-5xl text-[#F5F0EB] mb-6 leading-[1.1] tracking-tighter"
                                >
                                    Let&apos;s architect<br />
                                    <span className="italic text-[#A69280]">the future</span> together.
                                </h3>
                                <p className="font-outfit text-[#A69280] text-sm md:text-base leading-relaxed opacity-80 max-w-lg">
                                    Whether you&apos;re envisioning a fresh design system or a thoughtful digital experience, I&apos;m here to bring your vision to life with precision and craft.
                                </p>
                            </div>

                            <button
                                onClick={() => {
                                    const element = document.getElementById('contact');
                                    if (element) {
                                        const offset = 100;
                                        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                                        window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
                                    }
                                }}
                                className="group relative px-10 py-5 rounded-full font-outfit text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-700 active:scale-[0.95] overflow-hidden"
                                style={{
                                    background: 'linear-gradient(135deg, #F5F0EB 0%, #E8DDD5 100%)',
                                    color: '#3D3229',
                                    boxShadow: '0 20px 50px -10px rgba(0,0,0,0.4)',
                                }}
                            >
                                <span className="relative z-10 transition-colors duration-700 group-hover:text-white">Start a Project</span>
                                {/* Background Slider */}
                                <div
                                    className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
                                    style={{
                                        background: 'linear-gradient(135deg, #A69280 0%, #8BA88B 100%)',
                                    }}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PersonalBranding;
