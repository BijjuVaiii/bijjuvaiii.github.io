import { useEffect } from "react";
import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { SITE_CONFIG } from "@/data/site-config";

const Index = () => {
  useEffect(() => {
    // Set dark mode
    if (typeof document !== "undefined") {
      document.documentElement.classList.add("dark");
    }

    if (typeof window !== "undefined" && window.location.hash) {
      const sectionId = window.location.hash.slice(1);
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Structured Data schemas for Homepage
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Bijay Rouniyar | Full Stack Web Developer",
      url: `${SITE_CONFIG.siteUrl}/`,
      description: "Full Stack Web Developer in Biratnagar, Nepal building fast, modern websites and web apps.",
      publisher: {
        "@type": "Person",
        name: SITE_CONFIG.name,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: SITE_CONFIG.name,
      alternateName: SITE_CONFIG.nickname,
      jobTitle: SITE_CONFIG.role,
      url: `${SITE_CONFIG.siteUrl}/`,
      image: `${SITE_CONFIG.siteUrl}/og-image.jpg`,
      email: SITE_CONFIG.email,
      telephone: SITE_CONFIG.phone,
      sameAs: [
        SITE_CONFIG.socials.github,
        SITE_CONFIG.socials.linkedin,
        SITE_CONFIG.socials.instagram,
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE_CONFIG.location.city,
        addressRegion: SITE_CONFIG.location.province,
        addressCountry: SITE_CONFIG.location.countryCode,
      },
      knowsAbout: [
        "Web Development",
        "React",
        "TypeScript",
        "Node.js",
        "Tailwind CSS",
        "E-commerce Development",
        "Local SEO",
        "Frontend Engineering",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Bijay Rouniyar – Web Developer Biratnagar",
      image: `${SITE_CONFIG.siteUrl}/og-image.jpg`,
      url: `${SITE_CONFIG.siteUrl}/`,
      telephone: SITE_CONFIG.phone,
      email: SITE_CONFIG.email,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE_CONFIG.location.city,
        addressRegion: SITE_CONFIG.location.province,
        addressCountry: SITE_CONFIG.location.countryCode,
      },
      areaServed: [
        { "@type": "City", name: "Biratnagar" },
        { "@type": "AdministrativeArea", name: "Morang" },
        { "@type": "City", name: "Itahari" },
        { "@type": "City", name: "Dharan" },
        { "@type": "Country", name: "Nepal" },
      ],
      serviceType: [
        "Web Development",
        "Website Design",
        "React Development",
        "E-commerce Website Development",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/20 selection:text-primary">
      <Seo
        title="Web Developer in Biratnagar, Nepal | Bijay Rouniyar – Full Stack Developer"
        description="Bijay Rouniyar is a full stack web developer in Biratnagar, Nepal. I build fast, modern websites and web apps for businesses in Koshi Province and beyond."
        path="/"
        jsonLd={structuredData}
      />
      
      <Navbar />
      
      <main id="main-content" className="flex-1">
        <Hero />
        <ServicesSection />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
