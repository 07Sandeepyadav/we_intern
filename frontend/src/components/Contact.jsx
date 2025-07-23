import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="bg-black text-white min-h-screen py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
        {/* Left side */}
        <div>
          <p className="text-sm text-gray-400 mb-2">Featured by Apple</p>
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            Foundations of <br /> beginning.{" "}
            <span className="text-gray-400">
              Our fundamental principles and ethics.
            </span>
          </h1>

          <div className="flex gap-4 mt-6">
            <button className="bg-white text-black px-5 py-3 rounded-xl text-sm font-semibold shadow-md hover:bg-gray-200 transition">
              <i className="fab fa-apple mr-2"></i> App Store
            </button>
            <button className="bg-white text-black px-5 py-3 rounded-xl text-sm font-semibold shadow-md hover:bg-gray-200 transition">
              <i className="fab fa-google-play mr-2"></i> Google Play
            </button>
          </div>
        </div>

        {/* Right side - Phone Mockup with Animation */}
        <div className="relative w-full h-full flex justify-center items-center">
          <motion.div
            className="absolute top-0 left-12 z-10"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <Image
              src="/4.png"
              alt="Phone Mockup"
              width={300}
              height={600}
              className="drop-shadow-xl rounded-2xl"
            />
          </motion.div>

          <motion.div
            className="absolute top-0 left-0 z-0"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3, delay: 1 }}
          >
            <Image
              src="/5.png"
              alt="Phone Mockup Back"
              width={300}
              height={600}
              className=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
