import { motion } from "framer-motion";
import { Code2, GraduationCap, BriefcaseBusiness, Rocket } from "lucide-react";

import "./About.css";

const highlights = [
  {
    icon: <Code2 size={22} />,
    title: "Frontend Development",
    description: "Building responsive and user-friendly web applications.",
  },
  {
    icon: <GraduationCap size={22} />,
    title: "Education",
    description: "Developing my knowledge in software and web technologies.",
  },
  {
    icon: <BriefcaseBusiness size={22} />,
    title: "Internship Experience",
    description: "Practical experience working with modern web technologies.",
  },
  {
    icon: <Rocket size={22} />,
    title: "Continuous Learning",
    description: "Always improving my coding and problem-solving skills.",
  },
];

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about-container">
        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">GET TO KNOW ME</span>
          <h2>
            About <span>Me</span>
          </h2>
          <p>A little introduction about myself</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>
              Passionate about building
              <span> modern web experiences.</span>
            </h3>

            <p>
              Hello! I'm Wai Lin Kyaw, a Junior Front-End Developer interested
              in building modern, responsive and user-friendly web applications.
            </p>

            <p>
              I have experience working with HTML, CSS, JavaScript, React.js and
              TypeScript. I also have practical experience using Firebase for
              backend services and Git for version control.
            </p>

            <p>
              Through my internship and personal projects, I've developed my
              skills in UI development, teamwork and problem-solving. I'm eager
              to continue learning and grow as a professional software
              developer.
            </p>

            <a href="#contact" className="about-button">
              Let's Connect
            </a>
          </motion.div>

          <motion.div
            className="about-highlights"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {highlights.map((item, index) => (
              <div className="highlight-card" key={index}>
                <div className="highlight-icon">{item.icon}</div>

                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
