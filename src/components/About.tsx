import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Calculate age dynamically from DOB
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
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Building the web, one line at a time.
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-5 gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="md:col-span-3 space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm a{" "}
              <span className="text-foreground font-medium">{age}-year-old</span>{" "}
              developer who believes in the power of clean code and thoughtful design. 
              My journey started with curiosity about how things work on the internet, 
              and it evolved into a passion for building solutions that matter.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I thrive on solving complex problems and turning ideas into reality. 
              Whether it's crafting pixel-perfect UIs or architecting robust backends, 
              I approach every project with the same mindset:{" "}
              <span className="text-foreground font-medium">
                build it right, make it fast, keep it simple.
              </span>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open source, or refining my craft through continuous learning.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="glass rounded-xl p-6 space-y-4">
              <h3 className="font-semibold text-lg mb-4">Quick Facts</h3>
              {[
                { label: "Age", value: `${age} years` },
                { label: "Location", value: "Building Remotely" },
                { label: "Focus", value: "Full Stack Development" },
                { label: "Learning", value: "Always" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                  <span className="text-muted-foreground text-sm">{item.label}</span>
                  <span className="font-medium text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
