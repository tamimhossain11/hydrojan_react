import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    thumb: "mahadir.jpg",
    name: "Mahadir Islam",
    designation: "Team Leader & Electrical Lead",
    company: "DOB HYDROJAN",
    type: "core",
  },
  {
    id: 2,
    thumb: "athar.jpg",
    name: "Md Athar Shihab",
    designation: "Team Co-Leader",
    company: "DOB HYDROJAN",
    type: "core",
  },
  {
    id: 3,
    thumb: "alif.jpg",
    name: "Alif Zahan Prachurja",
    designation: "Team Manager",
    company: "DOB HYDROJAN",
  },
  {
    id: 4,
    thumb: "mursalin.jpg",
    name: "Mursalin Hossain Misat",
    designation: "Software Lead",
    company: "DOB HYDROJAN",
  },
  {
    id: 5,
    thumb: "tamim.jpg",
    name: "Tamim Hossain",
    designation: "Website Lead",
    company: "DOB HYDROJAN",
  },
  {
    id: 6,
    thumb: "uday.jpg",
    name: "S M Uday Haider",
    designation: "Research & Development Lead",
    company: "DOB HYDROJAN",
  },
  {
    id: 7,
    thumb: "humayra.jpg",
    name: "Humayra Afia",
    designation: "Documentation Lead",
    company: "DOB HYDROJAN",
  },
  {
    id: 8,
    thumb: "safin.jpg",
    name: "Safin Ahmed",
    designation: "Operations Lead",
    company: "DOB HYDROJAN",
  },
];

const TeamLeadership = () => {
  const core = teamMembers.filter((m) => m.type === "core");
  const others = teamMembers.filter((m) => m.type !== "core");

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0a1128] to-[#050b1e] text-white px-6 py-20">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(0,255,255,0.5)] flex justify-center items-center gap-3">
            <BadgeCheck size={36} className="text-blue-500" />
            DoB <span className="text-white font-black tracking-wider text-5xl">HydroJan</span> Leadership
          </h1>
          <p className="text-blue-300 max-w-2xl mx-auto mt-4">
            Meet the minds powering Bangladesh’s underwater revolution — from vision to execution.
          </p>
        </motion.div>

        {/* First Row: Leader & Co-Leader */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {core.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#0f1a3b]/60 border border-cyan-800 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md hover:shadow-cyan-500/30 transition-all duration-500 relative"
            >
              {/* Image */}
              <div className="h-[80%] w-full overflow-hidden">
                <img
                  src={`/leaders/${member.thumb}`}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Info */}
              <div className="p-4 space-y-1 text-center bg-gradient-to-b from-transparent to-[#0a1128]">
                <h3 className="text-xl font-bold text-cyan-300 drop-shadow-sm">{member.name}</h3>
                <p className="text-blue-200 text-xl">{member.designation}</p>
                <p className="text-blue-500 text-xl tracking-widest">{member.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Second Row: Other Department Leads */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {others.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#0f1a3b]/60 border border-blue-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-cyan-400/40 transition-all duration-500 relative"
            >
              {/* Image */}
              <div className="h-[70%] w-full overflow-hidden">
                <img
                  src={`/leaders/${member.thumb}`}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Info */}
              <div className="p-4 space-y-1 text-center bg-gradient-to-b from-transparent to-[#0a1128]">
                <h3 className="text-lg font-bold text-cyan-300 drop-shadow-sm">{member.name}</h3>
                <p className="text-blue-200 text-sm">{member.designation}</p>
                <p className="text-blue-500 text-xs tracking-widest">{member.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamLeadership;
