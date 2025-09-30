// app/routes/projects.tsx
import { createServerFn } from '@tanstack/react-start'
import { createFileRoute } from '@tanstack/react-router'
import ProjectCard from '../components/ProjectCard'

interface Project {
  name: string
  html_url: string
  language: string
  stargazers_count: number
  forks_count: number
}

const getProjects = createServerFn({ method: 'GET' }).handler(async () => {
  const res = await fetch(
    'https://api.github.com/users/hiteshchoudhary/repos?sort=updated&per_page=8',
    {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
        accept: 'application/vnd.github+json',
      },
    },
  )
  return res.json()
})

export const Route = createFileRoute('/projects')({
  component: Projects,
  loader: () => getProjects(),
})

function Projects() {
  const projects: Project[] = Route.useLoaderData()
  return (
    <div className="px-6 sm:px-10 py-10 bg-gray-900 min-h-screen text-gray-50">
      <h2 className="text-3xl text-orange-500 font-semibold mb-6">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map(
          ({ name, html_url, language, stargazers_count, forks_count }) => (
            <ProjectCard
              key={name}
              projectName={name}
              url={html_url}
              language={language || 'N/A'}
              stars={stargazers_count}
              forks={forks_count}
            />
          ),
        )}
      </div>
    </div>
  )
}

export default Projects
