import React, { useState } from 'react';
import { ArrowUpRight, Filter, Sparkles, Eye } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectCategory, ProjectItem } from '../types';
import { ProjectMockupVisual } from './ProjectMockupVisual';
import { ProjectModal } from './ProjectModal';

interface PortfolioProps {
  onDiscussProject: (projectId: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onDiscussProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = activeCategory === 'all' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C74B72]">
              <Sparkles className="w-3.5 h-3.5 text-[#E07A9B]" />
              <span>✦ Selected Work & Case Studies</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#49334F] tracking-tight text-balance">
              Things I've Been Working On.
            </h2>
            <p className="text-sm sm:text-base text-[#49334F]/75 font-normal">
              A curated look into my performance marketing campaigns, visual search strategies, and affiliate content initiatives.
            </p>
          </div>

          {/* Interactive Filter Tabs (Segmented control buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white/80 rounded-2xl border border-[#F8C8DC] shadow-2xs self-start md:self-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#49334F] text-white shadow-xs'
                  : 'text-[#49334F]/70 hover:text-[#49334F]'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveCategory('pinterest')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === 'pinterest'
                  ? 'bg-[#49334F] text-white shadow-xs'
                  : 'text-[#49334F]/70 hover:text-[#49334F]'
              }`}
            >
              Pinterest
            </button>
            <button
              onClick={() => setActiveCategory('meta')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === 'meta'
                  ? 'bg-[#49334F] text-white shadow-xs'
                  : 'text-[#49334F]/70 hover:text-[#49334F]'
              }`}
            >
              Meta Ads
            </button>
            <button
              onClick={() => setActiveCategory('google')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === 'google'
                  ? 'bg-[#49334F] text-white shadow-xs'
                  : 'text-[#49334F]/70 hover:text-[#49334F]'
              }`}
            >
              Google Ads
            </button>
            <button
              onClick={() => setActiveCategory('affiliate')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === 'affiliate'
                  ? 'bg-[#49334F] text-white shadow-xs'
                  : 'text-[#49334F]/70 hover:text-[#49334F]'
              }`}
            >
              Affiliate
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`group bg-white rounded-3xl p-6 border border-[#F8C8DC] shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${
                idx === 0 && activeCategory === 'all' ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div>
                {/* Visual Preview Slot */}
                <div className="mb-5 rounded-2xl overflow-hidden cursor-pointer" onClick={() => setSelectedProject(project)}>
                  <ProjectMockupVisual mockupType={project.mockupType} compact={idx !== 0 || activeCategory !== 'all'} />
                </div>

                {/* Metadata Line */}
                <div className="flex items-center justify-between text-xs font-bold mb-2">
                  <span className="text-[#C74B72] uppercase tracking-wider">
                    {project.categoryLabel}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                    project.isDraftOrPractice
                      ? 'bg-amber-100 text-amber-900 border border-amber-200'
                      : 'bg-emerald-100 text-emerald-900 border border-emerald-200'
                  }`}>
                    {project.statusBadge}
                  </span>
                </div>

                {/* Title */}
                <h3 
                  onClick={() => setSelectedProject(project)}
                  className="font-display font-bold text-xl text-[#49334F] mb-2 group-hover:text-[#C74B72] transition-colors cursor-pointer"
                >
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-[#49334F]/80 leading-relaxed mb-4">
                  {project.shortDesc}
                </p>
              </div>

              {/* View Project Interaction */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#49334F]/70">
                  Role: {project.role}
                </span>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#49334F] hover:text-[#C74B72] transition-colors py-1 cursor-pointer"
                >
                  <span>View Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Inspection Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onDiscussProject={(id) => {
            onDiscussProject(id);
          }}
        />
      </div>
    </section>
  );
};
