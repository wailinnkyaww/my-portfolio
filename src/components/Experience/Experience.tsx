import { motion } from "framer-motion";
import { BriefcaseBusiness, CalendarDays } from "lucide-react";
import "./Experience.css";

function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="experience-container">
        <motion.div
          className="experience-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">MY JOURNEY</span>
          <h2>Experience</h2>
          <p>
            My practical experience and the skills I have developed throughout
            my learning journey.
          </p>
        </motion.div>

        <motion.div
          className="experience-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="experience-icon">
            <BriefcaseBusiness size={24} />
          </div>

          <div className="experience-content">
            <div className="experience-top">
              <div>
                <h3>Developer Intern</h3>
                <h4>BIB Co., Ltd.</h4>
              </div>

              <span className="experience-date">
                <CalendarDays size={15} />
                May 2026 – August 2026
              </span>
            </div>

            <p className="experience-description">
              Completed an internship focused on frontend development, UI/UX
              design, and modern web technologies.
            </p>

            <ul className="experience-list">
              <li>Designed user interfaces and prototypes using Figma.</li>
              <li>
                Developed responsive web pages using HTML, CSS, and JavaScript.
              </li>
              <li>Worked with React.js to build reusable UI components.</li>
              <li>
                Used Firebase for authentication and database integration.
              </li>
              <li>
                Explored GSAP animations and improved frontend interactions.
              </li>
              <li>
                Developed teamwork, communication, and time-management skills.
              </li>
            </ul>

            <div className="experience-tags">
              {[
                "Figma",
                "HTML",
                "CSS",
                "JavaScript",
                "GSAP",
                "React.js",
                "Firebase",
                "React Native",
              ].map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
