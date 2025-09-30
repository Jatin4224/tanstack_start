// app/components/ProjectCard.tsx
import { FaCodeFork, FaRegStar } from 'react-icons/fa6'

interface ProjectCardProps {
  url: string
  projectName: string
  language: string
  stars: number
  forks: number
}

const ProjectCard = ({
  url,
  projectName,
  language,
  stars,
  forks,
}: ProjectCardProps) => (
  <a
    className="px-6 py-5 rounded-xl bg-gradient-to-br from-gray-900 to-black shadow-md mb-6 block 
               hover:shadow-orange-500/30 hover:scale-[1.02] transition transform"
    href={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="flex justify-between items-center mb-3">
      <span className="font-semibold text-lg text-gray-100">{projectName}</span>
      <div className="flex gap-4 text-gray-300 text-sm">
        <span className="flex items-center gap-1">
          {stars} <FaRegStar />
        </span>
        <span className="flex items-center gap-1">
          {forks} <FaCodeFork />
        </span>
      </div>
    </div>
    <div>
      <span className="text-xs bg-orange-500/90 text-white px-2 py-1 rounded-full">
        {language}
      </span>
    </div>
  </a>
)

export default ProjectCard
