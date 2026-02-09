import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Instagram, Mail, Phone } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-primary animate-pulse-glow opacity-60 blur-xl" />
              
              {/* Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 glass">
                <img 
                  src={profileImage} 
                  alt="Bijay Rouniyar"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary animate-float" />
              <div className="absolute -bottom-3 -left-3 w-4 h-4 rounded-full bg-accent animate-float" style={{ animationDelay: "1s" }} />
            </div>
          </motion.div>

          {/* Content */}
          <div className="text-center lg:text-left flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full glass text-muted-foreground">
                Full Stack Developer
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Hey, I'm{" "}
              <span className="text-gradient">Bijay</span>
              <span className="text-muted-foreground font-light"> (Bijju)</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A Full Stack Developer who builds{" "}
              <span className="text-foreground font-medium">scalable</span> and{" "}
              <span className="text-foreground font-medium">aesthetic</span> web experiences.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-8 text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <a 
                href="mailto:guptabijay61@gmail.com" 
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>guptabijay61@gmail.com</span>
              </a>
              <span className="hidden sm:block">•</span>
              <a 
                href="https://wa.me/9779807060125" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+977-9807060125</span>
              </a>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover-glow"
              >
                <span className="relative z-10">View Projects</span>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 font-semibold rounded-lg glass glass-hover"
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div
              className="flex items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { icon: Github, href: "https://github.com/BijjuVaiii", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/bijay-rouniyar/", label: "LinkedIn" },
                { icon: Instagram, href: "https://www.instagram.com/bijju_69/", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-full glass glass-hover hover:scale-110 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
