import { Award, Calendar, Building2 } from 'lucide-react';
import { certifications } from '@/data/portfolio';

export default function CertificationCard() {
  return (
    <section id="certifications" className="section-container">
      <div className="reveal">
        <span className="section-label">// Certifications</span>
        <h2 className="section-title">Certifications &amp; Training</h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {certifications.map((cert, i) => (
          <div
            key={i}
            className="reveal card-surface p-6 transition-all hover:border-accent-500/20 hover:shadow-[0_0_24px_-10px_rgba(34,211,238,0.2)]"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-accent-500/30 bg-accent-500/10">
                <Award className="h-5 w-5 text-accent-400" />
              </span>
              <div className="flex-1">
                <h3 className="text-sm font-medium leading-snug text-white">{cert.title}</h3>
                <div className="mt-3 flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 font-mono text-xs text-slate-500">
                    <Building2 className="h-3 w-3" />
                    {cert.issuer}
                  </div>
                  <div className="flex items-center gap-2 font-mono text-xs text-accent-400">
                    <Calendar className="h-3 w-3" />
                    {cert.year}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
