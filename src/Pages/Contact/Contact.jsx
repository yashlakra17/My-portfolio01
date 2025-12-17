import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Lottie from "lottie-react";
import successAnim from "../../assets/lottie/successfully.json";
import "./Contact.css";
import { useTheme } from "../../Components/ThemeContext";
import {
  FaWhatsapp,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const { darkMode } = useTheme();

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("access_key", process.env.REACT_APP_WEB3FORMS_KEY);
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);
    formData.append("subject", "New Portfolio Contact Message");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 2800);
      } else {
        setError(data.message || "Failed to send message ");
      }
    } catch {
      setError("Something went wrong ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className={`contact-wrapper ${
        darkMode ? "contact-dark" : "contact-light"
      }`}
    >
      {/* HEADER */}
      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="contact-title">Let’s Build Something Cool </h2>
        <p className="contact-subtitle">
          Have an idea? Let’s turn it into reality 
        </p>
      </motion.div>

      {/* CONTENT */}
      <div className="contact-grid">
        {/* FORM */}
        <motion.form
          className="contact-form glass"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="input-group">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>Your Name</label>
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>Email Address</label>
          </div>

          <div className="input-group textarea">
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>Your Message</label>
          </div>

          {error && <p className="error-text">{error}</p>}

          <motion.button
            className="send-btn"
            whileTap={{ scale: 0.95 }}
            disabled={loading}
          >
            {loading ? (
              "Sending..."
            ) : (
              <>
                <FaPaperPlane /> Send Message
              </>
            )}
          </motion.button>
        </motion.form>

        {/* INFO PANEL */}
        <motion.div
          className="contact-info glass"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3>Let’s Connect</h3>

          <p>
            <FaEnvelope /> lakrayash17@gmail.com
          </p>

          <a
            href="https://wa.me/917303346113?text=Hi%20I%20visited%20your%20portfolio"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-cta"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>

          <div className="contact-socials">
            <a
              href="https://github.com/yashlakra17"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/yash-lakra-129819353/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/yash_lakra0117"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>
      </div>

      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {success && (
          <motion.div
            className="success-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="success-box glass"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
            >
              <Lottie
                animationData={successAnim}
                loop={false}
                style={{ width: 120, height: 120, margin: "0 auto" }}
              />
              {/* <h3>Message Sent </h3>
              <p>I’ll reply as soon as possible</p> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
