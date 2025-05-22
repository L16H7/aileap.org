import Link from "next/link"
import { Twitter, Linkedin, Github, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-4">
    
        <div className="border-t border-gray-800 pt-2 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} AI Leap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
