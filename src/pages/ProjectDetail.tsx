import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Github, ExternalLink, CheckCircle2, Code2, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PROJECTS, ProjectCaseStudy } from "@/data/projects";
import { SITE_CONFIG } from "@/data/site-config";

interface ProjectDetailProps {
  projectOverride?: ProjectCaseStudy;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectOverride }) => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectOverride || PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: `${project.title} Case Study`,
      headline: project.title,
      description: project.metaDescription,
      creator: {
        "@type": "Person",
        name: SITE_CONFIG.name,
        url: `${SITE_CONFIG.siteUrl}/`,
      },
      url: `${SITE_CONFIG.siteUrl}/projects/${project.slug}`,
      keywords: project.stack.join(", "),
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Seo
        title={project.seoTitle}
        description={project.metaDescription}
        path={`/projects/${project.slug}`}
        jsonLd={jsonLd}
      />

      <Navbar />

      <main id="main-content" className="flex-1 pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Projects", path: "/projects" },
              { label: project.title, path: `/projects/${project.slug}` },
            ]}
          />

          {/* Header */}
          <header className="mb-12">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary mb-4 border border-primary/20">
              {project.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-foreground leading-tight">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {project.summary}
            </p>

            {/* Links and Metadata */}
            <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-border/40">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:scale-105 transition-all shadow-md shadow-primary/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Visit Live Application</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass glass-hover text-sm font-semibold text-foreground hover:text-primary transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>View Source Code</span>
                </a>
              )}
            </div>
          </header>

          {/* Quick Specs Grid */}
          <section className="glass rounded-2xl p-6 border border-border/60 mb-12 grid sm:grid-cols-2 gap-6" aria-label="Project Specifications">
            <div>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
                My Role
              </span>
              <p className="text-base font-bold text-foreground">
                {project.role}
              </p>
            </div>
            <div>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-muted text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Case Study Deep Dive */}
          <div className="space-y-10 mb-14">
            {/* The Problem */}
            <article className="glass rounded-2xl p-7 border border-border/60 space-y-3">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-400" />
                <span>The Challenge & Context</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                {project.problem}
              </p>
            </article>

            {/* The Solution */}
            <article className="glass rounded-2xl p-7 border border-border/60 space-y-3">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Code2 className="w-5 h-5 text-primary" />
                <span>Technical Solution & Architecture</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                {project.solution}
              </p>
            </article>

            {/* The Outcome */}
            <article className="glass rounded-2xl p-7 border border-border/60 space-y-3">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Outcomes & Impact</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                {project.outcome}
              </p>
            </article>
          </div>

          {/* Other Projects Links */}
          <section className="pt-8 border-t border-border/50 mb-12" aria-label="More Projects">
            <h2 className="text-lg font-bold text-foreground mb-4">
              Explore More Case Studies
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {PROJECTS.filter((p) => p.slug !== project.slug)
                .slice(0, 2)
                .map((p) => (
                  <Link
                    key={p.slug}
                    to={`/projects/${p.slug}`}
                    className="glass rounded-xl p-5 border border-border/60 hover:border-primary/50 transition-all group"
                  >
                    <span className="text-xs text-primary font-semibold uppercase">
                      {p.category}
                    </span>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mt-1">
                      {p.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {p.summary}
                    </p>
                  </Link>
                ))}
            </div>
          </section>

          {/* Contact CTA */}
          <div className="text-center glass rounded-2xl p-8 border border-primary/30">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Interested in similar results for your business?
            </h3>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto mb-6">
              I can help design, develop, and deploy your custom web software with the same care and engineering rigor.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:scale-105 transition-all shadow-md shadow-primary/20"
            >
              <span>Get in Touch with Bijay</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
