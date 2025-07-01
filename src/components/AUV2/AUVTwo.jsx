import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Rocket,
  Cpu,
  Radar,
  RadioReceiver,
  BatteryCharging,
  Droplet,
  FlaskConical,
  Eye,
 
  Settings2
} from "lucide-react";

const features = [
  {
    title: "Frame & Structural Design",
    icon: <ShieldCheck size={28} />, 
    color: "text-blue-400",
    desc:
      "With the addition of heavier components like the Jetson and additional thrusters, HydroJan 0.2’s frame was upgraded to a reinforced aluminum chassis. A new internal layout was introduced to better balance buoyancy and payload distribution. Pre-attached foam and a ballast compartment helped keep the vehicle trim and centered. This structural optimization was essential for stability during early visual navigation tasks."
  },
  {
    title: "Propulsion System",
    icon: <Rocket size={28} />,
    color: "text-cyan-400",
    desc:
      "Version 0.2 saw a leap in maneuverability with six vectored T200-style thrusters, enabling full 6 degrees of freedom (DOF) control. This allowed HydroJan to move not just forward and backward, but also vertically and sideways, as well as rotate on all axes. The new thrust vectoring configuration was pivotal for complex positioning, like aligning to buoys or navigating through gates with tighter motion control."
  },
  {
    title: "Control System",
    icon: <Cpu size={28} />,
    color: "text-orange-400",
    desc:
      "HydroJan’s brain evolved with a dual-layer control setup using both Pixhawk and Jetson Orin Nano. While Pixhawk handled stabilization and thruster-level control via MAVLink, the Jetson ran ROS 2, coordinating vision-based logic and mission-level decisions. This combination formed the foundation for autonomy, allowing HydroJan to transition from manual control to semi-autonomous operation."
  },
  {
    title: "Sensor Suite",
    icon: <Radar size={28} />,
    color: "text-indigo-400",
    desc:
      "A ROS-compatible stack of camera, IMU, and depth sensors provided essential input for early vision and orientation tracking. The camera fed into OpenCV and YOLO pipelines, while the IMU ensured accurate localization, and the depth sensor helped the bot maintain vertical control during experimental marker drops and gate navigation tasks."
  },
  {
    title: "Communication System",
    icon: <RadioReceiver size={28} />,
    color: "text-red-400",
    desc:
      "To keep development flexible, HydroJan 0.2 used a USB tether between Jetson and a host laptop. This connection provided real-time data streaming for debugging, visual feedback, and system monitoring. It also allowed for easier parameter tuning during rapid development and testing cycles."
  },
  {
    title: "Power System",
    icon: <BatteryCharging size={28} />,
    color: "text-yellow-400",
    desc:
      "The vehicle transitioned to full untethered power using a 22.2V 10000mAh Tattu 6S LiPo battery. With a regulated output, the battery was capable of sustaining longer mission runs, powering both the Jetson and the thrusters without interruption, a big leap from Version 0.1’s manually switched power."
  },
  {
    title: "Marker Dropper System",
    icon: <Droplet size={28} />,
    color: "text-pink-400",
    desc:
      "HydroJan 0.2 introduced its first servo-actuated marker dropper, built in-house using a lightweight 3D-printed frame. This prototype was tested for simple tasks like dropping PVC markers into bins, validating the servo logic and mechanical response necessary for later object interaction modules."
  },
  {
    title: "Ballast & Buoyancy Control (Experimental)",
    icon: <FlaskConical size={28} />,
    color: "text-green-400",
    desc:
      "To test active buoyancy control, a custom PVC tank and manual valve system was trialed. Although not fully autonomous, this prototype allowed us to simulate active ballast adjustments, setting the groundwork for future dynamically controlled depth systems."
  },
  {
    title: "Software Stack & Vision",
    icon: <Eye size={28} />,
    color: "text-cyan-300",
    desc:
      "HydroJan’s early autonomy relied on OpenCV for image processing and YOLO for object detection, all integrated into a basic finite state machine (FSM). This allowed for simple vision-based tasks such as detecting and approaching buoys, marking HydroJan’s first steps toward full autonomy."
  },
  {
    title: "Leak Detection (Manual)",
    icon: <Settings2 size={28} />,
    color: "text-white",
    desc:
      "Leak detection was not yet implemented in Version 0.2. As such, rigorous manual inspection was required before and after water tests, with extra sealing applied to critical junctions. This limitation highlighted the need for onboard health monitoring in future versions."
  }
];

const AUVTwo = () => {
  return (
    <section className="w-full px-6 py-20 text-white space-y-32 p-10">
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

export default AUVTwo;
