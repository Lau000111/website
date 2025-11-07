import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Globe, Mic, BookOpenCheck, Newspaper, Github, Linkedin, Mail, ExternalLink, Award, Users, Briefcase, Star, TrendingUp, Target, Zap, Sparkles, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

/**
 * Modern business portfolio site
 * Built with React + Tailwind + shadcn/ui + framer-motion.
 */
const CONFIG = {
  name: "Your Name",
  title: "Product Designer & UX Strategist",
  rolePitch: "Crafting digital experiences that drive business growth",
  blurb:
    "With 10+ years of experience across disciplines, I help teams ship accessible, human-centered products that convert. I research, prototype, and tell compelling product stories that resonate with users and stakeholders.",
  cta: { label: "View My Work", href: "#resources" },
  portraitUrl:
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
  socials: [
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Github, label: "GitHub", href: "https://github.com" },
    { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
  ],
  nav: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "About", href: "#about" },
  ],
  stats: [
    { value: "120+", label: "Projects Delivered", icon: Briefcase },
    { value: "50+", label: "Happy Clients", icon: Users },
    { value: "15+", label: "Industry Awards", icon: Award },
    { value: "98%", label: "Client Satisfaction", icon: Star },
  ],
  services: [
    {
      title: "UX Research & Strategy",
      icon: Target,
      description: "Deep user insights that inform product decisions and drive measurable business outcomes.",
      features: ["User interviews", "Usability testing", "Journey mapping", "Competitive analysis"]
    },
    {
      title: "Product Design",
      icon: Sparkles,
      description: "Beautiful, intuitive interfaces that users love and that align with your business goals.",
      features: ["UI/UX design", "Design systems", "Prototyping", "Visual design"]
    },
    {
      title: "Accessibility Consulting",
      icon: Globe,
      description: "WCAG-compliant designs that reach wider audiences and reduce legal risk.",
      features: ["WCAG audits", "Inclusive design", "Documentation", "Team training"]
    },
  ],
  testimonials: [
    {
      text: "Working with them transformed our product. User engagement increased by 156% in just 3 months.",
      author: "Sarah Chen",
      role: "CEO, TechStart Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
      text: "The accessibility improvements opened our platform to thousands of new users. Best investment we made.",
      author: "Michael Roberts",
      role: "Product Lead, FinanceApp",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
    },
    {
      text: "Their strategic approach to UX research saved us 6 months of development time and countless resources.",
      author: "Emily Taylor",
      role: "VP Product, DataCorp",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    },
  ],
  highlights: [
    {
      title: "Accessibility @ Scale",
      icon: Globe,
      text: "Led accessibility programs across 20+ products and 6 teams, ensuring WCAG 2.1 AA compliance.",
      metric: "100% compliance rate"
    },
    {
      title: "Talks & Workshops",
      icon: Mic,
      text: "International speaker at design conferences, sharing insights on inclusive UX and product strategy.",
      metric: "30+ events annually"
    },
    {
      title: "Research & Writing",
      icon: Newspaper,
      text: "Published case studies and UX articles reaching 50k+ designers and product leaders.",
      metric: "50k+ readers"
    },
  ],
  featured: [
    {
      badge: "Case Study",
      title: "Redesigning enterprise SaaS onboarding",
      desc: "Reduced user drop-off by 26% through streamlined identity verification and contextual microcopy.",
      href: "#",
      impact: "26% increase in conversions",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop"
    },
    {
      badge: "Article",
      title: "Accessible design reviews that actually work",
      desc: "A practical framework any team can implement in under 45 minutes to catch accessibility issues early.",
      href: "#",
      impact: "Featured in Design Weekly",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop"
    },
    {
      badge: "Workshop",
      title: "Designing for cognitive load",
      desc: "Hands-on activities and frameworks to identify and eliminate friction in complex user interfaces.",
      href: "#",
      impact: "Taught to 500+ designers",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop"
    },
  ],
};

