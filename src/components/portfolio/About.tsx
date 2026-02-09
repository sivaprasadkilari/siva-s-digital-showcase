import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-heading">
          <span className="gradient-text">01.</span> About Me
        </h2>
        <p className="section-subheading">A bit about my journey</p>

        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a <span className="text-foreground font-medium">B.Tech Information Technology</span> student
              at Vishnu Institute of Technology, expected to graduate in 2026. I'm passionate about
              building clean, efficient, and user-friendly web applications.
            </p>
            <p>
              With hands-on internship experience and multiple real-world projects, I've developed a
              strong foundation in both frontend and backend technologies. I love turning complex
              problems into simple, beautiful solutions.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new frameworks, contributing to tech
              communities, or mentoring peers as a Management Mentor for Google Developer Groups.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="rounded-xl bg-card border border-border p-6 space-y-4">
              <h3 className="font-semibold text-foreground">Education</h3>

              <div className="space-y-3">
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-sm font-medium text-foreground">B.Tech – Information Technology</p>
                  <p className="text-xs text-muted-foreground">Vishnu Institute of Technology</p>
                  <p className="text-xs text-primary font-mono">CGPA: 7.53 · Expected 2026</p>
                </div>

                <div className="border-l-2 border-border pl-4">
                  <p className="text-sm font-medium text-foreground">Intermediate</p>
                  <p className="text-xs text-muted-foreground">Narayana Junior College</p>
                  <p className="text-xs text-primary font-mono">91.8% · 2020–2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
