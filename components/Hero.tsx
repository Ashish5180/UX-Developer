'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const roles = [
    "Visual Interaction Designer",
    "Design Systems Architect",
    "User Experience Strategist",
    "Interface Narrator"
];

const Hero = () => {
    const [currentRole, setCurrentRole] = useState(0);
    const [fade, setFade] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setIsLoaded(true), 150);
        return () => clearTimeout(t);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentRole((prev) => (prev + 1) % roles.length);
                setFade(true);
            }, 350);
        }, 3000);
        return () => clearInterval(interval);
    }, [roles.length]);

    return (
        <section
            id="overview"
            className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden"
            style={{ background: '#FAF8F5' }}
        >
            {/* ── LEFT — Photo ── */}
            <div className="relative overflow-hidden min-h-[50vh] lg:min-h-screen" style={{ background: '#F0EBE3' }}>

                {/* Corner marks */}
                {[
                    { top: 24, left: 24, bT: true, bL: true },
                    { top: 24, right: 24, bT: true, bR: true },
                    { bottom: 24, left: 24, bB: true, bL: true },
                    { bottom: 24, right: 24, bB: true, bR: true },
                ].map((c, i) => (
                    <div
                        key={i}
                        className="absolute w-6 h-6"
                        style={{
                            top: c.top, left: c.left, right: c.right, bottom: c.bottom,
                            borderTop: c.bT ? '1px solid rgba(120,105,85,0.2)' : 'none',
                            borderBottom: c.bB ? '1px solid rgba(120,105,85,0.2)' : 'none',
                            borderLeft: c.bL ? '1px solid rgba(120,105,85,0.2)' : 'none',
                            borderRight: c.bR ? '1px solid rgba(120,105,85,0.2)' : 'none',
                            opacity: isLoaded ? 1 : 0,
                            transition: `opacity 0.8s ease ${0.8 + i * 0.1}s`,
                        }}
                    />
                ))}

                {/* Vertical text */}
                <span
                    className="absolute left-5 top-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap z-10"
                    style={{
                        fontSize: '9px',
                        letterSpacing: '0.35em',
                        textTransform: 'uppercase',
                        color: 'rgba(80,65,50,0.3)',
                        fontFamily: 'var(--font-inter), sans-serif',
                        opacity: isLoaded ? 1 : 0,
                        transition: 'opacity 0.8s ease 1s',
                    }}
                >
                    Design Archive · 2025
                </span>

                {/* Photo */}
                <div className="w-full h-full min-h-[50vh] lg:min-h-screen relative">
                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            opacity: isLoaded ? 1 : 0,
                            transform: isLoaded ? 'scale(1)' : 'scale(1.03)',
                            transition: 'all 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s',
                        }}
                    >
                        <Image
                            src="/img.PNG"
                            alt="Nandini Yadav"
                            fill
                            className="object-cover object-top"
                            priority
                        />
                    </div>
                    {/* Soft bottom gradient */}
                    <div
                        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
                        style={{ background: 'linear-gradient(to top, rgba(240,235,227,0.5), transparent)' }}
                    />
                </div>
            </div>

            {/* ── RIGHT — Content ── */}
            <div className="relative flex flex-col justify-center px-10 lg:px-16 xl:px-20 py-16" style={{ background: '#FAF8F5' }}>

                {/* Status */}
                <div
                    className="flex items-center gap-2.5 mb-10"
                    style={{
                        opacity: isLoaded ? 1 : 0,
                        transform: isLoaded ? 'translateY(0)' : 'translateY(12px)',
                        transition: 'all 0.6s ease 0.4s',
                    }}
                >
                    <span className="relative flex h-[5px] w-[5px]">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: '#B8965A' }} />
                        <span className="relative inline-flex rounded-full h-[5px] w-[5px]" style={{ background: '#B8965A' }} />
                    </span>
                    <span style={{
                        fontSize: '10px',
                        letterSpacing: '0.28em',
                        textTransform: 'uppercase',
                        color: '#B8965A',
                        fontFamily: 'var(--font-inter), sans-serif',
                        fontWeight: 500,
                    }}>
                        Available for Commisions
                    </span>
                </div>

                {/* Name */}
                <div className="overflow-hidden mb-0.5">
                    <h1
                        style={{
                            fontFamily: 'var(--font-playfair), serif',
                            fontSize: 'clamp(48px, 5.5vw, 72px)',
                            fontWeight: 400,
                            lineHeight: 0.95,
                            color: '#2A2520',
                            letterSpacing: '-0.015em',
                            opacity: isLoaded ? 1 : 0,
                            transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
                            transition: 'all 0.9s cubic-bezier(0.77, 0, 0.175, 1) 0.5s',
                        }}
                    >
                        Nandini
                    </h1>
                </div>
                <div className="overflow-hidden mb-5">
                    <h1
                        style={{
                            fontFamily: 'var(--font-playfair), serif',
                            fontSize: 'clamp(48px, 5.5vw, 72px)',
                            fontWeight: 400,
                            fontStyle: 'italic',
                            lineHeight: 0.95,
                            color: '#B8965A',
                            letterSpacing: '-0.015em',
                            opacity: isLoaded ? 1 : 0,
                            transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
                            transition: 'all 0.9s cubic-bezier(0.77, 0, 0.175, 1) 0.62s',
                        }}
                    >
                        Yadav
                    </h1>
                </div>

                {/* Role */}
                <p
                    className="mb-7 h-4"
                    style={{
                        fontSize: '11px',
                        letterSpacing: '0.22em',
                        textTransform: 'uppercase',
                        color: '#A09385',
                        fontFamily: 'var(--font-inter), sans-serif',
                        opacity: isLoaded ? (fade ? 1 : 0) : 0,
                        transform: isLoaded
                            ? (fade ? 'translateY(0)' : 'translateY(-6px)')
                            : 'translateY(12px)',
                        transition: fade
                            ? 'all 0.35s ease'
                            : 'all 0.25s ease',
                    }}
                >
                    {roles[currentRole]}
                </p>

                {/* Divider */}
                <div
                    className="mb-7"
                    style={{
                        height: '1px',
                        width: isLoaded ? '40px' : '0px',
                        background: '#D1C7B8',
                        transition: 'width 0.8s ease 0.9s',
                    }}
                />

                {/* Bio */}
                <p
                    className="max-w-sm mb-9"
                    style={{
                        fontSize: '14px',
                        lineHeight: 1.85,
                        color: '#6B5F52',
                        fontWeight: 300,
                        fontFamily: 'var(--font-outfit), sans-serif',
                        opacity: isLoaded ? 1 : 0,
                        transform: isLoaded ? 'translateY(0)' : 'translateY(15px)',
                        transition: 'all 0.6s ease 1s',
                    }}
                >
                    Dedicated to the art of visual storytelling. I bridge the gap between 
                    human emotion and digital interfaces, crafting purposeful visual systems 
                    that resonate on a visceral level.
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-10">
                    {['Visual Systems', 'Grid Theory', 'Typography', 'Color Science', 'Interaction Design'].map((tag, i) => (
                        <span
                            key={tag}
                            className="cursor-default"
                            style={{
                                padding: '5px 14px',
                                border: '1px solid #DDD5C8',
                                borderRadius: '2px',
                                fontSize: '10px',
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase',
                                color: '#8A7C6C',
                                fontFamily: 'var(--font-inter), sans-serif',
                                background: 'transparent',
                                opacity: isLoaded ? 1 : 0,
                                transform: isLoaded ? 'translateY(0)' : 'translateY(8px)',
                                transition: `opacity 0.5s ease ${1.05 + i * 0.06}s, transform 0.5s ease ${1.05 + i * 0.06}s, background 0.3s ease, color 0.3s ease, border-color 0.3s ease`,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#2A2520';
                                e.currentTarget.style.color = '#FAF8F5';
                                e.currentTarget.style.borderColor = '#2A2520';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.color = '#8A7C6C';
                                e.currentTarget.style.borderColor = '#DDD5C8';
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* CTAs */}
                <div
                    className="flex gap-4 items-center"
                    style={{
                        opacity: isLoaded ? 1 : 0,
                        transform: isLoaded ? 'translateY(0)' : 'translateY(15px)',
                        transition: 'all 0.6s ease 1.3s',
                    }}
                >
                    <button
                        style={{
                            padding: '13px 30px',
                            background: 'transparent',
                            color: '#6B5F52',
                            fontSize: '10px',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            fontWeight: 400,
                            border: '1px solid #D1C7B8',
                            borderRadius: '2px',
                            cursor: 'pointer',
                            fontFamily: 'var(--font-inter), sans-serif',
                            transition: 'all 0.35s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = '#2A2520';
                            e.currentTarget.style.color = '#2A2520';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.background = 'rgba(42, 37, 32, 0.02)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = '#D1C7B8';
                            e.currentTarget.style.color = '#6B5F52';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.background = 'transparent';
                        }}
                    >
                        View Portfolio
                    </button>
                    <a
                        href="/Nandini Uxui resume.pdf"
                        download="Nandini_Yadav_Resume.pdf"
                        className="group flex items-center gap-3"
                        style={{
                            padding: '13px 30px',
                            background: '#B8965A',
                            color: '#FAF8F5',
                            fontSize: '10px',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            fontWeight: 600,
                            border: '1px solid #B8965A',
                            borderRadius: '2px',
                            cursor: 'pointer',
                            fontFamily: 'var(--font-inter), sans-serif',
                            transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                            textDecoration: 'none',
                            boxShadow: '0 10px 25px -5px rgba(184, 150, 90, 0.3)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#2A2520';
                            e.currentTarget.style.borderColor = '#2A2520';
                            e.currentTarget.style.transform = 'translateY(-3px)';
                            e.currentTarget.style.boxShadow = '0 15px 30px -10px rgba(42, 37, 32, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#B8965A';
                            e.currentTarget.style.borderColor = '#B8965A';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(184, 150, 90, 0.3)';
                        }}
                    >
                        <span className="relative z-10">Download CV</span>
                        <svg 
                            width="14" height="14" viewBox="0 0 24 24" fill="none" 
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="transition-transform duration-500 group-hover:translate-y-0.5 relative z-10"
                        >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                    </a>
                </div>

                {/* Watermark */}
                <span
                    className="absolute bottom-6 right-8 select-none pointer-events-none"
                    style={{
                        fontFamily: 'var(--font-playfair), serif',
                        fontSize: '80px',
                        fontWeight: 300,
                        color: 'rgba(42,37,32,0.04)',
                        lineHeight: 1,
                        opacity: isLoaded ? 1 : 0,
                        transition: 'opacity 1s ease 1.5s',
                    }}
                >
                    01
                </span>

                {/* Scroll hint */}
                <div
                    className="absolute bottom-6 left-10 lg:left-16 flex items-center gap-3 cursor-pointer"
                    onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                    style={{
                        opacity: isLoaded ? 1 : 0,
                        transition: 'opacity 0.6s ease 1.6s',
                    }}
                >
                    <div className="w-[1px] h-6 animate-infinite-scroll" style={{ background: 'rgba(42,37,32,0.2)' }} />
                    <span style={{
                        fontSize: '9px',
                        letterSpacing: '0.3em',
                        textTransform: 'uppercase',
                        color: 'rgba(42,37,32,0.3)',
                        fontFamily: 'var(--font-inter), sans-serif',
                    }}>
                        Scroll
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Hero;