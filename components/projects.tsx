"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Code, Zap, Cpu } from "lucide-react"

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById("projects")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "Chatfy",
      description:
        "A mordern Chat App to chat with your loved ones with real-time messaging, media sharing, and group chats. Built with React and Firebase for seamless communication.",
      image: "/modern-ecommerce-website-interface.jpg",
      techStack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      githubUrl: "https://github.com/devhayat/Chatfy.git",
      liveUrl: "https://example.com",
    },
    {
      title: "XoVerse",
      description:
        "AN interactive tick tac toe game with single-player and multiplayer modes. Features a sleek UI, score tracking, and responsive design for all devices.",
      image: "/task-management-dashboard-interface.jpg",
      techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Express.js"],
      githubUrl: "https://github.com/devhayat/XOverse.git",
      liveUrl: "https://example.com",
    },
    {
      title: "SkyCast",
      description:
        "A mordern weather app providing real-time weather updates, forecasts, and alerts. Features a sleek UI, location-based services, and interactive charts.",
      image: "/weather-app-interface-with-charts.jpg",
      techStack: ["React", "OpenWeather API", "Chart.js", "CSS3", "Geolocation API"],
      githubUrl: "https://github.com/devhayat/WeatherApp.git",
      liveUrl: "https://example.com",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30 relative overflow-hidden matrix-bg">
      <div className="absolute inset-0 tech-grid opacity-20"></div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text animate-glow">Featured Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my best work, demonstrating skills in full-stack development, UI/UX design, and problem-solving.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`relative group bg-background/80 backdrop-blur-sm border border-border/20 rounded-xl overflow-hidden
                          hover:border-primary/40 hover:shadow-xl hover:scale-[1.02] transition-all duration-500
                          ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm rounded-t-xl">
                  <Button size="sm" variant="secondary" asChild className="glow-border">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild className="glow-border">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>

              {/* Card Content */}
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs glow-border bg-primary/10 hover:bg-primary/20 transition-colors text-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" asChild className="flex-1 bg-transparent glow-border hover:bg-muted/50">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button size="sm" asChild className="flex-1 glow-border">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Floating Icons */}
        <div className="absolute top-1/4 right-10 w-12 h-12 bg-primary/20 rounded-lg backdrop-blur-sm border border-primary/30 flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
          <Code className="w-6 h-6 text-primary" />
        </div>
        
        <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-blue-500/20 rounded-full backdrop-blur-sm border border-blue-500/30 flex items-center justify-center animate-float" style={{ animationDelay: "3s" }}>
          <Cpu className="w-4 h-4 text-blue-400" />
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>
    </section>
  )
}
