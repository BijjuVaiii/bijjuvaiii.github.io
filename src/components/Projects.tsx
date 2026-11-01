import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, ExternalLink, Folder, ArrowRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";

export const Projects = () => {
  const featuredProjects = PROJECTS.filter((p) => p.featured);

  return (
    <section id="projects" className="py-24 px-6 relative" aria-label="Selected Projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-3 block">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Selected Projects & Case Studies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Real-world applications and business websites built with attention to performance, responsiveness, and clean code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass rounded-2xl p-7 glass-hover hover-glow relative overflow-hidden flex flex-col justify-between border border-border/60"
            >
              {/* Gradient hover overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                aria-hidden="true" 
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <Folder className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                        aria-label={`Visit ${project.title} live website`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mt-1 group-hover:text-primary transition-colors">
                    <Link to={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 pt-4 border-t border-border/40 flex items-center justify-between">
                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:scale-105 transition-all duration-200 shadow-md shadow-primary/20"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="https://github.com/BijjuVaiii"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass glass-hover text-muted-foreground hover:text-foreground transition-all duration-200"
          >
            <Github className="w-4 h-4" />
            <span>Explore Repositories on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
