import { useState } from 'react';
import { Github, Linkedin, FileDown, ArrowRight, User, Cpu } from 'lucide-react';
import { profile, heroFlow } from '@/data/portfolio';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden circuit-bg pt-24 pb-16"
    >
      {/* Scan line effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 h-px w-full bg-gradient-to-r from-transparent via-accent-500/10 to-transparent animate-scan" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Left: Introduction (3/5 width on desktop) */}
          <div className="reveal is-visible order-2 lg:order-1 lg:col-span-3">
            {/* Name */}
            <h2 className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              {profile.name}
            </h2>
            <p className="mt-1 font-mono text-xs text-slate-600">
              {profile.role}
            </p>

            {/* Label badge */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/5 px-4 py-1.5">
              <span className="h-1.5 w-1.5 animate-blink rounded-full bg-accent-400" />
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent-300">
                ECE Undergraduate • VLSI • Digital Design
              </span>
            </div>

            {/* Main heading */}
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] text-white md:text-5xl lg:text-[3.5rem]">
              Designing from{' '}
              <span className="text-gradient glow-text">RTL</span> to{' '}
              <span className="text-gradient glow-text">Silicon.</span>
            </h1>

            {/* Supporting text */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">
              ECE undergraduate interested in understanding how digital designs evolve from RTL and
              transistor-level circuits to physical hardware.
            </p>

            {/* Secondary line */}
            <p className="mt-3 max-w-xl font-mono text-sm text-slate-500">
              Currently exploring VLSI, RTL Design, CMOS circuits, IC layout and semiconductor
              implementation flows.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-primary">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
             <a
  href={`${import.meta.env.BASE_URL}Aszadur-Rahman-CV.pdf`}
  target="_blank"
  rel="noopener noreferrer"
>
  Download CV
</a>
            </div>
          </div>

          {/* Right: Professional photo (2/5 width on desktop) */}
          <div className="reveal is-visible order-1 lg:order-2 lg:col-span-2">
            <PhotoCard />
          </div>
        </div>

        {/* Subtle semiconductor flow animation below hero content */}
        <div className="reveal is-visible mt-12 lg:mt-16">
          <SemiconductorFlowBar />
        </div>
      </div>
  </section>
  );
}

/**
 * Professional portrait card.
 * Drop a photo at /public/profile.jpg and it will display automatically.
 * Until then, a labeled placeholder is shown.
 */
function PhotoCard() {
  const [imageOk, setImageOk] = useState(true);

  return (
    <div className="relative mx-auto max-w-[420px]">
      {/* Outer frame with subtle circuit detail */}
      <div className="relative overflow-hidden rounded-2xl border border-ink-600/50 bg-ink-900/40 backdrop-blur-sm">
        {/* Photo / Placeholder */}
        <div className="relative aspect-[4/5] w-full">
          {/* The actual image — automatically shown when /public/profile.jpg exists */}
          {imageOk && (
            <img
             src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt="Aszadur Rahman — Professional Portrait"
              className="h-full w-full object-cover"
              onError={() => setImageOk(false)}
            />
          )}

          {/* Placeholder overlay (shows when image is missing) */}
          {!imageOk && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-ink-850/80">
            {/* Circuit grid border detail */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
              preserveAspectRatio="none"
              viewBox="0 0 400 500"
              fill="none"
            >
              {/* Corner circuit traces */}
              <path d="M0 20 L20 20 L20 0" stroke="#22d3ee" strokeWidth="1" />
              <path d="M400 20 L380 20 L380 0" stroke="#22d3ee" strokeWidth="1" />
              <path d="M0 480 L20 480 L20 500" stroke="#22d3ee" strokeWidth="1" />
              <path d="M400 480 L380 480 L380 500" stroke="#22d3ee" strokeWidth="1" />
              {/* Edge grid lines */}
              <line x1="0" y1="40" x2="12" y2="40" stroke="#22d3ee" strokeWidth="0.5" opacity="0.5" />
              <line x1="0" y1="60" x2="8" y2="60" stroke="#22d3ee" strokeWidth="0.5" opacity="0.5" />
              <line x1="388" y1="40" x2="400" y2="40" stroke="#22d3ee" strokeWidth="0.5" opacity="0.5" />
              <line x1="392" y1="60" x2="400" y2="60" stroke="#22d3ee" strokeWidth="0.5" opacity="0.5" />
              <line x1="40" y1="500" x2="40" y2="488" stroke="#22d3ee" strokeWidth="0.5" opacity="0.5" />
              <line x1="60" y1="500" x2="60" y2="492" stroke="#22d3ee" strokeWidth="0.5" opacity="0.5" />
              <line x1="340" y1="500" x2="340" y2="488" stroke="#22d3ee" strokeWidth="0.5" opacity="0.5" />
              <line x1="360" y1="500" x2="360" y2="492" stroke="#22d3ee" strokeWidth="0.5" opacity="0.5" />
              {/* Nodes */}
              <circle cx="20" cy="20" r="2" fill="#22d3ee" />
              <circle cx="380" cy="20" r="2" fill="#22d3ee" />
              <circle cx="20" cy="480" r="2" fill="#22d3ee" />
              <circle cx="380" cy="480" r="2" fill="#22d3ee" />
            </svg>

            {/* Placeholder content */}
            <div className="flex flex-col items-center gap-3">
              <span className="flex h-16 w-16 items-center justify-center rounded-xl border border-accent-500/30 bg-accent-500/10">
                <User className="h-7 w-7 text-accent-400" />
              </span>
              <div className="text-center">
                <div className="font-mono text-sm font-medium uppercase tracking-widest text-slate-400">
                  Your Photo
                </div>
                <div className="mt-1 font-mono text-[10px] text-slate-600">
                  Place image at /public/profile.jpg
                </div>
              </div>
            </div>
          </div>
          )}
        </div>

        {/* Bottom info bar */}
        <div className="flex items-center justify-between border-t border-ink-700/50 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-blink rounded-full bg-signal-400" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
              {profile.location}
            </span>
          </div>
          <span className="font-mono text-[10px] text-slate-600">
            {profile.education.period}
          </span>
        </div>
      </div>

      {/* Subtle outer glow */}
      <div className="pointer-events-none absolute -inset-2 -z-10 rounded-3xl bg-accent-500/5 blur-2xl" />
    </div>
  );
}

/**
 * Minimal horizontal semiconductor flow bar.
 * Sits below the hero content — subtle, not overpowering.
 */
function SemiconductorFlowBar() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex w-full max-w-4xl flex-wrap items-center justify-center gap-2 md:gap-3">
        {heroFlow.map((step, i) => (
          <div key={step.label} className="flex items-center gap-2 md:gap-3">
            <div className="flex flex-col items-center gap-1">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent-500/20 bg-ink-800/60 transition-all hover:border-accent-500/40 hover:bg-ink-800/90"
                style={{ animation: `glow 4s ease-in-out infinite ${i * 0.5}s` }}
              >
                <span className="font-mono text-[10px] font-semibold text-accent-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <span className="font-mono text-[10px] font-medium text-slate-400">{step.label}</span>
              <span className="font-mono text-[9px] text-slate-600">{step.sub}</span>
            </div>
            {i < heroFlow.length - 1 && (
              <div className="mb-6 flex items-center">
                <div className="h-px w-4 bg-gradient-to-r from-accent-500/40 to-accent-500/10 md:w-6" />
                <ArrowRight className="h-3 w-3 text-slate-600" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-slate-600">
        <Cpu className="h-3 w-3" />
        Semiconductor Design Flow
      </div>
    </div>
  );
}
