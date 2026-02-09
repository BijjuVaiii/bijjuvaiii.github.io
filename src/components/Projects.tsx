import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio built with React, TypeScript, and Framer Motion. Features smooth animations, dark theme, and optimized performance.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/BijjuVaiii",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "Full-stack task manager with real-time updates, user authentication, and collaborative features. Built for productivity.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/BijjuVaiii",
    featured: true,
  },
  {
    title: "E-Commerce Platform",
    description:
      "A scalable e-commerce solution with cart functionality, payment integration, and admin dashboard for inventory management.",
    tech: ["React", "Express", "PostgreSQL", "Stripe"],
    github: "https://github.com/BijjuVaiii",
    featured: false,
  },
  {
    title: "Weather Dashboard",
    description:
      "Real-time weather application with location-based forecasts, interactive maps, and beautiful data visualizations.",
    tech: ["React", "TypeScript", "OpenWeather API"],
    github: "https://github.com/BijjuVaiii",
    featured: false,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Projects I've built
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group glass rounded-xl p-6 glass-hover hover-glow relative overflow-hidden ${
                project.featured ? "md:col-span-1" : ""
              }`}
            >
              {/* Gradient accent on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View Live"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/BijjuVaiii"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
          >
            <span>View more on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
