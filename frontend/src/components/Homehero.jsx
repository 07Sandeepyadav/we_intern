import { motion } from "framer-motion";

export default function HomeHero() {
  return (
    <section className="relative bg-black text-white overflow-hidden py-40 px-6 md:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center z-10 relative">
        {/* Left Side - Text */}
        <div className="space-y-6 ml-20">
          <p className="text-sm text-gray-400 font-medium">✨ Featured by Apple</p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Foundations of <span className="text-white">beginning.</span>
            <br />
            <span className="text-gray-400">Our fundamental principles and ethics.</span>
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-6">
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition">
               App Store
            </button>
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition">
              ▶ Google Play
            </button>
          </div>
        </div>

        {/* Right Side - Phone Images with Animation */}
        <div className="relative w-full h-[520px] flex justify-center items-center ml-10">
          {/* Background Glow */}
          <div className="absolute w-[360px] h-[360px] rounded-full bg-[#00B3B8] opacity-30 blur-3xl z-0"></div>

          {/* Animated Phone Back */}
          <motion.img
            src="/1.png"
            alt="Phone Back"
            className="absolute left-8 top-0 z-0 drop-shadow-2xl w-[260px] h-auto rotate-[-6deg]"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />

          {/* Animated Phone Front */}
          <motion.img
            src="/2.png"
            alt="Phone Front"
            className="relative z-10 drop-shadow-2xl w-[260px] h-auto rotate-[2deg] " 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
}
