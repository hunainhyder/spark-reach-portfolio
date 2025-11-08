"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowRight } from "lucide-react"

export default function Portfolio() {
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

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "/ecommerce-platform-modern-design.jpg",
    },
    {
      title: "Social Media Campaign",
      category: "Digital Marketing",
      image: "/social-media-campaign-creative-design.jpg",
    },
    {
      title: "Brand Identity",
      category: "Branding",
      image: "/brand-identity-logo-design.jpg",
    },
    {
      title: "Mobile App Design",
      category: "UI/UX Design",
      image: "/mobile-app-interface-modern.jpg",
    },
    {
      title: "Video Production",
      category: "Video & Motion",
      image: "/video-production-animation.jpg",
    },
    {
      title: "Content Strategy",
      category: "Content Marketing",
      image: "/content-marketing-strategy.png",
    },
  ]

  return (
    <section id="portfolio" ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 tech-divider"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <h2 className="text-5xl sm:text-6xl font-heading font-black mb-6 text-white text-center leading-tight">
            Our <span className="neon-text">Portfolio</span>
          </h2>

          <p className="text-center text-gray-400 text-lg max-w-2xl mx-auto mb-24 font-body">
            Showcase of our latest projects and success stories
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-accent/20 hover:border-accent/80 transition-all duration-400 cursor-pointer h-96"
                style={{
                  animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 100}ms forwards` : "none",
                  opacity: isVisible ? 1 : 0,
                  perspective: "1000px",
                }}
              >
                <div className="relative h-full overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg?height=300&width=400&query=portfolio project"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 group-hover:brightness-40 group-hover:blur-[2px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-heading font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-accent text-sm font-semibold mb-6 font-body">{project.category}</p>
                    <button className="flex items-center gap-2 text-accent hover:text-white transition-colors duration-300 font-semibold font-body group/btn">
                      View Project
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                  </div>

                  <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/50 rounded-xl transition-all duration-300 pointer-events-none shadow-inner group-hover:shadow-2xl group-hover:shadow-accent/20"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground font-semibold rounded-xl hover:shadow-2xl hover:shadow-accent/60 hover:scale-110 hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2 group font-heading uppercase text-sm tracking-wide active:translate-y-1 border border-accent/50">
              View Full Portfolio
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
