import { useScrollReveal } from '@/hooks/useScrollReveal';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import EngineeringJourney from '@/components/EngineeringJourney';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import CertificationCard from '@/components/CertificationCard';
import GitHubSection from '@/components/GitHubSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <EngineeringJourney />
        <Projects />
        <Skills />
        <ExperienceTimeline />
        <CertificationCard />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