function LogoMark() {
  return (
    <motion.a
      href="#top"
      className="group inline-flex items-center gap-3"
      whileHover={{ x: 2 }}
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[#0b1120]/15 bg-white/85 shadow-sm backdrop-blur">
        <span className="absolute h-7 w-7 rotate-45 rounded-[30%] bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#334155] opacity-90" />
        <span className="relative h-2 w-6 rounded-full bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#22D3EE]" />
      </span>
      <span className="text-sm font-semibold uppercase tracking-[0.4em] text-[#0f172a] transition-colors group-hover:text-[#6366F1]">
        {CONFIG.name}
      </span>
    </motion.a>
  );
}

function MenuButton({ isOpen, onToggle }) {
  return (
    <motion.button
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close navigation" : "Open navigation"}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition ${
        isOpen
          ? "border-[#6366F1]/40 bg-[#6366F1]/10 text-[#6366F1]"
          : "border-[#0f172a]/15 bg-white/60 text-[#0f172a] hover:border-[#6366F1]/30 hover:text-[#6366F1]"
      }`}
      whileTap={{ scale: 0.94 }}
      whileHover={{ y: -1 }}
    >
      <Menu className="h-3.5 w-3.5" />
      <span>{isOpen ? "Close" : "Menu"}</span>
    </motion.button>
  );
}

function NavOverlay({ isOpen, onClose }) {
  return (
    <motion.div
      initial={{ y: "-100%", opacity: 0 }}
      animate={{
        y: isOpen ? 0 : "-100%",
        opacity: isOpen ? 1 : 0,
      }}
      transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
      className="fixed inset-0 z-[60] bg-[#0b1120]/95 backdrop-blur-xl"
      style={{ pointerEvents: isOpen ? "auto" : "none" }}
    >
      <div className="mx-auto flex h-full w-full max-w-6xl flex-col px-6 py-10 text-white">
        <div className="flex items-center justify-between">
          <LogoMark />
          <motion.button
            onClick={onClose}
            whileTap={{ scale: 0.92 }}
            aria-label="Close navigation"
            className="rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-semibold tracking-wide backdrop-blur transition hover:border-white/30"
          >
            Close
          </motion.button>
        </div>

        <div className="flex flex-1 flex-col justify-center gap-12">
          <div className="space-y-6">
            {CONFIG.nav.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={onClose}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  y: isOpen ? 0 : 20,
                }}
                transition={{ duration: 0.4, delay: 0.12 + index * 0.08 }}
                className="group block text-4xl font-semibold tracking-tight text-white transition-colors hover:text-[#6366F1] sm:text-5xl"
              >
                <span className="relative inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-white/30 transition-colors group-hover:bg-[#6366F1]" />
                  {item.label}
                </span>
              </motion.a>
            ))}
          </div>

          <div className="space-y-4 text-sm text-white/70">
            <p className="max-w-md leading-relaxed">
              From performance strategy to polished design systems, I partner with ambitious teams to craft experiences that drive measurable growth.
            </p>
            <div className="flex flex-wrap gap-3">
              {CONFIG.socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 10 }}
                  transition={{ duration: 0.35, delay: 0.35 }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70 transition hover:border-[#6366F1] hover:text-[#6366F1]"
                >
                  <social.icon className="h-4 w-4" />
                  {social.label}
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 10 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="flex flex-col gap-4 border-t border-white/10 pt-6 text-white/70 sm:flex-row sm:items-center sm:justify-between"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-white/40">Available Worldwide</span>
            <Button asChild size="lg" className="rounded-full bg-white px-8 py-6 text-sm font-semibold uppercase tracking-[0.35em] text-[#0f172a] shadow-lg hover:bg-[#6366F1] hover:text-white">
              <a href="/contact.html" onClick={onClose}>
                Contact
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [navOpen, setNavOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? 'border-b border-slate-200/50 bg-white/90 shadow-lg backdrop-blur-xl' 
            : 'border-b border-white/10 bg-white/70 backdrop-blur-3xl'
        }`}
      >
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <LogoMark />

          <div className="flex items-center gap-3">
            <Button
              asChild
              className="rounded-full bg-[#0f172a] px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-md transition hover:bg-[#6366F1]"
            >
              <a href="/contact.html">Let's Talk</a>
            </Button>
            <MenuButton isOpen={navOpen} onToggle={() => setNavOpen((prev) => !prev)} />
          </div>
        </div>
      </motion.header>
      
      <div className="h-20" />

      <NavOverlay isOpen={navOpen} onClose={() => setNavOpen(false)} />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1120] via-[#0f172a] to-[#1f2937]">
      {/* Modern mesh gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.18),transparent_52%),radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.12),transparent_55%)]" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -left-20 top-20 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#6366F1]/25 to-transparent blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -right-20 bottom-20 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#22D3EE]/18 to-transparent blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:py-32 lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#6366F1]/30 bg-[#6366F1]/10 px-4 py-2 text-sm font-medium text-[#6366F1] backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6366F1] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#6366F1]"></span>
            </span>
            Available for new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-5xl font-black tracking-tight text-white sm:text-7xl lg:text-8xl"
          >
            {CONFIG.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-6 text-xl font-semibold text-[#E5E7EB] sm:text-2xl"
          >
            {CONFIG.title}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#E5E7EB] to-[#F59E0B] sm:text-4xl"
          >
            {CONFIG.rolePitch}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300"
          >
            {CONFIG.blurb}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-[#F59E0B] to-[#EA580C] px-8 py-6 text-base font-bold text-white shadow-2xl hover:shadow-[#F59E0B]/50 border-0">
                <a href={CONFIG.cta.href} className="flex items-center gap-2">
                  {CONFIG.cta.label}
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>

            <div className="flex items-center gap-3">
              {CONFIG.socials.map((s, index) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:border-[#F59E0B] hover:bg-[#F59E0B] hover:shadow-lg hover:shadow-[#F59E0B]/50"
                >
                  <s.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-2 shadow-2xl backdrop-blur-xl sm:mx-8 lg:mx-0"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Avatar className="absolute inset-0 h-full w-full">
                <AvatarImage src={CONFIG.portraitUrl} className="h-full w-full object-cover" />
                <AvatarFallback className="h-full w-full bg-gradient-to-br from-[#6366F1] to-[#0f172a] text-7xl font-bold text-white">
                  {CONFIG.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </AvatarFallback>
              </Avatar>
              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/40 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Floating badges */}
          <motion.div
            className="absolute -right-6 top-8 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-md"
            animate={{
              y: [0, -12, 0],
              rotate: [0, 2, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#6366F1] to-[#0f172a]">
                <Globe className="h-4 w-4 text-white" />
              </div>
              <div className="text-xs font-bold text-white">10+ Years</div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -left-6 bottom-8 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-md"
            animate={{
              y: [0, 12, 0],
              rotate: [0, -2, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#FDE68A] to-[#FB923C]">
                <span className="text-sm font-bold text-[#0f172a]">50k+</span>
              </div>
              <div className="text-xs font-bold text-white">Readers</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="relative border-y border-[#F59E0B]/10 bg-gradient-to-r from-[#E5E7EB] via-white to-[#E5E7EB] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {CONFIG.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative text-center"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6366F1]/5 to-[#F59E0B]/5 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <motion.div
                  className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6366F1] to-[#0f172a] text-white shadow-lg"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon className="h-6 w-6" />
                </motion.div>
                <motion.div
                  className="mb-1 text-4xl font-black text-[#0f172a]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm font-medium text-gray-600">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Highlights() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <Badge className="mb-4 border-0 bg-gradient-to-r from-[#F59E0B]/20 to-[#6366F1]/20 px-4 py-1 text-sm font-bold text-[#0f172a]">
          What I Do Best
        </Badge>
        <h2 className="text-4xl font-black tracking-tight text-[#0f172a] sm:text-5xl">
          Core <span className="bg-gradient-to-r from-[#6366F1] to-[#0f172a] bg-clip-text text-transparent">Competencies</span>
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 gap-8 md:grid-cols-3"
      >
        {CONFIG.highlights.map((h, index) => (
          <motion.div key={h.title} variants={itemVariants}>
            <motion.div
              whileHover={{ y: -12 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
            >
              <Card className="group relative overflow-hidden rounded-3xl border-0 bg-gradient-to-br from-white to-gray-50 p-8 shadow-xl transition-all hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-[#F59E0B]/10 to-transparent blur-2xl transition-transform group-hover:scale-150" />
                
                <CardHeader className="p-0 pb-6">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6366F1] to-[#0f172a] text-white shadow-lg shadow-[#6366F1]/30"
                  >
                    <h.icon className="h-8 w-8" />
                  </motion.div>
                  <CardTitle className="mb-2 text-2xl font-black text-[#0f172a]">{h.title}</CardTitle>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/10 px-3 py-1 text-xs font-bold text-[#EA580C]">
                    <TrendingUp className="h-3 w-3" />
                    {h.metric}
                  </div>
                </CardHeader>
                <CardContent className="p-0 text-base leading-relaxed text-gray-600">
                  {h.text}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative bg-gradient-to-br from-[#0f172a] via-[#6366F1] to-[#0f172a] py-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#F59E0B]/10 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-white/5 blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <Badge className="mb-4 border-0 bg-white/20 px-4 py-1 text-sm font-bold text-white backdrop-blur-sm">
            Services
          </Badge>
          <h2 className="mb-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            How I Can <span className="text-[#F59E0B]">Help You</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            Comprehensive design services tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {CONFIG.services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12 }}
            >
              <Card className="group h-full overflow-hidden rounded-3xl border-0 bg-white/10 p-8 backdrop-blur-md transition-all hover:bg-white/20 hover:shadow-2xl hover:shadow-[#F59E0B]/20">
                <CardContent className="p-0">
                  <motion.div
                    className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F59E0B] to-[#EA580C] text-white shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="h-8 w-8" />
                  </motion.div>
                  
                  <h3 className="mb-3 text-2xl font-black text-white">{service.title}</h3>
                  <p className="mb-6 text-base leading-relaxed text-white/80">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                        className="flex items-center gap-2 text-sm text-white/70"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Featured() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="resources" className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <Badge className="mb-4 border-0 bg-gradient-to-r from-[#F59E0B]/20 to-[#6366F1]/20 px-4 py-1 text-sm font-bold text-[#0f172a]">
          Portfolio
        </Badge>
        <h2 className="mb-4 text-4xl font-black tracking-tight text-[#0f172a] sm:text-5xl">
          Featured <span className="bg-gradient-to-r from-[#F59E0B] to-[#EA580C] bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Real-world case studies showcasing measurable business impact
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 gap-8 md:grid-cols-3"
      >
        {CONFIG.featured.map((f, index) => (
          <motion.div key={f.title} variants={itemVariants}>
            <motion.div
              whileHover={{ y: -16 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
            >
              <Card className="group relative h-full overflow-hidden rounded-3xl border-0 bg-white shadow-xl transition-all hover:shadow-2xl">
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <motion.img
                    src={f.image}
                    alt={f.title}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <Badge
                    className="absolute left-4 top-4 border-0 bg-white/90 px-3 py-1 text-xs font-bold text-[#0f172a] shadow-lg backdrop-blur-sm"
                  >
                    {f.badge}
                  </Badge>
                  <motion.div
                    className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md opacity-0 transition-opacity group-hover:opacity-100"
                    whileHover={{ rotate: 45, scale: 1.2 }}
                  >
                    <ArrowUpRight className="h-6 w-6 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <CardContent className="p-8">
                  <div className="mb-3 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-[#F59E0B]" />
                    <span className="text-sm font-bold text-[#F59E0B]">{f.impact}</span>
                  </div>
                  
                  <h3 className="mb-3 text-2xl font-black leading-tight text-[#0f172a]">
                    {f.title}
                  </h3>
                  
                  <p className="mb-6 text-base leading-relaxed text-gray-600">
                    {f.desc}
                  </p>
                  
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Button
                      variant="ghost"
                      asChild
                      className="group/btn -ml-4 px-4 font-bold text-[#6366F1] hover:bg-transparent hover:text-[#0f172a]"
                    >
                      <a href={f.href} className="flex items-center gap-2">
                        View Case Study
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                      </a>
                    </Button>
                  </motion.div>
                </CardContent>

                {/* Top accent line */}
                <motion.div
                  className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-[#6366F1] via-[#F59E0B] to-[#EA580C]"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <Badge className="mb-4 border-0 bg-gradient-to-r from-[#F59E0B]/20 to-[#6366F1]/20 px-4 py-1 text-sm font-bold text-[#0f172a]">
            Client Success Stories
          </Badge>
          <h2 className="mb-4 text-4xl font-black tracking-tight text-[#0f172a] sm:text-5xl">
            What Clients <span className="bg-gradient-to-r from-[#6366F1] to-[#0f172a] bg-clip-text text-transparent">Say</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Don't just take my word for it — hear from the teams I've worked with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {CONFIG.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="group relative h-full overflow-hidden rounded-3xl border-0 bg-white p-8 shadow-lg transition-all hover:shadow-2xl">
                {/* Quote icon background */}
                <div className="absolute -right-4 -top-4 text-[120px] font-bold text-[#6366F1]/5 leading-none">"</div>
                
                <CardContent className="relative p-0">
                  {/* Stars */}
                  <div className="mb-6 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                      >
                        <Star className="h-5 w-5 fill-[#F59E0B] text-[#F59E0B]" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="mb-8 text-lg leading-relaxed text-gray-700">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <Avatar className="h-14 w-14 border-2 border-[#6366F1]/20">
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback className="bg-gradient-to-br from-[#6366F1] to-[#0f172a] text-white font-bold">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold text-[#0f172a]">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>

                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/3 via-transparent to-[#F59E0B]/3 opacity-0 transition-opacity group-hover:opacity-100" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 gap-12 lg:grid-cols-3"
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Badge className="mb-4 border-0 bg-gradient-to-r from-[#F59E0B]/20 to-[#6366F1]/20 px-4 py-1 text-sm font-bold text-[#0f172a]">
            My Approach
          </Badge>
          <h2 className="mb-6 text-4xl font-black tracking-tight text-[#0f172a] sm:text-5xl">
            About <span className="bg-gradient-to-r from-[#6366F1] to-[#0f172a] bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-gray-600">
            I work at the intersection of research, product design, and accessibility. Through deep user research with diverse communities, I uncover insights that transform how teams build products.
          </p>
          <motion.div whileHover={{ x: 5 }}>
            <Button className="rounded-full bg-gradient-to-r from-[#6366F1] to-[#0f172a] px-8 font-bold text-white shadow-lg hover:shadow-xl">
              Download Resume
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-2"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <motion.div
              whileHover={{ y: -12, rotateY: 5 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Card className="group h-full overflow-hidden rounded-3xl border-0 bg-gradient-to-br from-[#6366F1] to-[#0f172a] p-8 shadow-xl transition-all hover:shadow-2xl hover:shadow-[#6366F1]/40">
                <CardHeader className="p-0 pb-4">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: [0, -15, 15, 0] }}
                    transition={{ duration: 0.5 }}
                    className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm"
                  >
                    <Mic className="h-8 w-8 text-white" />
                  </motion.div>
                  <CardTitle className="text-2xl font-black text-white">Speaking</CardTitle>
                </CardHeader>
                <CardContent className="p-0 text-base leading-relaxed text-white/90">
                  International keynote speaker sharing insights on inclusive design, cognitive load, and product strategy at conferences worldwide.
                </CardContent>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm">
                  <Sparkles className="h-3 w-3" />
                  30+ events annually
                </div>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ y: -12, rotateY: -5 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Card className="group h-full overflow-hidden rounded-3xl border-0 bg-gradient-to-br from-[#F59E0B] to-[#EA580C] p-8 shadow-xl transition-all hover:shadow-2xl hover:shadow-[#F59E0B]/40">
                <CardHeader className="p-0 pb-4">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 0.5 }}
                    className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm"
                  >
                    <BookOpenCheck className="h-8 w-8 text-white" />
                  </motion.div>
                  <CardTitle className="text-2xl font-black text-white">Writing</CardTitle>
                </CardHeader>
                <CardContent className="p-0 text-base leading-relaxed text-white/90">
                  Published case studies, UX frameworks, and accessibility guides that help product teams build better, more inclusive experiences.
                </CardContent>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm">
                  <TrendingUp className="h-3 w-3" />
                  50k+ monthly readers
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gradient-to-br from-gray-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-16 text-sm text-gray-600 sm:flex-row sm:px-6 lg:px-8"
      >
        <div className="flex items-center gap-3">
          <LogoMark />
          <span className="hidden sm:inline">·</span>
          <span className="font-bold">© {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-4">
          {CONFIG.socials.map((s, index) => (
            <motion.a
              key={s.label}
              href={s.href}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.2, y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-200 text-gray-700 shadow-md transition-all hover:from-[#6366F1] hover:to-[#0f172a] hover:text-white hover:shadow-xl hover:shadow-[#6366F1]/30"
              aria-label={s.label}
            >
              <s.icon className="h-5 w-5" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
}

export default function App() {
  React.useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Highlights />
        <Services />
        <Featured />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </div>
  );
}
