import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppFloat.css";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/917303346113"
      target="_blank"
      className="whatsapp-float"
      animate={{ scale: [1, 1.08, 1] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      <FaWhatsapp />
    </motion.a>
  );
}
