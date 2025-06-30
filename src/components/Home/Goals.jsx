import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Activity, BookOpen, Heart } from 'lucide-react';

// Detailed AUV planning steps
const plans = [
  {
    icon: Globe,
    title: 'Explore Marine Ecosystems',
    description: 'Mapping biodiversity hotspots in coastal regions',
    details: [
      'Survey diverse habitats',
      'Collect water samples',
      'Document species distribution',
    ],
  },
  {
    icon: Activity,
    title: 'Monitor Water Quality',
    description: 'Real-time data on pollution and salinity levels',
    details: [
      'Measure pollutant concentrations',
      'Track pH & dissolved oxygen',
      'Generate daily reports',
    ],
  },
  {
    icon: BookOpen,
    title: 'Support Research & Education',
    description: 'Open-source data for academic collaboration',
    details: [
      'Share datasets publicly',
      'Collaborate with universities',
      'Host workshops',
    ],
  },
  {
    icon: Heart,
    title: 'Enhance Search & Rescue',
    description: 'Deployable platform for underwater missions',
    details: [
      'Rapid area mapping',
      'Emergency beacon detection',
      'Coordinate rescue teams',
    ],
  },
];

// Framer Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3, when: 'beforeChildren' } }
};
const cardVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(16px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 80, damping: 14, duration: 1 }
  }
};

export default function GoalsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 to-black text-white">
      <motion.div
        className="max-w-6xl mx-auto text-center px-4 lg:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-6"
          variants={cardVariants}
        >
          Our AUV Plan
        </motion.h2>
        <motion.p
          className="text-base md:text-lg text-gray-300 mb-16 max-w-3xl mx-auto"
          variants={cardVariants}
        >
          Discover where and how our AUV will make an impact—from environmental research to search & rescue missions, leveraging data-driven insights and open collaboration.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, idx) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={idx}
                className="relative w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 flex flex-col items-start text-left transition-transform duration-300"
                variants={cardVariants}
                whileHover={{ scale: 1.04, boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)' }}
              >
                <div className="bg-white/20 p-3 rounded-full mb-4 backdrop-blur-sm">
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                  {plan.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300 mb-4">
                  {plan.description}
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  {plan.details.map((item, i) => (
                    <li key={i} className="text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
