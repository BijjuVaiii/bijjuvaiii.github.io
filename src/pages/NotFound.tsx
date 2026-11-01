import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Briefcase, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof console !== "undefined") {
      console.warn("404 Error: Non-existent route requested:", location.pathname);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Seo
        title="404: Page Not Found | Bijay Rouniyar"
        description="The requested page could not be found on www.bijayrouniyar.com.np. Please navigate back to home or view my projects."
        path="/404"
        noindex={true}
      />

      <Navbar />

      <main id="main-content" className="flex-1 flex items-center justify-center px-6 py-32">
        <div className="max-w-lg mx-auto text-center glass rounded-3xl p-8 sm:p-12 border border-border/60 shadow-2xl">
          <span className="text-6xl sm:text-7xl font-extrabold text-gradient block mb-4">
            404
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold mb-3 text-foreground">
            Page Not Found
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:scale-105 transition-all shadow-md shadow-primary/20"
            >
              <Home className="w-4 h-4" />
              <span>Return to Home</span>
            </Link>
            <Link
              to="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass glass-hover text-foreground font-semibold text-sm transition-all"
            >
              <Briefcase className="w-4 h-4" />
              <span>View Projects</span>
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-border/40 text-xs text-muted-foreground">
            Looking for something specific?{" "}
            <Link to="/contact" className="text-primary hover:underline font-medium">
              Contact Bijay
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
