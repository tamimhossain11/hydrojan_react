import { motion } from "framer-motion";
import RevealSection from "../components/RevealSection";
import { ArrowRight, Waves, Droplets, Anchor } from "lucide-react";

export default function Home() {
  const features = [
    {
      title: "Deep Sea Exploration",
      description: "Cutting-edge technology for uncharted depths",
      icon: <Anchor className="text-blue-400" size={24} />
    },
    {
      title: "Marine Conservation",
      description: "Sustainable solutions for ocean preservation",
      icon: <Droplets className="text-teal-400" size={24} />
    },
    {
      title: "Underwater Innovation",
      description: "Revolutionary approaches to aquatic challenges",
      icon: <Waves className="text-cyan-400" size={24} />
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#0a0b0f] to-[#0e1120] text-white min-h-screen">
      <div className="space-y-32 px-4 md:px-20 pt-24 pb-40 max-w-7xl mx-auto">
        {/* Hero Section */}
        <RevealSection>
          <motion.section 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-6"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", damping: 10 }}
            >
              Welcome to Hydrojan
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Pioneering the future of underwater technology
            </motion.p>
          </motion.section>
        </RevealSection>

        {/* Mission Section */}
        <RevealSection delay={0.3}>
          <motion.section 
            className="bg-gradient-to-br from-blue-900/30 to-cyan-900/20 p-8 rounded-2xl backdrop-blur-xl border border-blue-800/30 shadow-2xl shadow-blue-900/20"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div 
              className="absolute inset-0 bg-[url('/noise.png')] opacity-1 rounded-2xl pointer-events-none"
              animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
              transition={{
                duration: 60,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
            />
            <h2 className="text-3xl mb-6 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-200">
              Our Mission
            </h2>
            <motion.p 
              className="text-lg text-blue-100 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Innovating the underwater world with sustainable solutions that push the boundaries of 
              marine exploration while preserving our precious ocean ecosystems.
            </motion.p>
          </motion.section>
        </RevealSection>

        {/* Features Section */}
        <RevealSection delay={0.6}>
          <section className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                className="group relative bg-gradient-to-br from-blue-900/20 to-cyan-900/10 p-8 rounded-xl backdrop-blur-lg border border-blue-800/20 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * i, duration: 0.6 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(34, 211, 238, 0.1), 0 10px 10px -5px rgba(34, 211, 238, 0.04)"
                }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className="p-3 rounded-lg bg-blue-900/30 group-hover:bg-cyan-500/20 transition-colors"
                    whileHover={{ rotate: 15 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-blue-100 group-hover:text-cyan-200 transition-colors">
                    {feature.title}
                  </h3>
                </div>
                
                <p className="text-blue-200/80 group-hover:text-blue-100 transition-colors">
                  {feature.description}
                </p>
                
                <motion.div 
                  className="absolute bottom-6 right-6 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    delay: 0.3,
                    duration: 1.5,
                    repeat: Infinity
                  }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </motion.div>
            ))}
          </section>
        </RevealSection>

        {/* CTA Section */}
        <RevealSection delay={0.9}>
          <motion.section 
            className="text-center mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              className="inline-block relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="absolute inset-0 bg-cyan-500 rounded-full blur-xl opacity-0 group-hover:opacity-70 -z-10"
                animate={{
                  opacity: [0, 0.5, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              />
              <button className="group flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg shadow-cyan-500/20 transition-all duration-300">
                Explore Our Technology
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity
                  }}
                >
                  <ArrowRight className="group-hover:rotate-45 transition-transform" size={20} />
                </motion.span>
              </button>
            </motion.div>
          </motion.section>
        </RevealSection>
      </div>
    </div>
  );
}