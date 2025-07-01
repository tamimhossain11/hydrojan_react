import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TeamDepartments = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch("/data/team.json")
      .then((res) => res.json())
      .then((data) => setTeam(data))
      .catch((err) => console.error("Failed to load team data:", err));
  }, []);

  const renderGroup = (title, filterFn) => {
    const members = team.filter(filterFn);
    if (members.length === 0) return null;

    return (
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6">{title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {members.map((member) => (
            <motion.div
              key={member.id}
              whileHover={{ scale: 1.03 }}
              className="h-[500px] rounded-xl overflow-hidden shadow-lg group border border-white/20 bg-white/5 backdrop-blur-sm"
            >
              {/* Image Section - 80% */}
              <div className="h-[80%] w-full overflow-hidden">
                <img
                  src={`/Image/leaders/${member.thumb}`}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Info Section - 25% */}
              <div className="h-[25%] p-4 space-y-1 text-center bg-gradient-to-b from-transparent to-[#0a1128] flex flex-col justify-center">
                <h3 className="text-lg font-bold text-cyan-300 drop-shadow-sm">
                  {member.name}
                </h3>
                <p className="text-blue-200 text-sm">{member.designation}</p>
                <p className="text-blue-500 text-xs tracking-widest">
                  {member.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full px-6 py-16 bg-black text-white">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-400">
        DoB HydroJan Team Structure
      </h1>

      {renderGroup("Advisors", (m) => m.designation.toLowerCase().includes("advisor"))}
      {renderGroup("Mentors", (m) => m.designation.toLowerCase().includes("mentor"))}
      {renderGroup("Leads", (m) => m.designation.toLowerCase().includes("lead"))}
      {renderGroup("Team Members", (m) =>
        m.designation.toLowerCase().includes("team member") ||
        m.designation.toLowerCase().includes("manager") ||
        m.designation.toLowerCase() === "(member)"
      )}
    </div>
  );
};

export default TeamDepartments;
