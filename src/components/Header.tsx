// app/components/Header.tsx
import { Link } from '@tanstack/react-router'

const Header = () => (
  <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
    <div className="max-w-6xl mx-auto flex justify-between items-center px-8 py-4">
      <h1 className="text-2xl font-bold text-orange-500"></h1>
      <ul className="flex gap-6 text-gray-400 font-medium">
        <li>
          <Link to="/" className="hover:text-orange-400 transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-orange-400 transition">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-orange-400 transition">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </header>
)

export default Header
