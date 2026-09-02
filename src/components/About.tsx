import { GraduationCap, MapPin, Cpu, Layers } from 'lucide-react';
import { profile, engineeringFocus } from '@/data/portfolio';

export default function About() {
  return (
    <section id="about" className="section-container">
      <div className="reveal">
        <span className="section-label">// About</span>
        <h2 className="section-title">About Me</h2>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-5">
        {/* Left: Bio */}
        <div className="reveal lg:col-span-3">
          <div className="card-surface p-6 md:p-8">
            <p className="text-base leading-relaxed text-slate-300">
              I am an ECE undergraduate at{' '}
              <span className="text-white">Tezpur University</span> interested in understanding the
              complete journey of a hardware design—from RTL and transistor-level circuits to
              physical implementation.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Through academic and personal projects, I have worked with{' '}
              <span className="text-accent-300">Verilog HDL</span>,{' '}
              <span className="text-accent-300">Cadence Virtuoso</span>,{' '}
              <span className="text-accent-300">SKY130 PDK</span>, SPICE simulation, IC layout and
              digital design.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              My current interests are VLSI, physical design, digital IC design and semiconductor
              implementation.
            </p>

            {/* Education card */}
            <div className="mt-6 flex flex-col gap-4 rounded-lg border border-ink-600/50 bg-ink-800/30 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-md border border-accent-500/30 bg-accent-500/10">
                  <GraduationCap className="h-4 w-4 text-accent-400" />
                </span>
                <div>
                  <div className="text-sm font-medium text-white">{profile.education.degree}</div>
                  <div className="font-mono text-xs text-slate-500">
                    {profile.education.institution} • {profile.education.period}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:flex-col sm:items-end">
                <span className="font-mono text-xs text-slate-500">CGPA</span>
                <span className="font-mono text-lg font-semibold text-accent-300">
                  {profile.education.cgpa}
                </span>
              </div>
            </div>

            {/* Location */}
            <div className="mt-4 flex items-center gap-2 font-mono text-xs text-slate-500">
              <MapPin className="h-3.5 w-3.5" />
              {profile.location}
            </div>
          </div>
        </div>

        {/* Right: Engineering Focus */}
        <div className="reveal lg:col-span-2">
          <div className="card-surface h-full p-6 md:p-8">
            <div className="flex items-center gap-2">
              <Layers className="h-4 w-4 text-accent-400" />
              <h3 className="font-mono text-sm uppercase tracking-wider text-slate-300">
                Engineering Focus
              </h3>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              {engineeringFocus.map((item, i) => (
                <div
                  key={item}
                  className="group flex items-center gap-3 rounded-lg border border-ink-600/40 bg-ink-800/30 px-4 py-3 transition-all hover:border-accent-500/40 hover:bg-ink-800/60"
                  style={{ animation: `fadeIn 0.4s ease-out ${i * 0.08}s both` }}
                >
                  <Cpu className="h-4 w-4 flex-shrink-0 text-slate-600 transition-colors group-hover:text-accent-400" />
                  <span className="text-sm text-slate-300 transition-colors group-hover:text-white">
                    {item}
                  </span>
                  <span className="ml-auto font-mono text-[10px] text-slate-600">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
