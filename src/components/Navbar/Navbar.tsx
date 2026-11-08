import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          Wai Linn<span>.</span>
        </a>

        <nav className={`nav-menu ${isOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a href="#contact" className="nav-contact">
          Let's Talk
        </a>

        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
