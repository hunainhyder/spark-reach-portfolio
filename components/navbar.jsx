"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navbar({ isScrolled }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-accent/20 shadow-lg shadow-accent/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="#" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent/70 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-accent/50 transition-all duration-300 font-heading font-bold">
              <Image src={"/logo.png"} width={200} height={200} alt="Spark Reach Media Logo" />
            </div>
            <span className="text-lg font-bold hidden sm:inline bg-gradient-to-r from-white to-accent bg-clip-text text-transparent font-heading">
              Spark Reach
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-accent neon-text-hover transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-transparent group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* CTA Button and Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <a href="#contact">
              <button className="hidden sm:block px-6 py-2 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground font-medium rounded-lg hover:shadow-lg hover:shadow-accent/60 hover:scale-105 transition-all duration-300 font-heading text-sm">
                Get a Quote
              </button>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-accent/10 hover:text-accent transition-all duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-accent/20 bg-background/50 backdrop-blur-sm animate-fade-in-up">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="w-full mx-4 my-2 px-4 py-2 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground font-medium rounded-lg font-heading text-sm">
              Get a Quote
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
