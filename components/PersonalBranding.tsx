'use client';

import { useState, useEffect, useRef } from 'react';

const PersonalBranding = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [activeTypography, setActiveTypography] = useState<number | null>(null);
    const [activePalette, setActivePalette] = useState<number | null>(null);
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
            { threshold: 0.08 }
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
        {
            name: 'Playfair Display',
            class: 'font-serif',
            sample: 'Elegance in every serif',
            weight: 'Timeless editorial sophistication',
            style: { letterSpacing: '-0.02em' }
        },
        {
            name: 'Montserrat',
            class: 'font-montserrat',
            sample: 'Clean geometric clarity',
            weight: 'Modern precision & balance',
            style: { letterSpacing: '0.01em' }
        },
        {
            name: 'Syne',
            class: 'font-syne',
            sample: 'Bold artistic voice',
            weight: 'Expressive & unapologetic',
            style: { letterSpacing: '-0.01em' }
        },
        {
            name: 'Inter',
            class: 'font-inter',
            sample: 'Maximum readability',
            weight: 'Engineered for interfaces',
            style: { letterSpacing: '0' }
        },
        {
            name: 'Outfit',
            class: 'font-outfit',
            sample: 'Warm & approachable',
            weight: 'Friendly contemporary feel',
            style: { letterSpacing: '0.005em' }
        }
    ];

    const palettes = [
        {
            name: 'Warm Stone',
            colors: ['#F5F0EB', '#D4C5B5', '#A69280', '#6B5B4E'],
            accent: '#A69280',
            vibe: 'Organic · Grounded · Warm'
        },
        {
            name: 'Sage Garden',
            colors: ['#F0F4F0', '#C5D5C5', '#8BA88B', '#4A6B4A'],
            accent: '#8BA88B',
            vibe: 'Calm · Natural · Fresh'
        },
        {
            name: 'Dusty Rose',
            colors: ['#FBF5F3', '#E8D4CF', '#C9A49B', '#8B6B63'],
            accent: '#C9A49B',
            vibe: 'Soft · Gentle · Refined'
        },
        {
            name: 'Slate Blue',
            colors: ['#F0F2F5', '#B8C4D4', '#7B91AA', '#44556B'],
            accent: '#7B91AA',
            vibe: 'Trustworthy · Serene · Deep'
        }
    ];

    const whyMe = [
        {
            question: 'What sets me apart?',
            title: 'Strategic Thinking',
            text: 'I architect scalable design systems that bridge the gap between business objectives and genuine user delight.',
            number: '01',
            accentColor: '#8BA88B'
        },
        {
            question: 'What drives my work?',
            title: 'Precision & Intent',
            text: 'Every pixel serves a purpose. I obsess over micro-interactions, accessibility, and the details that create memorable experiences.',
            number: '02',
            accentColor: '#C9A49B'
        },
        {
            question: 'Why invest in me?',
            title: 'Continuous Growth',
            text: 'The landscape evolves daily. I bring a learning-first mindset, staying ahead of trends while honoring timeless design principles.',
            number: '03',
            accentColor: '#7B91AA'
        }
    ];

    return (
        <section
            ref={sectionRef}
            className="relative py-32 md:py-40 px-6 overflow-hidden"
            id="personal-branding"
            style={{ background: 'linear-gradient(180deg, #FAFAF7 0%, #F5F0EB 50%, #F0EDE8 100%)' }}
        >
            {/* Ambient Light Orb following cursor */}
            <div
                className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-[2000ms]"
                style={{
                    background: `radial-gradient(900px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(165, 146, 128, 0.06), transparent 60%)`,
                    opacity: isVisible ? 1 : 0
                }}
            />

            {/* Subtle grain texture overlay */}
            <div
                className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Floating decorative elements */}
            <div className="pointer-events-none absolute top-20 left-[10%] w-72 h-72 rounded-full opacity-[0.04] animate-float-slow" style={{ background: 'radial-gradient(circle, #A69280 0%, transparent 70%)' }} />
            <div className="pointer-events-none absolute bottom-40 right-[15%] w-56 h-56 rounded-full opacity-[0.05] animate-float-varied" style={{ background: 'radial-gradient(circle, #8BA88B 0%, transparent 70%)' }} />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* ===== HEADER ===== */}
                <div className={`text-center mb-28 transition-all duration-[1200ms] ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    {/* Thin decorative line */}
                    <div className="flex justify-center mb-8">
                        <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#A69280] to-transparent" />
                    </div>
                    <p className="font-outfit text-xs tracking-[0.35em] uppercase text-[#A69280] mb-6">Design Philosophy</p>
                    <h2
                        className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#3D3229] mb-8 leading-[0.95]"
                        style={{ letterSpacing: '-0.03em' }}
                    >
                        Personal<br />
                        <span
                            className="text-transparent bg-clip-text"
                            style={{
                                backgroundImage: 'linear-gradient(135deg, #A69280 0%, #C9A49B 40%, #8BA88B 70%, #7B91AA 100%)',
                                WebkitBackgroundClip: 'text',
                            }}
                        >
                            Branding
                        </span>
                    </h2>
                    <p className="font-outfit text-[#8A7E73] text-lg md:text-xl max-w-xl mx-auto leading-relaxed" style={{ letterSpacing: '0.01em' }}>
                        In a world of noise, intentionality is my superpower. Here&apos;s the aesthetic and strategic foundation of my craft.
                    </p>
                </div>

                {/* ===== TYPOGRAPHY SHOWCASE ===== */}
                <div className={`mb-28 transition-all duration-[1200ms] delay-200 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
                    <div className="flex items-center gap-4 mb-12">
                        <span className="w-10 h-px bg-[#A69280]" />
                        <h3 className="font-outfit text-xs tracking-[0.3em] uppercase text-[#A69280]">Curated Typography</h3>
                    </div>

                    <div className="space-y-0">
                        {fonts.map((font, idx) => (
                            <div
                                key={idx}
                                className="group cursor-default relative"
                                onMouseEnter={() => setActiveTypography(idx)}
                                onMouseLeave={() => setActiveTypography(null)}
                            >
                                {/* Active background highlight */}
                                <div
                                    className="absolute inset-0 -mx-6 md:-mx-10 transition-all duration-700 ease-out rounded-2xl"
                                    style={{
                                        background: activeTypography === idx
                                            ? 'linear-gradient(135deg, rgba(166,146,128,0.04) 0%, rgba(139,168,139,0.03) 100%)'
                                            : 'transparent',
                                    }}
                                />
                                <div className="relative flex flex-col md:flex-row md:items-baseline justify-between py-7 border-b border-[#E5DDD5]/60">
                                    <div className="flex items-baseline gap-4 md:gap-8">
                                        <span className="font-outfit text-[10px] tracking-[0.2em] text-[#C4B8AB] tabular-nums">
                                            {String(idx + 1).padStart(2, '0')}
                                        </span>
                                        <div
                                            className={`text-4xl md:text-6xl lg:text-7xl ${font.class} text-[#3D3229] transition-all duration-500`}
                                            style={{
                                                ...font.style,
                                                color: activeTypography === idx ? '#6B5B4E' : '#3D3229',
                                            }}
                                        >
                                            {font.name}
                                        </div>
                                    </div>
                                    <div className="mt-2 md:mt-0 md:text-right ml-12 md:ml-0">
                                        <p className={`font-outfit text-sm text-[#A69280] transition-all duration-500 ${activeTypography === idx ? 'opacity-100 translate-x-0' : 'opacity-60 md:translate-x-2'}`}>
                                            {font.sample}
                                        </p>
                                        <p className={`font-outfit text-xs text-[#C4B8AB] mt-0.5 transition-all duration-500 delay-75 ${activeTypography === idx ? 'opacity-100 translate-x-0' : 'opacity-0 md:translate-x-4'}`}>
                                            {font.weight}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ===== COLOR PALETTE SHOWCASE ===== */}
                <div className={`mb-28 transition-all duration-[1200ms] delay-400 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
                    <div className="flex items-center gap-4 mb-12">
                        <span className="w-10 h-px bg-[#8BA88B]" />
                        <h3 className="font-outfit text-xs tracking-[0.3em] uppercase text-[#8BA88B]">Signature Palettes</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {palettes.map((palette, idx) => (
                            <div
                                key={idx}
                                className="group relative rounded-3xl p-7 transition-all duration-700 ease-out cursor-default"
                                style={{
                                    background: activePalette === idx
                                        ? 'rgba(255,255,255,0.85)'
                                        : 'rgba(255,255,255,0.5)',
                                    backdropFilter: 'blur(20px)',
                                    WebkitBackdropFilter: 'blur(20px)',
                                    border: `1px solid ${activePalette === idx ? palette.accent + '30' : 'rgba(212, 197, 181, 0.25)'}`,
                                    boxShadow: activePalette === idx
                                        ? `0 20px 60px -15px ${palette.accent}15, 0 0 0 1px ${palette.accent}10`
                                        : '0 2px 20px -10px rgba(107, 91, 78, 0.06)',
                                }}
                                onMouseEnter={() => setActivePalette(idx)}
                                onMouseLeave={() => setActivePalette(null)}
                            >
                                {/* Color Swatches */}
                                <div className="flex gap-3 mb-6">
                                    {palette.colors.map((color, cIdx) => (
                                        <div
                                            key={cIdx}
                                            className="flex-1 aspect-[3/4] rounded-xl transition-all duration-500 ease-out relative overflow-hidden"
                                            style={{
                                                backgroundColor: color,
                                                transform: activePalette === idx ? 'translateY(-4px)' : 'translateY(0)',
                                                transitionDelay: `${cIdx * 50}ms`,
                                                boxShadow: activePalette === idx
                                                    ? `0 12px 30px -8px ${color}40`
                                                    : '0 2px 8px -2px rgba(0,0,0,0.06)',
                                            }}
                                        >
                                            {/* Hex label on hover */}
                                            <div
                                                className="absolute inset-0 flex items-end justify-center pb-2 transition-opacity duration-300"
                                                style={{
                                                    opacity: activePalette === idx ? 1 : 0,
                                                }}
                                            >
                                                <span
                                                    className="font-mono text-[9px] tracking-wider px-1.5 py-0.5 rounded-md"
                                                    style={{
                                                        color: cIdx < 2 ? '#6B5B4E' : '#F5F0EB',
                                                        background: cIdx < 2 ? 'rgba(107,91,78,0.08)' : 'rgba(255,255,255,0.15)',
                                                    }}
                                                >
                                                    {color}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Palette Info */}
                                <div className="flex items-end justify-between">
                                    <div>
                                        <h4 className="font-serif text-lg text-[#3D3229] mb-1" style={{ letterSpacing: '-0.01em' }}>
                                            {palette.name}
                                        </h4>
                                        <p className="font-outfit text-xs text-[#A69280] tracking-wide">
                                            {palette.vibe}
                                        </p>
                                    </div>
                                    {/* Small accent dot */}
                                    <div
                                        className="w-3 h-3 rounded-full transition-transform duration-500"
                                        style={{
                                            backgroundColor: palette.accent,
                                            transform: activePalette === idx ? 'scale(1.5)' : 'scale(1)',
                                            opacity: 0.6,
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Brand Philosophy Callout */}
                    <div className="mt-10 rounded-3xl p-8 md:p-10 relative overflow-hidden"
                        style={{
                            background: 'linear-gradient(135deg, rgba(245,240,235,0.8) 0%, rgba(240,244,240,0.6) 50%, rgba(240,237,232,0.8) 100%)',
                            backdropFilter: 'blur(30px)',
                            border: '1px solid rgba(212, 197, 181, 0.2)',
                        }}
                    >
                        <div className="relative z-10 max-w-2xl">
                            <p className="font-outfit text-xs tracking-[0.3em] uppercase text-[#A69280] mb-4">Philosophy</p>
                            <p className="font-serif text-2xl md:text-3xl text-[#3D3229] leading-snug mb-4" style={{ letterSpacing: '-0.02em' }}>
                                &ldquo;Design is a silent ambassador of your brand.&rdquo;
                            </p>
                            <p className="font-outfit text-[#8A7E73] text-sm leading-relaxed max-w-lg">
                                I focus on creating harmony between form and function — where every element earns its place, and restraint becomes the ultimate expression of confidence.
                            </p>
                        </div>
                        {/* Decorative accent */}
                        <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-[0.06] -mr-16 -mt-16" style={{ background: 'radial-gradient(circle, #8BA88B, transparent)' }} />
                        <div className="absolute bottom-0 right-20 w-32 h-32 rounded-full opacity-[0.04] mb-[-40px]" style={{ background: 'radial-gradient(circle, #C9A49B, transparent)' }} />
                    </div>
                </div>

                {/* ===== WHY ME SECTION ===== */}
                <div className={`mb-28 transition-all duration-[1200ms] delay-600 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                    <div className="text-center mb-20">
                        <div className="flex justify-center mb-8">
                            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9A49B] to-transparent" />
                        </div>
                        <h3
                            className="font-serif text-4xl md:text-6xl text-[#3D3229] mb-4"
                            style={{ letterSpacing: '-0.03em' }}
                        >
                            Why Me?
                        </h3>
                        <p className="font-outfit text-[#A69280] text-sm tracking-wide">
                            Three pillars of my professional ethos
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {whyMe.map((item, idx) => (
                            <div
                                key={idx}
                                className="group relative rounded-3xl p-8 md:p-10 transition-all duration-700 ease-out hover:-translate-y-2"
                                style={{
                                    background: 'rgba(255,255,255,0.55)',
                                    backdropFilter: 'blur(20px)',
                                    WebkitBackdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(212, 197, 181, 0.2)',
                                }}
                            >
                                {/* Hover glow */}
                                <div
                                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                    style={{
                                        boxShadow: `0 25px 60px -15px ${item.accentColor}20, 0 0 0 1px ${item.accentColor}15`,
                                    }}
                                />

                                {/* Number */}
                                <div className="mb-10">
                                    <span
                                        className="font-serif text-6xl md:text-7xl font-light transition-colors duration-500"
                                        style={{
                                            color: item.accentColor,
                                            opacity: 0.2,
                                        }}
                                    >
                                        {item.number}
                                    </span>
                                </div>

                                {/* Question label */}
                                <p className="font-outfit text-[10px] tracking-[0.25em] uppercase mb-3" style={{ color: item.accentColor }}>
                                    {item.question}
                                </p>

                                {/* Title */}
                                <h4 className="font-serif text-2xl md:text-[1.75rem] text-[#3D3229] mb-5 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                                    {item.title}
                                </h4>

                                {/* Description */}
                                <p className="font-outfit text-[#8A7E73] text-sm leading-relaxed mb-8">
                                    {item.text}
                                </p>

                                {/* Subtle CTA arrow */}
                                <div className="flex items-center gap-3 group-hover:gap-5 transition-all duration-500">
                                    <span className="w-8 h-px transition-all duration-500 group-hover:w-12" style={{ backgroundColor: item.accentColor }} />
                                    <svg
                                        className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1"
                                        style={{ color: item.accentColor }}
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ===== CTA SECTION ===== */}
                <div className={`transition-all duration-[1200ms] delay-800 ease-out transform ${isVisible ? 'scale-100 opacity-100' : 'scale-[0.97] opacity-0'}`}>
                    <div
                        className="relative rounded-[2.5rem] p-12 md:p-16 overflow-hidden"
                        style={{
                            background: 'linear-gradient(145deg, #3D3229 0%, #2A231C 50%, #1E1914 100%)',
                        }}
                    >
                        {/* Ambient light decorations */}
                        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-[0.08] -mr-24 -mt-24" style={{ background: 'radial-gradient(circle, #C9A49B, transparent)' }} />
                        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-[0.06] -ml-20 -mb-20" style={{ background: 'radial-gradient(circle, #8BA88B, transparent)' }} />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03]" style={{ background: 'radial-gradient(circle, #7B91AA, transparent)' }} />

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                            <div className="max-w-lg">
                                <p className="font-outfit text-xs tracking-[0.3em] uppercase text-[#A69280] mb-6">Let&apos;s Collaborate</p>
                                <h3
                                    className="font-serif text-3xl md:text-5xl text-[#F5F0EB] mb-5 leading-[1.1]"
                                    style={{ letterSpacing: '-0.02em' }}
                                >
                                    Let&apos;s build something iconic.
                                </h3>
                                <p className="font-outfit text-[#A69280] text-sm md:text-base leading-relaxed">
                                    Whether you&apos;re envisioning a fresh design system or a thoughtful digital experience, I&apos;m here to bring your vision to life with care and craft.
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
                                className="group relative px-10 py-5 rounded-2xl font-outfit text-sm font-medium tracking-[0.1em] uppercase transition-all duration-500 active:scale-[0.97] overflow-hidden"
                                style={{
                                    background: 'linear-gradient(135deg, #F5F0EB 0%, #E8DDD5 100%)',
                                    color: '#3D3229',
                                    boxShadow: '0 10px 40px -10px rgba(0,0,0,0.3)',
                                }}
                            >
                                <span className="relative z-10">Get in Touch</span>
                                {/* Hover fill */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: 'linear-gradient(135deg, #A69280 0%, #8BA88B 100%)',
                                    }}
                                />
                                <span className="absolute inset-0 flex items-center justify-center font-outfit text-sm font-medium tracking-[0.1em] uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                                    Get in Touch
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PersonalBranding;
