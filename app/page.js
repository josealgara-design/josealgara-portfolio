"use client";

import React, { useState } from 'react';
import { Menu, X, ArrowRight, Send, Mail, Phone, Linkedin } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.subject && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900 pointer-events-none" />
      <div className="fixed inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%)`
      }} />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/70 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            JOSE ALGARA
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex gap-8">
            {['About', 'Experience', 'Services', 'Contact'].map((item) => (
              <button
                key={item}
                className="text-sm font-medium hover:text-blue-400 transition-colors duration-300 cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-slate-800 p-4">
            {['About', 'Experience', 'Services', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left py-3 text-sm font-medium hover:text-blue-400"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                  Supply Chain
                </span>
                <br />
                <span className="text-white">Reimagined</span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed max-w-md">
                VP Supply Chain & Inventory Management leader building transformative technology solutions and leading high-impact teams across Fortune 500 companies and scaling startups. Over 15 years bridging product strategy with operational excellence.
              </p>
              <div className="flex gap-4 pt-4">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2">
                  Let's Talk <ArrowRight size={20} />
                </button>
                <a href="https://www.linkedin.com/in/jose-algara/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-slate-600 rounded-lg font-semibold hover:border-blue-400 transition-colors duration-300 flex items-center gap-2">
                  <Linkedin size={20} /> LinkedIn
                </a>
              </div>
            </div>
            <div className="relative h-96 hidden md:flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-2 border border-slate-700 h-full w-full overflow-hidden">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'%3E%3Crect fill='%231e293b' width='400' height='500'/%3E%3C/svg%3E"
                  alt="Jose Algara - Supply Chain Leader"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-12">About</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { title: 'Executive Leadership', desc: 'Leading large-scale supply chain transformation at Nordstrom, driving significant inventory accuracy improvements and operational cost reduction through technology enablement' },
              { title: 'Product & Tech Vision', desc: 'Built world-class product organizations across Amazon, Maersk, and Flexport—scaling teams from inception to hundreds of people with proven delivery excellence' },
              { title: 'Startup Founder', desc: 'Founded and scaled Easy Taxi across Latin America achieving market leadership, and launched Linio as the region\'s largest e-commerce operation from the ground up' }
            ].map((item, i) => (
              <div key={i} className="group p-6 border border-slate-700 rounded-xl hover:border-blue-400 transition-all duration-300 hover:bg-slate-900/50 cursor-pointer">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="p-8 border border-slate-700 rounded-xl bg-slate-900/30">
            <h3 className="text-2xl font-semibold mb-4">Quick Facts</h3>
            <div className="grid md:grid-cols-2 gap-6 text-slate-300">
              <div>
                <p className="text-blue-400 font-semibold mb-1">Current Role</p>
                <p>VP, Inventory Management, Supply Chain & Returns at Nordstrom</p>
              </div>
              <div>
                <p className="text-blue-400 font-semibold mb-1">Education</p>
                <p>IE Business School MBA • ITESM Mechatronic Engineering • PMP Certified</p>
              </div>
              <div>
                <p className="text-blue-400 font-semibold mb-1">Focus Areas</p>
                <p>Supply Chain Transformation • Product Management • Omnichannel Operations</p>
              </div>
              <div>
                <p className="text-blue-400 font-semibold mb-1">Expertise</p>
                <p>WMS/TMS/CMS Systems • Logistics Optimization • Last-Mile Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-12">Experience & Impact</h2>
          <div className="space-y-8">
            {[
              { 
                role: 'VP, Inventory Management, Supply Chain and Returns',
                company: 'Nordstrom',
                period: 'April 2024 – Present',
                impact: 'Multi-million dollar shrink reduction • Significant FC throughput optimization • Major reduction in order fulfillment time',
                desc: 'Leading enterprise-wide supply chain transformation including implementation of new Warehouse Management, Transportation Management, and Carrier Management systems. Restructured product organization to improve team velocity while reducing operational costs.'
              },
              { 
                role: 'VP, Ocean Consolidation Services',
                company: 'Flexport',
                period: 'Jan 2023 – Oct 2023',
                impact: 'Strong double-digit volume growth • Triple-digit basis point P&L improvement • Near-perfect on-time performance achievement',
                desc: 'Built end-to-end pallet-level solutions for SMB customers. Automated shipment planning processes, redefined network and trade-lane strategy, and implemented new charge management to improve business take rate.'
              },
              { 
                role: 'Sr Director / VP, Head of Service Delivery Portfolio and M&A',
                company: 'A.P. Moeller Maersk',
                period: 'May 2021 – Dec 2022',
                impact: 'Near-double on-time delivery performance • Multi-billion dollar ocean P&L ownership • Multiple major acquisitions totaling billions',
                desc: 'Led digital transformation vision for ocean logistics operations. Dramatically reduced network reliability issues and overbooking misses. Successfully completed several major M&A integrations including freight services and logistics providers.'
              },
              { 
                role: 'Sr Manager, Head of Grocery and General Merchandise Distribution',
                company: 'Amazon',
                period: 'May 2018 – May 2021',
                impact: 'Strong double-digit conversion increase • Significant fulfillment center throughput improvement • Built team from single digit to hundreds',
                desc: 'Redesigned checkout experience with personalized delivery recommendations for grocery business. Led next-generation distribution center technology strategy including new WMS implementation and capacity optimization framework.'
              },
              { 
                role: 'Sr Manager, Amazon Flex, DP Engagement, Scheduling and Pricing',
                company: 'Amazon',
                period: 'March 2016 – May 2018',
                impact: 'Massive driver engagement improvement • Millions of weekly packages delivered • Global scaling across continents',
                desc: 'Led driver engagement and last-mile delivery strategy for independent contractor network. Built global product teams for scheduling, pricing, and operations across grocery and express delivery services in multiple countries.'
              },
              { 
                role: 'Founder and CEO',
                company: 'Easy Taxi Latin America',
                period: 'June 2012 – May 2015',
                impact: 'Largest taxi fleet in Latin America • Significant market share in key markets • Exceptional weekly growth rate',
                desc: 'Launched and scaled on-demand transportation operations across seven Latin American countries. Managed thousands of daily rides and hundreds of team members. Successfully exited through acquisition by Cabify.'
              },
              { 
                role: 'Managing Director and Founding Team, Inventory Management, Logistics and Operations',
                company: 'Linio',
                period: 'Jan 2011 – May 2012',
                impact: 'Achieved market leadership position in first year • Exceptional on-time delivery rates • Thousands of daily shipments',
                desc: 'Launched company and structured logistics and operations from inception. Defined strategy, processes, and technology roadmap for warehouse and last-mile platforms. Led organization responsible for all fulfillment operations.'
              }
            ].map((exp, i) => (
              <div key={i} className="group p-8 border border-slate-700 rounded-xl hover:border-blue-400 transition-all duration-300 hover:bg-slate-900/50 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                    <p className="text-blue-400 font-semibold text-sm mt-1">{exp.company} • {exp.period}</p>
                  </div>
                  <ArrowRight className="text-slate-600 group-hover:text-blue-400 transition-colors mt-2 flex-shrink-0" />
                </div>
                <p className="text-slate-400 mb-3">{exp.desc}</p>
                <div className="pt-3 border-t border-slate-600">
                  <p className="text-blue-300 font-semibold text-sm">{exp.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-4">Advisory & Consulting</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl">Open to strategic consulting and advisory roles with companies and startups looking to transform their supply chain operations and build innovative technology products.</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                title: 'Supply Chain Transformation', 
                items: ['End-to-end supply chain strategy', 'Omnichannel operating models', 'Warehouse & fulfillment optimization', 'Last-mile delivery solutions'] 
              },
              { 
                title: 'Product & Technology Strategy', 
                items: ['Product roadmap development', 'Enterprise system selection (WMS/TMS/CMS)', 'Technology transformation strategy', 'Startup product-market fit validation'] 
              },
              { 
                title: 'Operations & Execution', 
                items: ['Operational efficiency programs', 'Cost reduction initiatives', 'Network optimization', 'Performance metrics & KPIs'] 
              },
              { 
                title: 'Leadership & Teams', 
                items: ['Building high-performing organizations', 'Scaling product teams', 'Mentoring & executive coaching', 'Change management & org design'] 
              }
            ].map((service, i) => (
              <div key={i} className="p-6 border border-slate-700 rounded-xl hover:border-blue-400 transition-all duration-300 group cursor-pointer hover:bg-slate-900/50">
                <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, j) => (
                    <li key={j} className="text-slate-400 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 px-6 mb-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center">Let's Connect</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="tel:206-245-6474" className="p-6 border border-slate-700 rounded-xl hover:border-blue-400 hover:bg-slate-900/50 transition-all text-center cursor-pointer">
              <Phone className="mx-auto mb-3 text-blue-400" size={24} />
              <p className="text-sm text-slate-400">Phone</p>
              <p className="font-semibold">206-245-6474</p>
            </a>
            <a href="mailto:jose.algara@gmail.com" className="p-6 border border-slate-700 rounded-xl hover:border-blue-400 hover:bg-slate-900/50 transition-all text-center cursor-pointer">
              <Mail className="mx-auto mb-3 text-blue-400" size={24} />
              <p className="text-sm text-slate-400">Email</p>
              <p className="font-semibold">jose.algara@gmail.com</p>
            </a>
            <a href="https://www.linkedin.com/in/jose-algara/" target="_blank" rel="noopener noreferrer" className="p-6 border border-slate-700 rounded-xl hover:border-blue-400 hover:bg-slate-900/50 transition-all text-center cursor-pointer">
              <Linkedin className="mx-auto mb-3 text-blue-400" size={24} />
              <p className="text-sm text-slate-400">LinkedIn</p>
              <p className="font-semibold">View Profile</p>
            </a>
          </div>

          <div className="p-8 border border-slate-700 rounded-xl bg-slate-900/30">
            <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                />
              </div>
              <input 
                type="text" 
                name="subject"
                placeholder="Subject" 
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
              />
              <textarea 
                name="message"
                placeholder="Tell me about your project or needs..." 
                rows="6" 
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-blue-400 focus:outline-none transition-colors resize-none"
              />
              <button 
                onClick={handleSubmit}
                className={`w-full px-6 py-3 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                  submitted 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : 'bg-gradient-to-r from-blue-500 to-cyan-400 text-black hover:shadow-lg hover:shadow-blue-500/50'
                }`}
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
          <p className="text-slate-700 text-sm mt-2">VP Supply Chain | Founder | Executive Coach</p>
        </div>
      </footer>
    </div>
  );
}
