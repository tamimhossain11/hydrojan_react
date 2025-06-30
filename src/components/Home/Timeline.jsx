import { motion } from "framer-motion";
import { FaTools, FaCogs, FaMicrochip, FaCode, FaFileAlt } from "react-icons/fa";

const workflows = [
  {
    title: "Mechanical Design Workflow",
    org: "Hydrojan",
    icon: <FaTools className="text-2xl" />,
    items: [
      "Analyzing Rulebook & Requirements",
      "Testing Basic Shape & Hydro",
      "Testing Material",
      "Modeling AUV in SolidWorks",
      "Simulating Fluid Flow",
      "Analyzing Buoyancy & Stability"
    ],
    period: "2023 - Present",
    tag: "Learn More",
  },
  {
    title: "Mechanical Fabrication Workflow",
    org: "Hydrojan",
    icon: <FaCogs className="text-2xl" />,
    items: [
      "Selecting Material & Component",
      "Calculating the required Weight to submerge",
      "Building Watertight Enclosures for electronics",
      "Fabricating Structure, Legs & Clamps",
      "Sealing the hull using elastic materials and removable adhesives"
    ],
    period: "2023 - Present",
    tag: "Learn More",
  },
  {
    title: "Electrical Workflow",
    org: "Hydrojan",
    icon: <FaMicrochip className="text-2xl" />,
    items: [
      "Selecting Batteries & Designing Power Distribution",
      "Designing Control, Actuation & Safety PCBs",
      "Planning Wiring Layout & Choosing Waterproof Connectors",
      "Integrating & Testing Sensors (IMU, Depth, Leak, Camera Power)",
      "Conducting Load Testing, Fusing & Emergency Kill-Switch Setup"
    ],
    period: "2023 - Present",
    tag: "Learn More",
  },
  {
    title: "Software Workflow",
    org: "Hydrojan",
    icon: <FaCode className="text-2xl" />,
    items: [
      "Mission Planning with State Machine (Gate, Pinger, Trash, Surfacing)",
      "Initializing & Calibrating Sensors (Jetson, Pixhawk, Vectornav)",
      "Object Detection using (Trash, Bins, Buoys, Gates)",
      "Visual Alignment & Localization via Image Offset and Depth Data",
      "Communicating with Pixhawk via MAVLink for Control & Feedback",
      "Logging Missions & Telemetry Data for Debugging and Analysis"
    ],
    period: "2023 - Present",
    tag: "Learn More",
  },
  {
    title: "Documentation Workflow",
    org: "Hydrojan",
    icon: <FaFileAlt className="text-2xl" />,
    items: [
      "Analysing Team Handbook & Rule Book for a detailed workflow",
      "Analysing past RoboSub program's TDR",
      "Collecting data for mechanical structure and electrical components",
      "Procurement of logistics",
      "Preparing and managing official Paperworks",
      "Documenting Overall team's workflow"
    ],
    period: "2023 - Present",
    tag: "Learn More",
  }
];

export default function Timeline() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 animate-sea bg-gradient-to-b from-blue-900 via-blue-950 to-black opacity-90 z-0"></div>
      <div className="relative z-10 p-6">
        <h1 className="text-5xl font-extrabold text-white text-center mb-16 drop-shadow-lg">
          Workflow Timeline
        </h1>
        <div className="relative max-w-5xl mx-auto">
          <div className="border-l-4 border-white ml-4">
            {workflows.map((wf, i) => (
              <motion.div
                key={i}
                className="relative mb-16 pl-10"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-5 top-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                  {wf.icon}
                </div>
                <div className="bg-white rounded-xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-2xl font-bold text-blue-800">{wf.title}</h2>
                    <span className="text-sm text-blue-600 font-semibold">{wf.org}</span>
                  </div>
                  <ul className="list-disc ml-6 text-gray-700 space-y-1">
                    {wf.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
                    <span>{wf.period}</span>
                    <button className="bg-blue-700 text-white px-4 py-1 rounded-full shadow hover:bg-blue-800 transition">
                      {wf.tag}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind custom animation style */}
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