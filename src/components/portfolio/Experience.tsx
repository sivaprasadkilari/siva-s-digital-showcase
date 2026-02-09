import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Web Developer Intern",
    company: "CodersCave",
    period: "Mar 2024 – Apr 2024",
    description:
      "Built a responsive real-time analog clock using HTML, CSS, and JavaScript with smooth animation and precise timekeeping.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    role: "Python Developer Intern",
    company: "CodersCave",
    period: "Mar 2024 – Apr 2024",
    description:
      "Developed a Python expense-splitter application with input validation, error handling, and clean user interaction flow.",
    tech: ["Python"],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-heading">
          <span className="gradient-text">03.</span> Experience
        </h2>
        <p className="section-subheading">Where I've worked</p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Dot */}
                <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />

                <div className="rounded-xl bg-card border border-border p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="font-semibold text-foreground">
                      {exp.role}{" "}
                      <span className="text-primary">@ {exp.company}</span>
                    </h3>
                    <span className="text-xs text-muted-foreground font-mono">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
