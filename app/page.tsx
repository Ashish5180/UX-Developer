import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PersonalBranding from '@/components/PersonalBranding';
import AboutMe from '@/components/AboutMe';
import Portfolio from '@/components/Portfolio';
import Expertise from '@/components/Expertise';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] selection:bg-violet-100 selection:text-violet-900">
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Personal Branding Section */}
      <PersonalBranding />

      {/* About Me Section */}
      <AboutMe />

      {/* Portfolio Section */}
      <Portfolio />

      {/* Expertise Section */}
      <Expertise />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
