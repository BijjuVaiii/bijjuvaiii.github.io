import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Folder } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics?: string[];
  fork: boolean;
  pushed_at: string;
  stargazers_count: number;
}

const fetchRepos = async (): Promise<GitHubRepo[]> => {
  const response = await fetch("https://api.github.com/users/BijjuVaiii/repos");
  if (!response.ok) {
    throw new Error("Failed to fetch repositories");
  }
  return response.json();
};

const formatTitle = (name: string): string => {
  if (name === "ATTC") return "ATTC";
  if (name.toLowerCase() === "seize") return "S.E.I.Z.E.";
  return name
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const formatTech = (tech: string): string => {
  const mapping: { [key: string]: string } = {
    html: "HTML",
    css: "CSS",
    javascript: "JavaScript",
    typescript: "TypeScript",
    python: "Python",
    react: "React",
    nextjs: "Next.js",
    tailwindcss: "Tailwind CSS",
    nodejs: "Node.js",
    mongodb: "MongoDB",
    postgresql: "PostgreSQL",
    express: "Express",
    vite: "Vite",
  };
  const lower = tech.toLowerCase();
  return mapping[lower] || tech.charAt(0).toUpperCase() + tech.slice(1);
};

const getTechTags = (repo: GitHubRepo): string[] => {
  const tags = new Set<string>();
  if (repo.language) {
    tags.add(formatTech(repo.language));
  }
  if (repo.topics) {
    repo.topics.forEach((topic) => tags.add(formatTech(topic)));
  }
  return Array.from(tags).slice(0, 4); // Limit to 4 tags to keep cards neat
};

const SkeletonCard = () => (
  <div className="group glass rounded-xl p-6 relative overflow-hidden animate-pulse">
    <div className="relative z-10">
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 bg-primary/20 rounded-lg" />
        <div className="flex gap-3">
          <div className="w-5 h-5 bg-muted rounded-full" />
          <div className="w-5 h-5 bg-muted rounded-full" />
        </div>
      </div>
      <div className="h-6 bg-muted rounded w-2/3 mb-3" />
      <div className="h-4 bg-muted rounded w-full mb-2" />
      <div className="h-4 bg-muted rounded w-5/6 mb-6" />
      <div className="flex flex-wrap gap-2">
        <div className="h-6 w-16 bg-muted rounded-full" />
        <div className="h-6 w-20 bg-muted rounded-full" />
        <div className="h-6 w-12 bg-muted rounded-full" />
      </div>
    </div>
  </div>
);

const ErrorState = ({ onRetry }: { onRetry: () => void }) => (
  <div className="text-center py-12 glass rounded-xl p-8 max-w-lg mx-auto md:col-span-2">
    <Folder className="w-12 h-12 text-destructive mx-auto mb-4 animate-bounce" />
    <h3 className="text-lg font-semibold mb-2">Failed to Load Projects</h3>
    <p className="text-muted-foreground text-sm mb-6">
      There was an issue fetching repositories from GitHub. You can try reloading or check them directly.
    </p>
    <div className="flex justify-center gap-4">
      <button
        onClick={onRetry}
        className="px-5 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg hover:scale-105 transition-all duration-300"
      >
        Retry
      </button>
      <a
        href="https://github.com/BijjuVaiii"
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-2.5 glass glass-hover font-medium rounded-lg inline-flex items-center gap-2 hover:scale-105 transition-all duration-300"
      >
        <span>Go to GitHub</span>
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  </div>
);

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { data: repos, isLoading, isError, refetch } = useQuery<GitHubRepo[]>({
    queryKey: ["github-repos"],
    queryFn: fetchRepos,
    staleTime: 10 * 60 * 1000, // 10 minutes cache
  });

  const filteredRepos = repos
    ? repos
        .filter((repo) => !repo.fork)
        .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
    : [];

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

        {isLoading ? (
          <div className="grid md:grid-cols-2 gap-6">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        ) : isError ? (
          <div className="grid md:grid-cols-2 gap-6">
            <ErrorState onRetry={() => refetch()} />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredRepos.map((repo, index) => {
              const tech = getTechTags(repo);
              return (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group glass rounded-xl p-6 glass-hover hover-glow relative overflow-hidden md:col-span-1 flex flex-col justify-between"
                >
                  {/* Gradient accent on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <Folder className="w-10 h-10 text-primary flex-shrink-0" />
                        <div className="flex gap-3">
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label="View on GitHub"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                          {repo.homepage && (
                            <a
                              href={repo.homepage}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-colors"
                              aria-label="View Live"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </a>
                          )}
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-1">
                        {formatTitle(repo.name)}
                      </h3>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                        {repo.description || "A project built with passion and clean code."}
                      </p>
                    </div>

                    {tech.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

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
