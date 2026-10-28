import type { MouseEvent } from "react";

export const scrollToSection = (event: MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
  const sectionId = event.currentTarget.hash.slice(1);
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
};
