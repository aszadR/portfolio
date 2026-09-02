import { Mail, Linkedin, Github, ArrowRight, MapPin } from 'lucide-react';
import { profile } from '@/data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 circuit-bg" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <div className="reveal">
          <span className="section-label">// Contact</span>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">
            Let's Build{' '}
            <span className="text-gradient glow-text">Hardware.</span>
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-base leading-relaxed text-slate-400">
            I'm interested in VLSI, digital design, semiconductor implementation and opportunities
            to learn through practical engineering work.
          </p>
        </div>

        <div className="reveal mt-10 flex flex-col items-center gap-4">
          <a href={profile.socials.email} className="btn-primary">
            <Mail className="h-4 w-4" />
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </a>

          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <a
              href={profile.socials.email}
              className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-accent-300"
            >
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-accent-300"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-accent-300"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>

          <div className="mt-4 flex items-center gap-2 font-mono text-xs text-slate-600">
            <MapPin className="h-3 w-3" />
            {profile.location}
          </div>
        </div>
      </div>
    </section>
  );
}
