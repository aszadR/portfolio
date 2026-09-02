import { useEffect } from 'react';
import { X, Github, FileText, Gauge, ChevronRight, Workflow, CheckCircle2 } from 'lucide-react';
import type { Project } from '@/data/portfolio';

interface ProjectDetailsProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-ink-600/60 bg-ink-900/95 shadow-2xl animate-fade-up">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-ink-700/60 bg-ink-900/95 px-6 py-4 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-wider text-accent-400">
              {project.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-500 transition-colors hover:text-white"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white">{project.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.description}</p>

          {/* Key result */}
          {project.keyResult && (
            <div className="mt-6 flex items-center gap-4 rounded-xl border border-signal-500/20 bg-signal-500/5 p-5">
              <Gauge className="h-8 w-8 flex-shrink-0 text-signal-400" />
              <div>
                <div className="font-mono text-3xl font-bold text-signal-400">
                  {project.keyResult.value}
                </div>
                <div className="font-mono text-xs uppercase tracking-wider text-slate-500">
                  {project.keyResult.label}
                </div>
              </div>
            </div>
          )}

          {/* Flow */}
          {project.flow && (
            <div className="mt-6">
              <h4 className="font-mono text-xs uppercase tracking-wider text-slate-500">
                Semiconductor Flow
              </h4>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {project.flow.map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="rounded-md border border-accent-500/30 bg-accent-500/10 px-3 py-1.5 font-mono text-xs text-accent-300">
                      {step}
                    </span>
                    {i < project.flow!.length - 1 && (
                      <ChevronRight className="h-4 w-4 text-slate-600" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Block diagram */}
          {project.blockDiagram && (
            <div className="mt-6">
              <h4 className="font-mono text-xs uppercase tracking-wider text-slate-500">
                Block Diagram
              </h4>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {project.blockDiagram.map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="rounded-md border border-ink-600/60 bg-ink-800/50 px-3 py-1.5 font-mono text-xs text-slate-300">
                      {step}
                    </span>
                    {i < project.blockDiagram!.length - 1 && (
                      <ChevronRight className="h-4 w-4 text-slate-600" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tools */}
          <div className="mt-6">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-500">Tools</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span key={tool} className="chip">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Technical highlights */}
          <div className="mt-6">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-500">
              Technical Highlights
            </h4>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-500/70" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Note */}
          {project.note && (
            <p className="mt-6 flex items-start gap-2 rounded-lg border border-warn-500/20 bg-warn-500/5 p-4 text-xs leading-relaxed text-warn-400">
              <Workflow className="mt-0.5 h-4 w-4 flex-shrink-0" />
              {project.note}
            </p>
          )}

{/* Actions */}
<div className="mt-8 flex flex-wrap items-center gap-3 border-t border-ink-700/40 pt-6">
  <a
    href={project.githubUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="btn-ghost"
  >
    <Github className="h-4 w-4" />
    View on GitHub
  </a>

  {project.reportUrl && (
    <a
      href={project.reportUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-ghost"
    >
      <FileText className="h-4 w-4" />
      View Report
    </a>
  )}
</div>
        </div>
      </div>
    </div>
  );
}
