'use client';

import { useState, useEffect, useRef } from 'react';

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const sectionRef = useRef<HTMLDivElement>(null);

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

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="relative py-40 px-6 bg-[#FAF9F6] overflow-hidden min-h-screen flex items-center"
        >
            {/* Ambient Animated Background - Subtle for Light Theme */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div
                    className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-violet-200/40 rounded-full blur-[120px] animate-pulse-slow"
                    style={{ transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)` }}
                />
                <div
                    className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-fuchsia-200/30 rounded-full blur-[100px] animate-pulse-slow"
                    style={{ transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)` }}
                />

                {/* Visual Grid - Stone Colored */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
            </div>

            <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                {/* Left Side: Bold Typography & Visuals */}
                <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-stone-200 bg-white/50 mb-8 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-600 animate-ping" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-violet-700">Open for new projects</span>
                    </div>

                    <h2 className="text-7xl md:text-8xl xl:text-9xl font-black text-stone-900 tracking-tighter leading-[0.85] mb-10">
                        LET'S<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-purple-600">BUILD</span><br />
                        BEYOND.
                    </h2>

                    <div className="space-y-8 mt-12">
                        <p className="text-stone-600 text-xl max-w-md font-medium leading-relaxed">
                            Have an idea that needs a digital heartbeat? I bring logic and aesthetics to every pixel.
                        </p>

                        <div className="flex gap-6">
                            {['Twitter', 'LinkedIn', 'Github', 'Instagram'].map(social => (
                                <a key={social} href="#" className="text-stone-400 hover:text-stone-900 transition-colors font-bold text-sm uppercase tracking-widest border-b border-transparent hover:border-violet-600 pb-1">
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Interactive Floating Element */}
                    <div
                        className="mt-20 relative w-32 h-32 hidden md:block"
                        style={{ transform: `rotateX(${mousePosition.y * 20}deg) rotateY(${mousePosition.x * 20}deg)`, transformStyle: 'preserve-3d' }}
                    >
                        <div className="absolute inset-0 border-2 border-violet-200 rounded-full animate-spin-slow" />
                        <div className="absolute inset-4 border border-fuchsia-200 rounded-xl rotate-45 animate-pulse-slow" />
                        <div className="absolute inset-10 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-full blur-xl opacity-20" />
                    </div>
                </div>

                {/* Right Side: High-Performance Contact Form */}
                <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                    <div className="bg-white p-10 md:p-14 rounded-[3.5rem] border border-stone-100 shadow-2xl shadow-stone-200 relative group">

                        {/* Shadow Glow On Hover */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 rounded-[3.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

                        <form className="space-y-8">
                            <div className="relative group/field">
                                <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest absolute -top-3 left-4 bg-white px-2 group-focus-within/field:text-violet-600 transition-colors">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full bg-stone-50/30 border border-stone-100 rounded-2xl p-5 text-stone-900 placeholder-stone-300 outline-none focus:border-violet-500/30 transition-all focus:bg-white"
                                />
                            </div>

                            <div className="relative group/field">
                                <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest absolute -top-3 left-4 bg-white px-2 group-focus-within/field:text-violet-600 transition-colors">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-stone-50/30 border border-stone-100 rounded-2xl p-5 text-stone-900 placeholder-stone-300 outline-none focus:border-violet-500/30 transition-all focus:bg-white"
                                />
                            </div>

                            <div className="relative group/field">
                                <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest absolute -top-3 left-4 bg-white px-2 group-focus-within/field:text-violet-600 transition-colors">Message</label>
                                <textarea
                                    rows={5}
                                    placeholder="Tell me about your project"
                                    className="w-full bg-stone-50/30 border border-stone-100 rounded-2xl p-5 text-stone-900 placeholder-stone-300 outline-none focus:border-violet-500/30 transition-all focus:bg-white resize-none"
                                />
                            </div>

                            <button className="w-full relative group/btn h-20 overflow-hidden rounded-2xl">
                                {/* Button Background */}
                                <div className="absolute inset-0 bg-stone-900 group-hover/btn:bg-gradient-to-r group-hover/btn:from-violet-600 group-hover/btn:to-fuchsia-600 transition-all duration-500" />

                                <span className="relative flex items-center justify-center gap-3 font-black text-white transition-colors uppercase tracking-widest text-sm">
                                    Send Message
                                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </button>
                        </form>

                        {/* Hidden Hint */}
                        <div className="mt-8 flex items-center justify-between text-stone-300 text-[10px] font-mono tracking-tighter">
                            <span>WAITING FOR INPUT...</span>
                            <span>AVAILABLE 24/7</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom SVG Noise Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay" style={{ filter: 'url(#noiseFilter)' }} />
        </section>
    );
};

export default Contact;
