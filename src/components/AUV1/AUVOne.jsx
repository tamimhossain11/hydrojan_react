import React from "react";
import { motion } from "framer-motion";
import {
  Waves,
  ShieldCheck,
  ShieldHalf,
  Rocket,
  RefreshCcw,
  Cpu,
  Armchair,
  BatteryCharging,
  SlidersHorizontal,
  RadioReceiver,
  Network,
  Radar,
  Eye,
  Volume2,
  Map,
  Brain,
  Code2,
  Share2
} from "lucide-react";

const features = [
  {
    title: "Buoyancy Control System",
    icon: <Waves size={28} />,
    color: "text-blue-400",
    desc:
      "RoboSub missions often require diving through gates, hovering near buoys, or ascending to the surface. Our custom buoyancy system, featuring EVA foam and an air-pump ballast,allows HydroJan to precisely control depth during vertical movements, which is crucial for completing tasks like navigating through the gate and approaching floating objects without drifting."
  },
  {
    title: "Frame & Structural Support",
    icon: <ShieldCheck size={28} />,
    color: "text-green-400",
    desc:
      "When ramming buoys or manipulating heavy objects like PVC structures, the AUV’s frame must absorb stress. HydroJan’s aluminum frame with stainless reinforcements provides the rugged stability needed during physical interactions, especially in tasks like bumping buoys or dropping markers into bins, where sudden collisions are expected."
  },
  {
    title: "Waterproof Housing",
    icon: <ShieldHalf size={28} />,
    color: "text-cyan-400",
    desc:
      "RoboSub is a deep-water challenge. The pressure-rated acrylic enclosure ensures that our Jetson and sensors remain safe and dry up to 100m, enabling HydroJan to function throughout depth-dependent tasks, such as dropping markers or homing into a pinger at lower levels."
  },
  {
    title: "Thrusters & Propulsion",
    icon: <Rocket size={28} />,
    color: "text-blue-400",
    desc:
      "Fine motor control is critical for success in path-following, lining up with gates, and precise buoy bumps. HydroJan's thrusters deliver omnidirectional maneuvering and the ability to perform stable station-keeping, essential for tasks like aligning to shoot torpedoes or positioning near bins for marker drops."
  },
  {
    title: "Motor Control System",
    icon: <RefreshCcw size={28} />,
    color: "text-purple-400",
    desc:
      "HydroJan’s ESCs allow rapid thrust adjustments, meaning it can quickly stabilize, turn, or reposition mid-task. Whether it's tracking a curved path or drifting slightly to center a torpedo launcher, motor responsiveness is everything and our BLHeli-based ESCs deliver."
  },
  {
    title: "High-Level Computation (Jetson Orin Nano)",
    icon: <Cpu size={28} />,
    color: "text-orange-400",
    desc:
      "Every RoboSub task involves vision, autonomy, and decision-making. From detecting buoy color, to classifying objects, to planning the next move, the Jetson runs real-time object detection (YOLO), path planning, and state machine logic, all crucial for completing multi-stage mission runs without operator input."
  },
  {
    title: "Actuators (Servo Motors)",
    icon: <Armchair size={28} />,
    color: "text-pink-400",
    desc:
      "One of the key RoboSub missions is to pick up and move PVC elements or props. HydroJan uses high-torque waterproof servos to drive a manipulator arm, allowing it to grasp, lift, and place objects with control, important for tasks like object manipulation and drop zones."
  },
  {
    title: "Battery Power",
    icon: <BatteryCharging size={28} />,
    color: "text-yellow-400",
    desc:
      "With several power-hungry subsystems running simultaneously, our LiPo battery ensures HydroJan can operate long enough to complete multi-task missions without running out of charge halfway through a torpedo or marker drop."
  },
  {
    title: "Power Regulation & Conversion",
    icon: <SlidersHorizontal size={28} />,
    color: "text-emerald-400",
    desc:
      "Since different RoboSub components need different voltages, our regulators prevent voltage drops during power spikes from thrusters or servo movement. This guarantees stable operation during critical moments, like arm deployment or image capture."

  },
  {
    title: "Internal Communication",
    icon: <Network size={28} />,
    color: "text-blue-400",
    desc:
      "Tasks like coordinated motion, real-time vision, and servo control require tight integration. Our I2C, UART, and CAN bus layout allows low-latency communication between the Jetson, ESCs, sensors, and Pixhawk. This real-time syncing is vital when HydroJan is switching between sub-tasks autonomously."
  },
  {
    title: "External Communication",
    icon: <RadioReceiver size={28} />,
    color: "text-red-400",
    desc:
      "Some tasks like homing to acoustic pingers demand long-range, underwater communication. Our custom ADC/DAC acoustic signal module allows HydroJan to decode signal pings and triangulate their origin, directly enabling pinger-based navigation tasks."
  },
  {
    title: "Navigation Sensors (Compass, IMU, DVL)",
    icon: <Radar size={28} />,
    color: "text-indigo-400",
    desc:
      "These sensors provide orientation, heading, and velocity estimates, essential for tasks like path following, turning to face targets, or maintaining balance during manipulation. Our DVL and IMU "
  },
  {
    title: "Manipulator Arm",
    icon: <Armchair size={28} />,
    color: "text-purple-400",
    desc:
      "This is our MVP for object manipulation tasks in RoboSub. Whether it's picking up a PVC piece, placing it in a box, or grabbing floating items, our waterproof robotic arm is designed to act with strength and precision, handling delicate tasks that involve tight timing and positional accuracy."
  },
  {
    title: "Vision System",
    icon: <Eye size={28} />,
    color: "text-cyan-400",
    desc:
      "Vision is the backbone of most RoboSub challenges like, seeing buoys, identifying gates, reading paths, and aligning for shots. We use YOLO for object detection, running on Jetson, giving HydroJan real-time awareness and the ability to react intelligently. It's crucial for color-based decisions and visual navigation."
  },
  {
    title: "Acoustic Sensors",
    icon: <Volume2 size={28} />,
    color: "text-orange-400",
    desc:
      "Used in pinger homing tasks, these sensors interpret sound signals from beacons to determine direction and distance. HydroJan’s custom acoustic setup enables it to find and swim toward an acoustic source, fulfilling one of RoboSub’s most important challenges."
  },
  {
    title: "Localization & Mapping",
    icon: <Map size={28} />,
    color: "text-lime-400",
    desc:
      "With no GPS underwater, tasks like navigating long paths, localizing bins or buoys, and repeating successful missions require internal mapping. Our integration of sonar, depth, ToF, and stereo vision lets HydroJan know where it is—and where to go next—on its own."
  },
  {
    title: "Autonomy System",
    icon: <Brain size={28} />,
    color: "text-fuchsia-400",
    desc:
      "HydroJan uses a finite state machine (FSM) to handle complex RoboSub missions autonomously. It knows when to switch from path following to buoy bumping, then to marker drop, all based on real-time input. This architecture is what allows us to go fully autonomous, per competition rules"
  },
  {
    title: "Software Stack",
    icon: <Code2 size={28} />,
    color: "text-white",
    desc:
      "By using open-source tools like ArduPilot and OpenCV, we reduce costs while keeping flexibility high. These platforms help us develop fast, debug efficiently, and simulate tasks before deployment, a major advantage during RoboSub's tight mission schedules."
  },
  {
    title: "Inter-Vehicle Communication",
    icon: <Share2 size={28} />,
    color: "text-sky-400",
    desc:
      "Although not directly scored, inter-vehicle comms help in future scaling (swarms!). HydroJan’s lightweight protocol allows coordination between multiple AUVs, opening up future potential for team-based exploration or multi-agent missions."
  },
  {
    title: "Programming Stack",
    icon: <Share2 size={28} />,
    color: "text-sky-400",
    desc:
      "Everything is coded in Python (for AI, autonomy) and C++ (for control systems). This language split ensures we have both high-speed processing and easily testable logic, helping us deliver a performance-ready system for real-time mission handling."
  }
];

const AUVOne = () => {
  return (
    <section className="w-full px-6 py-20 text-white space-y-32">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`flex flex-col ${
            index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
          } items-start justify-between gap-10`}
        >
          <div className="lg:w-3/4 space-y-4">
            <h2 className={`text-2xl md:text-3xl font-bold ${feature.color} flex items-center gap-3`}>
              {feature.icon}
              {feature.title}
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-white/80">
              {feature.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default AUVOne;
