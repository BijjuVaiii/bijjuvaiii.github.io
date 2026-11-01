import { useState } from "react";
import { Mail, Phone, MessageSquare, MapPin, Send, CheckCircle2, Clock, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_CONFIG } from "@/data/site-config";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Bijay Rouniyar",
      description: "Get in touch with Bijay Rouniyar, Full Stack Web Developer in Biratnagar, Nepal. Available for freelance projects, websites, and web apps.",
      url: `${SITE_CONFIG.siteUrl}/contact`,
      mainEntity: {
        "@type": "Person",
        name: SITE_CONFIG.name,
        email: SITE_CONFIG.email,
        telephone: SITE_CONFIG.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE_CONFIG.location.city,
          addressRegion: SITE_CONFIG.location.province,
          addressCountry: SITE_CONFIG.location.countryCode,
        },
      },
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Seo
        title="Contact Bijay Rouniyar | Web Developer in Biratnagar, Nepal"
        description="Get in touch with Bijay Rouniyar, full stack web developer in Biratnagar, Nepal. Inquire about website development, React web applications, or remote collaboration."
        path="/contact"
        jsonLd={jsonLd}
      />

      <Navbar />

      <main id="main-content" className="flex-1 pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: "Contact", path: "/contact" }]} />

          <header className="mb-12">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-3 block">
              Direct Communication
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-foreground leading-tight">
              Contact Bijay Rouniyar
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Based in Biratnagar, Morang, Koshi Province, Nepal. Ready to help build your next website or software project.
            </p>
          </header>

          <div className="grid md:grid-cols-5 gap-8 items-start mb-14">
            {/* Direct Contact Methods */}
            <div className="md:col-span-2 space-y-4">
              <div className="glass rounded-2xl p-6 border border-border/60 space-y-5">
                <h2 className="text-lg font-bold text-foreground mb-4">
                  Contact Information
                </h2>

                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/80 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block">Email</span>
                    <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors break-all">
                      {SITE_CONFIG.email}
                    </span>
                  </div>
                </a>

                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/80 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block">WhatsApp (Preferred)</span>
                    <span className="text-sm font-semibold text-foreground group-hover:text-emerald-400 transition-colors">
                      {SITE_CONFIG.phone}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/80 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block">Phone</span>
                    <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {SITE_CONFIG.phone}
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3 rounded-xl">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block">Office / City</span>
                    <span className="text-sm font-medium text-foreground">
                      Biratnagar, Morang, Koshi Province, Nepal
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl border-t border-border/40 pt-4">
                  <div className="p-2.5 rounded-lg bg-muted text-muted-foreground shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block">Response Time</span>
                    <span className="text-sm font-medium text-foreground">
                      Typically within 4–12 hours (NPT)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="md:col-span-3 glass rounded-2xl p-7 border border-border/60">
              <h2 className="text-xl font-bold text-foreground mb-2">
                Send a Message
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Whether you need a full site build, redesign, or frontend consultation, submit your details below.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <p className="font-semibold text-foreground">Inquiry Ready!</p>
                  <p className="text-sm text-muted-foreground">
                    Your email application was triggered with your message. You can also contact me directly on WhatsApp at {SITE_CONFIG.phone}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-muted-foreground uppercase mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Bijay"
                      className="w-full px-4 py-2.5 rounded-xl bg-muted/60 border border-border/60 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/60 text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-muted-foreground uppercase mb-1.5">
                      Your Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@domain.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-muted/60 border border-border/60 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/60 text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-muted-foreground uppercase mb-1.5">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. New Website for our Business in Biratnagar"
                      className="w-full px-4 py-2.5 rounded-xl bg-muted/60 border border-border/60 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/60 text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-muted-foreground uppercase mb-1.5">
                      Message & Requirements *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, required features, timeline, and questions..."
                      className="w-full px-4 py-2.5 rounded-xl bg-muted/60 border border-border/60 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/60 text-sm resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:scale-102 transition-all shadow-md shadow-primary/20 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
