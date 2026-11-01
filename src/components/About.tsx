import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Award, Terminal } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-config";

export const About = () => {
  const calculateAge = (dob: string) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const age = calculateAge("2006-05-28");

  return (
    <section id="about" className="py-24 px-6 relative" aria-label="About Bijay Rouniyar">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-3 block">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Building the web from Biratnagar, one line at a time.
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base">
            Dedicated full stack developer focused on clean architecture, accessible user experiences, and measurable business value for Nepali businesses and remote clients.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-3 space-y-5 text-muted-foreground leading-relaxed text-base">
            <p>
              I am a <span className="text-foreground font-semibold">{age}-year-old</span> software developer born and based in <span className="text-foreground font-semibold">Biratnagar, Morang, Koshi Province, Nepal</span>. What began as deep curiosity about how digital systems communicate has evolved into a disciplined passion for engineering fast, resilient, and visually engaging web applications.
            </p>
            <p>
              My development philosophy centers on three pillars: <strong className="text-foreground">build it right, make it fast, and keep it accessible</strong>. Instead of using heavy, unoptimized site builders, I architect custom solutions using <span className="text-foreground font-medium">React, TypeScript, Node.js, and modern CSS</span> that load instantly even on mobile data connections across eastern Nepal.
            </p>
            <p>
              Whether partnering with local businesses in Biratnagar to build their primary digital presence or collaborating with international remote teams, I deliver software that solves tangible problems.
            </p>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                <span>Read my full journey & technical values</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="glass rounded-2xl p-6 space-y-4 border border-border/60">
              <h3 className="font-bold text-lg mb-4 text-foreground flex items-center gap-2">
                <Terminal className="w-4 h-4 text-primary" />
                <span>Quick Overview</span>
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-start py-2 border-b border-border/50 text-sm">
                  <span className="text-muted-foreground">Location</span>
                  <span className="font-medium text-foreground text-right flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                    Biratnagar, Nepal
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-border/50 text-sm">
                  <span className="text-muted-foreground">Experience</span>
                  <span className="font-medium text-foreground">Full Stack / React</span>
                </div>

                <div className="flex justify-between items-start py-2 border-b border-border/50 text-sm">
                  <span className="text-muted-foreground">Service Areas</span>
                  <span className="font-medium text-foreground text-right">
                    Biratnagar, Itahari, Dharan, Nepal & Remote
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-border/50 text-sm">
                  <span className="text-muted-foreground">Primary Stack</span>
                  <span className="font-medium text-foreground">React, TS, Node</span>
                </div>

                <div className="flex justify-between items-center py-2 text-sm">
                  <span className="text-muted-foreground">Status</span>
                  <span className="font-medium text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Open to Contracts
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
