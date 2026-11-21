"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Phone, Linkedin, Globe, Menu, X, Check, Users, Building2, Sparkles } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/jose-algara/30min';
const LINKEDIN_URL = 'https://www.linkedin.com/in/jose-algara/';
const EMAIL = 'jose.algara@gmail.com';

const translations = {
  es: {
    meta: {
      title: 'Jose Algara | Coaching de carrera y transformación con IA',
      description: 'Coaching para profesionales y empresas que quieren crecer en la era de la IA. Más de 20 años liderando transformación digital en Amazon, Maersk, Flexport y Nordstrom.',
    },
    nav: { offers: 'Coaching', companies: 'Empresas', about: 'Sobre mí', book: 'Reserva tu sesión' },
    hero: {
      eyebrow: 'Coaching de carrera y transformación con IA',
      title: 'Haz crecer a tu gente y a tu organización en la era de la IA',
      subtitle: 'Soy Jose Algara. Aprendí a escalar en empresas tech como Amazon y llevé esos aprendizajes a empresas tradicionales como Maersk y Nordstrom, donde hoy lidero la transformación de producto hacia un modelo nativo de IA. Ahora ayudo a profesionales y a empresas a crecer con la IA de su lado.',
      cta1: 'Reserva tu sesión gratis de 30 minutos',
      cta2: 'Coaching para tu empresa',
      proof: ['20+ años liderando transformación', 'Equipos de 300 personas desde cero', '2 empresas fundadas en Latinoamérica'],
    },
    pains: {
      title: '¿Te suena familiar?',
      items: [
        'Sientes que tu carrera se estancó y no sabes cuál es el siguiente paso.',
        'Te ofrecieron liderar un equipo y nadie te enseñó cómo.',
        'La IA está cambiando tu trabajo y quieres estar del lado que gana.',
      ],
      close: 'No tienes que resolverlo solo. Trabajemos juntos en un plan concreto.',
    },
    offers: {
      title: 'Coaching 1:1',
      intro: 'Sesiones de 60 minutos por videollamada. Cada plan se ajusta a lo que necesitas; el punto exacto lo definimos juntos en la sesión de diagnóstico.',
      base: 'USD 250 por sesión · USD 1,000 al mes (4 sesiones)',
      from: 'USD',
      book: 'Empezar con una sesión gratis',
      items: [
        {
          name: 'Sesión de diagnóstico',
          price: 'Gratis',
          format: '30 minutos',
          desc: 'Hablamos de dónde estás, a dónde quieres llegar y si el coaching es para ti. Sin compromiso.',
        },
        {
          name: 'Impulso de carrera',
          price: 'USD 1,000 a 2,000',
          format: '1 a 2 meses · 4 a 8 sesiones',
          desc: 'Para profesionales que buscan un ascenso o un cambio de rol. Sales con un plan de carrera escrito y los próximos pasos claros.',
          featured: true,
        },
        {
          name: 'Liderazgo en la era de la IA',
          price: 'USD 3,000 a 4,000',
          format: '3 a 4 meses · 12 a 16 sesiones',
          desc: 'Para gerentes y directores que lideran equipos mientras la IA cambia cómo trabajan. Incluye acceso por mensaje entre sesiones.',
        },
      ],
      single: '¿Solo necesitas resolver un tema puntual? Reserva una sesión individual por USD 250.',
    },
    companies: {
      title: 'Para empresas: escala tu organización con IA',
      intro: 'Adoptar IA no es comprar herramientas, es cambiar cómo trabaja tu gente. Te ayudo a encontrar dónde la IA genera valor, a llevarla de la idea a producción en semanas y a preparar a tus líderes para escalar el nuevo modelo de trabajo.',
      items: [
        {
          name: 'Diagnóstico de adopción de IA',
          format: '2 a 4 semanas',
          desc: 'Entrevistas con tu equipo directivo, mapa de oportunidades donde la IA genera valor y una hoja de ruta priorizada.',
        },
        {
          name: 'Escalar tu organización con IA',
          format: '3 a 6 meses',
          desc: 'Coaching 1:1 para tus líderes, talleres prácticos para los equipos y acompañamiento mientras adoptan el nuevo modelo de trabajo.',
        },
      ],
      price: 'Cotización a medida',
      cta: 'Hablemos de tu empresa',
    },
    about: {
      title: 'Sobre mí',
      paragraphs: [
        'Soy ingeniero mecatrónico del Tec de Monterrey y tengo un MBA del IE Business School en Madrid. Empecé emprendiendo: cofundé Linio en México y dirigí Easy Taxi en 7 países de Latinoamérica, con un equipo de 350 personas.',
        'Después lideré producto y tecnología en Amazon, Maersk y Flexport. En Amazon construí un equipo de 300 personas desde cero, y en Maersk integré organizaciones en adquisiciones por más de USD 6 mil millones.',
        'Lo que más me define es llevar lo aprendido en empresas tech a empresas que no lo son. Hoy, como VP en Nordstrom, lidero la transición de la organización de producto a un modelo nativo de IA, con agentes de IA en producción.',
      ],
      creds: ['MBA, IE Business School', 'Ingeniería Mecatrónica, Tec de Monterrey', 'Certificación PMP', '4 patentes en EE. UU.'],
    },
    method: {
      title: 'Mi método',
      intro: 'El crecimiento que dura trabaja tres niveles a la vez:',
      items: [
        { name: 'Personas', desc: 'Tu forma de liderar, comunicar y decidir. La tecnología sola nunca gana: gana la gente que sabe usarla.' },
        { name: 'Procesos', desc: 'Cómo organizas tu trabajo y el de tu equipo para avanzar rápido y adaptarte cuando el mercado cambia.' },
        { name: 'Tecnología', desc: 'Usar la IA a tu favor, con criterio de negocio y no por moda.' },
      ],
    },
    contact: {
      title: 'Reserva tu sesión gratis',
      subtitle: '30 minutos por videollamada para conocernos, entender tu situación y ver si puedo ayudarte.',
      expectTitle: 'En la sesión',
      expect: ['Hablamos de tu situación actual', 'Identificamos tus prioridades', 'Te propongo un plan y los próximos pasos', 'Sin compromiso'],
      cta: 'Elegir horario',
      other: 'Otras formas de contacto',
      linkedin: 'LinkedIn',
      email: 'Correo',
      phone: 'Teléfono',
    },
    footer: { rights: 'Jose Algara' },
  },
  en: {
    meta: {
      title: 'Jose Algara | Career coaching and AI transformation',
      description: 'Coaching for professionals and companies that want to grow in the age of AI. 20+ years leading digital transformation at Amazon, Maersk, Flexport and Nordstrom.',
    },
    nav: { offers: 'Coaching', companies: 'Companies', about: 'About', book: 'Book your session' },
    hero: {
      eyebrow: 'Career coaching and AI transformation',
      title: 'Grow your people and your organization in the age of AI',
      subtitle: "I'm Jose Algara. I learned to scale at tech companies like Amazon and brought those lessons to traditional companies like Maersk and Nordstrom, where I lead the product organization's shift to an AI-native operating model. Now I help professionals and companies grow with AI on their side.",
      cta1: 'Book your free 30-minute session',
      cta2: 'Coaching for your company',
      proof: ['20+ years leading transformation', 'Built 300-person teams from zero', 'Founded 2 companies in Latin America'],
    },
    pains: {
      title: 'Sound familiar?',
      items: [
        "You feel your career has stalled and you don't know the next step.",
        'You were asked to lead a team and nobody taught you how.',
        'AI is changing your job and you want to be on the winning side.',
      ],
      close: "You don't have to figure it out alone. Let's build a concrete plan together.",
    },
    offers: {
      title: '1:1 coaching',
      intro: '60-minute video sessions. Every plan adapts to what you need; we set the details together in the discovery session.',
      base: 'USD 250 per session · USD 1,000 per month (4 sessions)',
      from: 'USD',
      book: 'Start with a free session',
      items: [
        {
          name: 'Discovery session',
          price: 'Free',
          format: '30 minutes',
          desc: "We talk about where you are, where you want to go, and whether coaching is right for you. No obligation.",
        },
        {
          name: 'Career boost',
          price: 'USD 1,000 to 2,000',
          format: '1 to 2 months · 4 to 8 sessions',
          desc: 'For professionals going for a promotion or a role change. You leave with a written career plan and clear next steps.',
          featured: true,
        },
        {
          name: 'Leadership in the age of AI',
          price: 'USD 3,000 to 4,000',
          format: '3 to 4 months · 12 to 16 sessions',
          desc: 'For managers and directors leading teams while AI changes how they work. Includes messaging access between sessions.',
        },
      ],
      single: 'Just need help with one specific topic? Book a single session for USD 250.',
    },
    companies: {
      title: 'For companies: scale your organization with AI',
      intro: "Adopting AI isn't buying tools, it's changing how your people work. I help you find where AI creates value, take it from idea to production in weeks, and prepare your leaders to scale the new way of working.",
      items: [
        {
          name: 'AI adoption assessment',
          format: '2 to 4 weeks',
          desc: 'Interviews with your leadership team, a map of where AI creates value, and a prioritized roadmap.',
        },
        {
          name: 'Scale your organization with AI',
          format: '3 to 6 months',
          desc: '1:1 coaching for your leaders, hands-on workshops for teams, and support while they adopt the new way of working.',
        },
      ],
      price: 'Custom quote',
      cta: "Let's talk about your company",
    },
    about: {
      title: 'About me',
      paragraphs: [
        "I'm a mechatronics engineer from Tec de Monterrey with an MBA from IE Business School in Madrid. I started as an entrepreneur: I co-founded Linio in Mexico and ran Easy Taxi across 7 Latin American countries with a 350-person team.",
        'Then I led product and technology at Amazon, Maersk and Flexport. At Amazon I built a 300-person organization from zero, and at Maersk I integrated organizations across more than USD 6 billion in acquisitions.',
        "What defines me most is bringing what I learned at tech companies to companies that aren't. Today, as a VP at Nordstrom, I lead the product organization's shift to an AI-native operating model, with AI agents in production.",
      ],
      creds: ['MBA, IE Business School', 'Mechatronics Engineering, Tec de Monterrey', 'PMP certified', '4 U.S. patents'],
    },
    method: {
      title: 'My approach',
      intro: 'Lasting growth works on three levels at once:',
      items: [
        { name: 'People', desc: 'How you lead, communicate and decide. Technology alone never wins: people who know how to use it do.' },
        { name: 'Processes', desc: 'How you organize your work and your team to move fast and adapt when markets change.' },
        { name: 'Technology', desc: 'Using AI in your favor, with business judgment rather than hype.' },
      ],
    },
    contact: {
      title: 'Book your free session',
      subtitle: '30 minutes on video to get to know each other, understand your situation and see if I can help.',
      expectTitle: 'In the session',
      expect: ['We discuss where you are today', 'We identify your priorities', 'I propose a plan and next steps', 'No obligation'],
      cta: 'Pick a time',
      other: 'Other ways to connect',
      linkedin: 'LinkedIn',
      email: 'Email',
      phone: 'Phone',
    },
    footer: { rights: 'Jose Algara' },
  },
};

