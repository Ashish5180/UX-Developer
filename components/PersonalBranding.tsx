'use client';

import { useState, useEffect, useRef } from 'react';

const PersonalBranding = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

    const fonts = [
        { name: 'Playfair Display', class: 'font-serif', description: 'Timeless elegance and sophistication.' },
        { name: 'Montserrat', class: 'font-montserrat', description: 'Clean, modern geometric precision.' },
        { name: 'Syne', class: 'font-syne', description: 'Bold, artistic experimentation.' },
        { name: 'Inter', class: 'font-inter', description: 'Maximum readability and clarity.' },
        { name: 'Outfit', class: 'font-outfit', description: 'Friendly, accessible, and contemporary.' }
    ];

    const palettes = [
        {
            name: 'Midnight Royal',
            colors: ['#0F172A', '#334155', '#8B5CF6', '#F59E0B'],
            vibe: 'Professional, Deep, Trustworthy'
        },
        {
            name: 'Sakura Zen',
            colors: ['#FFF5F5', '#FED7D7', '#FBB6CE', '#4A5568'],
            vibe: 'Soft, Minimal, Calm'
        },
        {
            name: 'Emerald Forest',
            colors: ['#064E3B', '#065F46', '#10B981', '#F0FDF4'],
            vibe: 'Growth, Nature, Fresh'
        },
        {
            name: 'Vibrant Tech',
            colors: ['#1A1A1A', '#3B82F6', '#10B981', '#E11D48'],
            vibe: 'Energetic, Precise, Modern'
        }
    ];

    const whyMe = [
        {
            question: 'Why choose me as your designer?',
            title: 'Strategic Architecture',
            text: 'I don\'t just build interfaces; I architect scalable systems that bridge the gap between business goals and user happiness.',
            icon: (
                <svg className="w-8 h-8 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A11.952 11.952 0 003 12c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-3.042-1.135-5.824-3-7.938l-3-3" />
                </svg>
            )
        },
        {
            question: 'What makes my work different?',
            title: 'Precision & Intent',
            text: 'Every pixel has a purpose. I obsess over micro-interactions and accessibility to ensure a premium, inclusive experience.',
            icon: (
                <svg className="w-8 h-8 text-fuchsia-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
            )
        },
        {
            question: 'How do I add value to your team?',
            title: 'Adaptability & Growth',
            text: 'The tech landscape changes daily. I bring a constant learning mindset, staying ahead of trends while honoring timeless design principles.',
            icon: (
                <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )
        }
    ];

    return (
        <section
            ref={sectionRef}
            className="relative py-24 px-6 bg-[#FAF9F6] overflow-hidden"
            id="personal-branding"
        >
            {/* Interactive Spotlight Backdrop */}
            <div
                className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-1000"
                style={{
                    background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.05), transparent 70%)`,
                    opacity: isVisible ? 1 : 0
                }}
            />
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className={`text-center mb-20 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-5xl md:text-6xl font-black text-stone-900 mb-6 tracking-tight">
                        Personal <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">Branding</span>
                    </h2>
                    <p className="text-stone-600 text-lg max-w-2xl mx-auto">
                        In a world of noise, intentionality is my superpower. Here's the aesthetic and strategic foundation of my work.
                    </p>
                </div>

                {/* Grid Container */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">

                    {/* Typography Showcase */}
                    <div className={`bg-white rounded-3xl p-8 shadow-sm border border-stone-100 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                        <h3 className="text-2xl font-bold text-stone-900 mb-8 flex items-center gap-2">
                            <span className="w-8 h-1 bg-violet-600 rounded-full" />
                            Curated Typography
                        </h3>
                        <div className="space-y-6">
                            {fonts.map((font, idx) => (
                                <div key={idx} className="group cursor-default border-b border-stone-50 pb-4 last:border-0">
                                    <div className={`text-4xl md:text-5xl ${font.class} text-stone-800 transition-colors group-hover:text-violet-600`}>
                                        {font.name}
                                    </div>
                                    <p className="text-stone-400 text-sm mt-1">{font.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Color Palette Showcase */}
                    <div className={`bg-white rounded-3xl p-8 shadow-sm border border-stone-100 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                        <h3 className="text-2xl font-bold text-stone-900 mb-8 flex items-center gap-2">
                            <span className="w-8 h-1 bg-fuchsia-600 rounded-full" />
                            Signature Palettes
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {palettes.map((palette, idx) => (
                                <div key={idx} className="group">
                                    <div className="flex h-20 rounded-xl overflow-hidden shadow-sm transition-transform group-hover:scale-105">
                                        {palette.colors.map((color, cIdx) => (
                                            <div
                                                key={cIdx}
                                                className="flex-1"
                                                style={{ backgroundColor: color }}
                                                title={color}
                                            />
                                        ))}
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="font-bold text-stone-800">{palette.name}</h4>
                                        <p className="text-xs text-stone-500">{palette.vibe}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Interactive Branding Element */}
                        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-violet-50 to-fuchsia-50 border border-violet-100 relative overflow-hidden group">
                            <div className="relative z-10">
                                <h4 className="text-violet-900 font-bold mb-2">My Brand Philosophy</h4>
                                <p className="text-violet-800/80 text-sm">
                                    Design is a silent ambassador of your brand. I focus on creating harmony between form and function.
                                </p>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-3xl -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700" />
                        </div>
                    </div>
                </div>

                {/* Why Me Section */}
                <div className={`transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                    <h3 className="text-4xl font-black text-stone-900 mb-16 text-center">Why Me?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {whyMe.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-stone-100 hover:shadow-xl hover:shadow-violet-200/40 transition-all duration-500 hover:-translate-y-2 group"
                            >
                                <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-violet-50 transition-colors">
                                    {item.icon}
                                </div>
                                <span className="text-xs font-bold text-violet-600 uppercase tracking-widest mb-2 block">{item.question}</span>
                                <h4 className="text-2xl font-bold text-stone-900 mb-4">{item.title}</h4>
                                <p className="text-stone-600 leading-relaxed">
                                    {item.text}
                                </p>
                                <div className="mt-6 flex items-center gap-2 text-violet-600 font-bold text-sm cursor-pointer group-hover:translate-x-1 transition-transform">
                                    Learn more
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA / Callout */}
                <div className={`mt-32 p-12 rounded-[3rem] bg-stone-900 text-white relative overflow-hidden transition-all duration-1000 delay-1000 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold mb-4">Let's build something iconic.</h3>
                            <p className="text-stone-400 max-w-md">
                                Whether you're looking for a fresh design system or a robust web application, I'm here to bring your vision to life.
                            </p>
                        </div>
                        <button className="px-10 py-5 bg-white text-black rounded-2xl font-bold hover:bg-violet-500 hover:text-white transition-all duration-300 shadow-xl active:scale-95">
                            Get in Touch
                        </button>
                    </div>
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/20 rounded-full blur-[100px] -mr-20 -mt-20" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-fuchsia-600/20 rounded-full blur-[80px] -ml-20 -mb-20" />
                </div>
            </div>
        </section>
    );
};

export default PersonalBranding;
