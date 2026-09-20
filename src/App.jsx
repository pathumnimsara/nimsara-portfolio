import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import profileImage from "./assets/profile/nimsara-hero.png";
import shopeaseImage from "./assets/projects/shopease.png";
import studentManagementImage from "./assets/projects/student-management.png";
import devopsApiImage from "./assets/projects/devops-api.png";
import emotoringImage from "./assets/projects/emotoring.png";
import "./index.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
  document.body.classList.toggle("dark-mode", darkMode);
}, [darkMode]);

  const projects = [
    {
      type: "FULL-STACK",
      title: "ShopEase",
      description:
        "A full-stack e-commerce platform with product management, authentication, shopping cart and checkout functionality.",
      image: shopeaseImage,
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/pathumnimsara/ecommerce-web",
      live: "#"
    },
    {
      type: "DESKTOP APPLICATION",
      title: "Student Management System",
      description:
        "A JavaFX desktop application for managing student records with CRUD operations and MySQL database integration.",
      image: studentManagementImage,
      technologies: ["Java", "JavaFX", "MySQL"],
      github: "https://github.com/pathumnimsara/Student-Management-System",
      live: "#"
    },
    {
      type: "DEVOPS",
      title: "Student API",
      description:
        "A containerized REST API project using Docker, MongoDB, Docker Compose and GitHub Actions CI/CD.",
      image: devopsApiImage,
      technologies: ["Node.js", "Docker", "MongoDB"],
      github: "https://github.com/pathumnimsara/devops-student-api",
      live: "#"
    },
    {
      type: "UNIVERSITY PROJECT",
      title: "e-Motoring",
      description:
        "A digital queue and appointment management system concept for the Department of Motor Traffic with OCR-based document processing.",
      image: emotoringImage,
      technologies: ["React", "Node.js", "Firebase"],
      github: "#",
      live: "#"
    }
  ];

  /* Contact Form */

