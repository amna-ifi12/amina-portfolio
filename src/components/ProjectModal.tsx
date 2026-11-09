import React, { useEffect } from 'react';
import { X, Check, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { ProjectItem } from '../types';
import { ProjectMockupVisual } from './ProjectMockupVisual';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onDiscussProject: (projectId: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onDiscussProject
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#49334F]/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-[#FFF9F2] rounded-3xl max-w-3xl w-full border border-[#F8C8DC] shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-white border-b border-[#F8C8DC]/60 flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-bold text-[#49334F]/70 uppercase tracking-wider">
                {project.categoryLabel}
              </span>
              <span className="text-gray-300">·</span>
              <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                project.isDraftOrPractice 
                  ? 'bg-amber-100 text-amber-900 border border-amber-200' 
                  : 'bg-emerald-100 text-emerald-900 border border-emerald-200'
              }`}>
                {project.statusBadge}
              </span>
            </div>

            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#49334F] tracking-tight">
              {project.title}
            </h3>

            <div className="text-xs text-[#49334F]/75 mt-1 font-medium">
              Role: <strong className="text-[#49334F]">{project.role}</strong>
              {project.achievement && (
                <> · Highlight: <span className="text-[#C74B72] font-bold">{project.achievement}</span></>
              )}
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#49334F]/70 hover:text-[#49334F] hover:bg-black/5 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Interactive Mockup Component */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#49334F]/70 mb-2">
              Campaign & Visual Architecture:
            </div>
            <ProjectMockupVisual mockupType={project.mockupType} />
          </div>

          {/* Project Overview */}
          <div>
            <h4 className="font-display font-bold text-base text-[#49334F] mb-1.5">
              Project Overview
            </h4>
            <p className="text-sm text-[#49334F]/85 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Strategy Points */}
          <div>
            <h4 className="font-display font-bold text-base text-[#49334F] mb-2.5">
              Strategic Approach & Execution
            </h4>
            <div className="space-y-2">
              {project.strategyPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#49334F]/85">
                  <div className="w-5 h-5 rounded-full bg-[#DCD0FF]/60 flex items-center justify-center text-[#49334F] font-bold text-[10px] shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Authentic Screenshots Gallery if available */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <h4 className="font-display font-bold text-base text-[#49334F]">
                  Original Verified Analytics Screenshots
                </h4>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Real Dashboard Captures
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.screenshots.map((shot, sIdx) => (
                  <div key={sIdx} className="bg-white rounded-2xl border border-[#F8C8DC] overflow-hidden shadow-xs hover:shadow-md transition-shadow">
                    <div className="relative group overflow-hidden bg-slate-100 aspect-[16/10] flex items-center justify-center">
                      <img 
                        src={shot.url} 
                        alt={shot.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                      <a 
                        href={shot.url} 
                        target="_blank" 
                        rel="noreferrer noopener"
                        className="absolute bottom-2 right-2 bg-white/95 hover:bg-white text-[#49334F] text-[10px] font-bold px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1 border border-gray-200 cursor-pointer"
                      >
                        View Full Size ↗
                      </a>
                    </div>
                    <div className="p-3.5">
                      <div className="font-display font-bold text-xs text-[#49334F]">
                        {shot.title}
                      </div>
                      <div className="text-[11px] text-[#49334F]/70 mt-1 leading-snug">
                        {shot.caption}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Deliverables & Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white border border-[#F8C8DC]">
              <div className="text-xs font-bold text-[#49334F] uppercase tracking-wider mb-2">
                Key Deliverables
              </div>
              <div className="space-y-1.5">
                {project.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#49334F]/80">
                    <Check className="w-3.5 h-3.5 text-[#E07A9B] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#DCD0FF]">
              <div className="text-xs font-bold text-[#49334F] uppercase tracking-wider mb-2">
                Project Metrics & Attributes
              </div>
              <div className="space-y-1.5">
                {project.visualHighlights.map((hl, idx) => (
                  <div key={idx} className="text-xs flex items-baseline justify-between border-b border-gray-100 pb-1">
                    <span className="text-[#49334F]/60">{hl.label}:</span>
                    <span className="font-semibold text-[#49334F]">{hl.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 sm:p-6 bg-white border-t border-[#F8C8DC]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#49334F]/60 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Documented according to Amina's verified work portfolio</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-full border border-gray-300 text-xs font-semibold text-[#49334F] hover:bg-gray-100 transition-colors w-full sm:w-auto"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onDiscussProject(project.id);
              }}
              className="px-5 py-2.5 rounded-full bg-[#49334F] hover:bg-[#38263D] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all hover:shadow-md w-full sm:w-auto cursor-pointer"
            >
              <span>Discuss Similar Project</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#F8C8DC]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