export default function Page() {
  const [language, setLanguage] = useState('es');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem('lang');
      if (saved === 'en' || saved === 'es') setLanguage(saved);
    } catch (e) {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = translations[language].meta.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', translations[language].meta.description);
    try { window.localStorage.setItem('lang', language); } catch (e) {}
  }, [language]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const LangToggle = ({ small }) => (
    <div className="flex items-center gap-1.5">
      <Globe size={small ? 14 : 16} className="text-gray-400" aria-hidden="true" />
      {['es', 'en'].map((lng, i) => (
        <React.Fragment key={lng}>
          {i > 0 && <span className="text-gray-300 text-xs">/</span>}
          <button
            onClick={() => setLanguage(lng)}
            className={`${small ? 'text-xs' : 'text-sm'} font-medium transition-colors ${language === lng ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
            aria-label={lng === 'es' ? 'Cambiar a Español' : 'Switch to English'}
            aria-pressed={language === lng}
          >
            {lng.toUpperCase()}
          </button>
        </React.Fragment>
      ))}
    </div>
  );

  const BookButton = ({ children, className = '' }) => (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors text-center ${className}`}
    >
      {children}
      <ArrowRight size={16} aria-hidden="true" />
    </a>
  );

  const navItems = [
    ['offers', t.nav.offers],
    ['companies', t.nav.companies],
    ['about', t.nav.about],
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4">
          <div className="flex justify-between items-center">
            <button onClick={() => scrollToSection('hero')} className="text-lg sm:text-xl font-medium tracking-tight">
              Jose Algara
            </button>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map(([id, label]) => (
                <button key={id} onClick={() => scrollToSection(id)} className="text-sm hover:text-gray-600 transition-colors">
                  {label}
                </button>
              ))}
              <button onClick={() => scrollToSection('contact')} className="text-sm px-4 py-2 bg-black text-white hover:bg-gray-800 transition-colors">
                {t.nav.book}
              </button>
              <div className="pl-4 border-l border-gray-200">
                <LangToggle />
              </div>
            </div>

            <div className="flex items-center gap-4 md:hidden">
              <LangToggle small />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pt-4 pb-2 border-t border-gray-100 mt-4 flex flex-col space-y-3">
              {navItems.map(([id, label]) => (
                <button key={id} onClick={() => scrollToSection(id)} className="text-left py-2 text-sm hover:text-gray-600 transition-colors">
                  {label}
                </button>
              ))}
              <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-sm font-medium">
                {t.nav.book}
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-500 mb-4">{t.hero.eyebrow}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6">{t.hero.title}</h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">{t.hero.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <BookButton className="w-full sm:w-auto">{t.hero.cta1}</BookButton>
              <button
                onClick={() => scrollToSection('companies')}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-gray-300 text-sm font-medium hover:border-gray-500 transition-colors"
              >
                {t.hero.cta2}
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <img
              src="/IMG_2031.JPG"
              alt="Jose Algara"
              className="w-48 h-48 sm:w-72 sm:h-72 rounded-full object-cover object-[center_1%] border-2 border-gray-100 shadow-lg"
              width="288"
              height="288"
            />
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-14 sm:mt-20 grid sm:grid-cols-3 gap-4 sm:gap-8 border-t border-gray-100 pt-8">
          {t.hero.proof.map((p) => (
            <div key={p} className="text-sm sm:text-base text-gray-700 font-medium">{p}</div>
          ))}
        </div>
      </section>

      {/* Pains */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-light mb-10">{t.pains.title}</h2>
          <ul className="space-y-5">
            {t.pains.items.map((item) => (
              <li key={item} className="flex items-start gap-4 text-base sm:text-lg text-gray-700">
                <Check size={20} className="text-gray-900 mt-1 flex-shrink-0" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-base sm:text-lg text-gray-600">{t.pains.close}</p>
        </div>
      </section>

      {/* 1:1 offers */}
      <section id="offers" className="py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Users size={22} aria-hidden="true" />
            <h2 className="text-3xl sm:text-4xl font-light">{t.offers.title}</h2>
          </div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mb-2">{t.offers.intro}</p>
          <p className="text-sm font-medium text-gray-900 mb-12">{t.offers.base}</p>

          <div className="grid md:grid-cols-3 gap-6">
            {t.offers.items.map((o) => (
              <article
                key={o.name}
                className={`flex flex-col p-6 sm:p-8 border rounded-lg ${o.featured ? 'border-gray-900 shadow-md' : 'border-gray-200'}`}
              >
                <h3 className="text-xl font-medium mb-1">{o.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{o.format}</p>
                <p className="text-2xl font-light mb-4">{o.price}</p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-1">{o.desc}</p>
              </article>
            ))}
          </div>

          <p className="mt-8 text-sm sm:text-base text-gray-600">{t.offers.single}</p>
          <div className="mt-8">
            <BookButton className="w-full sm:w-auto">{t.offers.book}</BookButton>
          </div>
        </div>
      </section>

      {/* Companies */}
      <section id="companies" className="py-16 sm:py-24 px-4 sm:px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Building2 size={22} aria-hidden="true" />
            <h2 className="text-3xl sm:text-4xl font-light">{t.companies.title}</h2>
          </div>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mb-12">{t.companies.intro}</p>

          <div className="grid md:grid-cols-2 gap-6">
            {t.companies.items.map((c) => (
              <article key={c.name} className="p-6 sm:p-8 border border-gray-700 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles size={18} className="text-gray-400" aria-hidden="true" />
                  <h3 className="text-xl font-medium">{c.name}</h3>
                </div>
                <p className="text-sm text-gray-400 mb-4">{c.format} · {t.companies.price}</p>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{c.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              {t.companies.cta}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-3xl sm:text-4xl font-light mb-6">{t.about.title}</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              {t.about.creds.map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <Check size={16} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-8 space-y-5 text-base sm:text-lg text-gray-600 leading-relaxed">
            {t.about.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-light mb-4">{t.method.title}</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-10">{t.method.intro}</p>
          <div className="grid md:grid-cols-3 gap-8">
            {t.method.items.map((m, i) => (
              <div key={m.name}>
                <span className="text-sm text-gray-400 font-mono">0{i + 1}</span>
                <h3 className="text-xl font-medium mt-1 mb-2">{m.name}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / booking */}
      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl font-light mb-4">{t.contact.title}</h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8">{t.contact.subtitle}</p>
            <h3 className="text-sm font-medium uppercase tracking-widest text-gray-500 mb-4">{t.contact.expectTitle}</h3>
            <ul className="space-y-2 mb-10 text-gray-700">
              {t.contact.expect.map((e) => (
                <li key={e} className="flex items-start gap-2">
                  <Check size={18} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>{e}</span>
                </li>
              ))}
            </ul>
            <BookButton className="w-full sm:w-auto">{t.contact.cta}</BookButton>
          </div>

          <div className="lg:col-span-5">
            <h3 className="text-lg font-medium mb-4">{t.contact.other}</h3>
            <address className="space-y-3 not-italic">
              {[
                { href: LINKEDIN_URL, icon: Linkedin, label: t.contact.linkedin, value: 'linkedin.com/in/jose-algara', ext: true },
                { href: `mailto:${EMAIL}`, icon: Mail, label: t.contact.email, value: EMAIL },
                { href: 'tel:+12062456474', icon: Phone, label: t.contact.phone, value: '+1 206-245-6474' },
              ].map(({ href, icon: Icon, label, value, ext }) => (
                <a
                  key={label}
                  href={href}
                  {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors group"
                >
                  <Icon className="text-gray-400 group-hover:text-gray-600 flex-shrink-0" size={18} aria-hidden="true" />
                  <div className="min-w-0">
                    <div className="text-xs text-gray-500">{label}</div>
                    <div className="text-sm sm:text-base font-medium break-all">{value}</div>
                  </div>
                </a>
              ))}
            </address>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-8 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-500">
          <div>© {new Date().getFullYear()} {t.footer.rights}</div>
          <div className="flex gap-6 sm:gap-8">
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">LinkedIn</a>
            <a href={`mailto:${EMAIL}`} className="hover:text-gray-900 transition-colors">{t.contact.email}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
