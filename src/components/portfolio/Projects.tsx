import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "StackAI",
    description:
      "All-in-one AI web application for content generation, image generation, object remover, resume reviewer, and productivity tools.",
    tech: ["ReactJS", "PostgreSQL", "AI APIs"],
    github: "https://github.com/sivaprasadkilari/",
    live: "#",
  },
  {
    title: "Shopify – MERN Stack",
    description:
      "Full-stack e-commerce platform with product listing, cart management, authentication, and order handling.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/sivaprasadkilari/",
    live: "#",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-heading">
          <span className="gradient-text">02.</span> Projects
        </h2>
        <p className="section-subheading">Things I've built</p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group rounded-xl bg-card border border-border p-6 card-hover flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-6 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="tech-badge">
                    {t}
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

export default Projects;
