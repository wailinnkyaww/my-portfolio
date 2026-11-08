import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <div className="projects-container">
        <div className="projects-heading">
          <span className="section-label">MY RECENT WORK</span>
          <h2>
            Featured <span>Projects</span>
          </h2>
          <p>Some of the projects I've developed using modern technologies.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="project-image"
                />
                <span className="project-category">{project.category}</span>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub ↗
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="demo-link"
                    >
                      Live Demo ↗
                    </a>
                  )}

                  {!project.github && !project.demo && (
                    <span className="project-coming-soon">
                      Links coming soon
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
