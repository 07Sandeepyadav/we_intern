"use client";

import {
  CheckCircle,
  Smartphone,
  Calendar,
  Paintbrush,
  Smile,
} from "lucide-react";
import { motion } from "framer-motion";

export default function AppStyleContactDemo() {
  const features = [
    "Face ID check before consultation",
    "Instant calendar sync & reminders",
    "Live chat and support enabled",
    "Color theme customization",
    "Real-time system preview",
  ];

  const icons = [Smile, Paintbrush, Calendar, Smartphone];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="min-h-screen bg-black text-white px-0 md:px-10 py-16 font-sans relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Floating Icons Left */}
      <motion.div
        animate={{ x: [-10, 0, -10] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="hidden lg:flex flex-col items-center space-y-1 absolute left-0 top-1/2 -translate-y-1/2 z-10"
      >
        {icons.map((Icon, idx) => (
          <motion.div
            whileHover={{ scale: 1.15 }}
            key={idx}
            className="bg-[#1E1E1E] p-3 rounded-xl shadow-lg hover:bg-[#0070B8] transition duration-300"
          >
            <Icon size={20} className="text-white" />
          </motion.div>
        ))}
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-6 lg:px-28">
        {/* Phone Animation */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="relative w-[280px] h-[580px] rounded-3xl overflow-hidden"
        >
          <img
            src="/3.png"
            alt="iPhone UI"
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6"></div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-[500px] bg-[#1E1E1E] rounded-2xl p-8 md:p-10 shadow-2xl"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-[#0070B8] font-semibold text-lg mb-1">
            Get in Touch
          </h3>
          <h2 className="text-3xl font-bold mb-6 leading-snug">
            Book Your Free IT Consultation
          </h2>

          <ul className="space-y-3 text-sm md:text-base mb-8 text-gray-300">
            {features.map((item, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-2"
                variants={itemVariants}
              >
                <CheckCircle size={18} className="text-[#0070B8] mt-0.5" />
                {item}
              </motion.li>
            ))}
          </ul>

          <form className="space-y-4">
            <motion.input
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#2B2E33] text-white placeholder:text-gray-400 border border-[#0070B8] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0070B8] transition"
              whileFocus={{ scale: 1.01 }}
            />
            <motion.input
              type="email"
              placeholder="Your Email"
              className="w-full bg-[#2B2E33] text-white placeholder:text-gray-400 border border-[#0070B8] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0070B8] transition"
              whileFocus={{ scale: 1.01 }}
            />
            <motion.textarea
              placeholder="Your Message"
              rows={4}
              className="w-full bg-[#2B2E33] text-white placeholder:text-gray-400 border border-[#0070B8] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0070B8] transition"
              whileFocus={{ scale: 1.01 }}
            ></motion.textarea>

            <motion.button
              type="submit"
              whileTap={{ scale: 0.97 }}
              className="w-full bg-gradient-to-r from-[#0070B8] to-[#2B2E33] text-white font-bold py-3 rounded-full hover:opacity-90 transition duration-300"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Animated Toast Notification */}
      <motion.div
        animate={{ y: [-5, 0, -5], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="hidden md:block absolute top-10 right-10 bg-[#1E1E1E] rounded-xl px-6 py-4 shadow-xl w-72"
      >
        <p className="text-sm font-bold text-white">🔔 New Feature Alert</p>
        <p className="text-sm text-gray-300 mt-1">
          Check out our real-time system preview.
        </p>
      </motion.div>
    </motion.section>
  );
}
