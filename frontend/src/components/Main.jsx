import { motion } from "framer-motion";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Main() {
  return (
    <div className="bg-black text-white min-h-screen p-6 font-sans">
      {/* Top Trusted Logos Section */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-xl sm:text-2xl text-gray-300 font-medium mb-6">
          Trusted by 1000+ businesses across the world
        </p>
        <motion.div 
          className="flex flex-wrap justify-center gap-8 grayscale opacity-90"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {["Velocity", "Synergy", "Enigma", "Spectrum", "Lumina", "Vortex"].map((name, index) => (
            <motion.span
              key={index}
              className="text-gray-400 text-base sm:text-lg font-semibold hover:text-white cursor-default transition-colors duration-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {name}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Center Logo and Heading Section */}
      <motion.div 
        className="text-center my-12"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="w-[150px] h-[150px] rounded-full mx-auto bg-white flex items-center justify-center mb-8 shadow-lg"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <img src="logo.jpg" className="rounded-lg w-[100px]" alt="Logo" />
        </motion.div>
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Empowering authentic connections for a <br />
          vibrant social experience.
        </motion.h1>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto text-center text-white/90 mt-14"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        {[
          { count: "500k+", text: "Shared moments and stories every month" },
          { count: "200k+", text: "Communities thriving across diverse interests" },
          { count: "50+", text: "Countries where Appit is growing strong" },
        ].map((item, i) => (
          <motion.div 
            key={i}
            className="p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold">{item.count}</h2>
            <p className="mt-2 text-sm text-gray-400">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}
