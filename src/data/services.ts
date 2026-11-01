export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  summary: string;
  badge: string;
  intro: string;
  features: {
    title: string;
    description: string;
  }[];
  contentSections: {
    heading: string;
    body: string;
  }[];
  faqs: ServiceFAQ[];
  pricingNote: string;
}

export const SERVICES: ServiceItem[] = [
  {
    slug: "web-development-biratnagar",
    title: "Web Development in Biratnagar",
    seoTitle: "Web Development in Biratnagar, Nepal | Bijay Rouniyar",
    metaDescription: "Professional web development in Biratnagar, Morang. Custom websites and web applications built with React and TypeScript for local businesses.",
    h1: "Web Development in Biratnagar, Nepal",
    summary: "Custom, fast, and secure websites tailored for businesses and organizations across Biratnagar, Morang, and Koshi Province.",
    badge: "Biratnagar & Koshi Province",
    intro: "Are you running an enterprise, retail shop, healthcare clinic, or educational institution in Biratnagar? A slow or outdated website costs you potential clients every day. I craft high-speed, mobile-responsive web solutions designed specifically to help local businesses establish authority and convert visitors into loyal customers.",
    features: [
      {
        title: "Mobile-First Architecture",
        description: "Over 80% of Nepali web visitors browse from smartphones. Your website will render instantly and smoothly across every screen size.",
      },
      {
        title: "Local Search Optimization",
        description: "Built-in structured data and geographic tagging to ensure your business ranks prominently when customers search in Biratnagar and Morang.",
      },
      {
        title: "Blazing Speed & Security",
        description: "Engineered with modern frontend frameworks and lightweight code to achieve sub-second load times even on mobile 4G networks.",
      },
      {
        title: "Direct WhatsApp & Call Integration",
        description: "Frictionless conversion points allowing customers to contact you directly via WhatsApp, phone, or structured inquiry forms.",
      },
    ],
    contentSections: [
      {
        heading: "Why Biratnagar Businesses Need Custom Web Development",
        body: "Biratnagar is the industrial and commercial heartbeat of Koshi Province. As retail, logistics, healthcare, and education rapidly digitize across eastern Nepal, relying solely on social media pages is no longer enough. Facebook and Instagram algorithms limit organic reach, whereas an independent website serves as a permanent, searchable digital storefront that you fully own. With clean semantic HTML and local SEO, your business becomes the direct answer when customers search for products and services in Biratnagar, Itahari, and Dharan.",
      },
      {
        heading: "Engineered for Performance and Growth",
        body: "Instead of bloated templates that slow down browsers, I build clean, accessible web applications using React, TypeScript, and modern CSS. Every asset is optimized, scripts are code-split, and structured data is embedded so Google understands your business address, services, and operational hours. Whether you need an informational corporate site, a customer booking portal, or a digital catalog, the site is designed to scale with your business without requiring frequent rewrites.",
      },
    ],
    faqs: [
      {
        question: "How long does it take to develop a business website in Biratnagar?",
        answer: "A standard business website typically takes 2 to 3 weeks from initial planning to deployment, depending on content availability and design complexity.",
      },
      {
        question: "Can I update the content on my website myself?",
        answer: "Yes, I can configure intuitive content management workflows or integrate headless CMS tools so you can edit text, photos, and notices easily.",
      },
      {
        question: "Do you assist with Nepali .com.np domain registration and hosting?",
        answer: "Yes! Free .com.np domain registration is available for Nepali citizens and registered businesses through the Mercantile registry. I guide you through the required documentation and DNS configuration.",
      },
      {
        question: "Do you serve clients outside of Biratnagar?",
        answer: "While based in Biratnagar, I actively collaborate with clients across Morang, Itahari, Dharan, Kathmandu, and worldwide via remote communication tools.",
      },
    ],
    pricingNote: "[TODO: confirm specific package rates based on project scope]",
  },
  {
    slug: "website-design-nepal",
    title: "Website Design in Nepal",
    seoTitle: "Website Design in Nepal | Fast & Modern UI/UX by Bijay Rouniyar",
    metaDescription: "Modern, responsive website design in Nepal. Clean UI/UX, mobile optimization, and fast load times for businesses nationwide.",
    h1: "Modern Website Design in Nepal",
    summary: "Aesthetic, conversion-focused website designs that represent your brand with clarity, modern aesthetics, and seamless usability.",
    badge: "Nationwide Service",
    intro: "First impressions are formed in less than a second. If your website looks dated or feels cluttered, potential customers will bounce to a competitor. I create polished, minimalist, and user-centric website designs that showcase your products and services with confidence.",
    features: [
      {
        title: "User-Centered UI/UX",
        description: "Carefully structured layouts, readable typography, and intuitive navigation that guide users toward your primary call-to-action.",
      },
      {
        title: "Dark & Light Theme Adaptability",
        description: "Modern color palettes with high contrast ratios, meeting international accessibility standards (WCAG AA).",
      },
      {
        title: "Clean Interaction Design",
        description: "Subtle micro-animations and transitions that make browsing pleasurable without degrading performance or causing layout shifts.",
      },
      {
        title: "Brand Consistency",
        description: "Design systems that reflect your company's identity across icons, buttons, banners, and typography.",
      },
    ],
    contentSections: [
      {
        heading: "Designing Websites That Convert Visitors into Clients",
        body: "Great web design is not merely decoration; it is functional communication. In the Nepali market, users expect intuitive layouts that load instantly on cellular connections. My design methodology focuses on clear information hierarchy: your unique value proposition is visible immediately, followed by social proof, service breakdowns, and direct contact options. By eliminating unnecessary friction, visitors understand what you do within three seconds of arriving.",
      },
      {
        heading: "Accessible, Future-Proof UI Architecture",
        body: "I build websites adhering to modern accessibility guidelines. That means clear visual contrast, legible type sizes, keyboard navigation support, and smooth responsiveness across laptops, tablets, and mobile displays. Rather than using rigid fixed layouts, fluid design systems ensure your brand looks sharp on everything from an entry-level smartphone to a 4K desktop monitor.",
      },
    ],
    faqs: [
      {
        question: "What design tools and frameworks do you use?",
        answer: "Designs are prototyped with modern design principles and implemented with Tailwind CSS, shadcn/ui, and React for pixel-perfect precision.",
      },
      {
        question: "Can you redesign my existing website without losing SEO rankings?",
        answer: "Yes. I audit your existing URL structure and implement careful 1:1 mapping, preserving existing search equity while delivering a modern look.",
      },
      {
        question: "Is the design responsive on all mobile devices?",
        answer: "Every single page is tested across multiple viewport sizes and mobile browsers to ensure flawless layout and touch responsiveness.",
      },
    ],
    pricingNote: "[TODO: confirm pricing models for custom redesign vs new build]",
  },
  {
    slug: "react-developer-nepal",
    title: "Freelance React Developer in Nepal",
    seoTitle: "Freelance React Developer in Nepal | TypeScript & Next.js Expert",
    metaDescription: "Hire an experienced freelance React developer in Nepal. Building robust Single Page Applications, TypeScript web apps, and modern frontends.",
    h1: "Freelance React Developer in Nepal",
    summary: "Hire a dedicated React and TypeScript engineer for front-end architecture, dashboard development, and scalable web apps.",
    badge: "Frontend & Full Stack",
    intro: "Need a specialized frontend engineer to build a complex web dashboard, migrate an older codebase, or launch a modern web application? With deep expertise in React, TypeScript, and modern state management, I deliver clean, maintainable, and type-safe frontends.",
    features: [
      {
        title: "Type-Safe TypeScript",
        description: "Zero guesswork. End-to-end type safety that catches errors during development and guarantees rock-solid application stability.",
      },
      {
        title: "Component-Driven Architecture",
        description: "Modular, reusable components built with clean separation of concerns, making maintenance and feature additions seamless.",
      },
      {
        title: "Optimized State Management",
        description: "Effective data fetching and caching with TanStack React Query, minimizing redundant network requests and maximizing responsiveness.",
      },
      {
        title: "Static Generation & SSR Support",
        description: "Prerendered pages that eliminate the client-side hydration penalty and guarantee search engine crawlers see your content immediately.",
      },
    ],
    contentSections: [
      {
        heading: "Why React with TypeScript is the Standard for Modern Web Apps",
        body: "Modern businesses require web experiences that feel as responsive as desktop applications. Plain JavaScript often results in runtime errors and technical debt as codebases expand. By combining React with TypeScript and strict linting rules, I construct frontends where bugs are caught before deployment. State management, API integration, and asynchronous flows are organized predictably, saving hundreds of hours in future maintenance.",
      },
      {
        heading: "Collaboration and Contract Flexibility",
        body: "Whether you need a frontend specialist to integrate with your existing backend API or an end-to-end full stack engineer who can architect both Node.js services and React interfaces, I adapt to your team workflow. I follow Git best practices, write self-documenting code, and communicate proactively through Slack, WhatsApp, and GitHub.",
      },
    ],
    faqs: [
      {
        question: "What versions of React do you work with?",
        answer: "I specialize in React 18 and modern React features, including concurrent rendering, hooks, suspense, and functional component patterns.",
      },
      {
        question: "Can you integrate with existing REST or GraphQL APIs?",
        answer: "Yes, I frequently integrate third-party APIs, custom backend services, authentication providers, and database layers.",
      },
      {
        question: "Are you available for contract or full-time remote roles?",
        answer: "Yes, I take on project-based freelance contracts as well as long-term remote developer engagements with teams worldwide.",
      },
    ],
    pricingNote: "[TODO: confirm hourly or milestone-based contracting rates]",
  },
  {
    slug: "ecommerce-website-development-nepal",
    title: "E-commerce Website Development in Nepal",
    seoTitle: "E-commerce Website Development in Nepal | Bijay Rouniyar",
    metaDescription: "Launch a custom e-commerce website in Nepal. Fast product catalogs, cart workflows, and payment integration for local businesses.",
    h1: "E-commerce Website Development in Nepal",
    summary: "Custom online storefronts engineered for fast conversions, smooth checkout experiences, and easy product management in Nepal.",
    badge: "Digital Commerce",
    intro: "Take your physical store online with a custom digital storefront built for Nepali commerce. From catalog browsing to order management and local payment options, I build e-commerce solutions that help you sell products 24 hours a day, 7 days a week.",
    features: [
      {
        title: "Product Catalog & Search",
        description: "Instant filtering, search autocomplete, and structured categories that make discovering products fast and effortless.",
      },
      {
        title: "Nepali Payment Ready",
        description: "Support for digital wallets including eSewa, Khalti, bank transfers, and Cash on Delivery (COD) workflows.",
      },
      {
        title: "WhatsApp Order Direct",
        description: "Allow customers to send pre-filled carts directly to your WhatsApp business chat for quick local sales confirmations.",
      },
      {
        title: "High-Performance Cart & Checkout",
        description: "Friction-free checkout flow designed to minimize cart abandonment and maximize completed orders.",
      },
    ],
    contentSections: [
      {
        heading: "Selling Online in Nepal: Beyond Social Media DMs",
        body: "Many businesses in Biratnagar and Kathmandu attempt to run their retail operations solely through Instagram and Facebook direct messages. While social channels are great for discovery, handling orders manually in chat leads to missed inquiries, inventory confusion, and lost revenue. A dedicated e-commerce website displays your full inventory, real-time pricing, stock status, and collects customer delivery details automatically, freeing you to focus on order fulfillment.",
      },
      {
        heading: "Optimized for Nepali Shoppers and Mobile Networks",
        body: "A high bounce rate is usually caused by heavy images and slow hosting. My e-commerce setups employ modern image formats (WebP), responsive image srcsets, and aggressive caching. Product pages load in milliseconds, ensuring customers on 4G cellular data in Biratnagar, Itahari, or Pokhara enjoy a fast, pleasant shopping experience without lag.",
      },
    ],
    faqs: [
      {
        question: "Can I accept payments through eSewa and Khalti?",
        answer: "Yes, we can integrate verified merchant payment gateways such as eSewa, Khalti, or provide manual QR payment and Cash on Delivery instructions.",
      },
      {
        question: "How do I add new products or update prices?",
        answer: "I provide an administrative interface or structured dashboard where you can upload product photos, change pricing, and manage stock in minutes.",
      },
      {
        question: "Is SSL and data security included?",
        answer: "Yes. All web traffic is encrypted with HTTPS/SSL, protecting customer contact information and order submissions.",
      },
    ],
    pricingNote: "[TODO: confirm e-commerce build tiers and gateway setup costs]",
  },
];
