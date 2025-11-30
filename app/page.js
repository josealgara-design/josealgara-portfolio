"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Send, Mail, Phone, Linkedin, BookOpen, Calendar, Clock, Globe } from 'lucide-react';

export default function Page() {
  const [language, setLanguage] = useState('en'); // 'en' or 'es'
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Update HTML lang attribute when language changes
  useEffect(() => {
    document.documentElement.lang = language;
    
    // Update meta tags dynamically
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    
    if (metaDescription) {
      metaDescription.setAttribute('content', translations[language].meta.description);
    }
    if (metaKeywords) {
      metaKeywords.setAttribute('content', translations[language].meta.keywords);
    }
    
    // Update page title
    document.title = translations[language].meta.title;
  }, [language]);

  // Translations object
  const translations = {
    en: {
      meta: {
        title: "Jose Algara - Supply Chain Transformation & Executive Leadership",
        description: "VP Supply Chain leader with 20+ years transforming operations at Amazon, Nordstrom, Maersk & Flexport. Expert in AI-powered optimization, inventory management, and executive coaching.",
        keywords: "supply chain transformation, inventory management, executive coaching, AI automation, supply chain optimization, operations leadership, logistics consultant"
      },
      nav: {
        whatIDo: "What I Do",
        insights: "Insights",
        contact: "Contact"
      },
      hero: {
        title1: "Transform your Supply Chain",
        title2: "into a Value Engine",
        bio1: "With 20+ years optimizing supply chains, leading digital transformations and building technology for companies like Amazon, Nordstrom, A.P. Moeller Maersk and Flexport, I help companies turn their supply chains into a strategic advantage.",
        bio2: "Launching companies and leading operations across 12 countries taught me this: lasting transformation requires multi-year vision built incrementally with laser-focused execution. Today, I leverage AI to modernize supply chains—optimizing the flow of merchandise from manufacturing floors to customers' hands.",
        bio3: "I create solutions that scale with growth and pivot with change, turning operational complexity into competitive advantage.",
        cta1: "Let's work together",
        cta2: "LinkedIn"
      },
      services: {
        title: "What I Do",
        service1: {
          number: "01",
          title: "Supply Chain Transformation: From Cost Center to Competitive Advantage",
          description: "I transform global supply chains into resilient competitive advantages by combining aggressive operational restructuring with enterprise-grade digital transformation, delivering immediate and sustainable P&L impact. This approach consistently unlocks significant working capital through tighter inventory control and drives double-digit margin expansion, while stabilizing and accelerating complex networks to drastically improve service reliability and on-time performance through automated network strategies."
        },
        service2: {
          number: "02",
          title: "Executive Leadership Coaching: Accelerate Your Growth",
          description: "I provide executive leadership coaching based on real-world success, specifically designed to accelerate the transition of high-potential leaders into the C-Suite by leveraging my experience driving massive organizational transformation. My framework coaches leaders on how to successfully architect and scale product and engineering teams (from 1 to over 300 people), define the digital strategy and multi-year roadmaps necessary for billion-dollar operations, and establish leadership frameworks that improve team velocity, quality of deliverables, and measurable organizational cost reduction."
        },
        service3: {
          number: "03",
          title: "Operational Maturity Assessment: A VP's Perspective",
          description: "I offer a comprehensive operational maturity assessment framework derived from building, restructuring, and running large-scale supply chains for leaders like Amazon, Nordstrom, and Maersk, providing a data-driven diagnostic that is strictly non-theoretical. This assessment identifies gaps, benchmarks performance against the highest industry standards, and delivers a prioritized, battle-tested roadmap that includes clear ROI expectations grounded in real-world transformation results."
        },
        service4: {
          number: "04",
          title: "AIML & Automation Strategy: Business Value over Technology",
          description: "I specialize in defining and executing AI and automation strategies that directly convert technical capability into business value, not technology for its own sake. Leveraging experience leading the implementation of AI-powered forecasting and optimization engines across global operations, I help executives prioritize quick-win opportunities and ensure the deployment of solutions are responsible, scalable AI systems designed to drive core organizational metrics, such as improved on-time delivery or optimized inventory control."
        }
      },
      approach: {
        title: "My Approach",
        intro: "I've found that the most successful supply chain transformations happen when we address three levels simultaneously:",
        people: {
          title: "People",
          description: "I coach leaders to become strategists who can scale teams from 1 to 300+. Building the right culture and capabilities is foundational—technology alone never wins."
        },
        processes: {
          title: "Processes",
          description: "I reimagine workflows through innovation and emerging technologies, ensuring operations are both efficient and flexible enough to pivot when markets change."
        },
        technology: {
          title: "Technology",
          description: "I deploy cutting-edge solutions—from AI-powered forecasting to enterprise systems—that create measurable competitive advantage. The right tools amplify great strategy."
        },
        conclusion: "This comprehensive approach is what turns operations from cost centers into growth engines."
      },
      blog: {
        title: "Insights & Perspectives",
        subtitle: "Thoughts on supply chain, AI, and operational excellence",
        posts: [
          {
            title: "AI-Powered Demand Forecasting: The Future of Inventory Management",
            excerpt: "Discover how artificial intelligence is revolutionizing demand forecasting accuracy and reducing stockouts by up to 40%.",
            date: "November 2024",
            readTime: "8 min read",
            category: "AI & Technology"
          },
          {
            title: "From 1 to 300: Scaling High-Performance Supply Chain Teams",
            excerpt: "Lessons learned building and scaling operations teams across Fortune 500 companies and startups.",
            date: "October 2024",
            readTime: "6 min read",
            category: "Leadership"
          },
          {
            title: "The Hidden Cost of Inventory: Beyond Carrying Costs",
            excerpt: "Why traditional inventory metrics miss the mark and what you should be measuring instead.",
            date: "September 2024",
            readTime: "5 min read",
            category: "Strategy"
          }
        ],
        viewAll: "View All Articles"
      },
      testimonial: "Transformed supply chain from reactive to proactive, cutting lead times in half while reducing inventory carrying costs by 28%.",
      contact: {
        title: "Let's Connect",
        subtitle: "Ready to transform your supply chain operations? Schedule a conversation to discuss how we can work together.",
        bookConsultation: "Book a Consultation",
        bookDescription: "Select a time that works for you, and we'll discuss your supply chain challenges and opportunities.",
        scheduleCTA: "Schedule a Call",
        sessionNote: "Typical initial consultation sessions are 15-30 minutes",
        otherWays: "Other Ways to Connect",
        linkedin: "LinkedIn",
        connectWithMe: "Connect with me",
        email: "Email",
        phone: "Phone",
        whatToExpect: "What to Expect",
        expectations: [
          "Discussion of your current challenges",
          "Assessment of opportunities",
          "Potential approaches and next steps",
          "No obligation conversation"
        ]
      },
      footer: {
        copyright: "© 2025 Jose Algara",
        linkedin: "LinkedIn",
        email: "Email"
      },
      form: {
        fillAllFields: "Please fill in all fields",
        errorMessage: "Something went wrong. Please try emailing directly at jose.algara@gmail.com"
      }
    },
    es: {
      meta: {
        title: "Jose Algara - Transformación de Cadena de Suministro y Liderazgo Ejecutivo",
        description: "Líder VP de Cadena de Suministro con más de 20 años transformando operaciones en Amazon, Nordstrom, Maersk y Flexport. Experto en optimización con IA, gestión de inventario y coaching ejecutivo.",
        keywords: "transformación cadena de suministro, gestión de inventario, coaching ejecutivo, automatización IA, optimización logística, liderazgo operacional, consultor logística"
      },
      nav: {
        whatIDo: "Qué Hago",
        insights: "Perspectivas",
        contact: "Contacto"
      },
      hero: {
        title1: "Transforma tu Cadena de Suministro",
        title2: "en un Motor de Valor",
        bio1: "Con más de 20 años optimizando cadenas de suministro, liderando transformaciones digitales y construyendo tecnología para empresas como Amazon, Nordstrom, A.P. Moeller Maersk y Flexport, ayudo a las compañías a convertir sus cadenas de suministro en una ventaja estratégica.",
        bio2: "Lanzar empresas y liderar operaciones en 12 países me enseñó esto: la transformación duradera requiere una visión de varios años construida incrementalmente con una ejecución enfocada. Hoy, aprovecho la IA para modernizar las cadenas de suministro, optimizando el flujo de mercancías desde las plantas de fabricación hasta las manos de los clientes.",
        bio3: "Creo soluciones que escalan con el crecimiento y se adaptan al cambio, convirtiendo la complejidad operacional en ventaja competitiva.",
        cta1: "Trabajemos juntos",
        cta2: "LinkedIn"
      },
      services: {
        title: "Qué Hago",
        service1: {
          number: "01",
          title: "Transformación de Cadena de Suministro: De Centro de Costos a Ventaja Competitiva",
          description: "Transformo cadenas de suministro globales en ventajas competitivas resilientes combinando una reestructuración operacional agresiva con transformación digital de nivel empresarial, entregando impacto inmediato y sostenible en el P&L. Este enfoque libera consistentemente capital de trabajo significativo a través de un control de inventario más estricto e impulsa una expansión de márgenes de dos dígitos, mientras estabiliza y acelera redes complejas para mejorar drásticamente la confiabilidad del servicio y el rendimiento de entregas a tiempo mediante estrategias de red automatizadas."
        },
        service2: {
          number: "02",
          title: "Coaching de Liderazgo Ejecutivo: Acelera tu Crecimiento",
          description: "Proporciono coaching de liderazgo ejecutivo basado en éxito del mundo real, específicamente diseñado para acelerar la transición de líderes de alto potencial al C-Suite aprovechando mi experiencia impulsando transformación organizacional masiva. Mi marco entrena a los líderes sobre cómo arquitecturar y escalar exitosamente equipos de producto e ingeniería (de 1 a más de 300 personas), definir la estrategia digital y hojas de ruta multianuales necesarias para operaciones de miles de millones de dólares, y establecer marcos de liderazgo que mejoren la velocidad del equipo, la calidad de los entregables y la reducción medible de costos organizacionales."
        },
        service3: {
          number: "03",
          title: "Evaluación de Madurez Operacional: Perspectiva de un VP",
          description: "Ofrezco un marco integral de evaluación de madurez operacional derivado de construir, reestructurar y dirigir cadenas de suministro a gran escala para líderes como Amazon, Nordstrom y Maersk, proporcionando un diagnóstico basado en datos que es estrictamente no teórico. Esta evaluación identifica brechas, compara el rendimiento con los más altos estándares de la industria y entrega una hoja de ruta priorizada y probada en batalla que incluye expectativas claras de ROI fundamentadas en resultados reales de transformación."
        },
        service4: {
          number: "04",
          title: "Estrategia de IA/ML y Automatización: Valor de Negocio sobre Tecnología",
          description: "Me especializo en definir y ejecutar estrategias de IA y automatización que convierten directamente la capacidad técnica en valor de negocio, no tecnología por sí misma. Aprovechando la experiencia liderando la implementación de pronósticos impulsados por IA y motores de optimización en operaciones globales, ayudo a los ejecutivos a priorizar oportunidades de victorias rápidas y asegurar el despliegue de soluciones que son sistemas de IA responsables y escalables diseñados para impulsar métricas organizacionales centrales, como mejorar la entrega a tiempo o optimizar el control de inventario."
        }
      },
      approach: {
        title: "Mi Enfoque",
        intro: "He descubierto que las transformaciones de cadena de suministro más exitosas ocurren cuando abordamos tres niveles simultáneamente:",
        people: {
          title: "Personas",
          description: "Entreno a los líderes para que se conviertan en estrategas que puedan escalar equipos de 1 a más de 300. Construir la cultura y las capacidades correctas es fundamental: la tecnología sola nunca gana."
        },
        processes: {
          title: "Procesos",
          description: "Reimagino los flujos de trabajo a través de la innovación y las tecnologías emergentes, asegurando que las operaciones sean eficientes y lo suficientemente flexibles para adaptarse cuando los mercados cambien."
        },
        technology: {
          title: "Tecnología",
          description: "Implemento soluciones de vanguardia, desde pronósticos impulsados por IA hasta sistemas empresariales, que crean una ventaja competitiva medible. Las herramientas correctas amplifican la gran estrategia."
        },
        conclusion: "Este enfoque integral es lo que convierte las operaciones de centros de costos en motores de crecimiento."
      },
      blog: {
        title: "Perspectivas e Ideas",
        subtitle: "Reflexiones sobre cadena de suministro, IA y excelencia operacional",
        posts: [
          {
            title: "Pronóstico de Demanda Impulsado por IA: El Futuro de la Gestión de Inventario",
            excerpt: "Descubre cómo la inteligencia artificial está revolucionando la precisión del pronóstico de demanda y reduciendo los quiebres de stock hasta en un 40%.",
            date: "Noviembre 2024",
            readTime: "8 min de lectura",
            category: "IA & Tecnología"
          },
          {
            title: "De 1 a 300: Escalando Equipos de Cadena de Suministro de Alto Rendimiento",
            excerpt: "Lecciones aprendidas construyendo y escalando equipos de operaciones en empresas Fortune 500 y startups.",
            date: "Octubre 2024",
            readTime: "6 min de lectura",
            category: "Liderazgo"
          },
          {
            title: "El Costo Oculto del Inventario: Más Allá de los Costos de Mantenimiento",
            excerpt: "Por qué las métricas tradicionales de inventario no son suficientes y qué deberías medir en su lugar.",
            date: "Septiembre 2024",
            readTime: "5 min de lectura",
            category: "Estrategia"
          }
        ],
        viewAll: "Ver Todos los Artículos"
      },
      testimonial: "Transformó la cadena de suministro de reactiva a proactiva, reduciendo los tiempos de entrega a la mitad mientras disminuía los costos de mantenimiento de inventario en un 28%.",
      contact: {
        title: "Conectemos",
        subtitle: "¿Listo para transformar tus operaciones de cadena de suministro? Agenda una conversación para discutir cómo podemos trabajar juntos.",
        bookConsultation: "Agenda una Consulta",
        bookDescription: "Selecciona un horario que te funcione y discutiremos tus desafíos y oportunidades de cadena de suministro.",
        scheduleCTA: "Agendar una Llamada",
        sessionNote: "Las sesiones de consulta inicial típicas son de 15-30 minutos",
        otherWays: "Otras Formas de Contactar",
        linkedin: "LinkedIn",
        connectWithMe: "Conéctate conmigo",
        email: "Correo Electrónico",
        phone: "Teléfono",
        whatToExpect: "Qué Esperar",
        expectations: [
          "Discusión de tus desafíos actuales",
          "Evaluación de oportunidades",
          "Enfoques potenciales y próximos pasos",
          "Conversación sin obligación"
        ]
      },
      footer: {
        copyright: "© 2025 Jose Algara",
        linkedin: "LinkedIn",
        email: "Correo"
      },
      form: {
        fillAllFields: "Por favor completa todos los campos",
        errorMessage: "Algo salió mal. Por favor intenta enviar un correo directamente a jose.algara@gmail.com"
      }
    }
  };

  const t = translations[language];

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert(t.form.fillAllFields);
      return;
    }

    setSubmitting(true);

    try {
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
        alert(t.form.errorMessage);
      }
    } catch (error) {
      alert(t.form.errorMessage);
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
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-8 py-6 flex justify-between items-center">
          <button onClick={() => scrollToSection('hero')} className="text-xl font-medium" aria-label="Home">
            Jose Algara
          </button>
          <div className="flex items-center gap-10">
            <button onClick={() => scrollToSection('services')} className="text-sm hover:text-gray-600 transition-colors">
              {t.nav.whatIDo}
            </button>
            <button onClick={() => scrollToSection('blog')} className="text-sm hover:text-gray-600 transition-colors">
              {t.nav.insights}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-gray-600 transition-colors">
              {t.nav.contact}
            </button>
            
            {/* Language Toggle */}
            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-gray-200">
              <Globe size={16} className="text-gray-400" aria-hidden="true" />
              <button
                onClick={() => setLanguage('en')}
                className={`text-sm font-medium transition-colors ${
                  language === 'en' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <span className="text-gray-300">/</span>
              <button
                onClick={() => setLanguage('es')}
                className={`text-sm font-medium transition-colors ${
                  language === 'es' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
                }`}
                aria-label="Cambiar a Español"
              >
                ES
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="pt-32 pb-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-tight">
              {t.hero.title1}<br className="hidden sm:block" />
              <span className="sm:inline"> </span>{t.hero.title2}
            </h1>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <img 
                src="/IMG_2031.JPG" 
                alt="Jose Algara - Supply Chain Executive and Leadership Coach" 
                className="w-64 h-64 rounded-full object-cover object-[center_1%] border-2 border-gray-100 shadow-lg"
                width="256"
                height="256"
              />
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>{t.hero.bio1}</p>
                <p>{t.hero.bio2}</p>
                <p>{t.hero.bio3}</p>

                <div className="flex gap-4 pt-4">
                  <button 
                    onClick={() => scrollToSection('contact')} 
                    className="px-8 py-4 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    {t.hero.cta1}
                  </button>
                  <a 
                    href="https://www.linkedin.com/in/jose-algara/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-8 py-4 border border-gray-300 text-sm font-medium hover:border-gray-400 transition-colors"
                  >
                    {t.hero.cta2}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section id="services" className="py-24 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light mb-20">{t.services.title}</h2>
          
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
            {['service1', 'service2', 'service3', 'service4'].map((serviceKey) => (
              <article key={serviceKey}>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-sm text-gray-400 font-mono">{t.services[serviceKey].number}</span>
                  <h3 className="text-2xl font-medium">{t.services[serviceKey].title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-10">
                  {t.services[serviceKey].description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-light mb-6">{t.approach.title}</h2>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-8">
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t.approach.intro}
                </p>
                
                <div className="space-y-6">
                  {['people', 'processes', 'technology'].map((key) => (
                    <div key={key}>
                      <h3 className="text-xl font-medium mb-2">{t.approach[key].title}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {t.approach[key].description}
                      </p>
                    </div>
                  ))}
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed pt-4">
                  {t.approach.conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-light mb-4">{t.blog.title}</h2>
            <p className="text-gray-600 text-lg">{t.blog.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {t.blog.posts.map((post, i) => (
              <article key={i} className="group cursor-pointer">
                <div className="flex items-center gap-3 mb-4 text-sm text-gray-500">
                  <span className="px-3 py-1 bg-white border border-gray-200 text-gray-700 text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock size={14} aria-hidden="true" />
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
                  <Calendar size={14} aria-hidden="true" />
                  <time>{post.date}</time>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="px-8 py-4 border border-gray-300 text-sm font-medium hover:border-gray-400 transition-colors">
              {t.blog.viewAll}
            </button>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-3xl font-light leading-relaxed text-gray-700 italic">
            "{t.testimonial}"
          </blockquote>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6">{t.contact.title}</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-2xl font-medium mb-6">{t.contact.bookConsultation}</h3>
                
                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    {t.contact.bookDescription}
                  </p>
                  
                  <a 
                    href="https://calendly.com/jose-algara/30min" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full px-8 py-4 bg-black text-white text-center text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    {t.contact.scheduleCTA}
                  </a>

                  <p className="text-sm text-gray-500 text-center">
                    {t.contact.sessionNote}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium mb-6">{t.contact.otherWays}</h3>
                  
                  <address className="space-y-4 not-italic">
                    <a 
                      href="https://www.linkedin.com/in/jose-algara/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors group"
                    >
                      <Linkedin className="text-gray-400 group-hover:text-gray-600" size={20} aria-hidden="true" />
                      <div>
                        <div className="text-sm text-gray-500">{t.contact.linkedin}</div>
                        <div className="font-medium group-hover:text-gray-600">{t.contact.connectWithMe}</div>
                      </div>
                    </a>

                    <a 
                      href="mailto:jose.algara@gmail.com"
                      className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors group"
                    >
                      <Mail className="text-gray-400 group-hover:text-gray-600" size={20} aria-hidden="true" />
                      <div>
                        <div className="text-sm text-gray-500">{t.contact.email}</div>
                        <div className="font-medium group-hover:text-gray-600">jose.algara@gmail.com</div>
                      </div>
                    </a>

                    <a 
                      href="tel:+12062456474"
                      className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors group"
                    >
                      <Phone className="text-gray-400 group-hover:text-gray-600" size={20} aria-hidden="true" />
                      <div>
                        <div className="text-sm text-gray-500">{t.contact.phone}</div>
                        <div className="font-medium group-hover:text-gray-600">206-245-6474</div>
                      </div>
                    </a>
                  </address>
                </div>

                <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
                  <h4 className="font-medium mb-3">{t.contact.whatToExpect}</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {t.contact.expectations.map((expectation, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5" aria-hidden="true">✓</span>
                        <span>{expectation}</span>
                      </li>
                    ))}
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
          <div>{t.footer.copyright}</div>
          <div className="flex gap-8">
            <a href="https://www.linkedin.com/in/jose-algara/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
              {t.footer.linkedin}
            </a>
            <a href="mailto:jose.algara@gmail.com" className="hover:text-gray-900 transition-colors">
              {t.footer.email}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
