import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, HelpCircle, Mail, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SERVICES, ServiceItem } from "@/data/services";
import { SITE_CONFIG } from "@/data/site-config";

interface ServiceDetailProps {
  serviceOverride?: ServiceItem;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ serviceOverride }) => {
  const { slug } = useParams<{ slug: string }>();
  const service = serviceOverride || SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  // Structured Data for Service & FAQPage
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.h1,
      serviceType: service.title,
      description: service.metaDescription,
      provider: {
        "@type": "Person",
        name: SITE_CONFIG.name,
        url: `${SITE_CONFIG.siteUrl}/`,
        telephone: SITE_CONFIG.phone,
        email: SITE_CONFIG.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE_CONFIG.location.city,
          addressRegion: SITE_CONFIG.location.province,
          addressCountry: SITE_CONFIG.location.countryCode,
        },
      },
      areaServed: SITE_CONFIG.serviceAreas.map((area) => ({
        "@type": "AdministrativeArea",
        name: area,
      })),
      url: `${SITE_CONFIG.siteUrl}/services/${service.slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Seo
        title={service.seoTitle}
        description={service.metaDescription}
        path={`/services/${service.slug}`}
        jsonLd={jsonLd}
      />

      <Navbar />

      <main id="main-content" className="flex-1 pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Services", path: "/services/web-development-biratnagar" },
              { label: service.title, path: `/services/${service.slug}` },
            ]}
          />

          {/* Service Header */}
          <header className="mb-12">
            <span className="inline-block px-3.5 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary mb-4 border border-primary/20">
              {service.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-foreground leading-tight">
              {service.h1}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {service.intro}
            </p>
          </header>

          {/* Key Deliverables & Features */}
          <section className="mb-14" aria-label="Key Features">
            <h2 className="text-2xl font-bold mb-6 text-foreground">
              What You Get with this Service
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.features.map((feature) => (
                <div
                  key={feature.title}
                  className="glass rounded-xl p-5 border border-border/60 hover-glow"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground text-base mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Detailed Content Sections */}
          <section className="space-y-10 mb-14" aria-label="In-depth Service Overview">
            {service.contentSections.map((section) => (
              <article key={section.heading} className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">
                  {section.heading}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {section.body}
                </p>
              </article>
            ))}
          </section>

          {/* FAQs Section */}
          <section className="mb-14" aria-label="Frequently Asked Questions">
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {service.faqs.map((faq, i) => (
                <details
                  key={faq.question}
                  className="group glass rounded-xl p-5 border border-border/60 transition-colors"
                  open={i === 0}
                >
                  <summary className="font-semibold text-foreground cursor-pointer list-none flex justify-between items-center text-base">
                    <span>{faq.question}</span>
                    <span className="text-primary group-open:rotate-180 transition-transform ml-2 shrink-0">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-3">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* Other Services Navigation */}
          <section className="mb-14 pt-8 border-t border-border/50" aria-label="Other Services">
            <h2 className="text-lg font-bold text-foreground mb-4">
              Explore Other Specialized Services
            </h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {SERVICES.filter((s) => s.slug !== service.slug)
                .slice(0, 3)
                .map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="glass rounded-xl p-4 border border-border/60 hover:border-primary/50 transition-all text-sm group"
                  >
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {s.title}
                    </p>
                    <span className="text-xs text-primary inline-flex items-center gap-1 mt-1">
                      Learn more →
                    </span>
                  </Link>
                ))}
            </div>
          </section>

          {/* Conversion CTA Card */}
          <section className="glass rounded-2xl p-8 border border-primary/30 bg-gradient-to-br from-primary/5 via-card to-accent/5 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Ready to build or revamp your project?
              </h3>
              <p className="text-sm text-muted-foreground max-w-lg">
                Let's discuss your requirements, schedule, and expected outcomes. Direct, transparent communication with zero sales fluff.
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Rate note: {service.pricingNote}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:scale-105 transition-all shadow-md shadow-primary/20 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Start a Conversation</span>
              </Link>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl glass glass-hover text-sm font-semibold flex items-center gap-2 text-foreground"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
