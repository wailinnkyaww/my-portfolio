import { motion } from "framer-motion";
import { GraduationCap, CalendarDays } from "lucide-react";
import "./Education.css";

function Education() {
  return (
    <section className="education section" id="education">
      <div className="education-container">
        <motion.div
          className="education-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">MY BACKGROUND</span>
          <h2>Education</h2>
          <p>
            My academic background and the knowledge that supports my
            development journey.
          </p>
        </motion.div>

        <motion.div
          className="education-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="education-icon">
            <GraduationCap size={26} />
          </div>

          <div className="education-content">
            <span className="education-date">
              <CalendarDays size={15} />
              2019 – 2026
            </span>

            <h3>Bachelor of Computer Science</h3>
            <h4>University of Computer Science Meiktila</h4>

            <p>
              Focused on developing knowledge in information technology,
              programming, software development, and computer science.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
