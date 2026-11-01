import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BLOG_POSTS } from "@/data/blog";
import { SITE_CONFIG } from "@/data/site-config";

export const BlogPage = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Bijay Rouniyar's Web Development Blog",
      description: "Practical guides and insights on website development, performance engineering, and local SEO in Nepal.",
      url: `${SITE_CONFIG.siteUrl}/blog`,
      author: {
        "@type": "Person",
        name: SITE_CONFIG.name,
      },
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Seo
        title="Web Development Blog | Guides & Insights by Bijay Rouniyar"
        description="Articles and technical guides on website development costs in Nepal, local SEO strategies, and frontend performance by Bijay Rouniyar in Biratnagar."
        path="/blog"
        jsonLd={jsonLd}
      />

      <Navbar />

      <main id="main-content" className="flex-1 pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: "Blog", path: "/blog" }]} />

          <header className="mb-12">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-3 block">
              Insights & Guides
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-foreground leading-tight">
              Web Engineering & Strategy Blog
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Transparent, real-world advice on website costs in Nepal, local search visibility in Koshi Province, and modern software practices.
            </p>
          </header>

          <div className="space-y-8 mb-16">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="group glass rounded-2xl p-7 border border-border/60 hover-glow transition-all"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    <time dateTime={post.date}>{post.date}</time>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    <span>{post.readingTime}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-primary" />
                    <span>{post.author}</span>
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/40">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-accent transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
