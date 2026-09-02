import { Briefcase } from 'lucide-react';
import { experiences } from '@/data/portfolio';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="section-container">
      <div className="reveal">
        <span className="section-label">// Experience</span>
        <h2 className="section-title">Experience &amp; Leadership</h2>
        <p className="mt-4 max-w-2xl text-sm text-slate-500">
          Leadership and coordination roles alongside my academic work.
        </p>
      </div>

      <div className="mt-12 max-w-3xl">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-accent-500/40 via-ink-600 to-transparent" />

          {experiences.map((exp, i) => (
            <div key={i} className="reveal relative mb-8 pl-14 last:mb-0">
              {/* Node */}
              <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-accent-500/30 bg-ink-850">
                <Briefcase className="h-3.5 w-3.5 text-accent-400" />
              </div>

              <div className="card-surface p-5 transition-all hover:border-accent-500/20">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-base font-medium text-white">{exp.role}</h3>
                  <span className="font-mono text-xs text-accent-400">{exp.period}</span>
                </div>
                <div className="mt-1 font-mono text-xs text-slate-500">{exp.org}</div>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
