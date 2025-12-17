import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
import profileImg from "../../assets/ChatGPT Image Dec 6, 2025, 03_02_47 PM.png";
import { useTheme } from "../ThemeContext"; 
import "./Hero.css";

export default function Hero() {
  const { darkMode } = useTheme(); // <-- get darkMode from context
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Track mouse for spotlight + parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={`hero-container ${darkMode ? "hero-dark" : "hero-light"}`} // <-- dark/light
      style={{
        "--x": `${mousePos.x}px`,
        "--y": `${mousePos.y}px`,
      }}
    >
      {/* ================= LEFT TEXT ================= */}
      <motion.div
        className="hero-text"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="intro-line">
          Hello, my name is <span className="highlight">Yash Lakra</span>
        </h2>

        <h1 className="main-heading">
          I'm a{" "}
          <span className="highlight typewriter">
            <TypeAnimation
              sequence={[
                "Full-Stack Developer",
                2000,
                "Web-Designer",
                2000,
                "Web-Developer",
                2000,
                "Coder",
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </span>
        </h1>

        <p className="hero-desc">
          I'm a modern front-end web developer with skills in UI/UX, animations,
          creative design, and interactive interfaces.
        </p>

        <motion.button
          className="cv-btn"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
        >
          Download CV
        </motion.button>
      </motion.div>

      <motion.div
        className="hero-img"
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
      >
        <motion.img
          src={profileImg}
          alt="profile"
          className="floating-img"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}
