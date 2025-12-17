import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Portfolio.css";

/* THEME CONTEXT */
import { useTheme } from "../../Components/ThemeContext";

/* IMAGES */
import projectImg from "../../assets/portfolio/netflix.png";
import projectImg2 from "../../assets/portfolio/Github-dashboard.png";
import projectImg3 from "../../assets/portfolio/personal-dashboard.png";
import projectImg4 from "../../assets/portfolio/Github-profile-finder.png";
import projectImg5 from "../../assets/portfolio/MacOs-clone.png";
import projectImg6 from "../../assets/portfolio/mircosoft.png";
import projectImg7 from "../../assets/portfolio/My-portfolio.png";

export default function Portfolio() {
  const navigate = useNavigate();
  const [activeProject, setActiveProject] = useState(null);

  const { darkMode, toggleTheme } = useTheme();

  const projects = [
    {
      id: 1,
      title: "Netflix Clone",
      tech: "React • API • CSS",
      img: projectImg,
      desc: "A Netflix-style UI with responsive layout, movie API integration, and smooth animations.",
      live: "https://netflix-clone.vercel.app",
      github: "https://github.com/yashlakra17/netflix",
    },
    {
      id: 2,
      title: "GitHub Dashboard",
      tech: "React • Charts • API",
      img: projectImg2,
      desc: "A GitHub analytics dashboard showing repos, commits, stars, and activity using GitHub API.",
      live: "https://git-hub-dashboard-five.vercel.app/",
      github: "https://github.com/yashlakra17/GitHub-Dashboard",
    },
    {
      id: 3,
      title: "Admin Dashboard",
      tech: "HTML • CSS • JS",
      img: projectImg3,
      desc: "Modern admin panel with analytics cards, charts, employee attendance, and dark/light mode.",

      live: "https://admin-dashboard-lyart-chi-35.vercel.app/",
      github: "https://github.com/yashlakra17/Admin-Dashboard",
    },
    {
      id: 4,
      title: "GitHub Profile Finder",
      tech: "JavaScript • API",
      img: projectImg4,
      desc: "Search GitHub users and view profile details, repositories, followers, and stats.",

      live: "https://git-hub-profile-finder-tau-jet.vercel.app/",
      github: "https://github.com/yashlakra17/GitHub-Profile-Finder",
    },
    {
      id: 5,
      title: "macOS Clone",
      tech: "HTML • CSS • JS",
      img: projectImg5,
      desc: "A macOS-inspired desktop UI clone with dock animations, windows, and smooth transitions.",
      live: "https://mac-os-clone-henna.vercel.app/",
      github: "https://github.com/yashlakra17/MacOs-clone",
    },
    {
      id: 6,
      title: "Microsoft Homepage Clone",
      tech: "HTML • CSS • Responsive",
      img: projectImg6,
      desc: "Pixel-perfect Microsoft homepage clone with responsive layout and modern UI structure.",
      live: "https://microsoft0117.vercel.app/",
      github: "https://github.com/yashlakra17/Microsoft",
    },
    {
      id: 7,
      title: "My Portfolio Website",
      tech: "React • Framer Motion",
      img: projectImg7,
      desc: "Personal portfolio website showcasing projects, services, animations, and dark/light mode.",
      live: "https://my-portfolio-beta-green-47.vercel.app/",
      github: "https://github.com/yashlakra17/my-portfolio",
    },
  ];

  return (
    <section
      className={`portfolio-wrapper ${
        darkMode ? "portfolio-dark" : "portfolio-light"
      }`}
    >
      {/*  THEME TOGGLE */}
      {/* <button className="portfolio-theme-toggle" onClick={toggleTheme}>
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button> */}

      <motion.h2
        className="portfolio-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        My Work
      </motion.h2>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="portfolio-card"
            whileHover={{ scale: 1.04, rotateX: 4, rotateY: -4 }}
            transition={{ type: "spring", stiffness: 180, damping: 16 }}
          >
            <motion.img
              src={project.img}
              alt={project.title}
              whileHover={{ scale: 1.12 }}
              transition={{ duration: 0.6 }}
            />

            <div className="portfolio-overlay">
              <h3>{project.title}</h3>
              <span>{project.tech}</span>

              <div className="portfolio-actions">
                <button onClick={() => setActiveProject(project)}>
                  Preview
                </button>

                <button onClick={() => navigate(project.detailsPath)}>
                  Details
                </button>

                <a href={project.live} target="_blank" rel="noreferrer">
                  Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="portfolio-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="portfolio-modal"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={activeProject.img} alt="" />
              <h3>{activeProject.title}</h3>
              <p>{activeProject.desc}</p>

              <div className="modal-actions">
                <a href={activeProject.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={activeProject.live} target="_blank" rel="noreferrer">
                  Live
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
