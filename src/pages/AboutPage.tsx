import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, ArrowRight, Code2, ShieldCheck, Zap, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_CONFIG } from "@/data/site-config";
import profileWebp from "@/assets/profile.webp";
import profilePng from "@/assets/profile.png";

export const AboutPage = () => {
  const calculateAge = (dob: string) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const age = calculateAge("2006-05-28");

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: `About ${SITE_CONFIG.name}`,
      description: `Learn about ${SITE_CONFIG.name} (${SITE_CONFIG.nickname}), a Full Stack Web Developer based in Biratnagar, Nepal.`,
      url: `${SITE_CONFIG.siteUrl}/about`,
      mainEntity: {
        "@type": "Person",
        name: SITE_CONFIG.name,
        alternateName: SITE_CONFIG.nickname,
        jobTitle: SITE_CONFIG.role,
        image: `${SITE_CONFIG.siteUrl}/og-image.jpg`,
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
        title="About Bijay Rouniyar | Full Stack Web Developer in Biratnagar, Nepal"
        description="Learn about Bijay Rouniyar (Bijju), a full stack developer in Biratnagar, Nepal. Discover my engineering values, technical background, and passion for modern web development."
        path="/about"
        jsonLd={jsonLd}
      />

      <Navbar />

      <main id="main-content" className="flex-1 pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: "About", path: "/about" }]} />

          <header className="mb-12">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-3 block">
              Biography & Values
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-foreground leading-tight">
              About Bijay Rouniyar
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Full Stack Web Developer based in Biratnagar, Morang, Koshi Province, Nepal. Dedicated to crafting software that is fast, resilient, and human-friendly.
            </p>
          </header>

          {/* Profile Overview */}
          <div className="grid md:grid-cols-3 gap-8 items-center mb-14 glass rounded-2xl p-6 sm:p-8 border border-border/60">
            <div className="flex justify-center md:justify-start">
              <div className="relative w-44 h-44 rounded-2xl overflow-hidden border-2 border-primary/30">
                <picture>
                  <source srcSet={profileWebp} type="image/webp" />
                  <img
                    src={profilePng}
                    alt="Bijay Rouniyar"
                    width={176}
                    height={176}
                    className="w-full h-full object-cover object-center"
                  />
                </picture>
              </div>
            </div>

            <div className="md:col-span-2 space-y-3">
              <h2 className="text-2xl font-bold text-foreground">
                Hi, I'm Bijay (Bijju)
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I am a {age}-year-old developer specializing in React, TypeScript, and modern Node.js backends. Born and raised in Biratnagar, Nepal, I take pride in delivering software that stands out on global standards while solving meaningful local challenges.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-primary" />
                  Biratnagar, Nepal
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-primary" />
                  {SITE_CONFIG.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-primary" />
                  {SITE_CONFIG.phone}
                </span>
              </div>
            </div>
          </div>

          {/* Detailed Story */}
          <section className="space-y-8 mb-14 leading-relaxed text-muted-foreground text-base" aria-label="Detailed Story">
            <article className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">
                The Journey into Engineering
              </h2>
              <p>
                My passion for programming began with curiosity about how the web connects people across borders. Exploring code at an early age taught me that software is not just about syntax; it is about providing clarity and utility to real people. Over the years, I honed my expertise across the entire JavaScript/TypeScript ecosystem—from responsive CSS design systems to robust server-side APIs.
              </p>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">
                Rooted in Biratnagar, Serving Globally
              </h2>
              <p>
                Biratnagar is a vibrant industrial city in eastern Nepal with immense entrepreneurial potential. Many businesses here have incredible products but remain unseen online due to absent or slow websites. My goal is to empower enterprises in Biratnagar, Morang, and Koshi Province with high-ranking, modern digital storefronts while continuously taking on ambitious remote software contracts with international teams.
              </p>
            </article>
          </section>

          {/* Core Values */}
          <section className="mb-14" aria-label="Engineering Values">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              My Core Engineering Values
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Zap,
                  title: "Performance by Default",
                  description: "Every kilobyte matters. I optimize bundle sizes, leverage prerendering, and compress media so websites load in milliseconds on mobile devices.",
                },
                {
                  icon: ShieldCheck,
                  title: "Type Safety & Reliability",
                  description: "I write strict TypeScript to catch errors at compile-time, ensuring rock-solid stability and straightforward long-term maintainability.",
                },
                {
                  icon: Code2,
                  title: "Clean, Accessible Semantics",
                  description: "Valid HTML5 landmarks, thoughtful keyboard navigation, and full screen-reader compliance so everyone can access your content.",
                },
                {
                  icon: Heart,
                  title: "Honest & Direct Partnership",
                  description: "No technical jargon or fabricated promises. Transparent milestones, direct communication, and realistic estimations from day one.",
                },
              ].map(({ icon: Icon, title, description }) => (
                <div key={title} className="glass rounded-xl p-5 border border-border/60">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary w-fit mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-foreground text-base mb-1">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="glass rounded-2xl p-8 border border-primary/30 text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Let's create something impactful together
            </h3>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto mb-6">
              Whether you are an established enterprise in Biratnagar or a startup looking for an agile full stack developer, I would love to hear from you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:scale-105 transition-all shadow-md shadow-primary/20"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
