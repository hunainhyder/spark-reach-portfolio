"use client"

import { useEffect, useState, useRef } from "react"
import { Zap, Users, Lightbulb } from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const values = [
    { icon: Zap, title: "Innovation", description: "Cutting-edge solutions for modern challenges" },
    { icon: Users, title: "Collaboration", description: "Team-driven approach to your success" },
    { icon: Lightbulb, title: "Creativity", description: "Bold ideas that drive measurable results" },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 tech-divider"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <h2 className="text-5xl sm:text-6xl font-heading font-black mb-4 text-white text-center leading-tight">
            Who We <span className="neon-text">Are</span>
          </h2>

          <p className="text-center text-gray-400 text-lg max-w-2xl mx-auto mb-16 font-body">
            Spark Reach Media is a creative digital marketing and technology agency helping brands grow, connect, and
            convert.
          </p>

          <div className="glass rounded-2xl p-8 sm:p-12 mb-16 border border-accent/20 hover:border-accent/40 transition-all duration-300">
            <p className="text-white text-lg leading-relaxed mb-6 font-body">
              We specialize in digital marketing, web development, branding, and automation solutions combining
              creativity and strategy to deliver measurable business growth.
            </p>

            <p className="text-white text-lg leading-relaxed font-body">
              We believe in <span className="neon-text font-semibold">innovation, performance, and creativity</span> —
              the pillars that drive every project we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="group glass rounded-xl p-8 border border-accent/20 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 cursor-pointer"
                  style={{
                    animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 100}ms forwards` : "none",
                    opacity: isVisible ? 1 : 0,
                  }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 group-hover:shadow-lg group-hover:shadow-accent/30 transition-all duration-300">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-2 text-center">{value.title}</h3>
                  <p className="text-gray-400 text-center font-body">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
