import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Services.css";

/* IMAGES */
import frontendImg from "../../assets/services/frontend.jpg";
import uiuxImg from "../../assets/services/ui-ux.jpg";
import mernImg from "../../assets/services/mern.webp";
import dashboardImg from "../../assets/services/dashboard.png";
import portfolioImg from "../../assets/services/portfolio.jpg";
import optimizeImg from "../../assets/services/optimize.jpg";
import apiImg from "../../assets/services/api.png";
import supportImg from "../../assets/services/support.jpg";

/* THEME CONTEXT */
import { useTheme } from "../../Components/ThemeContext";

export default function Services() {
  const { darkMode } = useTheme();
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      title: "Frontend Development",
      short: "Modern UI with React",
      desc: "Building fast, responsive, and animated interfaces using React, JavaScript, and modern CSS.",
      img: frontendImg,
    },
    {
      title: "UI / UX Design",
      short: "Clean & intuitive design",
      desc: "Designing user-friendly interfaces with smooth animations and strong UX principles.",
      img: uiuxImg,
    },
    {
      title: "MERN Stack Development",
      short: "Full-stack solutions",
      desc: "End-to-end MERN applications with authentication, APIs, and dashboards.",
      img: mernImg,
    },
    {
      title: "Admin Dashboards",
      short: "Analytics & management",
      desc: "Modern dashboards with charts, tables, and role-based access control.",
      img: dashboardImg,
    },
    {
      title: "Portfolio Websites",
      short: "Personal branding",
      desc: "High-impact portfolio websites to showcase skills professionally.",
      img: portfolioImg,
    },
    {
      title: "Website Optimization",
      short: "Speed & performance",
      desc: "Improving load speed, responsiveness, and overall website performance.",
      img: optimizeImg,
    },
    {
      title: "API Integration",
      short: "Third-party APIs",
      desc: "Secure API integrations, payment gateways, and external services.",
      img: apiImg,
    },
    {
      title: "Maintenance & Support",
      short: "Long-term support",
      desc: "Bug fixes, updates, performance monitoring and improvements.",
      img: supportImg,
    },
  ];

  /* SHOW ONLY 6 INITIALLY */
  const visibleServices = showAll ? services : services.slice(0, 6);

  return (
    <section
      className={`services-wrapper ${
        darkMode ? "services-dark" : "services-light"
      }`}
    >
      <motion.h1
        className="services-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        My Services
      </motion.h1>

      <motion.p
        className="services-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Turning ideas into modern, scalable digital experiences.
      </motion.p>

      {/* GRID */}
      <motion.div
        className="services-grid"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {visibleServices.map((service) => (
          <motion.div
            key={service.title}
            className="service-card"
            whileHover={{ scale: 1.04 }}
            onClick={() => service.path && navigate(service.path)}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
          >
            {/* FRONT */}
            <div className="card-front">
              <img src={service.img} alt={service.title} />
              <h3>{service.title}</h3>
              <span>{service.short}</span>
            </div>

            {/* BACK */}
            <div className="card-back">
              <div className="back-left">
                <img src={service.img} alt={service.title} />
              </div>

              <div className="back-right">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>

                {service.path && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(service.path);
                    }}
                  >
                    More Details →
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* VIEW MORE BUTTON */}
      {!showAll && (
        <motion.div
          className="view-more-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <button className="view-more-btn" onClick={() => setShowAll(true)}>
            View More Services
          </button>
        </motion.div>
      )}
    </section>
  );
}
