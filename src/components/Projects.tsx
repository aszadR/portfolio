import { useState } from 'react';
import { FolderGit2 } from 'lucide-react';
import { projects, type Project } from '@/data/portfolio';
import ProjectCard from './ProjectCard';
import ProjectDetails from './ProjectDetails';

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-container">
      <div className="reveal">
        <span className="section-label">// Projects</span>
        <h2 className="section-title">Technical Projects</h2>
        <p className="mt-4 max-w-2xl text-sm text-slate-500">
          Device-level VLSI work, RTL design, and embedded systems — each project reflects a stage
          in the RTL-to-silicon journey.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            onOpen={() => setSelected(project)}
          />
        ))}
      </div>

      <ProjectDetails project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
