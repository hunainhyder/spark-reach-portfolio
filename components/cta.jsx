"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowRight } from "lucide-react"

export default function CTA() {
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

  return (
    <section ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 tech-divider"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`relative rounded-2xl overflow-hidden transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-accent/10 opacity-60"></div>
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-accent/30 via-transparent to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
          <div className="absolute inset-0 border border-accent/20"></div>

          {/* Content */}
          <div className="relative z-10 py-20 sm:py-24 px-8 sm:px-16 text-center">
            <h2 className="text-5xl sm:text-6xl font-heading font-black text-white mb-6 leading-tight">
              Ready to Grow <span className="neon-text">Faster?</span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-body">
              Let's partner together to transform your brand and achieve measurable business growth.
            </p>

            <a href="#contact">
              <button className="px-10 py-4 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground font-bold rounded-xl hover:shadow-2xl hover:shadow-accent/40 hover:scale-110 transition-all duration-300 inline-flex items-center gap-2 group font-heading uppercase text-sm tracking-wide">
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
