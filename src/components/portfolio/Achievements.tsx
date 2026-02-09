import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Users } from "lucide-react";

const items = [
  {
    icon: Trophy,
    title: "Department Hackathon Winner",
    description: "Secured 1st place in the department-level hackathon with an innovative solution.",
  },
  {
    icon: Users,
    title: "Management Mentor – GDG",
    description: "Served as a Management Mentor at Google Developer Groups, leading and guiding peers.",
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-heading">
          <span className="gradient-text">05.</span> Achievements
        </h2>
        <p className="section-subheading">Highlights & leadership</p>

        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="rounded-xl bg-card border border-border p-6 flex items-start gap-4 card-hover"
            >
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                <item.icon size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;
