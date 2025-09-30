// app/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router'
import Hero from '../components/Hero'
import SkillBox from '../components/SkillBox'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="px-6 sm:px-10 py-10 bg-gray-900 min-h-screen text-gray-50">
      <Hero />

      <section className="mt-10">
        <h2 className="text-2xl text-orange-500 font-semibold mb-3">
          Languages
        </h2>
        <div className="mt-2.5 flex flex-wrap gap-3">
          <SkillBox>HTML</SkillBox>
          <SkillBox>CSS</SkillBox>
          <SkillBox>JavaScript</SkillBox>
          <SkillBox>TypeScript</SkillBox>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl text-orange-500 font-semibold mb-3">Tools</h2>
        <div className="mt-2.5 flex flex-wrap gap-3">
          <SkillBox>React</SkillBox>
          <SkillBox>GraphQL</SkillBox>
          <SkillBox>Node.js</SkillBox>
          <SkillBox>Socket.io</SkillBox>
          <SkillBox>Next.js/Remix</SkillBox>
        </div>
      </section>
    </div>
  )
}
