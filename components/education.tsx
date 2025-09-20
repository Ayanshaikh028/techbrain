"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin, Code } from "lucide-react"

export function Education() {
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

    const element = document.getElementById("education")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const education = {
    degree: "Deploma IN Computer Engineering",
    institution: "Anjuman -I- Islam Kalsekar Polytechnic  ",
    location: "Panvel Navi mumbai",
    period: "2022 - 2026 (Expected)",
    gpa: "3.8/4.0",
    relevantCoursework: [
      "Data Structures & Algorithms",
      "Software Engineering",
      "Database Systems",
      "Web Development",
      "Computer Networks",
      "Machine Learning",
      "Operating Systems",
      "Human-Computer Interaction",
    ],
    certifications: [
      {
        name: "AWS Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2024",
      },
      {
        name: "React Developer Certification",
        issuer: "Meta",
        date: "2023",
      },
      {
        name: "Google Analytics Certified",
        issuer: "Google",
        date: "2023",
      },
    ],
  }

  return (
    <section id="education" className="py-20 relative overflow-hidden matrix-bg">
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
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text animate-glow">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and continuous learning through formal education and professional certifications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main Education */}
          <Card
  className={`bg-background/50 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/300
              transition-all duration-500 hover:scale-[1.02] hover:shadow-xl 
              hover:shadow-purple-500/5 ${isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0"}`}
>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-primary animate-pulse" />
                Current Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground">{education.degree}</h3>
                <p className="text-lg text-muted-foreground">{education.institution}</p>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {education.period}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {education.location}
                </div>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg glow-border border-primary/30 hover: -translate-y-0.5 hover:shadow-md ">
                <p className="text-sm font-medium text-foreground">Current GPA: {education.gpa}</p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Relevant Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {education.relevantCoursework.map((course) => (
                    <Badge
  key={course}
  variant="secondary"
  className="bg-primary/10 hover:bg-primary/20 transition-all duration-300 
             hover:-translate-y-0.5 hover:shadow-md"
>
  {course}
</Badge>

                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card
  className={`bg-background/50 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 
              transition-all duration-500 hover:scale-[1.02] hover:shadow-xl 
              hover:shadow-purple-500/5 ${isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0"}`}
>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Badge className="w-6 h-6 text-purple-400 animate-pulse" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {education.certifications.map((cert, index) => (
                <div
                  key={cert.name}
                   className={`bg-background/50 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 
              transition-all duration-500 hover:scale-[1.02] hover:shadow-xl 
              hover:shadow-purple-500/5 ${isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0"}`}
                >
                  <h4 className="font-semibold text-foreground">{cert.name}</h4>
                  <p className="text-muted-foreground">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground">{cert.date}</p>
                </div>
              ))}

              <div  className={`bg-background/50 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 
              transition-all duration-500 hover:scale-[1.02] hover:shadow-xl 
              hover:shadow-purple-500/5 ${isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0"}`}>
                <p className="text-sm text-muted-foreground">
                  Continuously expanding my knowledge through online courses, workshops, and industry certifications to
                  stay current with the latest technologies and best practices.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div
          className="absolute top-1/4 right-10 w-12 h-12 bg-primary/20 rounded-lg backdrop-blur-sm border border-primary/30 flex items-center justify-center animate-float"
          style={{ animationDelay: "1s" }}
        >
          <GraduationCap className="w-6 h-6 text-primary" />
        </div>
        <div
          className="absolute bottom-1/4 left-10 w-12 h-12 bg-purple-500/20 rounded-lg backdrop-blur-sm border border-purple-500/30 flex items-center justify-center animate-float"
          style={{ animationDelay: "2s" }}
        >
          <Code className="w-6 h-6 text-purple-400" />
        </div>

        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
    </section>
  )
}
