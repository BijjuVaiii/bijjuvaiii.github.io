import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Share2, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BLOG_POSTS, BlogPost } from "@/data/blog";
import { SITE_CONFIG } from "@/data/site-config";

interface BlogPostDetailProps {
  postOverride?: BlogPost;
}

export const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ postOverride }) => {
  const { slug } = useParams<{ slug: string }>();
  const post = postOverride || BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.metaDescription,
      datePublished: post.date,
      dateModified: post.date,
      author: {
        "@type": "Person",
        name: post.author,
        url: `${SITE_CONFIG.siteUrl}/about`,
      },
      publisher: {
        "@type": "Person",
        name: SITE_CONFIG.name,
        url: `${SITE_CONFIG.siteUrl}/`,
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE_CONFIG.siteUrl}/blog/${post.slug}`,
      },
      keywords: post.tags.join(", "),
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Seo
        title={post.seoTitle}
        description={post.metaDescription}
        path={`/blog/${post.slug}`}
        type="article"
        jsonLd={jsonLd}
      />

      <Navbar />

      <main id="main-content" className="flex-1 pt-28 pb-20 px-6">
        <article className="max-w-3xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Blog", path: "/blog" },
              { label: post.title, path: `/blog/${post.slug}` },
            ]}
          />

          <header className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5 text-foreground leading-tight">
              {post.h1}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-muted-foreground pb-6 border-b border-border/50">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-primary" />
                <span className="text-foreground font-medium">{post.author}</span>
                <span>({post.authorRole})</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-primary" />
                <time dateTime={post.date}>{post.date}</time>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary" />
                <span>{post.readingTime}</span>
              </span>
            </div>
          </header>

          {/* Article Excerpt */}
          <div className="text-lg font-medium text-foreground/90 leading-relaxed mb-8 glass p-5 rounded-xl border border-primary/20">
            {post.excerpt}
          </div>

          {/* Body Sections */}
          <div className="space-y-10 text-muted-foreground text-base leading-relaxed mb-16">
            {post.contentSections.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">
                  {section.heading}
                </h2>
                {section.body.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>

          {/* Author Bio Box */}
          <div className="glass rounded-2xl p-6 sm:p-8 border border-border/60 flex flex-col sm:flex-row items-center gap-6 mb-12">
            <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center text-primary font-bold text-2xl shrink-0">
              B
            </div>
            <div className="text-center sm:text-left space-y-2 flex-1">
              <h3 className="font-bold text-foreground text-lg">
                About the Author: {post.author}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Bijay Rouniyar is a Full Stack Web Developer based in Biratnagar, Nepal. He helps businesses and startups build fast, reliable websites and modern web applications with React, TypeScript, and Node.js.
              </p>
              <div className="pt-1">
                <Link
                  to="/about"
                  className="text-xs font-semibold text-primary hover:text-accent inline-flex items-center gap-1"
                >
                  <span>Learn more about Bijay</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center glass rounded-2xl p-8 border border-primary/30">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Have questions or want to discuss a project in Nepal?
            </h3>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto mb-6">
              I am available for website development, consulting, and custom React applications for businesses across Koshi Province and beyond.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:scale-105 transition-all shadow-md shadow-primary/20 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Bijay</span>
              </Link>
              <Link
                to="/blog"
                className="px-6 py-3 rounded-xl glass glass-hover text-sm font-semibold text-foreground"
              >
                ← Back to All Articles
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostDetail;
