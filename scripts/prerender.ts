import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "vite";
import { SERVICES } from "../src/data/services";
import { PROJECTS } from "../src/data/projects";
import { BLOG_POSTS } from "../src/data/blog";
import { SITE_CONFIG } from "../src/data/site-config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.resolve(rootDir, "dist");
const docsDir = path.resolve(rootDir, "docs");
const ssrDir = path.resolve(rootDir, "dist-ssr");

// All distinct routes to prerender
const routes = [
  "/",
  "/about",
  "/contact",
  "/projects",
  ...PROJECTS.map((p) => `/projects/${p.slug}`),
  ...SERVICES.map((s) => `/services/${s.slug}`),
  "/blog",
  ...BLOG_POSTS.map((b) => `/blog/${b.slug}`),
  "/404",
];

async function prerender() {
  console.log("🚀 Starting Static Prerendering...");

  // 1. Build Client Bundle if not already built
  const templatePath = path.resolve(distDir, "index.html");
  if (!fs.existsSync(templatePath)) {
    console.log("Building client bundle...");
    await build({
      configFile: path.resolve(rootDir, "vite.config.ts"),
    });
  }

  const rawTemplate = fs.readFileSync(templatePath, "utf-8");

  // 2. Build SSR Bundle
  console.log("Building SSR entry...");
  await build({
    configFile: false,
    build: {
      ssr: path.resolve(rootDir, "src/entry-server.tsx"),
      outDir: ssrDir,
      emptyOutDir: true,
      rollupOptions: {
        output: {
          format: "es",
          entryFileNames: "entry-server.js",
        },
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(rootDir, "src"),
      },
    },
  });

  // 3. Import SSR Entry
  const ssrEntryPath = path.resolve(ssrDir, "entry-server.js");
  const { render } = await import(ssrEntryPath);

  console.log(`Prerendering ${routes.length} routes...`);

  const noscriptContent = `
    <noscript>
      <div style="padding:2rem;text-align:center;font-family:system-ui,-apple-system,sans-serif;color:#ffffff;background:#0a0d14;">
        <h1>Bijay Rouniyar – Full Stack Web Developer in Biratnagar, Nepal</h1>
        <p>I build fast, responsive websites and web apps with React, TypeScript, and Node.js for businesses in Koshi Province and beyond.</p>
        <p>
          Email: <a href="mailto:${SITE_CONFIG.email}" style="color:#38bdf8;">${SITE_CONFIG.email}</a> | 
          WhatsApp: <a href="${SITE_CONFIG.whatsappUrl}" style="color:#38bdf8;">${SITE_CONFIG.phone}</a>
        </p>
      </div>
    </noscript>
  `;

  for (const route of routes) {
    try {
      const { html, helmet } = render(route);

      let pageHtml = rawTemplate;

      // Replace Root with prerendered HTML and noscript fallback
      pageHtml = pageHtml.replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>${noscriptContent}`
      );

      // Inject helmet head elements
      const headTags: string[] = [];
      if (helmet) {
        if (helmet.title) {
          const titleStr = helmet.title.toString();
          if (titleStr) {
            pageHtml = pageHtml.replace(/<title>.*?<\/title>/i, titleStr);
          }
        }
        if (helmet.meta) headTags.push(helmet.meta.toString());
        if (helmet.link) {
          const linkStr = helmet.link.toString();
          // Replace base canonical if custom canonical present
          if (linkStr.includes('rel="canonical"')) {
            pageHtml = pageHtml.replace(/<link rel="canonical"[^>]*\/>/i, "");
          }
          headTags.push(linkStr);
        }
        if (helmet.script) headTags.push(helmet.script.toString());
      }

      if (headTags.length > 0) {
        pageHtml = pageHtml.replace("</head>", `${headTags.join("\n")}\n</head>`);
      }

      // Determine output file path
      let outFilePath: string;
      if (route === "/") {
        outFilePath = path.resolve(distDir, "index.html");
      } else if (route === "/404") {
        outFilePath = path.resolve(distDir, "404.html");
      } else {
        const routeSubdir = path.resolve(distDir, route.replace(/^\//, ""));
        fs.mkdirSync(routeSubdir, { recursive: true });
        outFilePath = path.resolve(routeSubdir, "index.html");
      }

      fs.writeFileSync(outFilePath, pageHtml, "utf-8");
      console.log(`✓ Prerendered: ${route} -> ${path.relative(rootDir, outFilePath)}`);
    } catch (err) {
      console.error(`❌ Failed to prerender ${route}:`, err);
      throw err;
    }
  }

  // 4. Generate Sitemap
  const today = new Date().toISOString().split("T")[0];
  const sitemapRoutes = routes.filter((r) => r !== "/404");
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapRoutes
  .map((route) => {
    const loc = route === "/" ? `${SITE_CONFIG.siteUrl}/` : `${SITE_CONFIG.siteUrl}${route}`;
    const priority = route === "/" ? "1.0" : route.startsWith("/services") ? "0.9" : "0.8";
    const changefreq = route === "/" ? "weekly" : "monthly";
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>`;

  fs.writeFileSync(path.resolve(distDir, "sitemap.xml"), sitemapXml, "utf-8");
  fs.writeFileSync(path.resolve(rootDir, "public/sitemap.xml"), sitemapXml, "utf-8");
  console.log("✓ Generated dist/sitemap.xml and public/sitemap.xml");

  // 5. Sync to docs/ folder so existing GitHub Pages deployment remains unbroken
  console.log("Syncing prerendered build to docs/...");
  if (fs.existsSync(docsDir)) {
    fs.rmSync(docsDir, { recursive: true, force: true });
  }
  fs.cpSync(distDir, docsDir, { recursive: true });
  console.log("✓ Successfully mirrored dist/ to docs/");

  // 6. Cleanup temporary SSR build folder
  if (fs.existsSync(ssrDir)) {
    fs.rmSync(ssrDir, { recursive: true, force: true });
  }

  console.log("✨ Prerendering complete!");
}

prerender().catch((err) => {
  console.error("Prerender fatal error:", err);
  process.exit(1);
});
