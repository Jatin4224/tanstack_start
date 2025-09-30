// app/components/SkillBox.tsx
interface SkillBoxProps {
  children?: React.ReactNode
}

const SkillBox = ({ children }: SkillBoxProps) => (
  <span
    className="px-4 py-2 text-orange-500 bg-gray-900 rounded-full shadow-sm 
                   hover:bg-orange-500 hover:text-gray-900 transition cursor-default"
  >
    {children}
  </span>
)

export default SkillBox