const handleSubmit = async (event) => {
  event.preventDefault();

  const form = event.currentTarget;

  setFormStatus("Sending...");

  try {
    const response = await emailjs.sendForm(
      "service_wgkn3vg",
      "template_81ntqoe",
      form,
      "2CVmBnU1MALO5ZvTT"
    );

    if (response.status === 200) {
      form.reset();
      setFormStatus("Message sent successfully.");
    } else {
      setFormStatus("Message could not be sent.");
    }
  } catch (error) {
    console.error("EmailJS Error:", error);
    setFormStatus("Message could not be sent. Please try again.");
  }
};

  return (
    <>
      {/* Navbar */}

      <nav className="navbar">
        <div className="logo">NIMSARA</div>

        <button
  className="theme-toggle"
  onClick={() => setDarkMode(!darkMode)}
  aria-label="Toggle dark mode"
>
  {darkMode ? "☀" : "☾"}
</button>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}

      <section id="home" className="hero">
        <div className="hero-bg-circle hero-bg-circle-one"></div>
        <div className="hero-bg-circle hero-bg-circle-two"></div>

        <div className="hero-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              className="hero-small"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              HELLO, I'M
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              Pathum Nimesh <span>Nimsara.</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              Full-Stack Developer & DevOps Enthusiast
            </motion.h2>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              I build modern web applications and explore DevOps practices to automate, 
              deploy and improve reliable software systems.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
            >
              <a href="#projects" className="btn primary-btn">
                View My Work
                <span className="btn-arrow">↗</span>
              </a>

              <a href="#contact" className="btn secondary-btn">
                Contact Me
                <span className="btn-arrow">↗</span>
              </a>
            </motion.div>

            
          </motion.div>

          <motion.div
            className="hero-photo-wrapper"
            initial={{ opacity: 0, scale: 0.94, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <div className="hero-photo-frame">
              <img
                src={profileImage}
                alt="Pathum Nimesh Nimsara"
                className="hero-photo"
              />
            </div>

            <motion.div
              className="hero-photo-label"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <span>FULL-STACK</span>
              <strong>DEVELOPER</strong>
            </motion.div>

            <div className="hero-photo-number">01</div>
          </motion.div>
        </div>
      </section>

      {/* About */}

      <section id="about" className="about">
        <div className="about-container">
          <motion.div
            className="about-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p>01 / ABOUT</p>
            <h2>About Me</h2>

        
        <div className="about-highlight card_container">
  <div className="card_hover">
    <div className="part part-1"></div>
    <div className="part part-2"></div>
    <div className="part part-3"></div>
    <div className="part part-4"></div>
    <div className="part part-5"></div>
    <div className="part part-6"></div>
    <div className="part part-7"></div>
    <div className="part part-8"></div>
    <div className="part part-9"></div>
    <div className="part part-10"></div>
    <div className="part part-11"></div>
    <div className="part part-12"></div>
    <div className="part part-13"></div>
    <div className="part part-14"></div>
    <div className="part part-15"></div>
  </div>

  <div className="about-highlight-card">
    <span className="about-highlight-number"></span>

    <div className="about-highlight-line"></div>

    <h3>
      BUILD.
      <br />
      DEPLOY.
      <br />
      IMPROVE.
    </h3>

    <p>FULL-STACK DEVELOPMENT × DEVOPS</p>
  </div>
</div>

          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p>
              I'm Pathum Nimesh Nimsara, an IT undergraduate and Full-Stack
              Developer interested in building practical and modern software
              solutions.
            </p>

            <p>
              I enjoy working across frontend and backend development while
              continuously improving my knowledge of databases, cloud
              technologies, DevOps and software engineering practices.
            </p>

            <p>
              My goal is to create reliable applications with clean interfaces,
              maintainable code and a good user experience.
            </p>

            <a href="#contact" className="about-btn">
              Let's Work Together
            </a>
          </motion.div>
        </div>
       
  
      </section>

      {/* Skills */}

      <section id="skills" className="skills">
        <div className="skills-container">
          <motion.div
            className="skills-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p>02 / SKILLS</p>
            <h2>What I Work With</h2>
          </motion.div>

          <div className="skills-grid">
            {[
              {
                title: "Frontend Development",
                text: "React, JavaScript, HTML, CSS and responsive user interface development."
              },
              {
                title: "Backend Development",
                text: "Node.js, Express.js, REST APIs and server-side application development."
              },
              {
                title: "Database",
                text: "MongoDB, MySQL and Firebase for application data and storage."
              },
              {
                title: "Programming",
                text: "JavaScript and Java with object-oriented programming and application development."
              },
              {
                title: "DevOps",
                text: "Docker, Git, GitHub Actions, CI/CD and containerized application workflows."
              },
              {
                title: "Tools",
                text: "VS Code, IntelliJ IDEA, GitHub, Postman and modern development tools."
              }
            ].map((skill, index) => (
              <motion.div
                className="skill-card"
                key={skill.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08
                }}
              >
                <h3>{skill.title}</h3>
                <p>{skill.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}

      <section id="projects" className="projects">
        <div className="projects-container">
          <motion.div
            className="projects-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p>03 / PROJECTS</p>
            <h2>Selected Work</h2>
          </motion.div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article
                className="project-card"
                key={project.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

                <div className="project-content">
                  <p className="project-type">{project.type}</p>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-tech">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.github !== "#" && (
                     <a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
  className="github-btn"
>
  <svg
    viewBox="0 0 24 24"
    height="18"
    width="18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
    />
  </svg>
  GitHub
</a>
                    )}

                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                      >
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Education and Experience */}

      <section className="journey">
        <div className="journey-container">
          <motion.div
            className="journey-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p>04 / JOURNEY</p>
            <h2>Education & Experience</h2>
          </motion.div>

          <div className="journey-grid">
            <motion.div
              className="journey-column"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <h3>Education</h3>

              <div className="journey-item">
                <span className="journey-year">CURRENT</span>

                <h4>Bachelor's Degree in Information Technology</h4>

                <p className="journey-place">
                  Uva Wellassa University of Sri Lanka
                </p>

                <p>
                  Studying information technology with a focus on software
                  development, databases, web technologies and modern IT
                  practices.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="journey-column"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <h3>Experience</h3>

              <div className="journey-item">
                <span className="journey-year">PROJECT EXPERIENCE</span>

                <h4>Full-Stack & DevOps Projects</h4>

                <p className="journey-place">
                  Personal & University Projects
                </p>

                <p>
                  Building full-stack applications, desktop systems,
                  containerized APIs and CI/CD workflows while developing
                  practical software engineering skills.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}

      <section className="services">
        <div className="services-container">
          <motion.div
            className="services-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p>05 / SERVICES</p>
            <h2>What I Can Build</h2>
          </motion.div>
            <motion.div
  className="services-grid"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <div className="service-card">
    <span className="service-number">01</span>
    <div className="service-content">
      <h3>Web Development</h3>
      <p>
        Modern and responsive websites built with clean and scalable code.
      </p>
    </div>
  </div>

  <div className="service-card">
    <span className="service-number">02</span>
    <div className="service-content">
      <h3>Full-Stack Development</h3>
      <p>
        Complete web applications with frontend, backend and database integration.
      </p>
    </div>
  </div>

  <div className="service-card">
    <span className="service-number">03</span>
    <div className="service-content">
      <h3>API Development</h3>
      <p>
        REST APIs with secure backend architecture and database connectivity.
      </p>
    </div>
  </div>

  <div className="service-card">
    <span className="service-number">04</span>
    <div className="service-content">
      <h3>DevOps & Deployment</h3>
      <p>
        Containerized applications, CI/CD pipelines and deployment workflows.
      </p>
    </div>
  </div>
</motion.div>
          
               </div>
      </section>

      {/* Contact */}

      <section id="contact" className="contact">
        <div className="contact-container">
          <motion.div
            className="contact-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p>06 / CONTACT</p>
            <h2>Let's Talk</h2>
          </motion.div>

          <div className="contact-content">
            <motion.div
              className="contact-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <p>
                Have a project, idea or opportunity you'd like to discuss?
                Feel free to send me a message.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <span>EMAIL</span>
                  <p>pathumnimesh253@gmail.com</p>
                </div>

                <div className="contact-item">
                  <span>LOCATION</span>
                  <p>Sri Lanka</p>
                </div>
              </div>
            </motion.div>

            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="reply_to"
                placeholder="Your Email"
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                required
              ></textarea>

              <button type="submit">Send Message ↗</button>

              {formStatus && <p>{formStatus}</p>}
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column footer-about">
            <h3>NIMSARA.</h3>

            <p>
              Full-Stack Developer focused on building modern web applications,
              practical software solutions and reliable digital experiences.
            </p>

            <a href="#contact" className="footer-btn">
              Get In Touch
            </a>
          </div>

          <div className="footer-column">
            <h3>Navigation</h3>

            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Social</h3>

            <ul>
              <li>
                <a
                  href="https://github.com/pathumnimsara"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/pathumnimsara/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contact</h3>

            <div className="footer-contact-item">
              <span>Email</span>
              <a href="mailto:pathumnimesh253@gmail.com">
                pathumnimesh253@gmail.com
              </a>
            </div>

            <div className="footer-contact-item">

              <span>Whatsapp</span>
              <p>070 2531979</p>
            </div>
          </div>
        </div>

        <div className="footer-social">
          <a
            href="https://github.com/pathumnimsara"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB ↗
          </a>

          <a
            href="https://www.linkedin.com/in/pathumnimsara/"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN ↗
          </a>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Pathum Nimesh Nimsara. All rights reserved.</p>
          <p>Built with React & Framer Motion.</p>
        </div>
      </footer>
    </>
  );
}

export default App;