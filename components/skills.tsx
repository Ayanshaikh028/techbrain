"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Database, Globe, Users, Lightbulb, Zap } from "lucide-react"

export function Skills() {
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

    const element = document.getElementById("skills")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const technicalSkills = [
    { category: "Frontend", icon: Code, skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"] },
    { category: "Backend", icon: Database, skills: ["Node.js", "Express.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"] },
    { category: "Tools & Platforms", icon: Globe, skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code"] },
  ]

  const softSkills = [
    { category: "Communication", icon: Users, skills: ["Team Collaboration", "Technical Writing", "Presentation Skills"] },
    { category: "Problem Solving", icon: Lightbulb, skills: ["Critical Thinking", "Debugging", "Algorithm Design"] },
    { category: "Design", icon: Palette, skills: ["UI/UX Design", "Responsive Design", "Accessibility"] },
  ]

  return (
    <section id="skills" className="py-20 relative overflow-hidden matrix-bg">
      <div className="absolute inset-0 tech-grid opacity-20"></div>

      {/* Animated orbs */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text animate-glow">Skills & Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and soft skills developed through projects and experience.
          </p>
        </div>

        <div className="space-y-12">
          {/* Technical Skills */}
          <div>
            <h3 className={`text-2xl font-semibold text-foreground mb-8 text-center ${isVisible ? "animate-fade-in-up animate-delay-100" : "opacity-0"}`}>
              Technical Skills
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {technicalSkills.map((skillGroup, index) => {
                const Icon = skillGroup.icon
                return (
                  <Card
                    key={skillGroup.category}
                    className={`relative group bg-background/80 backdrop-blur-sm border border-border/20 rounded-xl overflow-hidden
                                hover:border-primary/40 hover:shadow-xl hover:scale-[1.02] transition-all duration-500
                                ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                    style={{ animationDelay: `${(index + 2) * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Icon className="w-6 h-6 text-primary animate-pulse" />
                        {skillGroup.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.skills.map(skill => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-primary/10 hover:bg-primary/20 transition-colors text-foreground"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className={`text-2xl font-semibold text-foreground mb-8 text-center ${isVisible ? "animate-fade-in-up animate-delay-300" : "opacity-0"}`}>
              Soft Skills
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {softSkills.map((skillGroup, index) => {
                const Icon = skillGroup.icon
                return (
                  <Card
                    key={skillGroup.category}
                    className={`relative group bg-background/80 backdrop-blur-sm border border-border/20 rounded-xl overflow-hidden
                                hover:border-purple-500/40 hover:shadow-lg hover:scale-[1.02] transition-all duration-500
                                ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                    style={{ animationDelay: `${(index + 5) * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Icon className="w-6 h-6 text-purple-400 animate-pulse" />
                        {skillGroup.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.skills.map(skill => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="bg-purple-500/10 hover:bg-purple-500/20 border-purple-500/30 transition-colors text-foreground"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="absolute top-1/4 right-10 w-12 h-12 bg-primary/20 rounded-lg backdrop-blur-sm border border-primary/30 flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
          <Code className="w-6 h-6 text-primary" />
        </div>
        <div className="absolute bottom-1/4 left-10 w-12 h-12 bg-purple-500/20 rounded-lg backdrop-blur-sm border border-purple-500/30 flex items-center justify-center animate-float" style={{ animationDelay: "2s" }}>
          <Zap className="w-6 h-6 text-purple-400" />
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>
    </section>
  )
}
