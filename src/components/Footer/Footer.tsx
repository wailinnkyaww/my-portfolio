import { ArrowUp, Mail } from "lucide-react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              Wai Linn<span>.</span>
            </a>
            <p>
              Junior Developer passionate about building modern, responsive, and
              user-friendly web applications.
            </p>
          </div>
          {/* Quick Links */}
          <div className="footer-links">
            <h3>Quick Links</h3> <a href="#home">Home</a>
            <a href="#about">About</a> <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
          {/* Social Links */}
          <div className="footer-social">
            <h3>Let's Connect</h3>
            <p>Feel free to connect with me or discuss new opportunities.</p>

            <div className="footer-social-icons">
              <a
                href="https://github.com/wailinnkyaww"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-text-icon"
              >
                GH
              </a>

              <a
                href="https://www.linkedin.com/in/wai-linn-kyaw-5384442b2/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-text-icon linkedin-icon"
              >
                in
              </a>

              <a
                href="mailto:wlin76478@example.com"
                aria-label="Email"
                className="social-text-icon"
              >
                <Mail size={19} />
              </a>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="footer-bottom">
          <p>
            © {currentYear}
            Wai Linn Kyaw. All rights reserved.
          </p>
          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            Back to Top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
