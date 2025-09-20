"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Users, Code, Star, Zap } from "lucide-react"

export function Achievements() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    const element = document.getElementById("achievements")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const achievements = [
    { icon: Trophy, title: "HackTech 2024 Winner", description: "First place in university hackathon for AI-powered study assistant.", date: "2024", category: "Competition" },
    { icon: Award, title: "Dean's List", description: "GPA above 3.7 recognized on Dean's List.", date: "2023-2024", category: "Academic" },
    { icon: Code, title: "Open Source Contributor", description: "50+ merged pull requests in open source projects.", date: "2023-Present", category: "Development" },
    { icon: Users, title: "CS Society VP", description: "Led tech workshops for 200+ students.", date: "2023-2024", category: "Leadership" },
    { icon: Trophy, title: "Google Code Jam Finalist", description: "Reached final round of Google Code Jam.", date: "2023", category: "Competition" },
    { icon: Award, title: "Merit Scholarship Recipient", description: "Awarded for academic performance and leadership.", date: "2022-2026", category: "Academic" },
  ]

  return (
    <section id="achievements" className="py-20 bg-muted/30 relative overflow-hidden matrix-bg">
      <div className="absolute inset-0 tech-grid opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text animate-glow">Achievements & Awards</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition for <span className="text-primary font-semibold">academic excellence</span>,{" "}
            <span className="text-purple-400 font-semibold">leadership</span>, and tech contributions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <Card
                key={achievement.title}
                className={`group relative overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500 glow-border bg-card/80 backdrop-blur-sm rounded-xl
                          ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Overlay for hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 z-10"></div>

                <CardHeader className="relative z-20">
                  <div className="flex items-center justify-between mb-2">
                    <Icon className="w-8 h-8 text-primary group-hover:text-yellow-400 transition-colors duration-300" />
                    <Badge variant="outline" className="glow-border group-hover:bg-primary/20 transition-colors">{achievement.category}</Badge>
                  </div>
                  <CardTitle className="text-lg gradient-text group-hover:text-white transition-colors duration-300">{achievement.title}</CardTitle>
                </CardHeader>

                <CardContent className="relative z-20">
                  <p className="text-muted-foreground group-hover:text-white transition-colors duration-300 leading-relaxed">{achievement.description}</p>
                  <span className="text-sm font-medium text-primary gradient-text group-hover:text-yellow-400 transition-colors">{achievement.date}</span>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
