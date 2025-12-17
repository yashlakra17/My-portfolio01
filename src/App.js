import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, useTheme } from "./Components/ThemeContext";

import Sidebar from "./Components/Sidebar/Sidebar";
import WhatsAppFloat from "./Components/WhatsAppFloat/WhatsAppFloat";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";

import "./index.css";
import "./App.css";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <MainLayout />
      </Router>
    </ThemeProvider>
  );
}

// Separate layout to read darkMode from context
function MainLayout() {
  const { darkMode } = useTheme();

  return (
    <div className={`app-layout ${darkMode ? "dark" : "light"}`}>
      < WhatsAppFloat />
      <Sidebar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}
