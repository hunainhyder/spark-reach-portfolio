"use client"

import { useEffect, useState } from "react"

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = window.scrollY
      const progress = scrollHeight > 0 ? (scrolled / scrollHeight) * 100 : 0
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed left-0 top-0 h-screen w-1 bg-muted z-40 pointer-events-none">
      <div
        className="w-full bg-gradient-to-b from-accent via-accent to-accent/30 animate-glow transition-all duration-300"
        style={{ height: `${scrollProgress}%` }}
      ></div>
    </div>
  )
}
