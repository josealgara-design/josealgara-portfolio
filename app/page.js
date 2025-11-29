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
                className="w-64 h-64 rounded-full object-cover object-[center_1%] border-2 border-gray-100 shadow-lg"
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
                <h3 className="text-2xl font-medium">Supply Chain Transformation: From Cost Center to Competitive Advantage</h3>
              </div>
              <p className="text-gray-600 leading-relaxed pl-10">
                I transform global supply chains into resilient competitive advantages by combining aggressive operational restructuring with enterprise-grade digital transformation, delivering immediate and sustainable P&L impact. This approach consistently unlocks significant working capital through tighter inventory control and drives double-digit margin expansion, while stabilizing and accelerating complex networks to drastically improve service reliability and on-time performance through automated network strategies.
              </p>
            </div>

            {/* Service 2 */}
            <div>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm text-gray-400 font-mono">02</span>
                <h3 className="text-2xl font-medium">Executive Leadership Coaching: Accelerate Your Growth</h3>
              </div>
              <p className="text-gray-600 leading-relaxed pl-10">
                I provide executive leadership coaching based on real-world success, specifically designed to accelerate the transition of high-potential leaders into the C-Suite by leveraging my experience driving massive organizational transformation. My framework coaches leaders on how to successfully architect and scale product and engineering teams (from 1 to over 300 people), define the digital strategy and multi-year roadmaps necessary for billion-dollar operations, and establish leadership frameworks that improve team velocity, quality of deliverables, and measurable organizational cost reduction.
              </p>
            </div>

            {/* Service 3 */}
            <div>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm text-gray-400 font-mono">03</span>
                <h3 className="text-2xl font-medium">Operational Maturity Assessment: A VP's Perspective</h3>
              </div>
              <p className="text-gray-600 leading-relaxed pl-10">
                I offer a comprehensive operational maturity assessment framework derived from building, restructuring, and running large-scale supply chains for leaders like Amazon, Nordstrom, and Maersk, providing a data-driven diagnostic that is strictly non-theoretical. This assessment identifies gaps, benchmarks performance against the highest industry standards, and delivers a prioritized, battle-tested roadmap that includes clear ROI expectations grounded in real-world transformation results.
              </p>
            </div>

            {/* Service 4 */}
            <div>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm text-gray-400 font-mono">04</span>
                <h3 className="text-2xl font-medium">AIML & Automation Strategy: Business Value over Technology</h3>
              </div>
              <p className="text-gray-600 leading-relaxed pl-10">
                I specialize in defining and executing AI and automation strategies that directly convert technical capability into business value, not technology for its own sake. Leveraging experience leading the implementation of AI-powered forecasting and optimization engines across global operations, I help executives prioritize quick-win opportunities and ensure the deployment of solutions are responsible, scalable AI systems designed to drive core organizational metrics, such as improved on-time delivery or optimized inventory control.
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

      {/* Contact - Calendly Integration */}
      <section id="contact" className="py-24 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6">Let's Connect</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Ready to transform your supply chain operations? Schedule a conversation to discuss how we can work together.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left Column: Calendly Booking */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-2xl font-medium mb-6">Book a Consultation</h3>
                
                {/* Calendly Button/Link */}
                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    Select a time that works for you, and we'll discuss your supply chain challenges and opportunities.
                  </p>
                  
                  {/* Primary Calendly Button */}
                  <a 
                    href="https://calendly.com/jose-algara/30min" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full px-8 py-4 bg-black text-white text-center text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    Schedule a Call
                  </a>

                  {/* Alternative: Inline Calendly Widget - Uncomment to use */}
                  {/* 
                  <div 
                    className="calendly-inline-widget" 
                    data-url="https://calendly.com/your-calendly-link" 
                    style={{minWidth: '320px', height: '700px'}}
                  ></div>
                  */}

                  <p className="text-sm text-gray-500 text-center">
                    Typical initial consultation sessions are 15-3 minutes
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Alternative Contact & Social */}
            <div className="lg:col-span-5">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium mb-6">Other Ways to Connect</h3>
                  
                  <div className="space-y-4">
                    <a 
                      href="https://www.linkedin.com/in/jose-algara/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors group"
                    >
                      <Linkedin className="text-gray-400 group-hover:text-gray-600" size={20} />
                      <div>
                        <div className="text-sm text-gray-500">LinkedIn</div>
                        <div className="font-medium group-hover:text-gray-600">Connect with me</div>
                      </div>
                    </a>

                    <a 
                      href="mailto:jose.algara@gmail.com"
                      className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors group"
                    >
                      <Mail className="text-gray-400 group-hover:text-gray-600" size={20} />
                      <div>
                        <div className="text-sm text-gray-500">Email</div>
                        <div className="font-medium group-hover:text-gray-600">jose.algara@gmail.com</div>
                      </div>
                    </a>

                    <a 
                      href="tel:206-245-6474"
                      className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors group"
                    >
                      <Phone className="text-gray-400 group-hover:text-gray-600" size={20} />
                      <div>
                        <div className="text-sm text-gray-500">Phone</div>
                        <div className="font-medium group-hover:text-gray-600">206-245-6474</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* What to Expect */}
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
                  <h4 className="font-medium mb-3">What to Expect</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">✓</span>
                      <span>Discussion of your current challenges</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">✓</span>
                      <span>Assessment of opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">✓</span>
                      <span>Potential approaches and next steps</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">✓</span>
                      <span>No obligation conversation</span>
                    </li>
                  </ul>
                </div>
              </div>
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






