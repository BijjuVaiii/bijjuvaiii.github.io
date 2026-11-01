import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { parse, HTMLElement } from "node-html-parser";
import { SERVICES } from "../data/services";
import { PROJECTS } from "../data/projects";
import { BLOG_POSTS } from "../data/blog";

const distDir = path.resolve(process.cwd(), "dist");

const testRoutes = [
  { path: "/", file: "index.html" },
  { path: "/about", file: "about/index.html" },
  { path: "/contact", file: "contact/index.html" },
  { path: "/projects", file: "projects/index.html" },
  ...PROJECTS.map((p) => ({
    path: `/projects/${p.slug}`,
    file: `projects/${p.slug}/index.html`,
  })),
  ...SERVICES.map((s) => ({
    path: `/services/${s.slug}`,
    file: `services/${s.slug}/index.html`,
  })),
  { path: "/blog", file: "blog/index.html" },
  ...BLOG_POSTS.map((b) => ({
    path: `/blog/${b.slug}`,
    file: `blog/${b.slug}/index.html`,
  })),
];

describe("SEO and Prerendering Verification", () => {
  it("dist directory must exist and contain built files", () => {
    expect(fs.existsSync(distDir)).toBe(true);
  });

  it("CNAME, robots.txt, and sitemap.xml must exist in dist", () => {
    expect(fs.existsSync(path.join(distDir, "CNAME"))).toBe(true);
    expect(fs.existsSync(path.join(distDir, "robots.txt"))).toBe(true);
    expect(fs.existsSync(path.join(distDir, "sitemap.xml"))).toBe(true);
    expect(fs.existsSync(path.join(distDir, "404.html"))).toBe(true);
  });

  it("every sitemap URL must have a corresponding file in dist", () => {
    const sitemapContent = fs.readFileSync(path.join(distDir, "sitemap.xml"), "utf-8");
    testRoutes.forEach(({ path: routePath, file }) => {
      const canonicalHost = "https://www.bijayrouniyar.com.np";
      const expectedUrl = routePath === "/" ? `${canonicalHost}/` : `${canonicalHost}${routePath}`;
      expect(sitemapContent).toContain(`<loc>${expectedUrl}</loc>`);
      expect(fs.existsSync(path.join(distDir, file))).toBe(true);
    });
  });

  testRoutes.forEach(({ path: routePath, file }) => {
    describe(`Route: ${routePath}`, () => {
      const filePath = path.join(distDir, file);
      let content = "";
      let root: HTMLElement;

      it(`file exists at ${file}`, () => {
        expect(fs.existsSync(filePath)).toBe(true);
        content = fs.readFileSync(filePath, "utf-8");
        root = parse(content);
      });

      it("contains exactly one <h1> heading", () => {
        content = fs.readFileSync(filePath, "utf-8");
        root = parse(content);
        const h1Elements = root.querySelectorAll("h1");
        expect(h1Elements.length).toBe(1);
        expect(h1Elements[0].text.trim().length).toBeGreaterThan(5);
      });

      it("has a non-empty <title>", () => {
        const title = root.querySelector("title");
        expect(title).toBeDefined();
        expect(title?.text.trim().length).toBeGreaterThan(10);
      });

      it("has a canonical link on the correct host (www.bijayrouniyar.com.np)", () => {
        const canonical = root.querySelector('link[rel="canonical"]');
        expect(canonical).toBeDefined();
        const href = canonical?.getAttribute("href");
        expect(href).toMatch(/^https:\/\/www\.bijayrouniyar\.com\.np(\/|$)/);
        if (routePath === "/") {
          expect(href).toBe("https://www.bijayrouniyar.com.np/");
        } else {
          expect(href).toBe(`https://www.bijayrouniyar.com.np${routePath}`);
        }
      });

      it("has a meta description of 120–165 characters", () => {
        const desc = root.querySelector('meta[name="description"]');
        expect(desc).toBeDefined();
        const descContent = desc?.getAttribute("content")?.trim() || "";
        expect(descContent.length).toBeGreaterThanOrEqual(120);
        expect(descContent.length).toBeLessThanOrEqual(165);
      });

      it("contains valid parseable JSON-LD", () => {
        const scripts = root.querySelectorAll('script[type="application/ld+json"]');
        expect(scripts.length).toBeGreaterThan(0);
        scripts.forEach((script: HTMLElement) => {
          const parsed = JSON.parse(script.text);
          expect(parsed).toBeDefined();
        });
      });

      it("contains no occurrence of lovable.dev or bijay.dev", () => {
        expect(content).not.toContain("lovable.dev");
        expect(content).not.toContain("bijay.dev");
      });
    });
  });
});
