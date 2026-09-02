import { Github, ArrowUpRight, FolderGit2 } from 'lucide-react';
import { profile, repos } from '@/data/portfolio';

export default function GitHubSection() {
  return (
    <section id="github" className="section-container">
      <div className="reveal">
        <span className="section-label">// GitHub</span>
        <h2 className="section-title">Code, Experiments &amp; Hardware Projects</h2>
        <p className="mt-4 max-w-2xl text-sm text-slate-500">
          Open-source hardware projects, RTL experiments, and EDA tool workflows.
        </p>
      </div>

      <div className="reveal mt-8">
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          <Github className="h-4 w-4" />
          Visit GitHub Profile
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo, i) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal group card-surface flex flex-col p-5 transition-all hover:border-accent-500/30 hover:shadow-[0_0_24px_-10px_rgba(34,211,238,0.2)]"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-8 w-8 items-center justify-center rounded-md border border-ink-600/60 bg-ink-800/50">
                <FolderGit2 className="h-4 w-4 text-slate-400 transition-colors group-hover:text-accent-400" />
              </span>
              <ArrowUpRight className="h-4 w-4 text-slate-600 transition-colors group-hover:text-accent-400" />
            </div>

            <h3 className="mt-4 font-mono text-sm font-medium text-white transition-colors group-hover:text-accent-200">
              {repo.name}
            </h3>
            <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-500">
              {repo.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {repo.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-ink-600/60 bg-ink-800/40 px-2 py-0.5 font-mono text-[10px] text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
