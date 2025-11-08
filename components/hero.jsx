"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState([])

  useEffect(() => {
    setIsVisible(true)
    const generatedParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 0.5,
    }))
    setParticles(generatedParticles)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen bg-background flex items-center justify-center overflow-hidden pt-16"
    >
      <div
        className="absolute top-20 right-20 w-96 h-96 bg-accent/8 rounded-full blur-3xl animate-float"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: "transform 0.3s ease-out",
        }}
      ></div>
      <div
        className="absolute bottom-32 left-10 w-80 h-80 bg-accent/4 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-accent rounded-full animate-float"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: 0.3,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,200,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,200,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30"></div>

      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-accent/5 via-accent/2 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-heading font-black tracking-tight mb-6 text-white leading-tight">
            Ignite Your <span className="inline-block neon-text animate-pulse">Brand</span> Presence
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed font-body">
            Digital marketing, branding, and technology solutions designed for growth. We help brands connect, engage,
            and convert.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="px-8 py-4 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground font-semibold rounded-xl hover:shadow-2xl hover:shadow-accent/60 hover:scale-110 transition-all duration-300 flex items-center gap-2 group font-heading uppercase text-sm tracking-wide hover:-translate-y-1 active:translate-y-1 border border-accent/50">
              Work With Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>

            <button className="px-8 py-4 border-2 border-accent text-accent font-semibold rounded-xl hover:bg-accent/15 hover:shadow-lg hover:shadow-accent/40 transition-all duration-300 font-heading uppercase text-sm tracking-wide hover:border-accent/100">
              View Services
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center gap-1">
            <div className="w-1 h-12 bg-gradient-to-b from-accent to-transparent rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
