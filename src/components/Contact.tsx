import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Instagram, Mail, ArrowUpRight, Phone, MessageCircle } from "lucide-react";

const socials = [
  {
    name: "GitHub",
    handle: "@BijjuVaiii",
    href: "https://github.com/BijjuVaiii",
    icon: Github,
    color: "group-hover:text-foreground",
  },
  {
    name: "LinkedIn",
    handle: "bijay-rouniyar",
    href: "https://www.linkedin.com/in/bijay-rouniyar/",
    icon: Linkedin,
    color: "group-hover:text-[#0077B5]",
  },
  {
    name: "Instagram",
    handle: "@bijju_69",
    href: "https://www.instagram.com/bijju_69/",
    icon: Instagram,
    color: "group-hover:text-[#E4405F]",
  },
  {
    name: "WhatsApp",
    handle: "+977-9807060125",
    href: "https://wa.me/9779807060125",
    icon: MessageCircle,
    color: "group-hover:text-[#25D366]",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 px-6 relative" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's build something{" "}
            <span className="text-gradient">together</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass rounded-xl p-5 glass-hover flex flex-col items-center gap-3 hover-glow text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className={`p-3 rounded-lg bg-muted transition-colors ${social.color}`}>
                <social.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold group-hover:text-primary transition-colors">
                  {social.name}
                </p>
                <p className="text-xs text-muted-foreground">{social.handle}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="mailto:guptabijay61@gmail.com"
            className="group glass rounded-xl p-6 glass-hover flex items-center gap-4 hover-glow"
          >
            <div className="p-3 rounded-lg bg-muted group-hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <p className="font-semibold group-hover:text-primary transition-colors">
                Email Me
              </p>
              <p className="text-sm text-muted-foreground">guptabijay61@gmail.com</p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

          <a
            href="tel:+9779807060125"
            className="group glass rounded-xl p-6 glass-hover flex items-center gap-4 hover-glow"
          >
            <div className="p-3 rounded-lg bg-muted group-hover:text-primary transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <p className="font-semibold group-hover:text-primary transition-colors">
                Call Me
              </p>
              <p className="text-sm text-muted-foreground">+977-9807060125</p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        </motion.div>

        {/* Email CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="mailto:guptabijay61@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:scale-105 transition-all duration-300 hover-glow"
          >
            <Mail className="w-5 h-5" />
            <span>Say Hello</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
