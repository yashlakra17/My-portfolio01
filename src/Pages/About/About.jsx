import { motion } from "framer-motion";
import { useTheme } from "../../Components/ThemeContext";
import profileImg from "../../assets/ChatGPT Image Dec 6, 2025, 03_02_47 PM.png";
import "./About.css";

// IMPORT SKILL ICONS
import htmlIcon from "../../assets/skills/HTML5.png";
import cssIcon from "../../assets/skills/CSS3.png";
import jsIcon from "../../assets/skills/JavaScript.png";
import reactIcon from "../../assets/skills/React.png";
import nodeIcon from "../../assets/skills/Node.js.png";
import mongoIcon from "../../assets/skills/MongoDB.png";
import expressIcon from "../../assets/skills/Express.png";
import githubIcon from "../../assets/skills/GitHub.png";
import postmanIcon from "../../assets/skills/Postman.png";
import gitIcon from "../../assets/skills/Git.png";
import photoshop from "../../assets/skills/Adobe Photoshop.png";

export default function About() {
  const { darkMode } = useTheme(); // <-- use theme context

  const skills = [
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "React", icon: reactIcon },
    { name: "Node.js", icon: nodeIcon },
    { name: "MongoDB", icon: mongoIcon },
    { name: "Express.js", icon: expressIcon },
    { name: "GitHub", icon: githubIcon },
    { name: "Postman", icon: postmanIcon },
    { name: "Git", icon: gitIcon },
    { name: "Adobe Photoshop", icon: photoshop },
  ];

  return (
    <div className={`about-wrapper ${darkMode ? "about-dark" : "about-light"}`}>
      <motion.div
        className="about-left"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="about-title">About Me</h1>

        <p className="about-intro">
          I'm <span className="highlight">Yash Lakra</span>, a passionate
          front-end developer focused on building modern, animated and
          responsive digital experiences using
          <span className="highlight"> React, JavaScript, HTML & CSS</span>.
        </p>

        <p className="about-intro">
          I turn ideas into smooth UI interactions with strong attention to
          animation, details, and user experience.
        </p>

        <div className="timeline-section">
          <h2 className="timeline-title">My Journey</h2>

          <div className="timeline">
            {[
              {
                year: "2021 — Started Web Development",
                text: "Learned HTML, CSS, and JavaScript. Built first projects.",
              },
              {
                year: "2022 — Entered MERN Stack",
                text: "Created dashboards, clones, authentication & APIs.",
              },
              {
                year: "2023 — UI/UX + Animations",
                text: "Focused on Framer Motion, modern UI, dark/light themes.",
              },
              {
                year: "2024 — Professional Projects",
                text: "Built real client websites, dashboards & AI-based MERN apps.",
              },
            ].map((item, i) => (
              <div className="timeline-item" key={i}>
                <div className="circle"></div>
                <div className="timeline-content">
                  <h3>{item.year}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        className="about-right"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Profile Image */}
        <motion.div
          className="about-img-container"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          <img src={profileImg} alt="profile" className="about-img" />
        </motion.div>

        {/* Skills */}
        <h2 className="skills-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div className="skill-box" key={i}>
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
