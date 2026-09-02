import { Github, Linkedin, Mail, Cpu } from 'lucide-react';
import { profile } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-ink-700/50 bg-ink-950/80">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="flex flex-col items-center gap-2 md:items-start">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-md border border-accent-500/40 bg-accent-500/10">
                <Cpu className="h-3.5 w-3.5 text-accent-400" />
              </span>
              <span className="font-mono text-sm font-semibold tracking-wider text-white">
                {profile.name.toUpperCase()}
              </span>
            </div>
            <span className="font-mono text-xs text-slate-500">
              ECE Undergraduate • VLSI • Digital Design
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 transition-colors hover:text-accent-300"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 transition-colors hover:text-accent-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={profile.socials.email}
              className="text-slate-500 transition-colors hover:text-accent-300"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-ink-700/40 pt-6 text-center">
          <p className="font-mono text-xs text-slate-600">
            © 2026 {profile.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
