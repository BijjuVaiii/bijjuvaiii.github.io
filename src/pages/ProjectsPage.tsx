import { useState } from "react";
import { Link } from "react-router-dom";
import { Github, ExternalLink, ArrowRight, Folder } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PROJECTS } from "@/data/projects";
import { SITE_CONFIG } from "@/data/site-config";

export const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

  const filteredProjects = selectedCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Selected Projects and Case Studies by Bijay Rouniyar",
      description: "Explore web applications, business websites, and software case studies built with React, TypeScript, and modern web standards by Bijay Rouniyar.",
      url: `${SITE_CONFIG.siteUrl}/projects`,
      author: {
        "@type": "Person",
        name: SITE_CONFIG.name,
      },
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Seo
        title="Web Development Projects & Case Studies | Bijay Rouniyar"
        description="Explore selected web development projects, client case studies, and modern React applications engineered by Bijay Rouniyar in Nepal."
        path="/projects"
        jsonLd={jsonLd}
      />

      <Navbar />

      <main id="main-content" className="flex-1 pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={[{ label: "Projects", path: "/projects" }]} />

          <header className="mb-12 text-center max-w-3xl mx-auto">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-3 block">
              Portfolio & Engineering Showcase
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-foreground leading-tight">
              Selected Projects & Case Studies
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed">
              Every project is an opportunity to solve real business challenges. Browse in-depth case studies detailing problem statements, technical architecture, and implementation details.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "glass glass-hover text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </header>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <article
                key={project.slug}
                className="group glass rounded-2xl p-6 glass-hover hover-glow flex flex-col justify-between border border-border/60"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                      <Folder className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                          aria-label={`GitHub repository for ${project.title}`}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 text-muted-foreground hover:text-primary transition-colors"
                          aria-label={`Live site for ${project.title}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h2 className="text-xl font-bold mt-1 mb-2 group-hover:text-primary transition-colors">
                    <Link to={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h2>
                  <p className="text-xs font-medium text-muted-foreground/80 mb-3 italic">
                    "{project.tagline}"
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                    {project.summary}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-medium rounded-md bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-border/40 flex items-center justify-between">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-accent transition-colors"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center glass rounded-2xl p-8 border border-border/60">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Looking for a custom project demonstration?
            </h3>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto mb-6">
              I can build proof-of-concept prototypes or discuss architecture for your specific business requirements.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:scale-105 transition-all shadow-md shadow-primary/20"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
