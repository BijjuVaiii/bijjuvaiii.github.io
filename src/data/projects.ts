export interface ProjectCaseStudy {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  summary: string;
  tagline: string;
  category: string;
  featured: boolean;
  role: string;
  stack: string[];
  problem: string;
  solution: string;
  outcome: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const PROJECTS: ProjectCaseStudy[] = [
  {
    slug: "doctor-sahab",
    title: "Doctor Sahab",
    seoTitle: "Doctor Sahab Case Study | Telemedicine Platform by Bijay Rouniyar",
    metaDescription: "Case study of Doctor Sahab: an online doctor consultation and telemedicine web platform built by Bijay Rouniyar.",
    summary: "An accessible telemedicine portal designed to connect patients with doctors remotely through an intuitive digital interface.",
    tagline: "Online doctor at your own device",
    category: "Healthcare & Telemedicine",
    featured: true,
    role: "Full Stack Developer",
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Vercel"],
    problem: "Patients in regional areas of Nepal often face difficulties booking consultations or accessing primary medical advice without physically travelling long distances to urban clinics.",
    solution: "Designed and developed Doctor Sahab, a lightweight, accessible web platform that allows patients to explore medical services, view specialist availability, and initiate inquiries from any internet-connected smartphone.",
    outcome: "[TODO: confirm user engagement metrics and adoption numbers]",
    liveUrl: "https://doctor-sahab.vercel.app",
    githubUrl: "https://github.com/BijjuVaiii/Doctor_Sahab",
  },
  {
    slug: "guff",
    title: "Guff Chat App",
    seoTitle: "Guff Chat App Case Study | Real-Time Messaging by Bijay Rouniyar",
    metaDescription: "Case study for Guff: a modern real-time friend texting web app built with React, Firebase, and responsive UI by Bijay Rouniyar.",
    summary: "A modern, real-time friend texting web application with live messaging, authentication, and push notifications.",
    tagline: "Real-time communication made fluid and intuitive",
    category: "Real-Time Web Application",
    featured: true,
    role: "Full Stack Developer",
    stack: ["React", "Firebase", "Tailwind CSS", "JavaScript", "Realtime Database"],
    problem: "Building a snappy, low-latency messaging interface requires managing asynchronous message streams, optimistic UI updates, and device-level notifications without draining client resources.",
    solution: "Architected Guff using React and Firebase Realtime Database. Engineered optimistic UI rendering for instantaneous message delivery, secure user authentication, responsive layouts, and sound/push alert triggers.",
    outcome: "[TODO: confirm active user metrics and testing outcomes]",
    githubUrl: "https://github.com/BijjuVaiii/Guff",
  },
  {
    slug: "jt-hardware",
    title: "J-T Hardware",
    seoTitle: "J-T Hardware Case Study | Local Business Website by Bijay Rouniyar",
    metaDescription: "Case study for J-T Hardware: a dedicated business website built for a local hardware and construction supplies shop in Nepal.",
    summary: "Digital presence and catalog showcase for a regional Nepali hardware store, bringing local construction products online.",
    tagline: "Digital catalog for a local retail hardware store",
    category: "Local Business Website",
    featured: true,
    role: "Web Developer",
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    problem: "A traditional brick-and-mortar hardware business in Nepal needed a way to present their inventory, location, and contact information to local contractors and homeowners searching online.",
    solution: "Built a structured, fast-loading business website highlighting core tool categories, building materials, shop contact numbers, and physical map directions.",
    outcome: "[TODO: confirm store footfall and inquiry increase]",
    githubUrl: "https://github.com/BijjuVaiii/J-T-Hardware",
  },
  {
    slug: "attc",
    title: "ATTC Platform",
    seoTitle: "ATTC Case Study | Educational Institute Website by Bijay Rouniyar",
    metaDescription: "Case study of ATTC (Anisha Technology Training Center): an educational training center portal developed by Bijay Rouniyar.",
    summary: "Online portal for Anisha Technology Training Center, providing course details, syllabi, and student enrollment access.",
    tagline: "Technology training and digital literacy portal",
    category: "Education & EdTech",
    featured: true,
    role: "Frontend Developer",
    stack: ["HTML5", "CSS3", "JavaScript", "Modern UI"],
    problem: "Prospective IT students needed clear visibility into offered computer courses, upcoming training batches, certification options, and direct registration paths.",
    solution: "Created a welcoming, informative web presence for ATTC detailing available courses, practical curriculum structures, instructor background, and an online inquiry form.",
    outcome: "[TODO: confirm student enrollment growth figures]",
    githubUrl: "https://github.com/BijjuVaiii/ATTC",
  },
  {
    slug: "a1-store",
    title: "A1 Store",
    seoTitle: "A1 Store Case Study | E-commerce Store by Bijay Rouniyar",
    metaDescription: "Case study for A1 Store: a digital retail storefront built with modern JavaScript and responsive e-commerce design.",
    summary: "Our initial venture into online commerce, featuring interactive product displays, shopping cart functionality, and category filters.",
    tagline: "Digital retail store prototype",
    category: "E-commerce",
    featured: false,
    role: "Full Stack Developer",
    stack: ["JavaScript", "HTML5", "CSS3", "Shopping Cart UI"],
    problem: "Small retailers need straightforward, low-overhead e-commerce stores that do not require high monthly SaaS subscriptions.",
    solution: "Engineered A1 Store with clean vanilla JavaScript state handling, persistent local storage cart management, and categorized catalog display.",
    outcome: "[TODO: confirm sales and conversion benchmarks]",
    githubUrl: "https://github.com/BijjuVaiii/A1-Store",
  },
  {
    slug: "mr-shield",
    title: "Mr. Shield",
    seoTitle: "Mr. Shield Case Study | Web Utility & Monitoring by Bijay Rouniyar",
    metaDescription: "Case study for Mr. Shield: a web utility and application security monitoring tool built with TypeScript.",
    summary: "A modern TypeScript utility application offering responsive web security controls and real-time status monitoring.",
    tagline: "Web utility and security interface",
    category: "Web Application",
    featured: false,
    role: "Full Stack Developer",
    stack: ["TypeScript", "React", "Tailwind CSS", "Vercel"],
    problem: "Managing client-side validation, error tracing, and security safeguards often requires unified utilities rather than fragmented code.",
    solution: "Developed Mr. Shield with strict TypeScript types, responsive user interface panels, and real-time feedback mechanisms.",
    outcome: "[TODO: confirm deployment stats]",
    liveUrl: "https://mr-shield-five.vercel.app",
    githubUrl: "https://github.com/BijjuVaiii/Mr.Shield",
  },
];
