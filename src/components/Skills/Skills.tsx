import { motion } from "framer-motion";
import { Code2, Layout, Database, Wrench } from "lucide-react";

import "./Skills.css";

const skillGroups = [
  {
    icon: <Code2 size={23} />,
    title: "Programming Languages",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
  },
  {
    icon: <Layout size={23} />,
    title: "Frontend Development",
    skills: ["React.js", "Vue.js", "React Native", "Responsive Design"],
  },
  {
    icon: <Database size={23} />,
    title: "Backend & Database",
    skills: ["Php", "Laravel", "Firebase", "Firestore", "Firebase Authentication"],
  },
  {
    icon: <Wrench size={23} />,
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Vite"],
  },
];

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="skills-container">
        <div className="skills-heading">
          <span className="section-label">MY EXPERTISE</span>
          <h2>
            Technical <span>Skills</span>
          </h2>
          <p>Technologies and tools I use to build applications.</p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.div
              className="skill-card"
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="skill-icon">{group.icon}</div>

              <h3>{group.title}</h3>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
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
