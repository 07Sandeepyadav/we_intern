import { useState } from 'react';
import { motion } from 'framer-motion';
import { Image, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (section) => {
    alert(`Navigating to ${section}`);
    setIsMenuOpen(false);
  };

  return (
    <header>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 w-full flex justify-between items-center bg-black px-4 py-4 text-white shadow-md transition-all duration-300 ease-in-out h-20 z-50"
      >
        {/* Logo with animation */}
        <motion.div
          className="flex items-center ml-10 cursor-pointer"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
          onClick={() => alert('Logo clicked!')}
        >
          <img
            src="/logo.jpg"
            alt="Appit Logo"
            className="h-10"
          />
        </motion.div>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex space-x-8 text-base font-medium text-white">
          {['Benefits', 'Features', 'Pricing', 'Testimonials', "FAQ's"].map((link, index) => (
            <motion.li
              key={link}
              onClick={() => handleNavClick(link)}
              className="hover:text-[#F7931E] cursor-pointer"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              {link}
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <motion.div
          className="hidden lg:flex"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
        >
          <button className="bg-white text-black px-5 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
            Join Waitlist
          </button>
        </motion.div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-[#F7931E] focus:outline-none"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Nav Menu with Animation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 right-4 bg-[#0C1A30] text-white p-5 rounded-lg shadow-lg space-y-4 w-48"
          >
            {['Benefits', 'Features', 'Pricing', 'Testimonials', "FAQ's", 'Join Waitlist'].map((link, index) => (
              <motion.div
                key={link}
                className="cursor-pointer hover:text-[#F7931E]"
                onClick={() => handleNavClick(link)}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                {link}
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.nav>
    </header>
  );
}
