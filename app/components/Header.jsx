'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = ['about', 'experience', 'projects', 'contact']

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[1200px] flex justify-between items-center px-8 py-4 bg-black/85 backdrop-blur-md rounded-full z-[1000]">
      
      {/* Logo */}
      <a href="#" className="text-white text-2xl font-semibold transition-transform duration-300 hover:scale-105">
        Samuel Deresa
      </a>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-8">
        {links.map((id) => (
          <li key={id}>
            <a href={`#${id}`} className="text-white font-normal nav-underline">
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      {/* Visit Button */}
      <a
        href="https://github.com/samideresa-web"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:block px-6 py-3 rounded-full font-medium text-white gradient-bg transition-transform duration-300 hover:scale-105 cursor-pointer"
      >
        Visit Github
      </a>

      {/* Mobile Menu Icon */}
      <i
        className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'} text-white text-2xl md:hidden cursor-pointer`}
        onClick={() => setMenuOpen(!menuOpen)}
      />

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="absolute top-[110%] left-0 right-0 bg-black/95 rounded-3xl flex flex-col gap-4 px-8 py-6 md:hidden">
          {links.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="text-white text-lg font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-full text-white gradient-bg font-medium"
            >
              Visit Github
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
