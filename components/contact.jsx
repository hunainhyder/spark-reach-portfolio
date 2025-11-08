"use client"

import { useEffect, useState, useRef } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    project: "",
  })
  const [submitted, setSubmitted] = useState(false)
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: "", email: "", business: "", project: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@sparkreach.com",
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+1 (555) 123-4567",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 tech-divider"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <h2 className="text-5xl sm:text-6xl font-heading font-black mb-4 text-white text-center leading-tight">
            Get In <span className="neon-text">Touch</span>
          </h2>

          <p className="text-center text-gray-400 text-lg max-w-2xl mx-auto mb-20 font-body">
            Have a project in mind? Let's discuss how we can help your business grow.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <div
                  key={index}
                  className="glass rounded-xl p-8 border border-accent/20 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 group cursor-pointer"
                  style={{
                    animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 100}ms forwards` : "none",
                    opacity: isVisible ? 1 : 0,
                  }}
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 group-hover:shadow-lg group-hover:shadow-accent/30 transition-all duration-300">
                    <Icon className="w-7 h-7 text-accent group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-white mb-2">{method.title}</h3>
                  <p className="text-gray-400 font-body">{method.value}</p>
                </div>
              )
            })}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto glass rounded-2xl p-8 sm:p-12 border border-accent/20 hover:border-accent/40 transition-all duration-300">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-white mb-3 font-heading">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-accent/5 border border-accent/20 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all font-body"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-3 font-heading">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-accent/5 border border-accent/20 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all font-body"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-white mb-3 font-heading">Business Name</label>
                <input
                  type="text"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-accent/5 border border-accent/20 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all font-body"
                  placeholder="Your business"
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold text-white mb-3 font-heading">Project Details</label>
                <textarea
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-accent/5 border border-accent/20 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none font-body"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground font-bold rounded-lg hover:shadow-2xl hover:shadow-accent/40 transition-all duration-300 flex items-center justify-center gap-2 group font-heading uppercase text-sm tracking-wide"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {submitted && (
                <p className="mt-4 text-center text-accent font-bold animate-fade-in-up font-heading">
                  Thank you! We'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
