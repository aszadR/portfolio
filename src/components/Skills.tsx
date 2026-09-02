import { Cpu, CircuitBoard, Code2, Wifi, Wrench } from 'lucide-react';
import { skillCategories } from '@/data/portfolio';

const icons = [Cpu, CircuitBoard, Code2, Wifi, Wrench];

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <div className="reveal">
        <span className="section-label">// Skills</span>
        <h2 className="section-title">Technical Skills</h2>
        <p className="mt-4 max-w-2xl text-sm text-slate-500">
          Organized by domain — the tools and languages I use across the hardware design flow.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div
              key={cat.title}
              className="reveal card-surface p-6 transition-all hover:border-accent-500/20"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-md border border-accent-500/30 bg-accent-500/10">
                  <Icon className="h-4 w-4 text-accent-400" />
                </span>
                <h3 className="font-mono text-sm font-medium uppercase tracking-wider text-slate-200">
                  {cat.title}
                </h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
