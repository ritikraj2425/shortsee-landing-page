"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Sparkles, ArrowUpRight, Check, Star, Quote, Instagram, Twitter, Linkedin } from "lucide-react"

export default function ShortseeAuthentic() {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [email, setEmail] = useState("")
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  // Countdown timer
  useEffect(() => {
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 7)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager at Netflix",
      content: "Finally, a way to catch up on shows during my commute. The story flow is surprisingly intact.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Marcus Rodriguez",
      role: "Film Student",
      content:
        "As someone studying cinematography, I'm impressed by how they maintain narrative tension in short segments.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Priya Patel",
      role: "Busy Parent",
      content: "Perfect for stolen moments between meetings. I've finished three series this month!",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  const features = [
    {
      title: "Smart Story Breaks",
      description:
        "Our AI identifies natural pause points in narratives, ensuring each micro-episode ends at the perfect moment.",
      stat: "98% retention rate",
    },
    {
      title: "Cross-Platform Content",
      description: "Access shows from Netflix, HBO Max, Disney+, and 40+ other platforms in one unified experience.",
      stat: "50+ platforms",
    },
    {
      title: "Adaptive Pacing",
      description: "Episodes adjust length based on your available time and viewing patterns.",
      stat: "2-5 min episodes",
    },
  ]

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center">
                <Play className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="text-xl font-semibold text-stone-900">Shortsee</span>
            </div>
            <div className="hidden md:flex items-center space-x-8 text-sm">
              <a href="#features" className="text-stone-600 hover:text-stone-900 transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-stone-600 hover:text-stone-900 transition-colors">
                How it works
              </a>
              <a href="#testimonials" className="text-stone-600 hover:text-stone-900 transition-colors">
                Reviews
              </a>
            </div>
            <Button className="bg-stone-900 hover:bg-stone-800 text-white text-sm px-4 py-2 h-auto">
              Join waitlist
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                  <Sparkles className="w-4 h-4" />
                  <span>Launching March 2024</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-stone-900 leading-tight">
                  Watch full stories
                  <br />
                  <span className="text-amber-600">in stolen moments</span>
                </h1>

                <p className="text-lg text-stone-600 leading-relaxed max-w-lg">
                  Transform your commute, lunch break, or waiting time into entertainment gold. Every episode is
                  perfectly crafted to fit your schedule while keeping you hooked on the story.
                </p>
              </div>

              {/* Email Signup */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white border-stone-300 text-stone-900 placeholder:text-stone-400 focus:border-amber-500 focus:ring-amber-500/20"
                  />
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 whitespace-nowrap">
                    Get early access
                  </Button>
                </div>
                <p className="text-sm text-stone-500">Join 12,847 people already on the waitlist</p>
              </div>

              {/* Social Proof */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 bg-stone-300 rounded-full border-2 border-white"
                        style={{
                          backgroundImage: `url(/placeholder.svg?height=32&width=32)`,
                          backgroundSize: "cover",
                        }}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-stone-600 ml-2">Loved by early users</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-sm text-stone-600 ml-1">4.9/5</span>
                </div>
              </div>
            </div>

            {/* Right - Phone Mockup */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Background decoration */}
                <div className="absolute -inset-4 bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl -rotate-3" />
                <div className="absolute -inset-2 bg-gradient-to-br from-stone-100 to-stone-200 rounded-3xl rotate-2" />

                {/* Phone */}
                <div className="relative bg-stone-900 rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="bg-black rounded-[2rem] overflow-hidden">
                    <div className="relative h-[600px] bg-stone-900">
                      {/* Status bar */}
                      <div className="flex justify-between items-center px-6 py-3 text-white text-sm">
                        <span className="font-medium">9:41</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-4 h-2 bg-white rounded-sm opacity-60" />
                          <div className="w-1 h-2 bg-white rounded-sm" />
                        </div>
                      </div>

                      {/* App content */}
                      <div className="px-4 space-y-4">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-white font-semibold">Continue watching</h3>
                            <p className="text-stone-400 text-sm">Pick up where you left off</p>
                          </div>
                          <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center">
                            <Play className="w-4 h-4 text-white fill-white" />
                          </div>
                        </div>

                        {/* Current episode */}
                        <div className="bg-stone-800 rounded-2xl overflow-hidden">
                          <div className="h-40 bg-gradient-to-br from-blue-600 to-purple-700 relative flex items-center justify-center">
                            <Button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm w-12 h-12 rounded-full border border-white/30">
                              <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                            </Button>
                            <div className="absolute bottom-3 left-3 right-3">
                              <div className="bg-black/60 backdrop-blur-sm rounded-lg p-2">
                                <p className="text-white font-medium text-sm">Stranger Things S4E1</p>
                                <p className="text-stone-300 text-xs">Part 3 of 12 • 2:47 left</p>
                              </div>
                            </div>
                          </div>
                          <div className="p-3">
                            <div className="w-full bg-stone-700 rounded-full h-1 mb-2">
                              <div className="bg-amber-500 h-1 rounded-full w-1/4" />
                            </div>
                            <p className="text-stone-400 text-xs">25% complete</p>
                          </div>
                        </div>

                        {/* Up next */}
                        <div>
                          <h4 className="text-white font-medium mb-3">Up next</h4>
                          <div className="space-y-3">
                            {["The Crown S3E1", "Breaking Bad S1E2"].map((title, i) => (
                              <div key={i} className="flex items-center space-x-3">
                                <div className="w-16 h-12 bg-stone-700 rounded-lg flex items-center justify-center">
                                  <Play className="w-3 h-3 text-stone-400 fill-stone-400" />
                                </div>
                                <div className="flex-1">
                                  <p className="text-white text-sm font-medium">{title}</p>
                                  <p className="text-stone-400 text-xs">Part 1 of 8 • 3:12</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Launch Countdown */}
      <section className="px-6 py-16 bg-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-stone-900 mb-8">Launching in</h2>
          <div className="flex justify-center gap-6 mb-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-2 border border-stone-200">
                  <span className="text-2xl font-bold text-stone-900">{value.toString().padStart(2, "0")}</span>
                </div>
                <span className="text-sm text-stone-600 capitalize">{unit}</span>
              </div>
            ))}
          </div>
          <p className="text-stone-600">
            Be among the first to experience entertainment that fits your life, not the other way around.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Designed for how you actually watch</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              We studied how busy people consume content and built something that actually works with your schedule.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white border-stone-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-stone-900">{feature.title}</h3>
                      <span className="text-xs font-medium text-amber-700 bg-amber-100 px-2 py-1 rounded-full">
                        {feature.stat}
                      </span>
                    </div>
                    <p className="text-stone-600 leading-relaxed">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="px-6 py-20 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
                  Your favorite shows,
                  <br />
                  reimagined for real life
                </h2>
                <p className="text-lg text-stone-600">
                  We don't just chop up episodes randomly. Our technology identifies natural story beats and emotional
                  peaks to create perfect micro-episodes.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "AI analyzes story structure",
                    description: "Our system identifies natural pause points, cliffhangers, and emotional beats.",
                  },
                  {
                    step: "02",
                    title: "Creates perfect segments",
                    description: "Each micro-episode ends at the ideal moment to keep you engaged.",
                  },
                  {
                    step: "03",
                    title: "Adapts to your schedule",
                    description: "Episodes adjust length based on your available time and viewing patterns.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-xl flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-900 mb-1">{item.title}</h3>
                      <p className="text-stone-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-200">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-stone-900">Breaking Bad S1E1</h3>
                    <span className="text-xs text-stone-500">Original: 58 min</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { part: "Part 1", duration: "3:12", title: "Walter's diagnosis" },
                      { part: "Part 2", duration: "2:47", title: "The ride-along" },
                      { part: "Part 3", duration: "3:05", title: "Jesse's escape" },
                      { part: "Part 4", duration: "2:58", title: "The confrontation" },
                    ].map((segment, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-stone-50 rounded-lg">
                        <div>
                          <p className="font-medium text-stone-900 text-sm">{segment.part}</p>
                          <p className="text-xs text-stone-600">{segment.title}</p>
                        </div>
                        <span className="text-xs text-stone-500">{segment.duration}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2 border-t border-stone-200">
                    <p className="text-xs text-stone-500">+ 14 more parts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-16">What early users are saying</h2>

          <div className="relative">
            <Card className="bg-white border-stone-200 shadow-lg">
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-amber-600 mx-auto mb-6" />
                <blockquote className="text-lg text-stone-700 mb-6 leading-relaxed">
                  "{testimonials[activeTestimonial].content}"
                </blockquote>
                <div className="flex items-center justify-center space-x-3">
                  <div
                    className="w-12 h-12 bg-stone-300 rounded-full"
                    style={{
                      backgroundImage: `url(${testimonials[activeTestimonial].avatar})`,
                      backgroundSize: "cover",
                    }}
                  />
                  <div className="text-left">
                    <p className="font-semibold text-stone-900">{testimonials[activeTestimonial].name}</p>
                    <p className="text-sm text-stone-600">{testimonials[activeTestimonial].role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeTestimonial ? "bg-amber-600" : "bg-stone-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 bg-stone-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to watch smarter, not longer?</h2>
          <p className="text-lg text-stone-300 mb-8 max-w-2xl mx-auto">
            Join thousands of people who are already transforming their entertainment experience. Get notified the
            moment we launch.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-stone-800 border-stone-700 text-white placeholder:text-stone-400 focus:border-amber-500 focus:ring-amber-500/20"
            />
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 whitespace-nowrap">
              Join waitlist
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6 text-sm text-stone-400">
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>Free during beta</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>No spam, ever</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-stone-100 border-t border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center">
                  <Play className="w-4 h-4 text-white fill-white" />
                </div>
                <span className="text-xl font-semibold text-stone-900">Shortsee</span>
              </div>
              <p className="text-stone-600 mb-6 max-w-md">
                Entertainment that fits your life. Watch full stories in perfectly crafted micro-episodes.
              </p>
              <div className="flex space-x-4">
                {[Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <button
                    key={index}
                    className="w-10 h-10 bg-stone-200 hover:bg-stone-300 rounded-lg flex items-center justify-center text-stone-600 hover:text-stone-900 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-stone-900 mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-stone-600">
                <li>
                  <a href="#" className="hover:text-stone-900 transition-colors">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-stone-900 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-stone-900 transition-colors">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-stone-900 mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-stone-600">
                <li>
                  <a href="#" className="hover:text-stone-900 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-stone-900 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-stone-900 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-stone-200 flex flex-col sm:flex-row justify-between items-center text-sm text-stone-600">
            <p>© 2024 Shortsee. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-stone-900 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-stone-900 transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
