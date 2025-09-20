"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Zap, Cpu, User, BookOpen, Target } from "lucide-react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      className="py-20 bg-muted/30 relative overflow-hidden matrix-bg"
    >
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
      <div
        className="absolute top-40 right-20 w-1 h-1 bg-purple-500 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            <span className="gradient-text animate-glow">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Info */}
          <div
            className={`space-y-6 ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <Card className="relative group bg-card/80 backdrop-blur-sm border border-border/40 hover:border-primary transition-all duration-500 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I'm a passionate{" "}
                  <span className="text-primary font-semibold gradient-text">
                    Computer Science student
                  </span>{" "}
                  with a love for creating digital experiences that make a
                  difference. My journey in tech started in high school when I
                  built my first website, and I've been hooked ever since.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Currently pursuing my Bachelor's degree in Computer Science, I
                  specialize in{" "}
                  <span className="text-purple-400 font-semibold">
                    full-stack web development
                  </span>{" "}
                  with a focus on modern frameworks like React, Next.js, and
                  Node.js. I believe in writing clean, maintainable code and
                  creating user-centered designs.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or
                  enjoying outdoor activities like hiking and photography.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Stats */}
          <div
            className={`grid grid-cols-2 gap-6 ${
              isVisible
                ? "animate-fade-in-up animate-delay-200"
                : "opacity-0"
            }`}
          >
            {[
              {
                icon: <User className="w-3 h-3 text-primary" />,
                value: "3+",
                label: "Years of Experience",
                glow: "primary",
              },
              {
                icon: <Code className="w-3 h-3 text-purple-400" />,
                value: "15+",
                label: "Projects Completed",
                glow: "purple-500",
              },
              {
                icon: <Zap className="w-3 h-3 text-blue-400" />,
                value: "5+",
                label: "Technologies Mastered",
                glow: "blue-500",
              },
              {
                icon: <Target className="w-3 h-3 text-green-400" />,
                value: "2",
                label: "Hackathon Wins",
                glow: "green-500",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="relative group text-center bg-card/80 backdrop-blur-sm border border-border/40 hover:border-primary transition-all duration-300 rounded-xl overflow-hidden"
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 relative z-10">
                  <div
                    className={`absolute -top-2 -right-2 w-6 h-6 bg-${item.glow}/20 rounded-full backdrop-blur-sm border border-${item.glow}/30 flex items-center justify-center animate-float`}
                  >
                    {item.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2 gradient-text">
                    {item.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Floating Icons */}
        <div
          className="absolute top-1/2 right-10 w-12 h-12 bg-primary/10 rounded-lg backdrop-blur-sm border border-primary/30 flex items-center justify-center animate-float"
          style={{ animationDelay: "2s" }}
        >
          <BookOpen className="w-6 h-6 text-primary" />
        </div>
        <div
          className="absolute bottom-20 left-20 w-8 h-8 bg-purple-500/10 rounded-full backdrop-blur-sm border border-purple-500/30 flex items-center justify-center animate-float"
          style={{ animationDelay: "3s" }}
        >
          <Cpu className="w-4 h-4 text-purple-400" />
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-primary/5 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-purple-500/5 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
    </section>
  )
}
