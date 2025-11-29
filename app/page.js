"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Send, Mail, Phone, Linkedin, Package, Truck, Network, Users, Briefcase, Target, ClipboardCheck, Award, BarChart, Brain, Cpu, Zap, BookOpen, Calendar, Clock } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    "Reduced inventory carrying costs by 28% while improving stock availability",
    "Transformed supply chain from reactive to proactive, cutting lead times in half",
    "Delivered measurable ROI within the first quarter"
  ];

  // Blog posts data
  const blogPosts = [
    {
      title: "AI-Powered Demand Forecasting: The Future of Inventory Management",
      excerpt: "Discover how artificial intelligence is revolutionizing demand forecasting accuracy and reducing stockouts by up to 40%.",
      date: "November 2024",
      readTime: "8 min read",
      category: "AI & Technology",
      slug: "ai-demand-forecasting"
    },
    {
      title: "From 1 to 300: Scaling High-Performance Supply Chain Teams",
      excerpt: "Lessons learned building and scaling operations teams across Fortune 500 companies and startups.",
      date: "October 2024",
      readTime: "6 min read",
      category: "Leadership",
      slug: "scaling-supply-chain-teams"
    },
    {
      title: "The Hidden Cost of Inventory: Beyond Carrying Costs",
      excerpt: "Why traditional inventory metrics miss the mark and what you should be measuring instead.",
      date: "September 2024",
      readTime: "5 min read",
      category: "Strategy",
      slug: "hidden-cost-inventory"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (formData.name && formData.email) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitted(false);
      }, 3000);
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900 pointer-events-none" />
      <div className="fixed inset-0 opacity-10 pointer-events-none" style={{backgroundImage: `radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%)`}} />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/90 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-bold text-white">JOSE ALGARA</div>
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-blue-400 transition-colors">Services</button>
            <button onClick={() => scrollToSection('blog')} className="text-sm font-medium hover:text-blue-400 transition-colors">Blog</button>
            <button onClick={() => scrollToSection('experience')} className="text-sm font-medium hover:text-blue-400 transition-colors">About</button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-blue-400 transition-colors">Contact</button>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2" aria-label="Toggle menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-slate-800 p-4">
            <button onClick={() => scrollToSection('services')} className="block w-full text-left py-3 text-sm font-medium hover:text-blue-400">Services</button>
            <button onClick={() => scrollToSection('supply-chain')} className="block w-full text-left py-3 text-sm font-medium hover:text-blue-400 pl-4">→ Supply Chain Transformation</button>
            <button onClick={() => scrollToSection('coaching')} className="block w-full text-left py-3 text-sm font-medium hover:text-blue-400 pl-4">→ Executive Coaching</button>
            <button onClick={() => scrollToSection('assessment')} className="block w-full text-left py-3 text-sm font-medium hover:text-blue-400 pl-4">→ Maturity Assessment</button>
            <button onClick={() => scrollToSection('ai-strategy')} className="block w-full text-left py-3 text-sm font-medium hover:text-blue-400 pl-4">→ AI Strategy</button>
            <button onClick={() => scrollToSection('blog')} className="block w-full text-left py-3 text-sm font-medium hover:text-blue-400">Blog</button>
            <button onClick={() => scrollToSection('experience')} className="block w-full text-left py-3 text-sm font-medium hover:text-blue-400">Experience</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-3 text-sm font-medium hover:text-blue-400">Contact</button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-16 px-4 sm:px-6 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">Operations Drive</span>
                <br /><span className="text-white">Growth</span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                Twenty years optimizing supply chain and inventory management across apparel, general merchandise, and grocery retail. I've built technology solutions for Fortune 500 companies—Amazon, Nordstrom, Maersk—and scaled startups from inception to acquisition. Leading operations across 12 countries taught me this: lasting transformation requires multi-year vision built incrementally with laser-focused execution. Today, I leverage AI to modernize supply chains—optimizing the flow of merchandise from manufacturing floors to customers' hands. I create solutions that scale with growth and pivot with change, turning operational complexity into competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => scrollToSection('contact')} className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2">
                  Let's Talk <ArrowRight size={20} />
                </button>
                <a href="https://www.linkedin.com/in/jose-algara/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-slate-600 rounded-lg font-semibold hover:border-blue-400 transition-colors flex items-center justify-center gap-2">
                  <Linkedin size={20} /> LinkedIn
                </a>
              </div>
            </div>
            <div className="hidden md:flex h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 items-center justify-center">
              <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">JA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="relative py-20 px-4 sm:px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12">Transform Your Operations</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Package, color: 'from-blue-400 to-blue-500', title: 'Supply Chain Transformation', desc: 'End-to-end optimization', sectionId: 'supply-chain' },
              { icon: Users, color: 'from-cyan-400 to-cyan-500', title: 'Executive Coaching', desc: 'Leadership development', sectionId: 'coaching' },
              { icon: ClipboardCheck, color: 'from-sky-400 to-sky-500', title: 'Maturity Assessment', desc: 'Capability evaluation', sectionId: 'assessment' },
              { icon: Brain, color: 'from-indigo-400 to-indigo-500', title: 'AI Strategy', desc: 'Intelligent automation', sectionId: 'ai-strategy' }
            ].map((service, i) => (
              <article key={i} onClick={() => scrollToSection(service.sectionId)} className="group p-6 border border-slate-700 rounded-xl hover:border-blue-400 transition-all hover:bg-slate-900/50 cursor-pointer">
                <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className="text-white" size={32} strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                <p className="text-sm text-slate-400 mb-4">{service.desc}</p>
                <span className="text-blue-400 text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">Learn More <ArrowRight size={16} /></span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Chain Section */}
      <section id="supply-chain" className="relative py-20 px-4 sm:px-6 bg-slate-900/30 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="h-96 bg-gradient-to-br from-blue-500/20 to-blue-400/10 rounded-2xl border border-blue-500/30 flex items-center justify-center">
              <Package className="text-blue-400" size={120} strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-4">Supply Chain Transformation</h2>
              <p className="text-xl text-blue-400 font-semibold mb-6">Turn challenges into competitive advantages</p>
              <p className="text-slate-300 mb-4">Leading transformations at Nordstrom, Maersk, and Flexport. Built enterprise systems delivering multi-million dollar savings.</p>
              <button onClick={() => scrollToSection('contact')} className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-400 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all inline-flex items-center gap-2">
                Get Started <ArrowRight size={20} />
              </button>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {[
              { icon: Network, title: 'Network Optimization', desc: 'Streamline end-to-end operations' },
              { icon: Truck, title: 'Tech Enablement', desc: 'Enterprise system implementation' },
              { icon: Users, title: 'Change Management', desc: 'Team restructuring and growth' }
            ].map((point, i) => (
              <div key={i} className="p-6 border border-slate-700 rounded-xl hover:border-blue-400 transition-all hover:bg-slate-900/50">
                <point.icon className="text-blue-400 mb-3" size={40} strokeWidth={1.5} />
                <h4 className="font-bold mb-2">{point.title}</h4>
                <p className="text-sm text-slate-400">{point.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-blue-500/10 border-2 border-blue-500/50 rounded-xl p-8 text-center">
            <p className="text-xl font-medium italic">"{testimonials[activeTestimonial]}"</p>
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${i === activeTestimonial ? 'bg-blue-400 w-8' : 'bg-blue-400/30'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Executive Coaching */}
      <section id="coaching" className="relative py-20 px-4 sm:px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold mb-4">Executive Coaching</h2>
              <p className="text-xl text-cyan-400 font-semibold mb-6">Elevate your leadership impact</p>
              <p className="text-slate-300 mb-4">Experience building teams from 1 to 300+ people. Helping leaders develop executive presence and strategic thinking.</p>
              <button onClick={() => scrollToSection('contact')} className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all inline-flex items-center gap-2">
                Get Started <ArrowRight size={20} />
              </button>
            </div>
            <div className="h-96 bg-gradient-to-br from-cyan-500/20 to-cyan-400/10 rounded-2xl border border-cyan-500/30 flex items-center justify-center order-1 lg:order-2">
              <Users className="text-cyan-400" size={120} strokeWidth={1.5} />
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {[
              { icon: Target, title: 'Strategic Clarity', desc: 'Define and communicate vision' },
              { icon: Briefcase, title: 'Executive Presence', desc: 'Build influence and confidence' },
              { icon: Award, title: 'Career Growth', desc: 'Navigate transitions' }
            ].map((point, i) => (
              <div key={i} className="p-6 border border-slate-700 rounded-xl hover:border-cyan-400 transition-all hover:bg-slate-900/50">
                <point.icon className="text-cyan-400 mb-3" size={40} strokeWidth={1.5} />
                <h4 className="font-bold mb-2">{point.title}</h4>
                <p className="text-sm text-slate-400">{point.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-cyan-500/10 border-2 border-cyan-500/50 rounded-xl p-8 text-center">
            <p className="text-xl font-medium italic">"Built world-class teams from inception to hundreds, scaling delivery excellence"</p>
          </div>
        </div>
      </section>

      {/* Maturity Assessment */}
      <section id="assessment" className="relative py-20 px-4 sm:px-6 bg-slate-900/30 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="h-96 bg-gradient-to-br from-sky-500/20 to-sky-400/10 rounded-2xl border border-sky-500/30 flex items-center justify-center">
              <ClipboardCheck className="text-sky-400" size={120} strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-4">Maturity Assessment</h2>
              <p className="text-xl text-sky-400 font-semibold mb-6">Benchmark and chart your path forward</p>
              <p className="text-slate-300 mb-4">Comprehensive evaluation framework developed through work with organizations at all stages.</p>
              <button onClick={() => scrollToSection('contact')} className="px-8 py-3 bg-gradient-to-r from-sky-500 to-sky-400 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-sky-500/50 transition-all inline-flex items-center gap-2">
                Get Started <ArrowRight size={20} />
              </button>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {[
              { icon: BarChart, title: 'Deep Analysis', desc: 'Comprehensive operational evaluation' },
              { icon: Award, title: 'Benchmarking', desc: 'Compare against best-in-class' },
              { icon: Target, title: 'Strategic Roadmap', desc: 'Prioritized initiatives with ROI' }
            ].map((point, i) => (
              <div key={i} className="p-6 border border-slate-700 rounded-xl hover:border-sky-400 transition-all hover:bg-slate-900/50">
                <point.icon className="text-sky-400 mb-3" size={40} strokeWidth={1.5} />
                <h4 className="font-bold mb-2">{point.title}</h4>
                <p className="text-sm text-slate-400">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Strategy */}
      <section id="ai-strategy" className="relative py-20 px-4 sm:px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold mb-4">AI & Automation Strategy</h2>
              <p className="text-xl text-indigo-400 font-semibold mb-6">Harness intelligent technology for advantage</p>
              <p className="text-slate-300 mb-4">Led AI-powered demand forecasting and optimization engines. Helping identify high-impact automation opportunities.</p>
              <button onClick={() => scrollToSection('contact')} className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-indigo-400 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-indigo-500/50 transition-all inline-flex items-center gap-2">
                Get Started <ArrowRight size={20} />
              </button>
            </div>
            <div className="h-96 bg-gradient-to-br from-indigo-500/20 to-indigo-400/10 rounded-2xl border border-indigo-500/30 flex items-center justify-center order-1 lg:order-2">
              <Brain className="text-indigo-400" size={120} strokeWidth={1.5} />
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {[
              { icon: Target, title: 'Use Case ID', desc: 'Find highest-value opportunities' },
              { icon: Cpu, title: 'Implementation', desc: 'Deploy solutions with quick wins' },
              { icon: Zap, title: 'Optimization', desc: 'Build responsible AI systems' }
            ].map((point, i) => (
              <div key={i} className="p-6 border border-slate-700 rounded-xl hover:border-indigo-400 transition-all hover:bg-slate-900/50">
                <point.icon className="text-indigo-400 mb-3" size={40} strokeWidth={1.5} />
                <h4 className="font-bold mb-2">{point.title}</h4>
                <p className="text-sm text-slate-400">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="relative py-20 px-4 sm:px-6 bg-slate-900/30 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Insights & Perspectives</h2>
            <p className="text-xl text-slate-400">Thoughts on supply chain, AI, and operational excellence</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <article key={i} className="group border border-slate-700 rounded-xl overflow-hidden hover:border-blue-400 transition-all hover:bg-slate-900/50 cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center border-b border-slate-700">
                  <BookOpen className="text-blue-400" size={64} strokeWidth={1.5} />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-sm text-slate-400">
                    <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400">{post.category}</span>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{post.title}</h3>
                  <p className="text-slate-400 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-slate-500">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                    <span className="text-blue-400 text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="px-8 py-3 border border-slate-600 rounded-lg font-semibold hover:border-blue-400 transition-colors inline-flex items-center gap-2">
              View All Articles <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="relative py-20 px-4 sm:px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-12">Experience & Impact</h2>
          <div className="space-y-6">
            {[
              { role: 'VP, Inventory Management, Supply Chain and Returns', company: 'Nordstrom', period: 'April 2024 – Present', impact: 'Multi-million dollar shrink reduction • Significant FC throughput optimization' },
              { role: 'VP, Ocean Consolidation Services', company: 'Flexport', period: 'Jan 2023 – Oct 2023', impact: 'Strong volume growth • Triple-digit P&L improvement' },
              { role: 'Sr Director / VP, Service Delivery & M&A', company: 'A.P. Moeller Maersk', period: 'May 2021 – Dec 2022', impact: 'Near-double on-time delivery • Multi-billion P&L' },
              { role: 'Sr Manager, Grocery Distribution', company: 'Amazon', period: 'May 2018 – May 2021', impact: 'Strong conversion increase • Built team 1 to 300' },
              { role: 'Founder and CEO', company: 'Easy Taxi Latin America', period: 'June 2012 – May 2015', impact: 'Largest taxi fleet in LatAm • Market leadership' }
            ].map((exp, i) => (
              <article key={i} className="group p-8 border border-slate-700 rounded-xl hover:border-blue-400 transition-all hover:bg-slate-900/50">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                    <p className="text-blue-400 font-semibold text-sm mt-1">{exp.company} • {exp.period}</p>
                  </div>
                  <ArrowRight className="text-slate-600 group-hover:text-blue-400 transition-colors mt-2 flex-shrink-0" />
                </div>
                <div className="pt-3 border-t border-slate-700">
                  <p className="text-blue-300 font-semibold text-sm">{exp.impact}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-20 px-4 sm:px-6 bg-slate-900/30 scroll-mt-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center">Let's Connect</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="tel:206-245-6474" className="p-6 border border-slate-700 rounded-xl hover:border-blue-400 hover:bg-slate-900/50 transition-all text-center" aria-label="Call Jose Algara">
              <Phone className="mx-auto mb-3 text-blue-400" size={24} />
              <p className="text-sm text-slate-400">Phone</p>
              <p className="font-semibold">206-245-6474</p>
            </a>
            <a href="mailto:jose.algara@gmail.com" className="p-6 border border-slate-700 rounded-xl hover:border-blue-400 hover:bg-slate-900/50 transition-all text-center" aria-label="Email Jose Algara">
              <Mail className="mx-auto mb-3 text-blue-400" size={24} />
              <p className="text-sm text-slate-400">Email</p>
              <p className="font-semibold">jose.algara@gmail.com</p>
            </a>
            <a href="https://www.linkedin.com/in/jose-algara/" target="_blank" rel="noopener noreferrer" className="p-6 border border-slate-700 rounded-xl hover:border-blue-400 hover:bg-slate-900/50 transition-all text-center" aria-label="View Jose Algara's LinkedIn profile">
              <Linkedin className="mx-auto mb-3 text-blue-400" size={24} />
              <p className="text-sm text-slate-400">LinkedIn</p>
              <p className="font-semibold">View Profile</p>
            </a>
          </div>
          <div className="p-8 border border-slate-700 rounded-xl bg-slate-900/50">
            <h3 className="text-2xl font-semibold mb-6">Send a message</h3>
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  className="px-4 py-4 bg-slate-800 border border-slate-700 rounded-lg focus:border-blue-400 focus:outline-none"
                  aria-label="Your name"
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  className="px-4 py-4 bg-slate-800 border border-slate-700 rounded-lg focus:border-blue-400 focus:outline-none"
                  aria-label="Your email"
                />
              </div>
              <input 
                type="text" 
                name="subject" 
                placeholder="Subject" 
                value={formData.subject} 
                onChange={handleInputChange} 
                className="w-full px-4 py-4 bg-slate-800 border border-slate-700 rounded-lg focus:border-blue-400 focus:outline-none"
                aria-label="Subject"
              />
              <textarea 
                name="message" 
                placeholder="Your message..." 
                rows="6" 
                value={formData.message} 
                onChange={handleInputChange} 
                className="w-full px-4 py-4 bg-slate-800 border border-slate-700 rounded-lg focus:border-blue-400 focus:outline-none resize-none"
                aria-label="Your message"
              />
              <button 
                onClick={handleSubmit} 
                className={`w-full px-6 py-4 font-semibold rounded-lg transition-all flex items-center justify-center gap-2 ${submitted ? 'bg-green-600' : 'bg-gradient-to-r from-blue-500 to-cyan-400 text-black hover:shadow-lg'}`}
                aria-label="Send message"
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'} {!submitted && <Send size={20} />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-600">© 2025 Jose Algara. Supply Chain & Product Leadership.</p>
        </div>
      </footer>
    </div>
  );
}





