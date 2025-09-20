"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ChevronDown, Code, Zap, Cpu } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  const roles = ["Full-Stack Developer", "Problem Solver", "Tech Enthusiast", "Code Architect"]

  useEffect(() => {
    setIsVisible(true)

    const typewriterEffect = () => {
      const currentRole = roles[currentIndex]
      let charIndex = 0

      const typeInterval = setInterval(() => {
        if (charIndex < currentRole.length) {
          setTypedText(currentRole.slice(0, charIndex + 1))
          charIndex++
        } else {
          clearInterval(typeInterval)
          setTimeout(() => {
            const deleteInterval = setInterval(() => {
              if (charIndex > 0) {
                setTypedText(currentRole.slice(0, charIndex - 1))
                charIndex--
              } else {
                clearInterval(deleteInterval)
                setCurrentIndex((prev) => (prev + 1) % roles.length)
              }
            }, 100)
          }, 2000)
        }
      }, 150)
    }

    const timeout = setTimeout(typewriterEffect, 1000)
    return () => clearTimeout(timeout)
  }, [currentIndex])

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden matrix-bg">
      <div className="absolute inset-0 tech-grid opacity-30"></div>
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
      <div
        className="absolute top-40 right-20 w-1 h-1 bg-purple-500 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className={`space-y-6 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
              <div className="space-y-2">
                <p className="text-primary font-mono text-sm tracking-wider animate-fade-in">{"> Hello World! I am"}</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
                  <span className="gradient-text animate-glow">Hayat Mohammed Azad</span>
                </h1>
                <div className="flex items-center space-x-2 text-xl sm:text-2xl font-medium">
                  <Code className="w-6 h-6 text-primary animate-pulse" />
                  <span className="text-muted-foreground font-mono">
                    {typedText}
                    <span className="animate-pulse">|</span>
                  </span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                I craft <span className="text-primary font-semibold">pixel-perfect</span> digital experiences with{" "}
                <span className="text-purple-400 font-semibold">cutting-edge technology</span>. Passionate about
                building the future, one line of code at a time.
              </p>

              <div className="flex flex-wrap gap-6 py-4">
                <div className="flex items-center space-x-2 text-sm">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  <span className="text-muted-foreground">Fast Learner</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Cpu className="w-4 h-4 text-blue-500" />
                  <span className="text-muted-foreground">System Thinker</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Code className="w-4 h-4 text-green-500" />
                  <span className="text-muted-foreground">Clean Code</span>
                </div>
              </div>
            </div>

            <div
              className={`flex flex-wrap gap-4 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
              style={{ animationDelay: "200ms" }}
            >
              <Button
                size="lg"
                onClick={scrollToAbout}
                className=""
              >
                <Code className="w-4 h-4 mr-2" />
                View My Work
              </Button>
              <Button variant="outline" size="lg" asChild className="">
                <a href="mailto:mohammedhayatazad13@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </a>
              </Button>
            </div>

            <div
              className={`flex gap-4 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
              style={{ animationDelay: "300ms" }}
            >
              <Button variant="ghost" size="sm" asChild className="glow-border hover:bg-primary/10">
                <a href="https://github.com/devhayat" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild className="glow-border hover:bg-blue-500/10">
                <a href="linkendin
https://www.linkedin.com/in/mohd-hayat" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div
            className={`flex justify-center lg:justify-end ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "100ms" }}
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 animate-float relative">
                <img
                  src="/professional-headshot-young-developer.jpg"
                  alt="Hayat Azad"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 mix-blend-overlay"></div>
              </div>

              {/* Floating tech elements */}
              <div
                className="absolute -top-6 -right-6 w-12 h-12 bg-primary/20 rounded-lg backdrop-blur-sm border border-primary/30 flex items-center justify-center animate-float"
                style={{ animationDelay: "1s" }}
              >
                <Code className="w-6 h-6 text-primary" />
              </div>
              <div
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-500/20 rounded-lg backdrop-blur-sm border border-purple-500/30 flex items-center justify-center animate-float"
                style={{ animationDelay: "2s" }}
              >
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
              <div
                className="absolute top-1/2 -right-8 w-8 h-8 bg-blue-500/20 rounded-full backdrop-blur-sm border border-blue-500/30 flex items-center justify-center animate-float"
                style={{ animationDelay: "3s" }}
              >
                <Cpu className="w-4 h-4 text-blue-400" />
              </div>

              {/* Glowing orbs */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
              <div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="sm" onClick={scrollToAbout} className="glow-border">
          <ChevronDown className="w-6 h-6" />
        </Button>
      </div>
    </section>
  )
}
