import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

async function generateAssets() {
  const publicDir = path.resolve(process.cwd(), "public");
  const assetsDir = path.resolve(process.cwd(), "src/assets");

  // 1. Generate SVG Favicon
  const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <defs>
    <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06b6d4" />
      <stop offset="100%" stop-color="#3b82f6" />
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#0a0d14" />
  <rect x="2" y="2" width="96" height="96" rx="22" fill="none" stroke="url(#primaryGrad)" stroke-width="3" stroke-opacity="0.6" />
  <text x="50" y="68" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="54" fill="url(#primaryGrad)" text-anchor="middle">B</text>
</svg>`;

  fs.writeFileSync(path.join(publicDir, "favicon.svg"), faviconSvg);
  console.log("✓ Generated public/favicon.svg");

  // 2. Render apple-touch-icon.png (180x180)
  await sharp(Buffer.from(faviconSvg))
    .resize(180, 180)
    .png({ quality: 95 })
    .toFile(path.join(publicDir, "apple-touch-icon.png"));
  console.log("✓ Generated public/apple-touch-icon.png");

  // 3. Render modern small favicon.png (64x64) and favicon.ico
  await sharp(Buffer.from(faviconSvg))
    .resize(64, 64)
    .png({ quality: 90 })
    .toFile(path.join(publicDir, "favicon.png"));
  console.log("✓ Generated optimized public/favicon.png");

  await sharp(Buffer.from(faviconSvg))
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, "favicon.ico"));
  console.log("✓ Generated public/favicon.ico");

  // 4. Generate OG Image (1200x630)
  const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0d14" />
      <stop offset="50%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#050810" />
    </linearGradient>
    <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#22d3ee" />
      <stop offset="50%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#818cf8" />
    </linearGradient>
    <radialGradient id="glow1" cx="20%" cy="25%" r="40%">
      <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#06b6d4" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="glow2" cx="80%" cy="75%" r="40%">
      <stop offset="0%" stop-color="#6366f1" stop-opacity="0.2" />
      <stop offset="100%" stop-color="#6366f1" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bgGrad)" />
  <circle cx="240" cy="180" r="300" fill="url(#glow1)" />
  <circle cx="960" cy="450" r="320" fill="url(#glow2)" />

  <!-- Outer frame -->
  <rect x="24" y="24" width="1152" height="582" rx="20" fill="none" stroke="#334155" stroke-opacity="0.4" stroke-width="2" />

  <!-- Badge -->
  <g transform="translate(100, 110)">
    <rect width="320" height="42" rx="21" fill="#1e293b" fill-opacity="0.8" stroke="#06b6d4" stroke-opacity="0.5" stroke-width="1.5" />
    <circle cx="22" cy="21" r="5" fill="#22c55e" />
    <text x="38" y="27" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="600" fill="#94a3b8" letter-spacing="1">AVAILABLE FOR PROJECTS</text>
  </g>

  <!-- Title & Name -->
  <text x="100" y="235" font-family="system-ui, -apple-system, sans-serif" font-size="70" font-weight="900" fill="#ffffff" letter-spacing="-1">
    Bijay Rouniyar <tspan font-size="52" fill="#94a3b8" font-weight="400">(Bijju)</tspan>
  </text>

  <!-- Subtitle -->
  <text x="100" y="315" font-family="system-ui, -apple-system, sans-serif" font-size="38" font-weight="700" fill="url(#textGrad)">
    Full Stack Web Developer
  </text>

  <!-- Location & Speciality -->
  <text x="100" y="380" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="500" fill="#cbd5e1">
    Biratnagar, Morang, Koshi Province, Nepal
  </text>

  <text x="100" y="425" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="400" fill="#64748b">
    React • TypeScript • Node.js • Scalable Web Applications • High Performance Websites
  </text>

  <!-- Footer Info -->
  <line x1="100" y1="480" x2="1100" y2="480" stroke="#334155" stroke-opacity="0.5" stroke-width="1.5" />
  <text x="100" y="535" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="600" fill="#38bdf8">
    www.bijayrouniyar.com.np
  </text>
  <text x="1100" y="535" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="500" fill="#94a3b8" text-anchor="end">
    guptabijay61@gmail.com • +977-9807060125
  </text>
</svg>`;

  await sharp(Buffer.from(ogSvg))
    .jpeg({ quality: 90, chromaSubsampling: "4:4:4" })
    .toFile(path.join(publicDir, "og-image.jpg"));
  console.log("✓ Generated public/og-image.jpg (1200x630)");

  // 5. Optimize Profile Image
  const profileSrc = path.join(assetsDir, "profile.png");
  if (fs.existsSync(profileSrc)) {
    const statsBefore = fs.statSync(profileSrc).size;
    console.log(`Original profile.png size: ${(statsBefore / 1024).toFixed(1)} KB`);

    // WebP version (optimized, 800x800 max)
    await sharp(profileSrc)
      .resize(800, 800, { fit: "cover", position: "center" })
      .webp({ quality: 85 })
      .toFile(path.join(assetsDir, "profile.webp"));
    console.log("✓ Generated src/assets/profile.webp");

    // Also optimize profile.png in-place (downscale from 1.6MB to clean PNG)
    const optimizedBuffer = await sharp(profileSrc)
      .resize(800, 800, { fit: "cover", position: "center" })
      .png({ quality: 85, compressionLevel: 9 })
      .toBuffer();
    fs.writeFileSync(profileSrc, optimizedBuffer);
    console.log(`✓ Optimized src/assets/profile.png to ${(optimizedBuffer.length / 1024).toFixed(1)} KB`);
  }
}

generateAssets().catch((err) => {
  console.error("Asset generation error:", err);
  process.exit(1);
});
