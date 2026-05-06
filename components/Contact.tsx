'use client';

import { useState, useEffect, useRef } from 'react';
import { Cormorant_Garamond, Jost } from 'next/font/google';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '600'], style: ['normal', 'italic'] });
const jost = Jost({ subsets: ['latin'], weight: ['200', '300', '400', '500'] });

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentRef = sectionRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.1 }
        );
        if (currentRef) observer.observe(currentRef);
        return () => { if (currentRef) observer.unobserve(currentRef); };
    }, []);

    return (
        <section
            ref={sectionRef}
            id="contact"
            className={`${jost.className} relative py-20 md:py-32 overflow-hidden min-h-screen flex items-center`}
            style={{ background: '#FAF8F5' }}
        >
            {/* ── BACKGROUND ELEMENTS ── */}
            {/* Subtle Grain/Noise overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

            {/* Architectural Grid lines */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute left-[8%] top-0 bottom-0 w-px bg-black/[0.03]" />
                <div className="absolute left-[50%] top-0 bottom-0 w-px bg-black/[0.03] hidden lg:block" />
                <div className="absolute right-[8%] top-0 bottom-0 w-px bg-black/[0.03]" />
                <div className="absolute top-[20%] left-0 right-0 h-px bg-black/[0.03]" />
                <div className="absolute bottom-[20%] left-0 right-0 h-px bg-black/[0.03]" />
            </div>

            {/* Ambient Gold Glow */}
            <div className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full pointer-events-none blur-[120px]" style={{
                background: 'radial-gradient(circle, rgba(184,150,90,0.08) 0%, transparent 70%)'
            }} />

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center">

                {/* ── LEFT COLUMN: CONTENT ── */}
                <div className={`transition-all duration-1200 cubic-bezier(0.2, 0, 0.2, 1) ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>

                    {/* Section Identifier */}
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-px bg-[#B8965A]/40" />
                        <span className="text-[10px] font-medium tracking-[0.4em] uppercase text-[#B8965A]">
                            Commissions & Exploration
                        </span>
                    </div>

                    {/* Headline Architecture */}
                    <div className="relative mb-10">
                        <h2 className={`${cormorant.className} leading-[0.9] font-light mb-0 tracking-tight`}
                            style={{ fontSize: 'clamp(64px, 8vw, 110px)', color: '#2A2520' }}>
                            Let&apos;s <br />
                            <span className="relative inline-block italic text-[#B8965A] font-light">
                                craft
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#B8965A]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="1" />
                                </svg>
                            </span> <br />
                            <strong className="font-semibold block mt-2">Significant<br />Design.</strong>
                        </h2>

                        {/* Dimensional Watermark */}
                        <span className={`${cormorant.className} absolute -bottom-16 -left-8 font-light select-none pointer-events-none`}
                            style={{ fontSize: '200px', color: 'rgba(42,37,32,0.03)', lineHeight: 1, letterSpacing: '-0.05em' }}>
                            04
                        </span>
                    </div>

                    <p className="font-light text-[17px] leading-[1.8] max-w-[420px] mb-12 text-[#6B5F52]">
                        Every project is a unique dialogue between vision and execution. Whether you have a precise brief or a nebulous idea, let&apos;s refine it into something extraordinary.
                    </p>

                    {/* Connectivity Grid */}
                    <div className="grid grid-cols-2 gap-10 mb-14 max-w-[400px]">
                        <div>
                            <span className="block text-[9px] font-medium tracking-[0.3em] uppercase text-[#A09385] mb-4">Direct Contact</span>
                            <a href="mailto:hello@nandini.design" className="text-sm font-medium text-[#2A2520] hover:text-[#B8965A] transition-colors duration-300">
                                nandinisatya06@gmail.com
                            </a>
                        </div>
                        <div>
                            <span className="block text-[9px] font-medium tracking-[0.3em] uppercase text-[#A09385] mb-4">Social Presence</span>
                            <div className="flex gap-5">
                                {['LinkedIn', 'Instagram'].map(s => (
                                    <a key={s} href="#" className="text-xs font-medium text-[#2A2520] hover:text-[#B8965A] transition-colors duration-300 border-b border-transparent hover:border-[#B8965A] pb-1">
                                        {s}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Dynamic Availability Indicator */}
                    <div className="inline-flex items-center gap-4 bg-[#2A2520] px-6 py-4 rounded-sm shadow-xl shadow-black/5 group cursor-default transition-all duration-500 hover:bg-[#3A3530]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8965A] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B8965A]"></span>
                        </span>
                        <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#FAF8F5]">
                            Atelier Accepting New Projects
                        </span>
                    </div>
                </div>

                {/* ── RIGHT COLUMN: INTERACTIVE FORM ── */}
                <div className={`transition-all duration-1200 delay-400 cubic-bezier(0.2, 0, 0.2, 1) ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
                    <div className="relative p-10 md:p-14 bg-white shadow-[0_40px_100px_-20px_rgba(42,37,32,0.08)] border border-[#EDE8DC]">

                        {/* Decorative Corner Accents */}
                        <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-[#B8965A]/20" />
                        <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-[#B8965A]/20" />

                        {/* Top Gradient Accents */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B8965A]/20 via-[#B8965A] to-[#B8965A]/20" />

                        <div className="mb-10">
                            <h3 className={`${cormorant.className} text-4xl font-light text-[#2A2520] mb-3`}>Initiate the Dialogue</h3>
                            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#A09385]">
                                Responses typically within 24 standard hours
                            </p>
                        </div>

                        <form className="space-y-10">
                            {[
                                { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Ex. Alexander Hamilton' },
                                { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your@residence.com' },
                            ].map(field => (
                                <div key={field.id} className="relative group">
                                    <label
                                        htmlFor={field.id}
                                        className={`absolute left-0 transition-all duration-300 pointer-events-none uppercase tracking-[0.25em] text-[9px] font-medium
                                            ${focusedField === field.id ? '-top-5 text-[#B8965A]' : 'top-3 text-[#A09385]'}`}
                                    >
                                        {field.label}
                                    </label>
                                    <input
                                        id={field.id}
                                        type={field.type}
                                        placeholder={focusedField === field.id ? field.placeholder : ''}
                                        className="w-full bg-transparent border-b border-[#EDE8DC] py-3 text-sm font-light text-[#2A2520] outline-none transition-all duration-500 focus:border-[#B8965A]"
                                        onFocus={() => setFocusedField(field.id)}
                                        onBlur={() => setFocusedField(null)}
                                    />
                                    <div className={`absolute bottom-0 left-0 h-px bg-[#B8965A] transition-all duration-700 ease-out ${focusedField === field.id ? 'w-full' : 'w-0'}`} />
                                </div>
                            ))}

                            <div className="relative group">
                                <label
                                    htmlFor="vision"
                                    className={`absolute left-0 transition-all duration-300 pointer-events-none uppercase tracking-[0.25em] text-[9px] font-medium
                                        ${focusedField === 'vision' ? '-top-5 text-[#B8965A]' : 'top-3 text-[#A09385]'}`}
                                >
                                    The Vision
                                </label>
                                <textarea
                                    id="vision"
                                    rows={4}
                                    placeholder={focusedField === 'vision' ? 'Tell me about the essence of your project...' : ''}
                                    className="w-full bg-transparent border-b border-[#EDE8DC] py-3 text-sm font-light text-[#2A2520] outline-none transition-all duration-500 focus:border-[#B8965A] resize-none leading-relaxed"
                                    onFocus={() => setFocusedField('vision')}
                                    onBlur={() => setFocusedField(null)}
                                />
                                <div className={`absolute bottom-0 left-0 h-px bg-[#B8965A] transition-all duration-700 ease-out ${focusedField === 'vision' ? 'w-full' : 'w-0'}`} />
                            </div>

                            <button
                                type="submit"
                                className="w-full group relative overflow-hidden bg-[#2A2520] py-6 transition-all duration-500 hover:shadow-2xl hover:shadow-[#2A2520]/20"
                            >
                                <div className="absolute inset-0 w-0 bg-[#B8965A] transition-all duration-500 group-hover:w-full opacity-10" />
                                <div className="relative flex items-center justify-center gap-4">
                                    <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-[#FAF8F5]">
                                        Submit Enquiry
                                    </span>
                                    <svg className="w-4 h-4 text-[#B8965A] transition-transform duration-500 group-hover:translate-x-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </button>
                        </form>

                        <div className="mt-12 pt-8 border-t border-[#F8F5EE] flex justify-between items-center opacity-40">
                            <span className="text-[8px] font-medium tracking-[0.3em] uppercase text-[#2A2520]">Data Encryption Active</span>
                            <span className="text-[8px] font-medium tracking-[0.3em] uppercase text-[#2A2520]">Global Response</span>
                            <span className="text-[8px] font-medium tracking-[0.3em] uppercase text-[#2A2520]">© 2025</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;