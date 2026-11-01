import { motion } from "framer-motion";

const skills = [
  { name: "React & Next.js", level: 90, category: "Frontend Frameworks" },
  { name: "TypeScript", level: 88, category: "Core Language" },
  { name: "JavaScript (ES6+)", level: 92, category: "Core Language" },
  { name: "Node.js & Express", level: 82, category: "Backend & APIs" },
  { name: "Tailwind CSS & Modern UI", level: 95, category: "Styling & Design" },
  { name: "Git, GitHub & CI/CD", level: 86, category: "Tooling & DevOps" },
  { name: "REST APIs & JSON-LD", level: 90, category: "Web Standards & SEO" },
  { name: "HTML5 & Semantic Web", level: 96, category: "Frontend Core" },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative" aria-label="Technical Skills and Stack">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" aria-hidden="true" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-3 block">
            Skills & Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technologies I Engineer With
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Modern, battle-tested technologies selected for long-term maintainability, developer speed, and peak browser performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group glass rounded-2xl p-6 glass-hover hover-glow border border-border/60"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-bold text-base group-hover:text-primary transition-colors text-foreground">
                    {skill.name}
                  </h3>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {skill.category}
                  </span>
                </div>
                <span className="text-sm font-semibold text-primary px-2.5 py-1 rounded-full bg-primary/10">
                  {skill.level}%
                </span>
              </div>

              {/* Progress bar */}
              <div 
                className="h-2 bg-muted rounded-full overflow-hidden" 
                role="progressbar" 
                aria-valuenow={skill.level} 
                aria-valuemin={0} 
                aria-valuemax={100}
                aria-label={`${skill.name} proficiency level`}
              >
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
