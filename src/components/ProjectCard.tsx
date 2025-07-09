import React from 'react';

interface ProjectCardProps {
  name: string;
  githubUrl: string;
  projectUrl: string;
  imageUrl?: string;
  description: string;
}

const placeholder =
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80';

export const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  githubUrl,
  projectUrl,
  imageUrl,
  description,
}) => {
  return (
    <div className="mx-auto mb-8 flex w-full max-w-3xl flex-col overflow-hidden rounded-xl bg-gray-900 shadow-lg">
      <div className="relative w-full">
        <img
          src={imageUrl || placeholder}
          alt={name}
          className="h-32 w-full object-cover md:h-40"
        />
        <div className="pointer-events-none absolute left-0 top-0 flex h-full w-full items-center justify-center">
          <span className="whitespace-pre rounded bg-black/70 px-4 py-2 font-mono text-2xl font-bold text-yellow-400">
            {name}
          </span>
        </div>
      </div>
      <div className="flex w-full flex-col justify-center gap-4 p-6">
        <div className="rounded-lg bg-gray-800 p-6 font-mono text-lg text-white">
          {description}
        </div>
        <div className="mt-4 flex flex-wrap justify-end gap-4">
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border-2 border-blue-400 bg-gray-900 px-4 py-2 font-mono font-semibold text-blue-400 shadow-lg transition-colors hover:bg-blue-400 hover:text-gray-900"
          >
            Live Project
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border-2 border-purple-400 bg-gray-900 px-4 py-2 font-mono font-semibold text-purple-400 shadow-lg transition-colors hover:bg-purple-400 hover:text-gray-900"
          >
            See the code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
