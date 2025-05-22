"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-900">AI Leap</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#founders" className="text-gray-700 hover:text-gray-900 transition-colors">
              Founders
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">
              Research
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link
              href="#founders"
              className="block text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Founders
            </Link>
            <Link
              href="#about"
              className="block text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Research
            </Link>
            <Link
              href="#contact"
              className="block text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button variant="default" className="w-full">
              Join Our Newsletter
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
