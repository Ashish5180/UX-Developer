'use client';

import { useState, useEffect } from 'react';
import { Cormorant_Garamond, Jost } from 'next/font/google';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '600'], style: ['normal', 'italic'] });
const jost = Jost({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600'] });

const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'about', label: 'Identity' },
    { id: 'portfolio', label: 'Vault' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('overview');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) setActiveSection(entry.target.id);
            });
        };

        const observerOptions = { threshold: 0.5, rootMargin: "-10% 0px -40% 0px" };
        const observer = new IntersectionObserver(observerCallback, observerOptions);

        navItems.forEach(item => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    const handleNavItemClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav 
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 px-6 md:px-12 ${
                isScrolled ? 'py-4 bg-[#FAF8F5]/80 backdrop-blur-xl border-b border-stone-200/50' : 'py-8 bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Branding */}
                <div 
                    className="cursor-pointer group flex flex-col"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <span className={`${cormorant.className} text-2xl md:text-3xl text-[#2A2520] tracking-tighter transition-all group-hover:text-[#B8965A]`}>
                        Nandini <span className="italic font-normal">Yadav.</span>
                    </span>
                    <span className="text-[9px] font-bold tracking-[0.6em] uppercase text-stone-400 mt-0.5">Interface Specialist</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    <div className="flex items-center gap-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleNavItemClick(item.id)}
                                className={`${jost.className} group relative text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${
                                    activeSection === item.id ? 'text-[#2A2520]' : 'text-stone-400 hover:text-[#2A2520]'
                                }`}
                            >
                                {item.label}
                                <span className={`absolute -bottom-2 left-0 h-[1px] bg-[#B8965A] transition-all duration-500 ${
                                    activeSection === item.id ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-40'
                                }`} />
                            </button>
                        ))}
                    </div>

                    <div className="h-4 w-px bg-stone-200" />

                    <button 
                        onClick={() => handleNavItemClick('contact')}
                        className={`${jost.className} px-8 py-3 bg-[#2A2520] text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#B8965A] transition-all shadow-xl shadow-black/10`}
                    >
                        Enquire
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button 
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <div className={`h-0.5 w-6 bg-[#2A2520] transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <div className={`h-0.5 w-6 bg-[#2A2520] transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                    <div className={`h-0.5 w-6 bg-[#2A2520] transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-[#FAF8F5] z-[90] transition-all duration-700 flex flex-col items-center justify-center gap-8 ${
                isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
            }`}>
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => handleNavItemClick(item.id)}
                        className={`${cormorant.className} text-5xl italic text-[#2A2520] hover:text-[#B8965A] transition-all`}
                    >
                        {item.label}
                    </button>
                ))}
                <button 
                    onClick={() => handleNavItemClick('contact')}
                    className={`${jost.className} mt-8 px-12 py-5 bg-[#2A2520] text-white text-xs font-bold uppercase tracking-[0.4em] shadow-2xl shadow-black/20`}
                >
                    Get in Touch
                </button>
            </div>
        </nav>
    );
};

export default Navbar;


