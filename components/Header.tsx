'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-50rem mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white hover:text-gray-300 transition-colors">
            IPPAI
          </Link>
          
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link href="/membership" className="text-white hover:text-gray-300 transition-colors">
              Membership
            </Link>
            <Link href="/about" className="text-white hover:text-gray-300 transition-colors">
              About Us
            </Link>
            <Link href="/events" className="text-white hover:text-gray-300 transition-colors">
              Events
            </Link>
            <Link href="/courses" className="text-white hover:text-gray-300 transition-colors">
              Courses
            </Link>
            <Link href="/press-release" className="text-white hover:text-gray-300 transition-colors">
              Press Release
            </Link>
            <Link href="/publication" className="text-white hover:text-gray-300 transition-colors">
              Publication
            </Link>
            <Link href="/articles" className="text-white hover:text-gray-300 transition-colors">
              Articles
            </Link>
            <Link href="/image-gallery" className="text-white hover:text-gray-300 transition-colors">
              Image Gallery
            </Link>
            <Link href="/video-gallery" className="text-white hover:text-gray-300 transition-colors">
              Video Gallery
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-300 transition-colors">
              Contact Us
            </Link>
            <Link href="/careers" className="text-white hover:text-gray-300 transition-colors">
              Careers
            </Link>
          </div>

          <button
            className="lg:hidden text-white hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </nav>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-black/80 backdrop-blur-sm rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-white hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/membership" className="text-white hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Membership
              </Link>
              <Link href="/about" className="text-white hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>
                About Us
              </Link>
              <Link href="/events" className="text-white hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Events
              </Link>
              <Link href="/courses" className="text-white hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Courses
              </Link>
              <Link href="/press-release" className="text-white hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Press Release
              </Link>
              <Link href="/publication" className="text-white hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Publication
              </Link>
              <Link href="/articles" className="text-white hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Articles
              </Link>
              <Link href="/image-gallery" className="text-white hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Image Gallery
              </Link>
              <Link href="/video-gallery" className="text-white hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Video Gallery
              </Link>
              <Link href="/contact" className="text-white hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </Link>
              <Link href="/careers" className="text-white hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Careers
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}