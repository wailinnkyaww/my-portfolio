import { useState, type FormEvent } from "react";
import { Mail, MapPin, Send, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import "./Contact.css";

const YOUR_EMAIL = "YOUR_EMAIL@example.com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    );

    window.location.href = `mailto:${YOUR_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact-container">
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">GET IN TOUCH</span>
          <h2>Let's Work Together</h2>
          <p>
            Have a project in mind or an opportunity to discuss? I'd love to
            hear from you. Feel free to get in touch.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Contact Information */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-info-header">
              <h3>Let's connect</h3>
              <p>
                I'm currently open to junior frontend developer opportunities
                and interesting projects.
              </p>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon">
                <Mail size={21} />
              </div>
              <div>
                <span>Email me</span>
                <a href={`mailto:wlin76478@gmail.com`}>wlin76478@gmail.com</a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon">
                <MapPin size={21} />
              </div>
              <div>
                <span>Location</span>
                <p>Hlaing, Yangon, Myanmar</p>
              </div>
            </div>

            <div className="contact-socials">
              <span>FIND ME ON</span>

              <div className="contact-social-links">
                <a
                  href="https://github.com/wailinnkyaww"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <ArrowUpRight size={15} />
                </a>

                <a
                  href="https://www.linkedin.com/in/wai-linn-kyaw-5384442b2/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What is this about?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact-submit">
              Send Message
              <Send size={17} />
            </button>

            <p className="form-note">
              Your email application will open with your message ready to send.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
