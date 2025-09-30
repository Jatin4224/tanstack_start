// app/routes/contact.tsx
import { createFileRoute } from '@tanstack/react-router'

function Contact() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow-md bg-gray-900 text-gray-50">
      <h1 className="text-2xl font-semibold mb-4 text-orange-400">
        Contact Me
      </h1>

      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="mt-1 w-full border border-gray-700 rounded px-3 py-2 bg-gray-800 text-gray-50 focus:outline-none focus:ring focus:ring-orange-400"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-medium">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Write me a message..."
            className="mt-1 w-full border border-gray-700 rounded px-3 py-2 bg-gray-800 text-gray-50 focus:outline-none focus:ring focus:ring-orange-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-gray-900 font-medium py-2 rounded hover:bg-orange-600 transition"
        >
          Send
        </button>
      </form>
    </div>
  )
}

// ✅ Now Contact is defined before being passed in
export const Route = createFileRoute('/contact')({
  component: Contact,
})
