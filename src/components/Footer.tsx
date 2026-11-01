import { Link } from "react-router-dom";
import { Github, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-config";
import { SERVICES } from "@/data/services";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 border-t border-border/50 bg-background/50 relative z-10" aria-label="Site Footer">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand & Bio */}
          <div className="space-y-4">
            <Link to="/" className="text-xl font-bold inline-block">
              <span className="text-gradient">Bijay</span>
              <span className="text-foreground"> Rouniyar</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full Stack Web Developer based in Biratnagar, Nepal. Crafting fast, scalable, and aesthetic web applications with React, TypeScript, and modern engineering practices.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <span>Biratnagar, Morang, Koshi Province, Nepal</span>
            </div>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Selected Projects
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog & Articles
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Socials */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">
              Connect Directly
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  <span>{SITE_CONFIG.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  <span>{SITE_CONFIG.phone} (WhatsApp)</span>
                </a>
              </li>
            </ul>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_CONFIG.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-lg glass glass-hover hover:scale-105 transition-all text-muted-foreground hover:text-foreground"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-lg glass glass-hover hover:scale-105 transition-all text-muted-foreground hover:text-primary"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="p-2.5 rounded-lg glass glass-hover hover:scale-105 transition-all text-muted-foreground hover:text-accent"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} Bijay Rouniyar. All rights reserved.</p>
          <p>
            Designed & Engineered with React, TypeScript & Tailwind CSS in Biratnagar, Nepal.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
