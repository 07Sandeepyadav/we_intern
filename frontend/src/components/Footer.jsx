"use client";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <motion.footer
      className="bg-black text-white py-16 px-6 md:px-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-4xl mx-auto text-center">

        {/* Logo */}
        <motion.div
          className="flex flex-col items-center gap-3 mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <img src="/logo.jpg" alt="Company Logo" className="h-8" />
          <h1 className="text-2xl font-semibold">Reva</h1>
          <p className="text-gray-400 text-sm mt-1">
            Empower Your Social Connections
            <br />
            with Appit Social
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href="mailto:hello@appit.com"
          className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition mb-8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          📩 hello@appit.com
        </motion.a>

        {/* Footer Navigation Links */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <a href="#">Benefits</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Testimonials</a>
          <a href="#">FAQ’s</a>
          <a href="#">Waitlist</a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.a
            href="#"
            className="bg-[#121212] p-3 rounded-xl hover:bg-[#1f1f1f] transition"
            whileHover={{ scale: 1.1 }}
          >
            <FaLinkedinIn className="text-white" />
          </motion.a>
          <motion.a
            href="#"
            className="bg-[#121212] p-3 rounded-xl hover:bg-[#1f1f1f] transition"
            whileHover={{ scale: 1.1 }}
          >
            <FaXTwitter className="text-white" />
          </motion.a>
          <motion.a
            href="#"
            className="bg-[#121212] p-3 rounded-xl hover:bg-[#1f1f1f] transition"
            whileHover={{ scale: 1.1 }}
          >
            <FaInstagram className="text-white" />
          </motion.a>
        </motion.div>

        {/* Bottom Row */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 border-t border-[#1f1f1f] pt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="mb-2 md:mb-0">Template by Praha</p>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </motion.div>
      </div>
    </motion.footer>
  );
}
