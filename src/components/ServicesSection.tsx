import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Globe, Layout, ShoppingCart } from "lucide-react";
import { SERVICES } from "@/data/services";

const icons = [Code2, Layout, Globe, ShoppingCart];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-6 relative" aria-label="Web Development Services">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-3 block">
            What I Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Web Development & Engineering Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            From modern responsive business websites in Biratnagar to full-scale React web applications across Nepal, I engineer solutions focused on speed, search rankings, and business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group glass rounded-2xl p-7 glass-hover hover-glow flex flex-col justify-between border border-border/60"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-muted text-muted-foreground">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.summary}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature) => (
                      <li key={feature.title} className="text-xs text-foreground/80 flex items-start gap-2">
                        <span className="text-primary font-bold">✓</span>
                        <span>
                          <strong className="text-foreground">{feature.title}:</strong>{" "}
                          {feature.description.slice(0, 75)}...
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>Explore Service Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
