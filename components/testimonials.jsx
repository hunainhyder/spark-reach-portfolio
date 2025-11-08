"use client"

import { useEffect, useState, useRef } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
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

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Startup Inc",
      quote:
        "Spark Reach Media transformed our digital presence. Their creative approach and strategic thinking delivered results beyond our expectations.",
      rating: 5,
      avatar: "/professional-avatar-woman.jpg",
    },
    {
      name: "Michael Chen",
      company: "E-Commerce Solutions",
      quote:
        "The team is professional, responsive, and incredibly talented. They delivered our website on time and it looks amazing.",
      rating: 5,
      avatar: "/professional-avatar-man.jpg",
    },
    {
      name: "Emily Rodriguez",
      company: "Marketing Agency",
      quote:
        "Working with Spark Reach Media was a game-changer for our brand. Highly recommend to anyone looking for top-tier digital solutions.",
      rating: 5,
      avatar: "/professional-avatar-woman.jpg",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    setAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoPlay(false)
  }

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 tech-divider"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <h2 className="text-5xl sm:text-6xl font-heading font-black mb-4 text-white text-center leading-tight">
            What Clients <span className="neon-text">Say</span>
          </h2>

          <p className="text-center text-gray-400 text-lg max-w-2xl mx-auto mb-16 font-body">
            Real feedback from brands we've helped grow
          </p>

          <div className="relative">
            {/* Testimonial Card */}
            <div className="glass-accent rounded-2xl p-8 sm:p-12 border border-accent/30 min-h-96 flex flex-col justify-center hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/20">
              <div className="flex gap-1 mb-8 animate-fade-in-up">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-accent text-accent animate-glow-pulse"
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>

              <p className="text-xl sm:text-2xl text-white mb-8 leading-relaxed italic font-body">
                "{testimonials[currentSlide].quote}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentSlide].avatar || "/placeholder.svg"}
                  alt={testimonials[currentSlide].name}
                  className="w-16 h-16 rounded-full border-2 border-accent/30"
                />
                <div>
                  <p className="font-heading font-bold text-white text-lg">{testimonials[currentSlide].name}</p>
                  <p className="text-accent text-sm font-body">{testimonials[currentSlide].company}</p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-10 gap-4">
              <button
                onClick={prevSlide}
                className="p-3 rounded-xl bg-accent/10 border border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </button>

              {/* Dots */}
              <div className="flex gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index)
                      setAutoPlay(false)
                    }}
                    className={`rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-accent w-10 h-2 shadow-lg shadow-accent/50"
                        : "bg-accent/20 w-2 h-2 hover:bg-accent/40"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-3 rounded-xl bg-accent/10 border border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
