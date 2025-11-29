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
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-6 flex justify-between items-center">
          <button onClick={() => scrollToSection('hero')} className="text-xl font-medium">
            Jose Algara
          </button>
          <div className="flex gap-8">
            <button onClick={() => scrollToSection('services')} className="text-sm hover:text-gray-600 transition-colors">What I Do</button>
            <button onClick={() => scrollToSection('blog')} className="text-sm hover:text-gray-600 transition-colors">Insights</button>
            <button onClick={() => scrollToSection('experience')} className="text-sm hover:text-gray-600 transition-colors">Experience</button>
            <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-gray-600 transition-colors">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero - Simple and Personal */}
      <section id="hero" className="pt-40 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <img 
              src="/image.png" 
              alt="Jose Algara" 
              className="w-32 h-32 rounded-full object-cover mb-8 border-2 border-gray-100"
            />
          </div>
          <h1 className="text-5xl sm:text-6xl font-light leading-tight mb-8">
            Operations Drive Growth
          </h1>
          <div className="space-y-6 text-xl text-gray-600 leading-relaxed mb-12">
            <p>
              Twenty years optimizing supply chain and inventory management across apparel, general merchandise, and grocery retail. I've built technology solutions for Fortune 500 companies—Amazon, Nordstrom, Maersk—and scaled startups from inception to acquisition.
            </p>
            <p>
              Leading operations across 12 countries taught me this: lasting transformation requires multi-year vision built incrementally with laser-focused execution. Today, I leverage AI to modernize supply chains—optimizing the flow of merchandise from manufacturing floors to customers' hands.
            </p>
            <p>
              I create solutions that scale with growth and pivot with change, turning operational complexity into competitive advantage.
            </p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => scrollToSection('contact')} 
              className="px-6 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Let's work together
            </button>
            <a 
              href="https://www.linkedin.com/in/jose-algara/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 border border-gray-300 text-sm font-medium hover:border-gray-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section id="services" className="py-32 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-light mb-16">What I Do</h2>
          
          <div className="space-y-20">
            {/* Service 1 */}
            <div>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm text-gray-400 font-mono">01</span>
                <h3 className="text-2xl font-medium">Supply Chain Transformation</h3>
              </div>
              <p className="text-gray-600 leading-relaxed pl-12">
                Leading transformations at Nordstrom, Maersk, and Flexport. Built enterprise systems delivering multi-million dollar savings while improving service levels. I specialize in network optimization, technology implementation, and change management. Results include 28% inventory cost reduction and near-doubling of on-time delivery rates.
              </p>
            </div>

            {/* Service 2 */}
            <div>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm text-gray-400 font-mono">02</span>
                <h3 className="text-2xl font-medium">Executive Coaching</h3>
              </div>
              <p className="text-gray-600 leading-relaxed pl-12">
                Real-world experience building teams from 1 to 300+ people across Amazon, Maersk, and Flexport. I help leaders develop executive presence, strategic thinking, and the skills to drive organizational transformation. My approach is practical, not theoretical — battle-tested insights from scaling global operations.
              </p>
            </div>

            {/* Service 3 */}
            <div>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm text-gray-400 font-mono">03</span>
                <h3 className="text-2xl font-medium">Operational Maturity Assessment</h3>
              </div>
              <p className="text-gray-600 leading-relaxed pl-12">
                Comprehensive evaluation framework to identify gaps, benchmark against industry leaders, and build prioritized roadmaps. Data-driven insights backed by qualitative expertise to help you understand where you are and chart the path forward with clear ROI expectations.
              </p>
            </div>

            {/* Service 4 */}
            <div>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm text-gray-400 font-mono">04</span>
                <h3 className="text-2xl font-medium">AI & Automation Strategy</h3>
              </div>
              <p className="text-gray-600 leading-relaxed pl-12">
                Led implementation of AI-powered demand forecasting and optimization engines. I help identify highest-value automation opportunities, deploy solutions with quick wins, and build responsible AI systems that scale. Focus on business value, not technology for its own sake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-light mb-8">My Approach</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              I've found that the most successful supply chain transformations happen when we address three levels simultaneously:
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              <strong>People:</strong> I coach leaders to become strategists who can scale teams from 1 to 300+. Building the right culture and capabilities is foundational—technology alone never wins.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              <strong>Processes:</strong> I reimagine workflows through innovation and emerging technologies, ensuring operations are both efficient and flexible enough to pivot when markets change.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              <strong>Technology:</strong> I deploy cutting-edge solutions—from AI-powered forecasting to enterprise systems—that create measurable competitive advantage. The right tools amplify great strategy.
            </p>
            <p className="text-gray-600 leading-relaxed">
              This comprehensive approach is what turns operations from cost centers into growth engines.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-32 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-light mb-4">Insights & Perspectives</h2>
          <p className="text-gray-600 mb-16">Thoughts on supply chain, AI, and operational excellence</p>
          
          <div className="space-y-12">
            {blogPosts.map((post, i) => (
              <article key={i} className="border-b border-gray-200 pb-12 last:border-b-0">
                <div className="flex items-center gap-3 mb-3 text-sm text-gray-500">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-medium mb-3 hover:text-gray-600 transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <button className="text-sm font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Read More <ArrowRight size={16} />
                </button>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="px-6 py-3 border border-gray-300 text-sm font-medium hover:border-gray-400 transition-colors">
              View All Articles
            </button>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-light mb-16">Experience</h2>
          
          <div className="space-y-12">
            <div className="border-l-2 border-gray-200 pl-8">
              <div className="text-sm text-gray-500 mb-2">April 2024 – Present</div>
              <h3 className="text-xl font-medium mb-2">VP, Inventory Management, Supply Chain and Returns</h3>
              <div className="text-gray-600 mb-3">Nordstrom</div>
              <p className="text-gray-600 leading-relaxed">
                Leading inventory strategy and fulfillment operations for iconic retail brand. Multi-million dollar shrink reduction and significant FC throughput optimization.
              </p>
            </div>

            <div className="border-l-2 border-gray-200 pl-8">
              <div className="text-sm text-gray-500 mb-2">Jan 2023 – Oct 2023</div>
              <h3 className="text-xl font-medium mb-2">VP, Ocean Consolidation Services</h3>
              <div className="text-gray-600 mb-3">Flexport</div>
              <p className="text-gray-600 leading-relaxed">
                Built and scaled ocean freight consolidation business during market transformation. Strong volume growth with triple-digit P&L improvement.
              </p>
            </div>

            <div className="border-l-2 border-gray-200 pl-8">
              <div className="text-sm text-gray-500 mb-2">May 2021 – Dec 2022</div>
              <h3 className="text-xl font-medium mb-2">Sr Director / VP, Service Delivery & M&A</h3>
              <div className="text-gray-600 mb-3">A.P. Moeller Maersk</div>
              <p className="text-gray-600 leading-relaxed">
                Led global service delivery transformation and M&A integration. Near-doubled on-time delivery managing multi-billion dollar P&L.
              </p>
            </div>

            <div className="border-l-2 border-gray-200 pl-8">
              <div className="text-sm text-gray-500 mb-2">May 2018 – May 2021</div>
              <h3 className="text-xl font-medium mb-2">Sr Manager, Grocery Distribution</h3>
              <div className="text-gray-600 mb-3">Amazon</div>
              <p className="text-gray-600 leading-relaxed">
                Scaled Amazon Fresh distribution network across multiple markets. Built team from 1 to 300 people with strong conversion increases.
              </p>
            </div>

            <div className="border-l-2 border-gray-200 pl-8">
              <div className="text-sm text-gray-500 mb-2">June 2012 – May 2015</div>
              <h3 className="text-xl font-medium mb-2">Founder and CEO</h3>
              <div className="text-gray-600 mb-3">Easy Taxi Latin America</div>
              <p className="text-gray-600 leading-relaxed">
                Built and scaled ride-hailing platform across 30+ cities in Latin America. Created largest taxi fleet in LatAm with market leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-2xl font-light leading-relaxed text-gray-700 italic mb-6">
            "Transformed supply chain from reactive to proactive, cutting lead times in half while reducing inventory carrying costs by 28%."
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-light mb-8">Let's Connect</h2>
          <p className="text-gray-600 mb-12 leading-relaxed">
            If you're looking to transform your supply chain operations, build high-performing teams, or navigate complex organizational change, I'd love to hear from you.
          </p>
          
          {/* Contact Methods */}
          <div className="grid sm:grid-cols-3 gap-8 mb-16">
            <div>
              <div className="text-sm text-gray-500 mb-2">Email</div>
              <a href="mailto:jose.algara@gmail.com" className="text-gray-900 hover:text-gray-600 transition-colors">
                jose.algara@gmail.com
              </a>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-2">Phone</div>
              <a href="tel:206-245-6474" className="text-gray-900 hover:text-gray-600 transition-colors">
                206-245-6474
              </a>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-2">LinkedIn</div>
              <a 
                href="https://www.linkedin.com/in/jose-algara/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-600 transition-colors"
              >
                View Profile
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="border-t border-gray-200 pt-16">
            <h3 className="text-xl font-medium mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  required
                  className="w-full px-4 py-3 border border-gray-200 focus:border-gray-400 focus:outline-none transition-colors"
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
                  className="w-full px-4 py-3 border border-gray-200 focus:border-gray-400 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Message</label>
                <textarea 
                  name="message" 
                  rows="6" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  required
                  className="w-full px-4 py-3 border border-gray-200 focus:border-gray-400 focus:outline-none resize-none transition-colors"
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
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-100">
        <div className="max-w-3xl mx-auto flex justify-between items-center text-sm text-gray-500">
          <div>© 2025 Jose Algara</div>
          <div className="flex gap-6">
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




