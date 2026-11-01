import React from "react";
import { Helmet } from "react-helmet-async";
import { SITE_CONFIG } from "@/data/site-config";

export interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
  noindex?: boolean;
}

export const Seo: React.FC<SeoProps> = ({
  title = `${SITE_CONFIG.title} | ${SITE_CONFIG.name}`,
  description = "Bijay Rouniyar is a full stack web developer in Biratnagar, Nepal. I build fast, modern websites and web apps for businesses in Koshi Province and beyond.",
  path = "/",
  image = `${SITE_CONFIG.siteUrl}/og-image.jpg`,
  type = "website",
  jsonLd,
  noindex = false,
}) => {
  const cleanPath = path === "/" ? "/" : path.replace(/\/+$/, "");
  const canonicalUrl = cleanPath === "/" ? `${SITE_CONFIG.siteUrl}/` : `${SITE_CONFIG.siteUrl}${cleanPath}`;
  const fullImageUrl = image.startsWith("http") ? image : `${SITE_CONFIG.siteUrl}${image.startsWith("/") ? image : `/${image}`}`;

  return (
    <Helmet>
      {/* Primary HTML Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="author" content={SITE_CONFIG.name} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large" />
      )}

      {/* Geotagging for Local SEO */}
      <meta name="geo.region" content={SITE_CONFIG.location.regionCode} />
      <meta name="geo.placename" content={SITE_CONFIG.location.city} />

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content="Bijay Rouniyar Portfolio" />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:alt" content={`${SITE_CONFIG.name} – ${title}`} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default Seo;
