import React from 'react';
import { motion } from 'framer-motion';

const people = [
  {
    name: "Md. Moin Uddin",
    designation: "(Advisor)",
    id: 1,
    image: "/Image/AdvisorTwo.jpg",
    company: "DOB HYDROJAN"
  },
  {
    name: "Ariful Hasan Opu",
    designation: "(Advisor)",
    id: 2,
    image: "/Image/AdvisonPic.jpg",
    company: "DOB HYDROJAN"
  },
  {
    name: "Mridul Hasan",
    designation: "(Mentor)",
    id: 3,
    image: "/leaders/mridul.jpg",
    company: "DOB HYDROJAN"
  },
  {
    name: "Md. Mubassirul Islam",
    designation: "(Mentor)",
    id: 4,
    image: "/Image/Mubassirul.jpg",
    company: "DOB HYDROJAN"
  },
  {
    name: "Md. Shohidul Islam Bulbul",
    designation: "(Mentor)",
    id: 5,
    image: "/Image/Shohidul.jpg",
    company: "DOB HYDROJAN"
  }
];

const Card = ({ person }) => {
  const defaultImage = "/Image/default-profile.png"; // fallback image

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className=" backdrop-blur-md border border-blue-700 shadow-xl rounded-xl overflow-hidden text-white flex flex-col"
      style={{ height: '500px' }}
    >
      {/* Image Section - 70% */}
      <div className="flex-7 w-full h-[70%]">
        <img
          src={person.image || defaultImage}
          onError={(e) => { e.target.onerror = null; e.target.src = defaultImage }}
          alt={person.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info Section - 30% */}
      <div className="flex-3 h-[30%] flex flex-col justify-center items-center px-4 py-3 text-center space-y-1">
        <h3 className="text-lg font-semibold text-cyan-300 leading-tight">{person.name}</h3>
        <p className="text-sm text-blue-300">{person.designation}</p>
        <p className="text-xs text-blue-400">{person.company}</p>
      </div>
    </motion.div>
  );
};

const AdvisorMentor = () => {
  const advisors = people.filter(p => p.designation.includes("Advisor"));
  const mentors = people.filter(p => p.designation.includes("Mentor"));

  return (
    <div className="min-h-screen px-6 py-16  text-white">
      
      {/* Advisors Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-cyan-400 mb-12 text-center uppercase tracking-wide"
        >
          Advisory Panel
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {advisors.map(person => (
            <Card key={person.id} person={person} />
          ))}
        </div>
      </div>

      {/* Mentors Section */}
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-cyan-400 mb-12 text-center uppercase tracking-wide"
        >
          Mentorship Team
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {mentors.map(person => (
            <Card key={person.id} person={person} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvisorMentor;
