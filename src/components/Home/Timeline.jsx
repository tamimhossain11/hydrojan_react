import { motion } from "framer-motion";
import { FaTools, FaCogs, FaMicrochip, FaCode, FaFileAlt } from "react-icons/fa";

const workflows = [
  {
    title: "Mechanical Design",
    icon: <FaTools className="text-lg md:text-xl" />,
    items: [
      "Rulebook & Requirements Analysis",
      "Hydrodynamic Shape Testing",
      "Material Selection & Validation",
      "SolidWorks 3D Modeling",
      "Computational Fluid Dynamics",
      "Buoyancy & Stability Calculations"
    ],
    period: "2023 - Present",
    tag: "View Details"
  },
  {
    title: "Fabrication",
    icon: <FaCogs className="text-lg md:text-xl" />,
    items: [
      "Precision Component Selection",
      "Submersion Weight Optimization",
      "Waterproof Enclosure Engineering",
      "CNC Machined Components",
      "Elastic Sealant Application"
    ],
    period: "2023 - Present",
    tag: "View Details"
  },
  {
    title: "Electrical Systems",
    icon: <FaMicrochip className="text-lg md:text-xl" />,
    items: [
      "High-Efficiency Power Distribution",
      "Custom PCB Development",
      "Underwater Wiring Solutions",
      "Multi-Sensor Integration",
      "Fail-Safe Emergency Systems"
    ],
    period: "2023 - Present",
    tag: "View Details"
  },
  {
    title: "Software",
    icon: <FaCode className="text-lg md:text-xl" />,
    items: [
      "Autonomous Mission Algorithms",
      "Sensor Fusion Calibration",
      "Machine Vision Pipelines",
      "Real-Time Localization",
      "MAVLink Communication Stack"
    ],
    period: "2023 - Present",
    tag: "View Details"
  },
  {
    title: "Documentation",
    icon: <FaFileAlt className="text-lg md:text-xl" />,
    items: [
      "Technical Requirements Analysis",
      "Competition Rule Compliance",
      "Precision Procurement Logs",
      "Engineering Change Management",
      "System Integration Records"
    ],
    period: "2023 - Present",
    tag: "View Details"
  }
];

export default function Timeline() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0a0b0f] via-[#0e1120] to-[#10172e]">
      {/* Animated sea background */}
      <div className="absolute inset-0 animate-sea bg-gradient-to-b from-blue-900/30 via-blue-950/40 to-black/50 z-0"></div>
      
      <div className="relative z-10 p-6">
        <motion.h1 
          className="text-4xl md:text-5xl font-extrabold text-white text-center mb-16 drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Development <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Workflow</span>
        </motion.h1>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line with glow */}
          <div className="absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent transform -translate-x-1/2 hidden md:block"></div>
          
          {/* Timeline items */}
          <div className="space-y-16">
            {workflows.map((wf, i) => (
              <motion.div
                key={i}
                className="relative group"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: i * 0.15,
                  type: "spring"
                }}
                viewport={{ once: true }}
              >
                {/* Enhanced Glass Icon Bubble */}
                <div className="absolute left-1/2 -translate-x-1/2 md:left-0 top-0 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center z-10 md:-translate-x-7">
                  <div className="absolute inset-0 backdrop-blur-md bg-white/20 border border-white/30 rounded-full shadow-lg"></div>
                  <div className="relative z-10 p-3 rounded-full bg-gradient-to-br from-cyan-500/80 to-blue-600/80 text-white">
                    {wf.icon}
                  </div>
                  <div className="absolute inset-0 rounded-full bg-cyan-400/20 animate-ping opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
                
                {/* Glass card */}
                <div className={`backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-xl transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 md:ml-16 ${i % 2 === 0 ? 'md:mr-16' : ''}`}>
                  {/* Gradient accent bar */}
                  <div className="h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
                  
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
                      <h2 className="text-xl md:text-2xl font-bold text-white">{wf.title}</h2>
                      <span className="text-sm font-medium text-cyan-400">{wf.period}</span>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {wf.items.map((item, j) => (
                        <motion.li 
                          key={j}
                          className="flex items-start text-blue-100/90"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: j * 0.1 + 0.3 }}
                          viewport={{ once: true }}
                        >
                          <span className="flex-shrink-0 mr-3 mt-1">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-cyan-400">
                              <path d="M11.6667 4L5.25001 10.4167L2.33334 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    <div className="flex justify-end">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition-all"
                      >
                        {wf.tag}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes sea {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-sea {
          background-size: 200% 200%;
          animation: sea 20s ease infinite;
        }
      `}</style>
    </div>
  );
}