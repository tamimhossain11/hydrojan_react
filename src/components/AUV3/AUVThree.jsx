import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Cpu,
  Eye,
  Waves,
  Power,
  Droplet,
  Cable,
  Camera,
  ShieldCheck,
  BoxSelect,
  Settings2,
  ScanLine,
  MoveRight
} from "lucide-react";

const features = [
  {
    title: "Frame and Structural Design",
    icon: <ShieldCheck size={28} />, 
    color: "text-blue-400",
    desc:
      "With new sensors, manipulators, and subsystems being integrated, HydroJan’s frame entered its most modular form yet. Designed and fabricated at a local CNC shop, the aluminum frame with stainless brackets allowed modular mounting of additional payloads such as the DVL, hydrophones, and cameras. This upgrade made it easier to rearrange or swap out components during testing while ensuring structural rigidity during underwater maneuvers and manipulation tasks."
  },
  {
    title: "Buoyancy and Depth Control",
    icon: <Rocket size={28} />,
    color: "text-red-400",
    desc:
      "Precise vertical motion was finally achieved with the integration of a pump-controlled ballast tank in combination with trimmed EVA foam. Unlike previous static systems, this active ballast setup allowed HydroJan to hold its depth dynamically during tasks like marker dropping, gate alignment, or hovering near objects, paving the way for improved mid-water interaction."
  },
  {
    title: "Propulsion and Stability",
    icon: <Cpu size={28} />,
    color: "text-orange-400",
    desc:
      "HydroJan 0.3 upgraded its mobility with eight T200-style thrusters arranged for optimized thrust distribution. This enhanced layout provided fine-grained control over translation and rotation in all directions. With the improved vectoring and thrust output (~5.1 kgf each), the bot could achieve precise position lock during tasks such as object pickup or path realignment, even in turbulent water conditions."
  },
  {
    title: "Manipulator Arm",
    icon: <Camera size={28} />,
    color: "text-purple-400",
    desc:
      "For the first time, HydroJan was equipped with a 3-DOF waterproof robotic arm, designed and built in-house. This servo-actuated gripper was tested successfully for interacting with submerged props and markers. It introduced controlled actuation for grabbing, lifting, and placing objects — a critical step forward for task execution in RoboSub missions like bin placement and PVC retrieval."
  },
  {
    title: "Acoustic Navigation System",
    icon: <Cable size={28} />,
    color: "text-green-400",
    desc:
      "Underwater localization took a big leap with a custom hydrophone array connected to an Arduino-based DSP module. This system was capable of decoding acoustic pings from underwater beacons, enabling HydroJan to begin testing pinger homing behavior. The acoustic subsystem marked the beginning of sound-based navigation, vital for long-range autonomous localization in GPS-denied environments."
  },
  {
    title: "DVL and Ground Velocity Estimation",
    icon: <Power size={28} />,
    color: "text-yellow-400",
    desc:
      "A custom Doppler Velocity Log (DVL) sensor provided ground-relative velocity estimates, improving autonomous stability. This data allowed HydroJan to hover precisely and follow underwater paths more reliably. When used in tandem with the IMU and depth sensor, the DVL gave the vehicle a tighter grip on its own movement in complex 3D spaces."
  },
  {
    title: "Vision System",
    icon: <BoxSelect size={28} />,
    color: "text-cyan-400",
    desc:
      "HydroJan now ran with dual USB cameras mounted on the front and downward axes, enabling real-time navigation and object tracking. These 720p feeds were processed on-board via Jetson Orin to support visual feedback for marker detection, gate following, and alignment behaviors, making vision-guided autonomy more consistent and responsive."
  },
  {
    title: "Leak Detection System",
    icon: <Waves size={28} />,
    color: "text-teal-400",
    desc:
      "To safeguard sensitive electronics, a DIY continuity-based leak sensor was added, using exposed wire probes that trigger an alert during water ingress. This simple yet effective system provided early warnings during testing phases and helped prevent damage from unnoticed micro-leaks, increasing the safety of prolonged deployments."
  },
  {
    title: "Environmental Sensing",
    icon: <Eye size={28} />,
    color: "text-pink-400",
    desc:
      "For future calibration and system modeling, a TSYS01 temperature sensor was integrated to log real-time water temperature with ±0.1°C accuracy. This data not only served performance diagnostics but also enabled compensation for temperature-dependent behaviors in other sensors, including IMUs and pressure sensors."
  },
  {
    title: "Software and Autonomy",
    icon: <Droplet size={28} />,
    color: "text-indigo-400",
    desc:
      "HydroJan 0.3 ran a refined ROS 2-based modular software stack, orchestrated by a finite state machine (FSM). The architecture included separate nodes for perception, planning, and control, allowing parallel task execution. From buoy detection to depth holding, each mission segment was handled autonomously through a mission planner tuned for dynamic decision-making."
  },
  {
    title: "Internal Communication",
    icon: <Droplet size={28} />,
    color: "text-indigo-400",
    desc:
      "All major subsystems,including Jetson, Pixhawk, sensors, and actuators — were networked using CAN, UART, and I2C protocols managed by an Arduino communication hub. This internal CANBus backbone enabled fast, reliable data exchange between multiple devices, ensuring synchronized operations even during rapid sub-task switching."
  },
  
  {
    title: "Power Regulation",
    icon: <Droplet size={28} />,
    color: "text-indigo-400",
    desc:
      "To manage the increasingly power-hungry architecture, regulated DC modules from Pololu and Holybro were installed, delivering stable 5V and 12V outputs with surge protection. These modules ensured a clean power supply for the Jetson, servos, control boards, and sensors, protecting the system from voltage dips and brownouts during high-load tasks like actuation or full-thrust movement."
  }
];

const AUVThree = () => {
  return (
    <section className="w-full px-20 py-20  text-white space-y-32">
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
            <h2
              className={`text-2xl md:text-3xl font-bold ${feature.color} flex items-center gap-3`}
            >
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

export default AUVThree;
