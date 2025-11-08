"use client"

import { useEffect, useState, useRef } from "react"
import { Zap, Globe, Palette, BookOpen, PenTool, Video, CheckCircle, TrendingUp } from "lucide-react"

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
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

  const services = [
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Social Media, Google & Meta Ads, SEO, Content Strategy",
    },
    {
      icon: Globe,
      title: "Web Design & Dev",
      description: "Business Websites, E-commerce, Responsive UI, Funnels",
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Logos, Social Media Design, Print Collateral",
    },
    {
      icon: BookOpen,
      title: "Branding",
      description: "Brand Strategy, Messaging, Style Guidelines",
    },
    {
      icon: PenTool,
      title: "Content Writing",
      description: "Blogs, Web Copy, SEO Content, Product Descriptions",
    },
    {
      icon: Video,
      title: "Video & Motion",
      description: "Explainers, Ads, Animation, Editing",
    },
    {
      icon: Zap,
      title: "YouTube Automation",
      description: "Channel Setup, SEO, Editing, Management",
    },
    {
      icon: CheckCircle,
      title: "QA Testing",
      description: "Manual & Automated Testing, QA Consulting",
    },
  ]

  return (
    <section id="services" ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 tech-divider"></div>
      <div className="absolute bottom-0 left-0 right-0 tech-divider"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <h2 className="text-5xl sm:text-6xl font-heading font-black mb-6 text-white text-center leading-tight">
            What We <span className="neon-text">Do</span>
          </h2>

          <p className="text-center text-gray-400 text-lg max-w-2xl mx-auto mb-24 font-body">
            Comprehensive digital solutions tailored to your business needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="group relative glass rounded-xl p-8 border border-accent/20 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/40 hover:-translate-y-4 transition-all duration-300 cursor-pointer overflow-hidden"
                  style={{
                    animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 50}ms forwards` : "none",
                    opacity: isVisible ? 1 : 0,
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full"
                    style={{ transitionDuration: "0.8s" }}
                  ></div>

                  <div className="w-14 h-14 mb-6 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-accent/40 group-hover:to-accent/10 group-hover:shadow-xl group-hover:shadow-accent/50 transition-all duration-300 relative z-10">
                    <Icon className="w-7 h-7 text-accent group-hover:scale-125 group-hover:drop-shadow-lg group-hover:drop-shadow-accent transition-all duration-300" />
                  </div>

                  <h3 className="text-xl font-heading font-bold text-white mb-3 relative z-10">{service.title}</h3>

                  <p className="text-sm text-gray-400 font-body leading-relaxed relative z-10">{service.description}</p>

                  {/* Hover indicator line */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-accent to-transparent group-hover:w-full transition-all duration-400"></div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
