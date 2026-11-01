import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Instagram, Mail, Phone, MapPin, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { SITE_CONFIG } from "@/data/site-config";
import profileWebp from "@/assets/profile.webp";
import profilePng from "@/assets/profile.png";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-24 pb-16" aria-label="Introduction">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Image with Picture WebP fallback */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-primary animate-pulse-glow opacity-60 blur-xl" />
              
              {/* Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 glass">
                <picture>
                  <source srcSet={profileWebp} type="image/webp" />
                  <img 
                    src={profilePng} 
                    alt="Bijay Rouniyar – Full Stack Web Developer in Biratnagar, Nepal"
                    width={320}
                    height={320}
                    fetchPriority="high"
                    className="w-full h-full object-cover object-center"
                  />
                </picture>
              </div>

              {/* Decorative badges */}
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary animate-float" aria-hidden="true" />
              <div className="absolute -bottom-3 -left-3 w-4 h-4 rounded-full bg-accent animate-float" style={{ animationDelay: "1s" }} aria-hidden="true" />
            </div>
          </motion.div>

          {/* Content */}
          <div className="text-center lg:text-left flex-1">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-4"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full glass text-primary border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for New Projects
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full glass text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                Biratnagar, Nepal
              </span>
            </motion.div>

            {/* Exactly one h1 per task specification */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-balance leading-tight"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Full Stack Web Developer in{" "}
              <span className="text-gradient">Biratnagar, Nepal</span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-foreground/90 font-medium mb-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              Hi, I'm <strong className="text-primary font-semibold">Bijay Rouniyar (Bijju)</strong>.
            </motion.p>

            {/* Natural local SEO intro */}
            <motion.p
              className="text-base text-muted-foreground max-w-xl mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Based in Biratnagar, Morang, Koshi Province, Nepal, I engineer fast, responsive websites and modern web applications with React, TypeScript, and Node.js for ambitious businesses across Nepal and remote clients worldwide.
            </motion.p>

            {/* Contact Quick Links */}
            <motion.div
              className="flex flex-col sm:flex-row items-center lg:items-start gap-3 sm:gap-6 mb-7 text-xs sm:text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <a 
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded p-0.5"
                aria-label={`Email ${SITE_CONFIG.email}`}
              >
                <Mail className="w-4 h-4 text-primary" />
                <span>{SITE_CONFIG.email}</span>
              </a>
              <span className="hidden sm:inline-block text-border">•</span>
              <a 
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded p-0.5"
                aria-label="Contact via WhatsApp"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>{SITE_CONFIG.phone}</span>
              </a>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row items-center lg:items-start gap-3.5 mb-8"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                to="/projects"
                className="w-full sm:w-auto text-center px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl transition-all duration-200 hover:scale-105 hover-glow shadow-md shadow-primary/20 flex items-center justify-center gap-2"
              >
                <Briefcase className="w-4 h-4" />
                <span>View Selected Projects</span>
              </Link>
              <Link
                to="/services/web-development-biratnagar"
                className="w-full sm:w-auto text-center px-7 py-3.5 font-semibold rounded-xl glass glass-hover border border-border/70 hover:border-primary/50 transition-all duration-200"
              >
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto text-center px-6 py-3.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact Me →
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              {[
                { icon: Github, href: SITE_CONFIG.socials.github, label: "GitHub Profile" },
                { icon: Linkedin, href: SITE_CONFIG.socials.linkedin, label: "LinkedIn Profile" },
                { icon: Instagram, href: SITE_CONFIG.socials.instagram, label: "Instagram Profile" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-xl glass glass-hover hover:scale-110 transition-all duration-200 text-muted-foreground hover:text-foreground"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
