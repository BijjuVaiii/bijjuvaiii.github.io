import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-config";

export interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const allItems: BreadcrumbItem[] = [{ label: "Home", path: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.path === "/" ? `${SITE_CONFIG.siteUrl}/` : `${SITE_CONFIG.siteUrl}${item.path}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center flex-wrap gap-2 text-sm text-muted-foreground">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-2">
                {index === 0 ? (
                  <Link
                    to={item.path}
                    className="hover:text-primary transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                  >
                    <Home className="w-3.5 h-3.5" />
                    <span>Home</span>
                  </Link>
                ) : isLast ? (
                  <span
                    className="text-foreground font-medium truncate max-w-[200px] sm:max-w-none"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                  >
                    {item.label}
                  </Link>
                )}

                {!isLast && <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/60" />}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
