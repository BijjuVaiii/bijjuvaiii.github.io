import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "@/lib/section-navigation";

const navLinks = [
  { name: "About", href: "/about", hash: "#about" },
  { name: "Services", href: "/services/web-development-biratnagar" },
  { name: "Projects", href: "/projects", hash: "#projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact", hash: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
        Skip to main content
      </a>

      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass py-3.5 shadow-sm" : "py-5"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav
          className="max-w-6xl mx-auto px-6 flex items-center justify-between"
          aria-label="Main Navigation"
        >
          <Link
            to="/"
            className="text-xl font-bold flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded p-1"
            aria-label="Bijay Rouniyar – Home"
          >
            <span className="text-gradient">B</span>
            <span className="text-foreground">ijay</span>
            <span className="text-xs px-2 py-0.5 ml-2 rounded-full border border-primary/30 text-primary hidden sm:inline-block">
              Biratnagar, NP
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const useAnchor = isHome && link.hash;
              return useAnchor ? (
                <a
                  key={link.name}
                  href={link.hash}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group py-1"
                  onClick={scrollToSection}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium transition-colors relative group py-1 ${
                    location.pathname.startsWith(link.href)
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      location.pathname.startsWith(link.href) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}

            <Link
              to="/contact"
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-primary text-primary-foreground hover:scale-105 transition-all duration-200"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2.5 rounded-lg glass focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-foreground" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              className="absolute top-20 left-6 right-6 z-10 glass rounded-2xl p-6 shadow-2xl border border-border/60"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              aria-label="Mobile Navigation"
            >
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => {
                  const useAnchor = isHome && link.hash;
                  return useAnchor ? (
                    <a
                      key={link.name}
                      href={link.hash}
                      className="text-base font-medium py-2.5 px-3 rounded-lg text-foreground hover:bg-muted hover:text-primary transition-colors"
                      onClick={(e) => {
                        scrollToSection(e);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={`text-base font-medium py-2.5 px-3 rounded-lg transition-colors ${
                        location.pathname.startsWith(link.href)
                          ? "bg-primary/10 text-primary font-semibold"
                          : "text-foreground hover:bg-muted hover:text-primary"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  );
                })}

                <div className="pt-3 border-t border-border/50 mt-2">
                  <Link
                    to="/contact"
                    className="w-full text-center block py-3 text-sm font-semibold rounded-lg bg-primary text-primary-foreground"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact Bijay
                  </Link>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
