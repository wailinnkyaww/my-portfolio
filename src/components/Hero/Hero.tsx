import { motion } from "framer-motion";

import { ArrowUpRight, Download } from "lucide-react";

import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Left Content */}
        <motion.div
          className="hero-content"
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <span className="hero-label">
            <span className="status-dot"></span> Available for opportunities
          </span>
          <h1>
            Hi, I'm <span>Wai Linn Kyaw</span>
          </h1>
          <h2>Junior Developer</h2>
          <p className="hero-description">
            I build responsive, user-friendly and modern web applications using
            React, TypeScript and other modern web technologies. I'm passionate
            about creating clean interfaces and learning new technologies.
          </p>
          {/* Buttons */}
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View My Projects <ArrowUpRight size={18} />
            </a>
            <a
              href="/cv.pdf"
              download="Wai_Lin_Kyaw_CV.pdf"
              className="btn-secondary"
            >
              Download CV <Download size={18} />
            </a>
          </div>
          {/* Social Links */}
          <div className="hero-socials">
            <span>Find me on</span>

            <a
              href="https://github.com/wailinnkyaww"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/wai-linn-kyaw-5384442b2"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
        {/* Right Image */}
        <motion.div
          className="hero-image-wrapper"
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <div className="hero-image-bg"></div>
          <img
            src="/profile.jpg"
            alt="Wai Linn Kyaw - Junior Developer"
            className="hero-image"
          />
          <div className="floating-card">
            <span>💻</span>
            <div>
              <strong>Junior Developer</strong>
              <small>Building for the web</small>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
