import { FaUserCheck, FaBell, FaCogs, FaChartBar, FaComments, FaCalendarCheck } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Features() {
  const cards = [
    {
      icon: <FaCogs className="text-xl text-white" />,
      title: "Customizable Profiles",
      description: "Personalize your profile with themes, layouts, and settings.",
    },
    {
      icon: <FaUserCheck className="text-xl text-white" />,
      title: "Verified Users",
      description: "Connect confidently with verified, authentic users on the platform.",
    },
    {
      icon: <FaBell className="text-xl text-white" />,
      title: "Smart Notifications",
      description: "Get real-time alerts for the updates that matter to you.",
    },
    {
      icon: <FaChartBar className="text-xl text-white" />,
      title: "Account Insights",
      description: "Track your engagement and performance with detailed analytics.",
    },
    {
      icon: <FaComments className="text-xl text-white" />,
      title: "Easy Messaging",
      description: "Chat seamlessly with friends and groups through an intuitive interface.",
    },
    {
      icon: <FaCalendarCheck className="text-xl text-white" />,
      title: "Post Scheduling",
      description: "Plan and schedule posts to share content at the perfect time.",
    },
  ];

  return (
    <section className="bg-black py-16 px-6 md:px-10 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: [0, -5, 0], // Floating animation
            }}
            transition={{
              duration: 3,
              delay: index * 0.2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="bg-[#121212] border border-[#2a2a2a] rounded-2xl p-10 shadow-lg hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#1f1f1f] p-3 rounded-xl">
                {card.icon}
              </div>
              <h3 className="text-white font-semibold text-lg">{card.title}</h3>
            </div>
            <p className="text-sm text-gray-400">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

