import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaHome,
  FaUser,
  FaServicestack,
  FaImages,
  FaPhone,
  FaSun,
  FaMoon,
  FaBars,
} from "react-icons/fa";

import { useTheme } from "../ThemeContext"; 
import "./Sidebar.css";

export default function Sidebar() {
  const location = useLocation();
  const { darkMode, setDarkMode } = useTheme(); 
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  const menuItems = [
    { path: "/", label: "Home", icon: <FaHome /> },
    { path: "/about", label: "About", icon: <FaUser /> },
    { path: "/services", label: "Services", icon: <FaServicestack /> },
    { path: "/portfolio", label: "Portfolio", icon: <FaImages /> },
    { path: "/contact", label: "Contact", icon: <FaPhone /> },
  ];

  return (
    <motion.div
      className={`sidebar ${darkMode ? "dark" : "light"} ${
        collapsed ? "collapsed" : ""
      }`}
      initial={{ x: -60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* TOP BAR */}
      <div className="top-bar">
        <FaBars className="burger" onClick={toggleSidebar} />
        {!collapsed && <h2 className="logo">Portfolio</h2>}
      </div>

      {/* MENU */}
      <ul>
        {menuItems.map((item) => (
          <motion.li
            key={item.path}
            className={location.pathname === item.path ? "active" : ""}
            whileHover={{ scale: 1.07, x: 8 }}
            transition={{ duration: 0.2 }}
          >
            <Link to={item.path}>
              {location.pathname === item.path && (
                <motion.div
                  layoutId="activeIndicator"
                  className="active-indicator"
                />
              )}

              {item.icon}

              {!collapsed && <span className="item-label">{item.label}</span>}
            </Link>
          </motion.li>
        ))}
      </ul>

      {/* BOTTOM */}
      <div className="bottom-section">
        <motion.div
          className="theme-toggle"
          whileTap={{ scale: 0.8 }}
          onClick={() => setDarkMode(!darkMode)} // <-- toggle global theme
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </motion.div>

        {!collapsed && <p className="copyright">© Yash Lakra</p>}
      </div>
    </motion.div>
  );
}
