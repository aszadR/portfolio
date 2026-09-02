import { Github, ArrowUpRight, ChevronRight, Cpu, Gauge, Workflow } from 'lucide-react';
import type { Project } from '@/data/portfolio';

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: () => void;
}

export default function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  return (
    <div
      className="reveal group relative flex flex-col overflow-hidden rounded-xl border border-ink-600/50 bg-ink-850/50 backdrop-blur-sm transition-all duration-300 hover:border-accent-500/30 hover:shadow-[0_0_40px_-12px_rgba(34,211,238,0.25)]"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-ink-700/50 px-5 py-3">
        <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
          {project.category}
        </span>
        <span className="font-mono text-[11px] text-slate-600">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        {/* Title */}
        <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-accent-200">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.description}</p>

        {/* Key result badge */}
        {project.keyResult && (
          <div className="mt-4 flex items-center gap-3 rounded-lg border border-signal-500/20 bg-signal-500/5 p-3">
            <Gauge className="h-5 w-5 flex-shrink-0 text-signal-400" />
            <div>
              <div className="font-mono text-xl font-bold text-signal-400">
                {project.keyResult.value}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                {project.keyResult.label}
              </div>
            </div>
          </div>
        )}

        {/* Flow visual */}
        {project.flow && (
          <div className="mt-4">
            <div className="flex flex-wrap items-center gap-1.5">
              {project.flow.map((step, i) => (
                <div key={step} className="flex items-center gap-1.5">
                  <span className="rounded border border-accent-500/20 bg-accent-500/5 px-2 py-1 font-mono text-[10px] text-accent-300">
                    {step}
                  </span>
                  {i < project.flow!.length - 1 && (
                    <ChevronRight className="h-3 w-3 text-slate-600" />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Block diagram */}
        {project.blockDiagram && (
          <div className="mt-4">
            <div className="flex flex-wrap items-center gap-1.5">
              {project.blockDiagram.map((step, i) => (
                <div key={step} className="flex items-center gap-1.5">
                  <span className="rounded border border-ink-600/60 bg-ink-800/50 px-2 py-1 font-mono text-[10px] text-slate-300">
                    {step}
                  </span>
                  {i < project.blockDiagram!.length - 1 && (
                    <ChevronRight className="h-3 w-3 text-slate-600" />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tools */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span key={tool} className="chip">
              {tool}
            </span>
          ))}
        </div>

        {/* Note */}
        {project.note && (
          <p className="mt-4 flex items-start gap-2 rounded-md border border-warn-500/20 bg-warn-500/5 p-3 text-xs text-warn-400">
            <Workflow className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
            {project.note}
          </p>
        )}

        {/* Actions */}
        <div className="mt-6 flex items-center gap-3 border-t border-ink-700/40 pt-4">
          <button
            onClick={onOpen}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-300 transition-colors hover:text-accent-200"
          >
            View Project
            <ArrowUpRight className="h-4 w-4" />
          </button>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-white"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Corner accent */}
      <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 overflow-hidden">
        <div className="absolute right-0 top-0 h-px w-12 bg-gradient-to-l from-accent-500/40 to-transparent" />
        <div className="absolute right-0 top-0 h-12 w-px bg-gradient-to-b from-accent-500/40 to-transparent" />
      </div>
    </div>
  );
}
