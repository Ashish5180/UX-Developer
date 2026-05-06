'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Cormorant_Garamond, Jost } from 'next/font/google';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '600'], style: ['normal', 'italic'] });
const jost = Jost({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600'] });

// Premium SVG Icons
const Icons = {
    Search: () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
    Target: () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    Diamond: () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14v14m0-14L4 7m8 4L4 7m0 0v10l8 4" /></svg>,
    Flash: () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    Globe: () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
    Device: () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
    Security: () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    Users: () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
    Chart: () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
};

const projects = [
    {
        id: "01",
        title: "NOOR Brand Identity",
        role: "Brand Identity",
        tagline: "Minimal Skincare Focus",
        description: "Created a minimal skincare brand focused on purity and ritual, bridging the gap between clinical effectiveness and organic luxury.",
        detailedPoints: [
            { label: "Logo System", text: "Designed logo system with a clean, timeless visual style that reflects the brand's core values.", Icon: Icons.Diamond },
            { label: "Color Palette", text: "Developed earthy color palette for a calm, premium feel using nature-inspired tones.", Icon: Icons.Flash },
            { label: "Typography", text: "Selected typography to enhance elegance and readability across all brand touchpoints.", Icon: Icons.Target },
            { label: "Packaging", text: "Designed packaging and collaterals for a cohesive brand experience that resonates with consumers.", Icon: Icons.Device },
            { label: "Brand Strategy", text: "Developed a comprehensive brand strategy focused on ritualistic skincare and purity.", Icon: Icons.Users }
        ],
        image: "/branding.png",
        pdf: "/NOOR_Brand_Identity.pptx.pdf"
    },
    {
        id: "02",
        title: "Blinkit UX Audit",
        role: "UX Audit",
        tagline: "Heuristic Evaluation & Strategy",
        description: "A deep-dive audit using Nielsen’s 10 principles to resolve checkout friction and pricing transparency for India's leading quick-commerce app.",
        detailedPoints: [
            { label: "Heuristic Evaluation", text: "Audited the interface using Nielsen’s principles to identify critical friction points.", Icon: Icons.Search },
            { label: "Navigation Overhaul", text: "Redesigned back-button logic and added a dedicated home icon for direct movement.", Icon: Icons.Target },
            { label: "Pricing Transparency", text: "Proposed real-time dynamic billing summaries to prevent price shock at checkout.", Icon: Icons.Diamond },
            { label: "Feature Integration", text: "Recommended delivery scheduling and product reviews to match industry standards.", Icon: Icons.Flash },
            { label: "Accessibility", text: "Added language flexibility options to cater to a diverse, multilingual Indian user base.", Icon: Icons.Globe }
        ],
        image: "/blinkit.jpeg",
        pdf: "/Blinkit.pdf"
    },
    {
        id: "03",
        title: "Smart Hostel Management",
        role: "Management System",
        tagline: "Centralized Grievance Redressal",
        description: "Replaced manual logs with a unified dashboard. Validated through primary research with over 130 students.",
        detailedPoints: [
            { label: "Centralized Hub", text: "Replaced fragmented logs with a unified platform for reporting maintenance issues.", Icon: Icons.Diamond },
            { label: "Status Tracking", text: "Introduced real-time progress bars, eliminating repeated verbal follow-ups.", Icon: Icons.Chart },
            { label: "Evidence Based", text: "Validated through surveys with 130+ students to prioritize high-impact issues.", Icon: Icons.Search },
            { label: "Accountability", text: "Created a timestamped system for hostel staff to ensure no complaint is ignored.", Icon: Icons.Target },
            { label: "User Empathy", text: "Developed empathy maps to address student frustrations regarding transparency.", Icon: Icons.Users }
        ],
        image: "/smarthostel.jpeg",
        pdf: "/Smart Hostel Managment.pdf"
    },
    {
        id: "04",
        title: "Design Thinking Narrative",
        role: "Case Study",
        tagline: "Human-Centered Problem Solving",
        description: "A comprehensive exploration of design thinking methodologies applied to complex user challenges.",
        detailedPoints: [
            { label: "Empathy Mapping", text: "Deep-dived into user frustrations and needs through extensive interview cycles.", Icon: Icons.Users },
            { label: "Ideation Loops", text: "Iterated through multiple rapid prototyping phases to find the optimal solution.", Icon: Icons.Flash },
            { label: "User Testing", text: "Validated concepts with real users to ensure usability and value alignment.", Icon: Icons.Search },
            { label: "Strategy Design", text: "Crafted long-term product roadmaps based on qualitative and quantitative data.", Icon: Icons.Target },
            { label: "Outcome Delivery", text: "Ensured the final design met both business goals and user expectations.", Icon: Icons.Globe }
        ],
        image: "/census.jpeg",
        pdf: "/DESIGN THiNKING.pdf"
    },
    {
        id: "05",
        title: "Personal Branding",
        role: "Brand Strategy",
        tagline: "Visual Identity & Self-Positioning",
        description: "A comprehensive personal branding project focused on creating a cohesive visual language and professional narrative that reflects my design philosophy.",
        detailedPoints: [
            { label: "Visual Identity", text: "Developed a consistent visual language including typography and color theory.", Icon: Icons.Diamond },
            { label: "Portfolio Strategy", text: "Structured case studies to highlight problem-solving and user-centric results.", Icon: Icons.Target },
            { label: "Market Positioning", text: "Defined unique value propositions to stand out in the competitive UX landscape.", Icon: Icons.Flash },
            { label: "Typography System", text: "Selected refined typefaces that balance professionalism with creative flair.", Icon: Icons.Search },
            { label: "Digital Presence", text: "Optimized brand consistency across all professional digital touchpoints.", Icon: Icons.Globe }
        ],
        image: "/personal.png",
        pdf: "/Personal Branding.pdf"
    }
];

const Portfolio = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (selectedProject) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
    }, [selectedProject]);

    return (
        <section
            ref={sectionRef}
            id="portfolio"
            className={`${jost.className} relative py-20 md:py-24 overflow-hidden bg-[#FAF8F5]`}
        >
            {/* Background Watermark */}
            <div className="absolute top-0 right-0 w-1/3 h-full border-l border-stone-100 flex items-center justify-center opacity-40 pointer-events-none">
                <span className={`${cormorant.className} -rotate-90 text-[18vw] font-light text-stone-200/50 select-none`}>
                    ARCHIVE
                </span>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">

                {/* ── HEADER ── */}
                <div className={`mb-16 flex flex-col md:flex-row md:items-end justify-between transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="max-w-2xl">
                        <div className="flex gap-4 items-center mb-4">
                            <span className="text-[11px] font-bold tracking-[0.5em] uppercase text-[#B8965A]">Visual Case Studies</span>
                            <div className="flex-1 h-px bg-[#B8965A]/20" />
                        </div>
                        <h2 className={`${cormorant.className} text-6xl md:text-8xl font-light text-[#2A2520] tracking-tighter leading-none`}>
                            Project <span className="italic font-normal">Vault.</span>
                        </h2>
                    </div>
                </div>

                {/* ── GRID ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200 border-y border-stone-200">
                    {projects.map((project, idx) => (
                        <div
                            key={project.id}
                            className={`group cursor-pointer relative bg-white p-6 md:p-8 transition-all duration-700 hover:bg-[#FAF8F5] overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} delay-${idx * 100}`}
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="space-y-1">
                                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#B8965A]">
                                        {project.role}
                                    </span>
                                    <h3 className={`${cormorant.className} text-3xl md:text-4xl font-light text-[#2A2520] leading-tight`}>
                                        {project.title}
                                    </h3>
                                </div>
                                <span className={`${cormorant.className} text-3xl font-light text-stone-200`}>
                                    {project.id}
                                </span>
                            </div>

                            <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden rounded-sm bg-stone-50 transition-all duration-700 group-hover:shadow-[0_20px_50px_-10px_rgba(42,37,32,0.1)]">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                                />
                            </div>

                            <div className="space-y-3">
                                <p className={`${cormorant.className} text-xl md:text-2xl text-[#2A2520] italic font-light leading-tight opacity-80`}>
                                    &quot;{project.tagline}&quot;
                                </p>
                                <div className="flex items-center gap-3 text-[#B8965A] border-t border-stone-100 pt-6 group-hover:translate-x-2 transition-transform duration-500">
                                    <span className="text-[9px] font-bold tracking-[0.4em] uppercase">Open Archive</span>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* ── CTA CARD (6th Column) ── */}
                    <div
                        className={`group cursor-pointer relative bg-[#2A2520] p-6 md:p-8 transition-all duration-700 hover:bg-[#352F29] overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} delay-500`}
                        onClick={() => {
                            const contactSection = document.getElementById('contact');
                            if (contactSection) {
                                contactSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="space-y-1">
                                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#B8965A]">
                                    Next Chapter
                                </span>
                                <h3 className={`${cormorant.className} text-3xl md:text-4xl font-light text-white leading-tight`}>
                                    Your Project <span className="italic font-normal">Next?</span>
                                </h3>
                            </div>
                            <span className={`${cormorant.className} text-3xl font-light text-stone-700`}>
                                ++
                            </span>
                        </div>

                        <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden rounded-sm bg-stone-800/50 flex items-center justify-center border border-stone-700 group-hover:border-[#B8965A]/30 transition-all duration-700">
                             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#B8965A_0%,_transparent_70%)]" />
                             <svg className="w-16 h-16 text-[#B8965A] opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M12 4v16m8-8H4" />
                             </svg>
                        </div>

                        <div className="space-y-3">
                            <p className={`${cormorant.className} text-xl md:text-2xl text-stone-300 italic font-light leading-tight opacity-80`}>
                                &quot;Let&apos;s build something exceptional together.&quot;
                            </p>
                            <div className="flex items-center gap-3 text-[#B8965A] border-t border-stone-700 pt-6 group-hover:translate-x-2 transition-transform duration-500">
                                <span className="text-[9px] font-bold tracking-[0.4em] uppercase">Get In Touch</span>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── COMPACT MODAL ── */}
            {selectedProject && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
                    <div className="absolute inset-0 bg-stone-900/90 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />

                    <div className="relative w-full max-w-[1200px] max-h-[90vh] bg-[#FAF8F5] overflow-y-auto shadow-2xl rounded-sm animate-in zoom-in-95 slide-in-from-bottom-5">
                        <button
                            className="absolute top-8 right-8 z-20 w-12 h-12 flex items-center justify-center border border-stone-200 rounded-full hover:bg-[#2A2520] hover:text-white transition-all bg-white shadow-sm"
                            onClick={() => setSelectedProject(null)}
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr]">
                            <div className="relative h-[400px] lg:h-auto overflow-hidden">
                                <Image
                                    src={selectedProject.image}
                                    fill
                                    className="object-cover grayscale"
                                    alt={selectedProject.title}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
                                <div className="absolute bottom-10 left-10">
                                    <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#B8965A] mb-3 block">Case Archive {selectedProject.id}</span>
                                    <h2 className={`${cormorant.className} text-6xl lg:text-8xl text-white font-light leading-none tracking-tighter`}>
                                        {selectedProject.title}
                                    </h2>
                                </div>
                            </div>

                            <div className="p-10 md:p-16 space-y-12">
                                <div>
                                    <h3 className={`${cormorant.className} text-4xl md:text-5xl italic font-light text-[#2A2520] mb-6 leading-tight`}>
                                        &quot;{selectedProject.tagline}&quot;
                                    </h3>
                                    <p className="text-xl font-light leading-relaxed text-[#6B5F52] opacity-90">
                                        {selectedProject.description}
                                    </p>
                                </div>

                                <div className="space-y-8">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-[1px] bg-[#B8965A]/40" />
                                        <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-[#B8965A]">Strategic Pillars</span>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {selectedProject.detailedPoints.map((point, pIdx) => (
                                            <div key={pIdx} className="flex gap-6 group/item">
                                                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-white border border-stone-100 rounded-xl text-[#B8965A] transition-all group-hover/item:border-[#B8965A] shadow-sm">
                                                    <point.Icon />
                                                </div>
                                                <div className="space-y-1">
                                                    <h4 className="text-[13px] font-bold tracking-[0.1em] uppercase text-[#2A2520]">
                                                        {point.label}
                                                    </h4>
                                                    <p className="text-[16px] font-light text-[#6B5F52] opacity-80 leading-snug">
                                                        {point.text}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-10 border-t border-stone-100 flex flex-col md:flex-row items-center justify-between gap-8">
                                    <div className="flex flex-col items-center md:items-start">
                                        <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#A09385] mb-1">ARCHIVE 2025</span>
                                        <span className="text-[10px] font-medium text-[#B8965A]">Proprietary Case Content</span>
                                    </div>
                                    <a
                                        href={selectedProject.pdf}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full md:w-auto px-12 py-4 bg-[#2A2520] text-white text-[11px] font-bold tracking-[0.4em] uppercase hover:bg-[#B8965A] transition-all text-center rounded-sm shadow-xl"
                                    >
                                        View Case Study
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style jsx global>{`
                @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
                @keyframes zoom-in-95 { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
                @keyframes slide-in-from-bottom-5 { from { transform: translateY(5%); } to { transform: translateY(0); } }
                .animate-in { animation-duration: 600ms; animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1); animation-fill-mode: forwards; }
                .zoom-in-95 { animation-name: zoom-in-95; }
                .slide-in-from-bottom-5 { animation-name: slide-in-from-bottom-5; }
            `}</style>
        </section>
    );
};

export default Portfolio;
