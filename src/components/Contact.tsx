import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Phone, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-config";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Since this is a static site on GitHub Pages, generate a direct mailto link
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 relative" aria-label="Contact Bijay Rouniyar">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" aria-hidden="true" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-3 block">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Let's build something <span className="text-gradient">extraordinary</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Have a project in mind, need a high-performance website in Nepal, or want to collaborate? I respond promptly to all messages.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="group glass rounded-2xl p-5 glass-hover flex flex-col items-center gap-3 text-center border border-border/60 hover-glow"
          >
            <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                Email Me Directly
              </p>
              <p className="text-xs text-muted-foreground mt-0.5 break-all">
                {SITE_CONFIG.email}
              </p>
            </div>
          </a>

          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group glass rounded-2xl p-5 glass-hover flex flex-col items-center gap-3 text-center border border-border/60 hover-glow"
          >
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-foreground group-hover:text-emerald-400 transition-colors text-sm">
                WhatsApp Chat
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {SITE_CONFIG.phone}
              </p>
            </div>
          </a>

          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="group glass rounded-2xl p-5 glass-hover flex flex-col items-center gap-3 text-center border border-border/60 hover-glow"
          >
            <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                Direct Call
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {SITE_CONFIG.phone}
              </p>
            </div>
          </a>

          <div className="glass rounded-2xl p-5 flex flex-col items-center gap-3 text-center border border-border/60">
            <div className="p-3 rounded-xl bg-accent/10 text-accent">
              <span className="text-base font-bold">NP</span>
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">
                Location
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Biratnagar, Nepal
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form with mailto fallback */}
        <div className="max-w-2xl mx-auto glass rounded-2xl p-8 border border-border/60 shadow-xl">
          <h3 className="text-xl font-bold mb-2 text-foreground">
            Send an Inquiry
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            Fill in your project details below. Clicking 'Send Message' prepares a pre-filled direct email inquiry.
          </p>

          {submitted ? (
            <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
              <p className="font-semibold text-foreground">Message prepared!</p>
              <p className="text-sm text-muted-foreground">
                Your email client was opened. You can also chat directly on{" "}
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline font-medium"
                >
                  WhatsApp ({SITE_CONFIG.phone})
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-muted-foreground uppercase mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Thapa"
                    className="w-full px-4 py-2.5 rounded-xl bg-muted/60 border border-border/60 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/60 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-muted-foreground uppercase mb-1.5">
                    Your Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-muted/60 border border-border/60 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/60 text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-semibold text-muted-foreground uppercase mb-1.5">
                  Subject / Service Needed
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Website Development for Business in Biratnagar"
                  className="w-full px-4 py-2.5 rounded-xl bg-muted/60 border border-border/60 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/60 text-sm"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold text-muted-foreground uppercase mb-1.5">
                  Project Details *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project goals, required timeline, or any specific questions..."
                  className="w-full px-4 py-2.5 rounded-xl bg-muted/60 border border-border/60 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/60 text-sm resize-y"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:scale-105 transition-all duration-200 shadow-md shadow-primary/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>

                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Prefer WhatsApp? Chat directly</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
