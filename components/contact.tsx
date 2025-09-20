"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle, Zap, Code } from "lucide-react"

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    const element = document.getElementById("contact")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
    alert("Thank you for your message! I'll get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    { icon: Mail, label: "Email", value: "mohammedhayatazad13@email.com", href: "mailto:mohammedhayatazad13@email.com" },
    { icon: Phone, label: "Phone", value: "+91 8108728441"},
    { icon: MapPin, label: "Location", value: "Kalyan, Maharashtra", href: "#" },
  ]

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/devhayat" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mohd-hayat" },
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden matrix-bg">
      <div className="absolute inset-0 tech-grid opacity-20"></div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            <span className="gradient-text animate-glow">Get In Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm open to <span className="text-primary font-semibold">new opportunities</span>,{" "}
            <span className="text-purple-400 font-semibold">collaborations</span>, or just a chat about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={`space-y-8 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <Card className="glow-border hover:shadow-2xl transition-all duration-500 bg-card/80 backdrop-blur-sm rounded-xl relative group overflow-hidden">
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 z-10"></div>

              <CardHeader className="relative z-20">
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary/20 rounded-lg backdrop-blur-sm border border-primary/30 flex items-center justify-center animate-float">
                  <MessageCircle className="w-4 h-4 text-primary" />
                </div>
                <CardTitle className="gradient-text group-hover:text-white transition-colors duration-300">Let's Connect</CardTitle>
              </CardHeader>
              <CardContent className="relative z-20 space-y-4">
                <p className="text-muted-foreground group-hover:text-white transition-colors duration-300 leading-relaxed">
                  Feel free to reach out through any of the channels below.
                </p>

                <div className="space-y-4">
                  {contactInfo.map((info, idx) => {
                    const Icon = info.icon
                    return (
                      <div key={info.label} className="flex items-center gap-4 group">
                        <div
                          className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center glow-border group-hover:bg-primary/20 transition-all duration-300 animate-float"
                          style={{ animationDelay: `${idx * 0.5}s` }}
                        >
                          <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground group-hover:text-white transition-colors duration-300">{info.label}</p>
                          {info.href !== "#" ? (
                            <a href={info.href} className="text-muted-foreground hover:text-primary group-hover:text-white transition-colors duration-300">
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground group-hover:text-white transition-colors duration-300">{info.value}</p>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="font-medium text-foreground mb-4 gradient-text group-hover:text-white transition-colors duration-300">Follow me on social media</p>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => {
                      const Icon = social.icon
                      return (
                        <Button key={social.label} variant="outline" size="sm" asChild className="glow-border hover:bg-muted/50 bg-transparent">
                          <a href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <Icon className="w-4 h-4" />
                            {social.label}
                          </a>
                        </Button>
                      )
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className={`glow-border hover:shadow-2xl transition-all duration-500 bg-card/80 backdrop-blur-sm rounded-xl relative group overflow-hidden ${isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0"}`}>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 z-10"></div>
            <CardHeader className="relative z-20">
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500/20 rounded-lg backdrop-blur-sm border border-purple-500/30 flex items-center justify-center animate-float">
                <Send className="w-4 h-4 text-purple-400" />
              </div>
              <CardTitle className="gradient-text group-hover:text-white transition-colors duration-300">Send me a message</CardTitle>
            </CardHeader>
            <CardContent className="relative z-20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Your full name" className="glow-border focus:glow-border" required />
                <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" className="glow-border focus:glow-border" required />
                <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." rows={5} className="glow-border focus:glow-border" required />
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 glow-border flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" /> Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Floating Icons */}
        <div className="absolute top-1/4 right-10 w-12 h-12 bg-blue-500/10 rounded-lg backdrop-blur-sm border border-blue-500/30 flex items-center justify-center animate-float">
          <Code className="w-6 h-6 text-blue-400" />
        </div>
        <div className="absolute bottom-20 left-20 w-10 h-10 bg-green-500/10 rounded-full backdrop-blur-sm border border-green-500/30 flex items-center justify-center animate-float">
          <Zap className="w-5 h-5 text-green-400" />
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-1/3 left-1/3 w-24 h-24 bg-blue-500/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-green-500/5 rounded-full blur-xl animate-pulse"></div>

        {/* Footer */}
        <div className={`text-center mt-16 pt-8 border-t border-border ${isVisible ? "animate-fade-in-up animate-delay-400" : "opacity-0"}`}>
          <p className="text-muted-foreground">
            © 2024 Hayat Azad. Built with <span className="gradient-text font-semibold">Next.js</span> and <span className="gradient-text font-semibold">Tailwind CSS</span>.
          </p>
        </div>
      </div>
    </section>
  )
}
