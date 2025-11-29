"use client";

import React, { useState } from 'react';
import { ArrowRight, Send, Mail, Phone, Linkedin, BookOpen, Calendar, Clock } from 'lucide-react';

export default function Portfolio() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

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

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    setSubmitting(true);

    try {
      // Replace YOUR_FORM_ID with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert('Something went wrong. Please try emailing directly at jose.algara@gmail.com');
      }
    } catch (error) {
      alert('Something went wrong. Please try emailing directly at jose.algara@gmail.com');
    } finally {
      setSubmitting(false);
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Simple Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-8 py-6 flex justify-between items-center">
          <button onClick={() => scrollToSection('hero')} className="text-xl font-medium">
            Jose Algara
          </button>
          <div className="flex gap-10">
            <button onClick={() => scrollToSection('services')} className="text-sm hover:text-gray-600 transition-colors">What I Do</button>
            <button onClick={() => scrollToSection('blog')} className="text-sm hover:text-gray-600 transition-colors">Insights</button>
            <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-gray-600 transition-colors">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero - New Design with Centered Title */}
      <section id="hero" className="pt-32 pb-24 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Centered Headline */}
          <div className="text-center mb-20">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-tight">
              Transform your Supply Chain<br className="hidden sm:block" />
              <span className="sm:inline"> </span>into a Value Engine
            </h1>
          </div>

          {/* Two Column: Image + Bio */}
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Left Column: Profile Image - Fixed positioning */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <img 
                src="/IMG_2031.JPG" 
                alt="Jose Algara" 
                className="w-64 h-64 rounded-full object-cover object-[center_75%] border-2 border-gray-100 shadow-lg"
              />
            </div>

            {/* Right Column: Bio Text + CTAs */}
            <div className="lg:col-span-7">
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  With 20+ years optimizing supply chains, leading digital transformations and building technology for companies like Amazon, Nordstrom, A.P. Moeller Maersk and Flexport, I help companies turn their supply chains into a strategic advantage.
                </p>
                <p>
                  Launching companies and leading operations across 12 countries taught me this: lasting transformation requires multi-year vision built incrementally with laser-focused execution. Today, I leverage AI to modernize supply chains—optimizing the flow of merchandise from manufacturing floors to customers' hands.
                </p>
                <p>
                  I create solutions that scale with growth and pivot with change, turning operational complexity into competitive advantage.
                </p>

                {/* CTAs */}
                <div className="flex gap-4 pt-4">
                  <button 
                    onClick={() => scrollToSection('contact')} 
                    className="px-8 py-4 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    Let's work together
                  </button>
                  <a 
                    href="https://www.linkedin.com/in/jose-algara/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-8 py-4 border border-gray-300 text-sm font-medium hover:border-gray-400 transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do - Two Column Layout */}
      <section id="services" className="py-24 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light mb-20">What I Do</h2>
          
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
            {/* Service 1 */}
            <div>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm text-gray-400 font-mono">01</span>
                <h3 className="text-2xl font-medium">Supply Chain Transformation</h3>
              </div>
              <p className="text-gray-600 leading-relaxed pl-10">
                Leading transformations at Nordstrom, Maersk, and Flexport. Built enterprise systems delivering multi-million dollar savings while improving service levels. I specialize in network optimization, technology implementation, and change management. Results include 28% inventory cost reduction and near-doubling of on-time delivery rates.
              </p>
            </div>

            {/* Service 2 */}
            <div>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm text-gray-400 font-mono">02</span>
                <h3 className="text-2xl font-medium">Executive Coaching</h3>
              </div>
              <p className="text-gray-600 leading-relaxed pl-10">
                Real-world experience building teams from 1 to 300+ people across Amazon, Maersk, and Flexport. I help leaders develop executive presence, strategic thinking, and the skills to drive organizational transformation. My approach is practical, not theoretical — battle-tested insights from scaling global operations.
              </p>
            </div>

            {/* Service 3 */}
            <div>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm text-gray-400 font-mono">03</span>
                <h3 className="text-2xl font-medium">Operational Maturity Assessment</h3>
              </div>
              <p className="text-gray-600 leading-relaxed pl-10">
                Comprehensive evaluation framework to identify gaps, benchmark against industry leaders, and build prioritized roadmaps. Data-driven insights backed by qualitative expertise to help you understand where you are and chart the path forward with clear ROI expectations.
              </p>
            </div>

            {/* Service 4 */}
            <div>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm text-gray-400 font-mono">04</span>
                <h3 className="text-2xl font-medium">AI & Automation Strategy</h3>
              </div>
              <p className="text-gray-600 leading-relaxed pl-10">
                Led implementation of AI-powered demand forecasting and optimization engines. I help identify highest-value automation opportunities, deploy solutions with quick wins, and build responsible AI systems that scale. Focus on business value, not technology for its own sake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach - Two Column */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-light mb-6">My Approach</h2>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-8">
                <p className="text-lg text-gray-600 leading-relaxed">
                  I've found that the most successful supply chain transformations happen when we address three levels simultaneously:
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium mb-2">People</h3>
                    <p className="text-gray-600 leading-relaxed">
                      I coach leaders to become strategists who can scale teams from 1 to 300+. Building the right culture and capabilities is foundational—technology alone never wins.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-2">Processes</h3>
                    <p className="text-gray-600 leading-relaxed">
                      I reimagine workflows through innovation and emerging technologies, ensuring operations are both efficient and flexible enough to pivot when markets change.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-2">Technology</h3>
                    <p className="text-gray-600 leading-relaxed">
                      I deploy cutting-edge solutions—from AI-powered forecasting to enterprise systems—that create measurable competitive advantage. The right tools amplify great strategy.
                    </p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed pt-4">
                  This comprehensive approach is what turns operations from cost centers into growth engines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section - Three Column Grid */}
      <section id="blog" className="py-24 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-light mb-4">Insights & Perspectives</h2>
            <p className="text-gray-600 text-lg">Thoughts on supply chain, AI, and operational excellence</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {blogPosts.map((post, i) => (
              <article key={i} className="group cursor-pointer">
                <div className="flex items-center gap-3 mb-4 text-sm text-gray-500">
                  <span className="px-3 py-1 bg-white border border-gray-200 text-gray-700 text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-3 group-hover:text-gray-600 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="px-8 py-4 border border-gray-300 text-sm font-medium hover:border-gray-400 transition-colors">
              View All Articles
            </button>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-3xl font-light leading-relaxed text-gray-700 italic">
            "Transformed supply chain from reactive to proactive, cutting lead times in half while reducing inventory carrying costs by 28%."
          </p>
        </div>
      </section>

      {/* Contact - Two Column */}
      <section id="contact" className="py-24 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-4xl font-light mb-8">Let's Connect</h2>
              <p className="text-gray-600 mb-12 leading-relaxed text-lg">
                If you're looking to transform your supply chain operations, build high-performing teams, or navigate complex organizational change, I'd love to hear from you.
              </p>
              
              {/* Contact Methods */}
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-500 mb-2">Email</div>
                  <a href="mailto:jose.algara@gmail.com" className="text-lg text-gray-900 hover:text-gray-600 transition-colors">
                    jose.algara@gmail.com
                  </a>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-2">Phone</div>
                  <a href="tel:206-245-6474" className="text-lg text-gray-900 hover:text-gray-600 transition-colors">
                    206-245-6474
                  </a>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-2">LinkedIn</div>
                  <a 
                    href="https://www.linkedin.com/in/jose-algara/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg text-gray-900 hover:text-gray-600 transition-colors"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      required
                      className="w-full px-4 py-4 border border-gray-200 focus:border-gray-400 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      required
                      className="w-full px-4 py-4 border border-gray-200 focus:border-gray-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Message</label>
                  <textarea 
                    name="message" 
                    rows="8" 
                    value={formData.message} 
                    onChange={handleInputChange} 
                    required
                    className="w-full px-4 py-4 border border-gray-200 focus:border-gray-400 focus:outline-none resize-none transition-colors"
                  />
                </div>
                <button 
                  type="submit"
                  disabled={submitting}
                  className={`w-full px-6 py-4 text-sm font-medium transition-colors ${
                    submitted 
                      ? 'bg-green-600 text-white' 
                      : submitting
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  {submitted ? '✓ Message Sent' : submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-sm text-gray-500">
          <div>© 2025 Jose Algara</div>
          <div className="flex gap-8">
            <a href="https://www.linkedin.com/in/jose-algara/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
              LinkedIn
            </a>
            <a href="mailto:jose.algara@gmail.com" className="hover:text-gray-900 transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}





