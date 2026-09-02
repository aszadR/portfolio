import { ArrowDown } from 'lucide-react';
import { journeySteps } from '@/data/portfolio';

export default function EngineeringJourney() {
  return (
    <section id="journey" className="relative overflow-hidden py-20 md:py-28">
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0 circuit-bg" />

      <div className="relative mx-auto max-w-4xl px-6">
        <div className="reveal text-center">
          <span className="section-label">// Learning Path</span>
          <h2 className="section-title">My Hardware Journey</h2>
          <p className="mt-4 text-sm text-slate-500">
            The direction of my learning — from logic gates to physical design.
          </p>
        </div>

        <div className="mt-14 flex flex-col items-center">
          {journeySteps.map((step, i) => (
            <div key={step.label} className="reveal flex flex-col items-center">
              <div className="group relative rounded-xl border border-ink-600/50 bg-ink-850/60 px-6 py-4 backdrop-blur-sm transition-all hover:border-accent-500/40 hover:shadow-[0_0_24px_-8px_rgba(34,211,238,0.3)]">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold text-accent-400">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-base font-medium text-white">{step.label}</span>
                </div>
                <p className="mt-1.5 pl-8 text-xs text-slate-500">{step.desc}</p>

                {/* Glow dot */}
                <span
                  className="absolute -left-1.5 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-accent-400"
                  style={{ animation: `glow 3s ease-in-out infinite ${i * 0.4}s` }}
                />
              </div>

              {i < journeySteps.length - 1 && (
                <div className="flex h-10 items-center">
                  <ArrowDown className="h-4 w-4 animate-pulse-slow text-slate-600" />
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="reveal mt-10 text-center font-mono text-xs text-slate-600">
          // Represents learning direction, not a completed industrial tapeout flow
        </p>
      </div>
    </section>
  );
}
