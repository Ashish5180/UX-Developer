'use client';

import { useState, useEffect, useRef } from 'react';

const projects = [
    {
        title: "Quantum Dashboard",
        category: "Full Stack Development",
        description: "A real-time data visualization platform with advanced filtering and predictive analytics.",
        tech: ["Next.js", "TypeScript", "D3.js", "Supabase"],
        color: "from-blue-500 to-indigo-600",
        image: "https://images.unsplash.com/photo-1551288049-bbda38a5f012?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Ethos Commerce",
        category: "E-Commerce Solution",
        description: "Minimalist fashion store with a focus on sustainable brands and seamless checkout UX.",
        tech: ["React", "Tailwind CSS", "Stripe", "Node.js"],
        color: "from-violet-500 to-fuchsia-600",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Aura AI",
        category: "AI Integration",
        description: "Intelligent content generation tool powered by large language models for creative writers.",
        tech: ["Python", "OpenAI API", "Reflex", "PostgreSQL"],
        color: "from-fuchsia-500 to-pink-600",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Nebula OS",
        category: "Interface Design",
        description: "Conceptual operating system interface exploring spatial computing and glassmorphism.",
        tech: ["Figma", "Framer Motion", "React", "Three.js"],
        color: "from-indigo-500 to-purple-600",
        image: "https://images.unsplash.com/photo-1614850523296-e8c041ca846a?q=80&w=1000&auto=format&fit=crop"
    }
];

const Portfolio = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
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
            id="projects"
            ref={sectionRef}
            className="relative py-32 px-6 bg-[#FAF9F6] overflow-hidden"
        >
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <span className="text-xs font-bold text-violet-600 uppercase tracking-[0.3em] mb-4 block font-syne">Curated Work</span>
                        <h2 className="text-6xl md:text-7xl font-black text-stone-900 tracking-tighter leading-none">
                            SELECTED<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">PROJECTS</span>
                        </h2>
                    </div>
                    <p className={`text-stone-600 max-w-sm text-lg font-medium transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        A collection of digital artifacts exploring the intersection of design, code, and user psychology.
                    </p>
                </div>

                {/* Coming Soon Placeholder */}
                <div className={`relative min-h-[500px] flex items-center justify-center transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* Animated Background Rings */}
                        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-stone-200 rounded-full absolute animate-pulse-slow" />
                        <div className="w-[400px] h-[400px] md:w-[700px] md:h-[700px] border border-stone-100 rounded-full absolute animate-pulse-slow delay-75" />
                    </div>

                    <div className="text-center relative z-10">
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-violet-100 bg-white/60 backdrop-blur-md mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-600" />
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-violet-700">Under Construction</span>
                        </div>
                        <h3 className="text-4xl md:text-6xl font-black text-stone-900 mb-6 tracking-tight">COMING SOON</h3>
                        <p className="text-stone-500 max-w-md mx-auto font-medium text-lg leading-relaxed">
                            Currently curating a selection of high-impact case studies and digital experiments. The showcase will launch shortly.
                        </p>
                    </div>
                </div>

                {/* View More CTA - Hidden for now or updated */}
                <div className={`mt-24 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-stone-400 font-mono text-sm tracking-widest uppercase">STAY TUNED • 2026</p>
                </div>
            </div>

            {/* Background Decorative Accent */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-stone-200 z-0 opacity-50" />
            <div className="absolute top-1/2 left-1/4 w-px h-[200%] bg-stone-200 z-0 opacity-50 -translate-y-1/2" />
        </section>
    );
};

export default Portfolio;
