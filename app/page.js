"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Send, Mail, Phone, Linkedin, Package, Truck, Network, Users, Briefcase, Target, ClipboardCheck, Award, BarChart, Brain, Cpu, Zap, TrendingUp, Shield, Lightbulb } from 'lucide-react';

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
          <button onClick={() => scrollToSection('hero')} className="text-xl sm:text-2xl font-bold text-white hover:text-blue-400 transition-colors">
            JOSE ALGARA
          </button>
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-blue-400 transition-colors">Services</button>
            <button onClick={() => scrollToSection('experience')} className="text-sm font-medium hover:text-blue-400 transition-colors">Experience</button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-blue-400 transition-colors">Contact</button>
          </div>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden p-2 hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} className="text-blue-400" /> : <Menu size={28} />}
          </button>
        </div>
        
        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/98 border-t border-slate-800 animate-fadeIn">
            <div className="p-4 space-y-1">
              <button 
                onClick={() => scrollToSection('services')} 
                className="block w-full text-left py-3 px-4 text-base font-semibold hover:text-blue-400 hover:bg-slate-800/50 rounded-lg transition-all"
              >
                Services
              </button>
              
              <div className="pl-4 space-y-1">
                <button 
                  onClick={() => scrollToSection('supply-chain')} 
                  className="block w-full text-left py-2 px-4 text-sm font-medium text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 rounded-lg transition-all flex items-center gap-2"
                >
                  <Package size={16} className="text-blue-400" />
                  Supply Chain Transformation
                </button>
                <button 
                  onClick={() => scrollToSection('coaching')} 
                  className="block w-full text-left py-2 px-4 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all flex items-center gap-2"
                >
                  <Users size={16} className="text-cyan-400" />
                  Executive Coaching
                </button>
                <button 
                  onClick={() => scrollToSection('assessment')} 
                  className="block w-full text-left py-2 px-4 text-sm font-medium text-slate-300 hover:text-sky-400 hover:bg-slate-800/50 rounded-lg transition-all flex items-center gap-2"
                >
                  <ClipboardCheck size={16} className="text-sky-400" />
                  Maturity Assessment
                </button>
                <button 
                  onClick={() => scrollToSection('ai-strategy')} 
                  className="block w-full text-left py-2 px-4 text-sm font-medium text-slate-300 hover:text-indigo-400 hover:bg-slate-800/50 rounded-lg transition-all flex items-center gap-2"
                >
                  <Brain size={16} className="text-indigo-400" />
                  AI & Automation Strategy
                </button>
              </div>
              
              <button 
                onClick={() => scrollToSection('experience')} 
                className="block w-full text-left py-3 px-4 text-base font-semibold hover:text-blue-400 hover:bg-slate-800/50 rounded-lg transition-all"
              >
                Experience
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block w-full text-left py-3 px-4 text-base font-semibold text-blue-400 hover:bg-slate-800/50 rounded-lg transition-all"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="hero" className="relative pt-24 sm:pt-32 pb-16 px-4 sm:px-6 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm font-semibold text-blue-400 mb-2">
                VP Supply Chain & Inventory Management
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">Supply Chain</span>
                <br /><span className="text-white">Reimagined</span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                Twenty years building and scaling operations across startups and Fortune 500 companies—specializing in supply chain, logistics, and inventory management—taught me this: lasting transformation requires more than technology. I coach people to become leaders who scale teams from 1 to 300+. I reimagine processes through innovation and emerging tech. And I deploy cutting-edge solutions that create competitive advantage. Engineering precision, MBA strategy, multi-million dollar results.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <TrendingUp size={16} className="text-blue-400" />
                  <span>Multi-Million $ Impact</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Users size={16} className="text-cyan-400" />
                  <span>Teams 1→300+</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Award size={16} className="text-sky-400" />
                  <span>Fortune 500 Leader</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2 group"
                >
                  Let's Talk 
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href="https://www.linkedin.com/in/jose-algara/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-8 py-4 border border-slate-600 rounded-lg font-semibold hover:border-blue-400 hover:bg-slate-900/50 transition-all flex items-center justify-center gap-2"
                >
                  <Linkedin size={20} /> LinkedIn Profile
                </a>
              </div>
            </div>
            <div className="hidden md:flex h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />
              <img 
                src="/image.png" 
                alt="Supply Chain & Operations Strategy" 
                className="w-full h-full object-cover rounded-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="relative py-20 px-4 sm:px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Transform Your Operations</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Strategic advisory services to accelerate growth, optimize operations, and build competitive advantages
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: Package, 
                color: 'from-blue-400 to-blue-500', 
                title: 'Supply Chain Transformation', 
                desc: 'End-to-end optimization and technology enablement', 
                sectionId: 'supply-chain',
                stats: '28% cost reduction'
              },
              { 
                icon: Users, 
                color: 'from-cyan-400 to-cyan-500', 
                title: 'Executive Coaching', 
                desc: 'Leadership development and strategic clarity', 
                sectionId: 'coaching',
                stats: '1→300+ teams built'
              },
              { 
                icon: ClipboardCheck, 
                color: 'from-sky-400 to-sky-500', 
                title: 'Maturity Assessment', 
                desc: 'Capability evaluation and strategic roadmap', 
                sectionId: 'assessment',
                stats: 'Best-in-class benchmarks'
              },
              { 
                icon: Brain, 
                color: 'from-indigo-400 to-indigo-500', 
                title: 'AI Strategy', 
                desc: 'Intelligent automation and optimization', 
                sectionId: 'ai-strategy',
                stats: 'High-impact AI deployment'
              }
            ].map((service, i) => (
              <div 
                key={i} 
                onClick={() => scrollToSection(service.sectionId)} 
                className="group p-6 border border-slate-700 rounded-xl hover:border-blue-400 transition-all hover:bg-slate-900/50 cursor-pointer hover:scale-105 transform"
              >
                <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="text-white" size={32} strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                <p className="text-sm text-slate-400 mb-3">{service.desc}</p>
                <div className="text-xs text-blue-400 font-semibold mb-3">{service.stats}</div>
                <span className="text-blue-400 text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={16} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Chain Section */}
      <section id="supply-chain" className="relative py-20 px-4 sm:px-6 bg-slate-900/30 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="h-96 bg-gradient-to-br from-blue-500/20 to-blue-400/10 rounded-2xl border border-blue-500/30 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent" />
              <Package className="text-blue-400 relative z-10" size={120} strokeWidth={1.5} />
            </div>
            <div>
              <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs font-semibold text-blue-400 mb-4">
                CORE SERVICE
              </div>
              <h2 className="text-4xl font-bold mb-4">Supply Chain Transformation</h2>
              <p className="text-xl text-blue-400 font-semibold mb-4">Turn challenges into competitive advantages</p>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Leading large-scale transformations at Nordstrom, Maersk, and Flexport. Built enterprise systems delivering multi-million dollar savings while improving service levels. Expertise in network optimization, technology implementation, and change management.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <Shield className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-white">Proven at Scale</div>
                    <div className="text-sm text-slate-400">Fortune 500 implementations with measurable ROI</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-white">Quick Wins + Strategic Vision</div>
                    <div className="text-sm text-slate-400">Balance immediate impact with long-term transformation</div>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-400 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all inline-flex items-center gap-2 group"
              >
                Get Started 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {[
              { 
                icon: Network, 
                title: 'Network Optimization', 
                desc: 'Streamline end-to-end operations from source to customer',
                benefits: 'Reduce costs, improve delivery times, enhance resilience'
              },
              { 
                icon: Truck, 
                title: 'Tech Enablement', 
                desc: 'Enterprise system selection and implementation',
                benefits: 'WMS, TMS, OMS platforms integrated for seamless operations'
              },
              { 
                icon: Users, 
                title: 'Change Management', 
                desc: 'Team restructuring, training, and capability building',
                benefits: 'Build high-performing teams that drive sustained results'
              }
            ].map((point, i) => (
              <div key={i} className="p-6 border border-slate-700 rounded-xl hover:border-blue-400 transition-all hover:bg-slate-900/50">
                <point.icon className="text-blue-400 mb-3" size={40} strokeWidth={1.5} />
                <h4 className="font-bold mb-2 text-lg">{point.title}</h4>
                <p className="text-sm text-slate-300 mb-3">{point.desc}</p>
                <p className="text-xs text-blue-400">{point.benefits}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-blue-500/10 border-2 border-blue-500/50 rounded-xl p-8 text-center">
            <p className="text-xl font-medium italic text-white">"{testimonials[activeTestimonial]}"</p>
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-2 rounded-full transition-all ${i === activeTestimonial ? 'bg-blue-400 w-8' : 'bg-blue-400/30 w-2'}`} 
                />
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
              <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs font-semibold text-cyan-400 mb-4">
                LEADERSHIP DEVELOPMENT
              </div>
              <h2 className="text-4xl font-bold mb-4">Executive Coaching</h2>
              <p className="text-xl text-cyan-400 font-semibold mb-4">Elevate your leadership impact</p>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Real-world experience building teams from 1 to 300+ people across Amazon, Maersk, and Flexport. Help leaders develop executive presence, strategic thinking, and the skills to drive organizational transformation.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <Lightbulb className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-white">Practical, Not Theoretical</div>
                    <div className="text-sm text-slate-400">Battle-tested insights from scaling global operations</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-white">Customized Approach</div>
                    <div className="text-sm text-slate-400">Tailored to your unique challenges and goals</div>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all inline-flex items-center gap-2 group"
              >
                Get Started 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="h-96 bg-gradient-to-br from-cyan-500/20 to-cyan-400/10 rounded-2xl border border-cyan-500/30 flex items-center justify-center order-1 lg:order-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent" />
              <Users className="text-cyan-400 relative z-10" size={120} strokeWidth={1.5} />
            </div>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {[
              { 
                icon: Target, 
                title: 'Strategic Clarity', 
                desc: 'Define vision and communicate effectively across all levels',
                focus: 'Align teams around compelling goals'
              },
              { 
                icon: Briefcase, 
                title: 'Executive Presence', 
                desc: 'Build influence, confidence, and leadership credibility',
                focus: 'Command the room and inspire action'
              },
              { 
                icon: Award, 
                title: 'Career Growth', 
                desc: 'Navigate transitions and accelerate advancement',
                focus: 'From manager to VP and beyond'
              }
            ].map((point, i) => (
              <div key={i} className="p-6 border border-slate-700 rounded-xl hover:border-cyan-400 transition-all hover:bg-slate-900/50">
                <point.icon className="text-cyan-400 mb-3" size={40} strokeWidth={1.5} />
                <h4 className="font-bold mb-2 text-lg">{point.title}</h4>
                <p className="text-sm text-slate-300 mb-3">{point.desc}</p>
                <p className="text-xs text-cyan-400">{point.focus}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-cyan-500/10 border-2 border-cyan-500/50 rounded-xl p-8 text-center">
            <p className="text-xl font-medium italic text-white">"Built world-class teams from inception to hundreds, scaling delivery excellence across multiple Fortune 500 companies"</p>
          </div>
        </div>
      </section>

      {/* Maturity Assessment */}
      <section id="assessment" className="relative py-20 px-4 sm:px-6 bg-slate-900/30 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="h-96 bg-gradient-to-br from-sky-500/20 to-sky-400/10 rounded-2xl border border-sky-500/30 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent" />
              <ClipboardCheck className="text-sky-400 relative z-10" size={120} strokeWidth={1.5} />
            </div>
            <div>
              <div className="inline-block px-4 py-2 bg-sky-500/10 border border-sky-500/30 rounded-full text-xs font-semibold text-sky-400 mb-4">
                STRATEGIC PLANNING
              </div>
              <h2 className="text-4xl font-bold mb-4">Maturity Assessment</h2>
              <p className="text-xl text-sky-400 font-semibold mb-4">Benchmark and chart your path forward</p>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Comprehensive evaluation framework developed through work with organizations at all maturity stages. Identify gaps, benchmark against industry leaders, and build a prioritized roadmap with clear ROI expectations.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <BarChart className="text-sky-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-white">Data-Driven Insights</div>
                    <div className="text-sm text-slate-400">Quantitative analysis backed by qualitative expertise</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="text-sky-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-white">Actionable Roadmap</div>
                    <div className="text-sm text-slate-400">Prioritized initiatives with timeline and resource planning</div>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="px-8 py-3 bg-gradient-to-r from-sky-500 to-sky-400 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-sky-500/50 transition-all inline-flex items-center gap-2 group"
              >
                Get Started 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {[
              { 
                icon: BarChart, 
                title: 'Deep Analysis', 
                desc: 'Comprehensive evaluation across all operational dimensions',
                areas: 'Technology, process, people, and organizational design'
              },
              { 
                icon: Award, 
                title: 'Benchmarking', 
                desc: 'Compare capabilities against best-in-class performers',
                areas: 'Identify gaps and opportunities for competitive advantage'
              },
              { 
                icon: Target, 
                title: 'Strategic Roadmap', 
                desc: 'Prioritized initiatives with clear ROI and timeline',
                areas: 'Quick wins balanced with transformational projects'
              }
            ].map((point, i) => (
              <div key={i} className="p-6 border border-slate-700 rounded-xl hover:border-sky-400 transition-all hover:bg-slate-900/50">
                <point.icon className="text-sky-400 mb-3" size={40} strokeWidth={1.5} />
                <h4 className="font-bold mb-2 text-lg">{point.title}</h4>
                <p className="text-sm text-slate-300 mb-3">{point.desc}</p>
                <p className="text-xs text-sky-400">{point.areas}</p>
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
              <div className="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-xs font-semibold text-indigo-400 mb-4">
                INTELLIGENT AUTOMATION
              </div>
              <h2 className="text-4xl font-bold mb-4">AI & Automation Strategy</h2>
              <p className="text-xl text-indigo-400 font-semibold mb-4">Harness intelligent technology for competitive advantage</p>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Led implementation of AI-powered demand forecasting and optimization engines delivering measurable business impact. Help identify highest-value automation opportunities, deploy solutions with quick wins, and build responsible AI systems that scale.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <Brain className="text-indigo-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-white">Practical AI Implementation</div>
                    <div className="text-sm text-slate-400">Focus on business value, not technology for its own sake</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="text-indigo-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-white">Rapid Time-to-Value</div>
                    <div className="text-sm text-slate-400">Pilot programs that prove ROI before full-scale deployment</div>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-indigo-400 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-indigo-500/50 transition-all inline-flex items-center gap-2 group"
              >
                Get Started 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="h-96 bg-gradient-to-br from-indigo-500/20 to-indigo-400/10 rounded-2xl border border-indigo-500/30 flex items-center justify-center order-1 lg:order-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent" />
              <Brain className="text-indigo-400 relative z-10" size={120} strokeWidth={1.5} />
            </div>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {[
              { 
                icon: Target, 
                title: 'Use Case Identification', 
                desc: 'Discover and prioritize highest-value opportunities',
                examples: 'Demand forecasting, route optimization, inventory planning'
              },
              { 
                icon: Cpu, 
                title: 'Implementation', 
                desc: 'Deploy AI solutions with proven quick wins',
                examples: 'ML models, automation workflows, predictive analytics'
              },
              { 
                icon: Zap, 
                title: 'Optimization', 
                desc: 'Build responsible, scalable AI systems',
                examples: 'Model monitoring, continuous improvement, ethical AI'
              }
            ].map((point, i) => (
              <div key={i} className="p-6 border border-slate-700 rounded-xl hover:border-indigo-400 transition-all hover:bg-slate-900/50">
                <point.icon className="text-indigo-400 mb-3" size={40} strokeWidth={1.5} />
                <h4 className="font-bold mb-2 text-lg">{point.title}</h4>
                <p className="text-sm text-slate-300 mb-3">{point.desc}</p>
                <p className="text-xs text-indigo-400">{point.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="relative py-20 px-4 sm:px-6 bg-slate-900/30 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Experience & Impact</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Two decades of leadership across Fortune 500 enterprises and high-growth startups
            </p>
          </div>
          <div className="space-y-6">
            {[
              { 
                role: 'VP, Inventory Management, Supply Chain and Returns', 
                company: 'Nordstrom', 
                period: 'April 2024 – Present', 
                impact: 'Multi-million dollar shrink reduction • Significant FC throughput optimization',
                description: 'Leading inventory strategy and fulfillment operations for iconic retail brand'
              },
              { 
                role: 'VP, Ocean Consolidation Services', 
                company: 'Flexport', 
                period: 'Jan 2023 – Oct 2023', 
                impact: 'Strong volume growth • Triple-digit P&L improvement',
                description: 'Built and scaled ocean freight consolidation business during market transformation'
              },
              { 
                role: 'Sr Director / VP, Service Delivery & M&A', 
                company: 'A.P. Moeller Maersk', 
                period: 'May 2021 – Dec 2022', 
                impact: 'Near-double on-time delivery • Multi-billion P&L',
                description: 'Led global service delivery transformation and M&A integration'
              },
              { 
                role: 'Sr Manager, Grocery Distribution', 
                company: 'Amazon', 
                period: 'May 2018 – May 2021', 
                impact: 'Strong conversion increase • Built team 1 to 300',
                description: 'Scaled Amazon Fresh distribution network across multiple markets'
              },
              { 
                role: 'Founder and CEO', 
                company: 'Easy Taxi Latin America', 
                period: 'June 2012 – May 2015', 
                impact: 'Largest taxi fleet in LatAm • Market leadership',
                description: 'Built and scaled ride-hailing platform across 30+ cities in Latin America'
              }
            ].map((exp, i) => (
              <div key={i} className="group p-6 sm:p-8 border border-slate-700 rounded-xl hover:border-blue-400 transition-all hover:bg-slate-900/50">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-semibold group-hover:text-blue-400 transition-colors mb-2">{exp.role}</h3>
                    <p className="text-blue-400 font-semibold text-sm">{exp.company} • {exp.period}</p>
                    <p className="text-slate-400 text-sm mt-2">{exp.description}</p>
                  </div>
                  <ArrowRight className="text-slate-600 group-hover:text-blue-400 transition-colors mt-2 flex-shrink-0 ml-4" />
                </div>
                <div className="pt-3 border-t border-slate-700">
                  <p className="text-blue-300 font-semibold text-sm">{exp.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-20 px-4 sm:px-6 scroll-mt-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Let's Connect</h2>
            <p className="text-lg text-slate-400">
              Ready to transform your supply chain? Get in touch to discuss your challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a 
              href="tel:206-245-6474" 
              className="p-6 border border-slate-700 rounded-xl hover:border-blue-400 hover:bg-slate-900/50 transition-all text-center group"
            >
              <Phone className="mx-auto mb-3 text-blue-400 group-hover:scale-110 transition-transform" size={24} />
              <p className="text-sm text-slate-400 mb-1">Phone</p>
              <p className="font-semibold">206-245-6474</p>
            </a>
            <a 
              href="mailto:jose.algara@gmail.com" 
              className="p-6 border border-slate-700 rounded-xl hover:border-blue-400 hover:bg-slate-900/50 transition-all text-center group"
            >
              <Mail className="mx-auto mb-3 text-blue-400 group-hover:scale-110 transition-transform" size={24} />
              <p className="text-sm text-slate-400 mb-1">Email</p>
              <p className="font-semibold">jose.algara@gmail.com</p>
            </a>
            <a 
              href="https://www.linkedin.com/in/jose-algara/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-6 border border-slate-700 rounded-xl hover:border-blue-400 hover:bg-slate-900/50 transition-all text-center group"
            >
              <Linkedin className="mx-auto mb-3 text-blue-400 group-hover:scale-110 transition-transform" size={24} />
              <p className="text-sm text-slate-400 mb-1">LinkedIn</p>
              <p className="font-semibold">View Profile</p>
            </a>
          </div>
          
          <div className="p-8 border border-slate-700 rounded-xl bg-slate-900/30">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  className="px-4 py-4 bg-slate-800 border border-slate-700 rounded-lg focus:border-blue-400 focus:outline-none transition-colors" 
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  className="px-4 py-4 bg-slate-800 border border-slate-700 rounded-lg focus:border-blue-400 focus:outline-none transition-colors" 
                />
              </div>
              <input 
                type="text" 
                name="subject" 
                placeholder="Subject" 
                value={formData.subject} 
                onChange={handleInputChange} 
                className="w-full px-4 py-4 bg-slate-800 border border-slate-700 rounded-lg focus:border-blue-400 focus:outline-none transition-colors" 
              />
              <textarea 
                name="message" 
                placeholder="Tell me about your supply chain challenges..." 
                rows="6" 
                value={formData.message} 
                onChange={handleInputChange} 
                className="w-full px-4 py-4 bg-slate-800 border border-slate-700 rounded-lg focus:border-blue-400 focus:outline-none resize-none transition-colors" 
              />
              <button 
                onClick={handleSubmit} 
                className={`w-full px-6 py-4 font-semibold rounded-lg transition-all flex items-center justify-center gap-2 ${
                  submitted 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gradient-to-r from-blue-500 to-cyan-400 text-black hover:shadow-lg hover:shadow-blue-500/50'
                }`}
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'} 
                {!submitted && <Send size={20} />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-sm">© 2025 Jose Algara. Supply Chain & Product Leadership.</p>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/jose-algara/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:jose.algara@gmail.com" className="text-slate-600 hover:text-blue-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
