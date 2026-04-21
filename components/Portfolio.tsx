'use client';

import { useState, useEffect, useRef } from 'react';
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
        title: "Blinkit",
        role: "UX Audit",
        tagline: "Enhancing User Retention via Heuristics",
        description: "A deep-dive audit using Nielsen’s 10 principles to resolve checkout friction and pricing transparency.",
        detailedPoints: [
            { label: "Heuristic Evaluation", text: "Audited the interface using Nielsen’s principles to identify critical friction points.", Icon: Icons.Search },
            { label: "Navigation Overhaul", text: "Redesigned back-button logic and added a dedicated home icon for direct movement.", Icon: Icons.Target },
            { label: "Pricing Transparency", text: "Proposed real-time dynamic billing summaries to prevent price shock at checkout.", Icon: Icons.Diamond },
            { label: "Feature Integration", text: "Recommended delivery scheduling and product reviews to match industry standards.", Icon: Icons.Flash },
            { label: "Accessibility", text: "Added language flexibility options to cater to a diverse, multilingual Indian user base.", Icon: Icons.Globe }
        ],
        image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2000&auto=format&fit=crop",
    },
    {
        id: "02",
        title: "HealthGuard",
        role: "Patient Portal",
        tagline: "Healthcare Accessibility Gaps",
        description: "Mobile-first responsive design tailored for elderly users with inclusive UX and emergency rapid-access.",
        detailedPoints: [
            { label: "Mobile-First Design", text: "Developed a responsive portal optimized for smartphones, the primary device.", Icon: Icons.Device },
            { label: "Inclusive UX", text: "Tailored the interface for elderly users through simplified language and high-contrast visuals.", Icon: Icons.Users },
            { label: "Emergency Integration", text: "Streamlined information architecture for rapid access to ambulance services.", Icon: Icons.Flash },
            { label: "Security & Trust", text: "Integrated End-to-End Encryption and 2FA to address medical data privacy.", Icon: Icons.Security },
            { label: "Operational Efficiency", text: "Simplified feedback loops with automated reminders and real-time chat.", Icon: Icons.Chart }
        ],
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000&auto=format&fit=crop",
    },
    {
        id: "03",
        title: "Census Dev",
        role: "Gov-Tech",
        tagline: "Modernizing National Data Collection",
        description: "Streamlined digital flows reducing resource waste. Designed offline modes for rural accessibility.",
        detailedPoints: [
            { label: "Process Automation", text: "Transitioned manual systems into digital flows, reducing paper waste and error.", Icon: Icons.Flash },
            { label: "Verified Security", text: "Designed a secure login system using government IDs and OTP verification.", Icon: Icons.Security },
            { label: "Persona-Driven", text: "Created specialized user journeys for rural residents, including audio instructions.", Icon: Icons.Users },
            { label: "Connectivity", text: "Implemented offline data entry modes to accommodate areas with unstable internet.", Icon: Icons.Globe },
            { label: "Publicity Strategy", text: "Developed a 'Herofying' campaign to boost national participation through social proof.", Icon: Icons.Target }
        ],
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop",
    },
    {
        id: "04",
        title: "Smart Hostel",
        role: "Management",
        tagline: "Student Grievance Redressal",
        description: "Replaced manual logs with a unified dashboard. Validated through research with 130+ students.",
        detailedPoints: [
            { label: "Centralized Hub", text: "Replaced fragmented logs with a unified platform for reporting maintenance issues.", Icon: Icons.Diamond },
            { label: "Status Tracking", text: "Introduced real-time progress bars, eliminating repeated verbal follow-ups.", Icon: Icons.Chart },
            { label: "Evidence Based", text: "Validated through surveys with 130+ students to prioritize high-impact issues.", Icon: Icons.Search },
            { label: "Accountability", text: "Created a timestamped system for hostel staff to ensure no complaint is ignored.", Icon: Icons.Target },
            { label: "User Empathy", text: "Developed empathy maps to address student frustrations regarding transparency.", Icon: Icons.Users }
        ],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop",
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
            className={`${jost.className} relative py-12 md:py-16 overflow-hidden bg-[#FAF8F5]`}
        >
            {/* Background Watermark */}
            <div className="absolute top-0 right-0 w-1/3 h-full border-l border-stone-100 flex items-center justify-center opacity-40 pointer-events-none">
                <span className={`${cormorant.className} -rotate-90 text-[18vw] font-light text-stone-200/50 select-none`}>
                    CATALOGUE
                </span>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                
                {/* ── HEADER ── */}
                <div className={`mb-12 flex flex-col md:flex-row md:items-end justify-between transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="max-w-2xl">
                        <div className="flex gap-4 items-center mb-4">
                            <span className="text-[11px] font-bold tracking-[0.5em] uppercase text-[#B8965A]">Portfolio Archives</span>
                            <div className="flex-1 h-px bg-[#B8965A]/20" />
                        </div>
                        <h2 className={`${cormorant.className} text-6xl md:text-8xl font-light text-[#2A2520] tracking-tighter leading-none`}>
                            Case <span className="italic font-normal">Vault.</span>
                        </h2>
                    </div>
                </div>

                {/* ── GRID ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 border-y border-stone-200">
                    {projects.map((project, idx) => (
                        <div 
                            key={project.id}
                            className={`group cursor-pointer relative bg-white p-8 transition-all duration-700 hover:bg-[#FAF8F5] overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} delay-${idx * 100}`}
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="space-y-1">
                                    <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#B8965A]">
                                        {project.role}
                                    </span>
                                    <h3 className={`${cormorant.className} text-4xl md:text-5xl font-light text-[#2A2520]`}>
                                        {project.title}
                                    </h3>
                                </div>
                                <span className={`${cormorant.className} text-4xl font-light text-stone-200`}>
                                    {project.id}
                                </span>
                            </div>

                            <div className="relative w-full aspect-[16/9] mb-8 overflow-hidden bg-stone-50 transition-all duration-700 group-hover:shadow-[0_40px_100px_-20px_rgba(42,37,32,0.15)]">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                                />
                            </div>

                            <div className="space-y-4">
                                <p className={`${cormorant.className} text-xl md:text-2xl text-[#2A2520] italic font-light leading-tight`}>
                                    "{project.tagline}"
                                </p>
                                <div className="flex items-center gap-3 text-[#B8965A] border-t border-stone-100 pt-6 group-hover:translate-x-2 transition-transform duration-500">
                                    <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Enter Archive</span>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── COMPACT MODAL ── */}
            {selectedProject && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
                    <div className="absolute inset-0 bg-stone-900/80 backdrop-blur-md" onClick={() => setSelectedProject(null)} />
                    
                    <div className="relative w-full max-w-[1100px] max-h-[85vh] bg-[#FAF8F5] overflow-y-auto shadow-2xl rounded-sm animate-in zoom-in-95 slide-in-from-bottom-5">
                        <button 
                            className="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center border border-stone-200 rounded-full hover:bg-stone-900 hover:text-white transition-all bg-white"
                            onClick={() => setSelectedProject(null)}
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr]">
                            <div className="relative h-[300px] md:h-auto overflow-hidden">
                                <img src={selectedProject.image} className="w-full h-full object-cover grayscale" alt={selectedProject.title} />
                                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent" />
                                <div className="absolute bottom-8 left-8">
                                    <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#B8965A] mb-2 block">Case Study {selectedProject.id}</span>
                                    <h2 className={`${cormorant.className} text-5xl md:text-7xl text-white font-light leading-none`}>
                                        {selectedProject.title}
                                    </h2>
                                </div>
                            </div>

                            <div className="p-8 md:p-12 space-y-10">
                                <div>
                                    <h3 className={`${cormorant.className} text-3xl md:text-4xl italic font-light text-[#2A2520] mb-4`}>
                                        "{selectedProject.tagline}"
                                    </h3>
                                    <p className="text-lg font-light leading-relaxed text-[#6B5F52]">
                                        {selectedProject.description}
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-px bg-[#B8965A]/40" />
                                        <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#B8965A]">Strategic Pillars</span>
                                    </div>
                                    
                                    <div className="space-y-6">
                                        {selectedProject.detailedPoints.map((point, pIdx) => (
                                            <div key={pIdx} className="flex gap-5 group/item">
                                                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white border border-stone-100 rounded-lg text-[#B8965A] transition-all group-hover/item:border-[#B8965A]">
                                                    <point.Icon />
                                                </div>
                                                <div className="space-y-0.5">
                                                    <h4 className="text-[12px] font-bold tracking-[0.1em] uppercase text-[#2A2520]">
                                                        {point.label}
                                                    </h4>
                                                    <p className="text-[15px] font-light text-[#6B5F52] opacity-80 leading-snug">
                                                        {point.text}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-stone-100 flex items-center justify-between">
                                    <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-[#A09385]">ARCHIVE 2025</span>
                                    <button className="px-8 py-3 bg-[#2A2520] text-white text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-[#B8965A] transition-all">
                                        View Case Study
                                    </button>
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
                .animate-in { animation-duration: 500ms; animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1); animation-fill-mode: forwards; }
                .zoom-in-95 { animation-name: zoom-in-95; }
                .slide-in-from-bottom-5 { animation-name: slide-in-from-bottom-5; }
            `}</style>
        </section>
    );
};

export default Portfolio;



