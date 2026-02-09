import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React.js", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Language" },
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "Git & GitHub", level: 88, category: "DevOps" },
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "JavaScript", level: 92, category: "Language" },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Skills & Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Technologies I work with
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass rounded-xl p-6 glass-hover hover-glow"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {skill.category}
                  </span>
                </div>
                <span className="text-2xl font-bold text-primary">
                  {skill.level}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                />
              </div>

              {/* Dots indicator */}
              <div className="flex gap-1 mt-3">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i < skill.level / 10 ? "bg-primary" : "bg-muted"
                    }`}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 + i * 0.02 }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
