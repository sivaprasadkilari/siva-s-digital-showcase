import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "ReactJS"],
  },
  {
    title: "Programming",
    skills: ["Java", "Python"],
  },
  {
    title: "Databases",
    skills: ["SQL", "PostgreSQL", "MongoDB", "Neo4j"],
  },
  {
    title: "CS Fundamentals",
    skills: ["DBMS", "Operating Systems"],
  },
  {
    title: "Tools & Design",
    skills: ["Git", "GitHub", "Canva", "MS Office"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-heading">
          <span className="gradient-text">04.</span> Skills
        </h2>
        <p className="section-subheading">Technologies I work with</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl bg-card border border-border p-5"
            >
              <h3 className="text-sm font-semibold text-primary font-mono mb-3">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-muted text-sm text-foreground font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
