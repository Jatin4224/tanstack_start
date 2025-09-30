// app/components/Hero.tsx
import { FaXTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa6'

const Hero = () => (
  <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-50 py-12 px-6 flex gap-10  items-center flex-col sm:flex-row text-center sm:text-left shadow-lg">
    <div>
      <img
        src="https://videos.openai.com/vg-assets/assets%2Ftask_01k5v8ghv6fd9srfby35nxg6kt%2F1758630413_img_1.webp?st=2025-09-30T05%3A22%3A32Z&se=2025-10-06T06%3A22%3A32Z&sks=b&skt=2025-09-30T05%3A22%3A32Z&ske=2025-10-06T06%3A22%3A32Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8b872fb2-b44b-4c1d-9ff6-1d4509d19e6e&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=tbe6TNb1qJW5kVCp0z3TpZaNS6b%2FLsP0u4IQJARn3ys%3D&az=oaivgprodscus"
        alt="Profile"
        className="w-36 h-36 rounded-full object-cover mx-auto sm:mx-0 border-4 border-orange-500 shadow-md"
      />
    </div>
    <div>
      <span className="text-4xl font-bold mb-3 block text-orange-500">
        Hitesh chaudhary
      </span>
      <p className="mb-6 text-gray-300 max-w-lg">
        I make coding videos on youtube and for courses. My youtube channel
        explains my work more.
      </p>
      <div className="text-2xl flex gap-5 justify-center sm:justify-start">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400 transition"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400 transition"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  </div>
)

export default Hero
