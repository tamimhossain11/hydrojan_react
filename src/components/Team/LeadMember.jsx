import React from 'react';
import { motion } from 'framer-motion';
import Skeleton from '@mui/material/Skeleton';

const members = [
  // Mechanical Department
  {
    name: "Mahadir Islam",
    designation: "(Leader and Mechanical lead)",
    id: 1,
    thumb: "mahadir.JPG",
    company: "DOB HYDROJAN",
    department: "Department of Mechanical"
  },
  {
    name: "Md. Athar Shihab",
    designation: "(Co-leader)",
    id: 2,
    thumb: "athar.JPG",
    company: "DOB HYDROJAN",
    department: "Department of Mechanical"
  },
  {
    name: "Md Sifayet Hossan Rohan",
    designation: "(Mechanical Team Member)",
    id: 3,
    thumb: "Rohan.jpg",
    company: "DOB HYDROJAN",
    department: "Department of Mechanical"
  },
  {
    name: "Mohmmad Nurul Huda",
    designation: "(Mechanical Team Member)",
    id: 4,
    thumb: "Nurul.jpg",
    company: "DOB HYDROJAN",
    department: "Department of Mechanical"
  },
  {
    name: "Saadman Syeed",
    designation: "(Mechanical Team Member)",
    id: 5,
    thumb: "Saadman.jpg",
    company: "DOB HYDROJAN",
    department: "Department of Mechanical"
  },
  {
    name: "Md Sunjim Hossain",
    designation: "(Mechanical Team Member)",
    id: 6,
    thumb: "Tashrif.jpg",
    company: "DOB HYDROJAN",
    department: "Department of Mechanical"
  },
  {
    name: "Abdur Rahman Sadek",
    designation: "(Mechanical Team Member)",
    id: 7,
    thumb: "Sadek.jpg",
    company: "DOB HYDROJAN",
    department: "Department of Mechanical"
  },
  {
    name: "Asif Mohammad Sami",
    designation: "(Mechanical Team Member)",
    id: 27,
    thumb: "Sami.jpg",
    company: "DOB HYDROJAN",
    department: "Department of Mechanical"
  },

  // Electrical Department
  {
    name: "Kamrul Islam Tuhin",
    designation: "(Electrical Lead)",
    id: 8,
    thumb: "tuhin.jpg",
    company: "DOB HYDROJAN",
    department: "Department of Electrical"
  },
  {
    name: "Mehedi Hasan Robin",
    designation: "(Electrical Team Member)",
    id: 9,
    thumb: "Robin.jpg",
    company: "DOB HYDROJAN",
    department: "Department of Electrical"
  },
  {
    name: "Abrar Atif Rahman",
    designation: "(Electrical Team Member)",
    id: 10,
    thumb: "Atif.jpg",
    company: "DOB HYDROJAN",
    department: "Department of Electrical"
  },
  {
    name: "Dewan Md Foyzullah Munim",
    designation: "(Electrical Team Member)",
    id: 11,
    thumb: "Munim.jpg",
    company: "DOB HYDROJAN",
    department: "Department of Electrical"
  },

  // Software Department
  {
    name: "Mursalin Hossain Misat",
    designation: "(Software Lead)",
    id: 12,
    thumb: "mursalin.JPG",
    company: "DOB HYDROJAN",
    department: "Department of Software"
  },
  {
    name: "Anas Bin Azim",
    designation: "(Software Team Member)",
    id: 13,
    thumb: "Anas.jpg",
    company: "DOB HYDROJAN",
    department: "Department of Software"
  },
  {
    name: "Md. Fahim Hossain",
    designation: "(Software Team Member)",
    id: 14,
    thumb: "Fahim.jpg",
    company: "DOB HYDROJAN",
    department: "Department of Software"
  },
  {
    name: "Fahim Muntasir Galib",
    designation: "(Software Team Member)",
    id: 15,
    thumb: "Galib.jpg",
    company: "DOB HYDROJAN",
    department: "Department of Software"
  },
  {
    name: "MD Naieem Hossen",
    designation: "(Software Team Member)",
    id: 16,
    thumb: "Ahan.JPG",
    company: "DOB HYDROJAN",
    department: "Department of Software"
  },
  {
    name: "Nimeur Rahman (Ahsan Naim)",
    designation: "(Software Team Member)",
    id: 17,
    thumb: "Naem.JPG",
    company: "DOB HYDROJAN",
    department: "Department of Software"
  },

  // Website Department
  {
    name: "Tamim Hossain",
    designation: "(Website Lead)",
    id: 18,
    thumb: "tamim.JPG",
    company: "DOB HYDROJAN",
    department: "Department of Website"
  },
  {
    name: "Mahadi Hassan Shurov",
    designation: "(Website Co-lead)",
    id: 19,
    thumb: "mahadi.jpg",
    company: "DOB HYDROJAN",
    department: "Department of Website"
  },

  // Documentation Department
  {
    name: "Humayra Afia",
    designation: "(Documentation Lead)",
    id: 20,
    thumb: "humayra.JPG",
    company: "DOB HYDROJAN",
    department: "Department of Documentation"
  },
  {
    name: "Shubhadipa Das",
    designation: "(Documentation Team Member)",
    id: 21,
    thumb: "Shubhadipa.jpg",
    company: "DOB HYDROJAN",
    department: "Department of Documentation"
  },

  // Operations Department
  {
    name: "Safin Ahmed",
    designation: "(Operations Lead)",
    id: 22,
    thumb: "safin.JPG",
    company: "DOB HYDROJAN",
    department: "Department of Operations"
  },
  {
    name: "Sayed Sorower Zahan Nipun",
    designation: "(Operations Team Member)",
    id: 23,
    thumb: "Sorower.jpg",
    company: "DOB HYDROJAN",
    department: "Department of Operations"
  },
  {
    name: "Tashrif Tamim",
    designation: "(Operations Team Member)",
    id: 24,
    thumb: "Tashrif.jpg",
    company: "DOB HYDROJAN",
    department: "Department of Operations"
  },
  {
    name: "S M Mohsin",
    designation: "(Operations Team Member)",
    id: 25,
    thumb: "Mohsin.jpg",
    company: "DOB HYDROJAN",
    department: "Department of Operations"
  },

  // Misc
  {
    name: "S M Uday Haider",
    designation: "(R&D Lead)",
    id: 26,
    thumb: "uday.JPG",
    company: "DOB HYDROJAN",
    department: "Research and Development"
  },
  {
    name: "Alif Zahan Prachurja",
    designation: "(Team Manager)",
    id: 27,
    thumb: "alif.JPG",
    company: "DOB HYDROJAN",
    department: "Management"
  },
  {
    name: "Jahid Hasan Romel",
    designation: "(Team Member)",
    id: 28,
    thumb: "Romel.jpg",
    company: "DOB HYDROJAN",
    department: "Management"
  }
];

const Card = ({ person }) => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="border border-blue-700 shadow-xl rounded-xl overflow-hidden text-white flex flex-col text-center"
      style={{ height: '460px' }}
    >
      <div className="h-[70%] relative">
        {!loaded && (
          <Skeleton
            variant="rectangular"
            width="100%"
            height="100%"
            sx={{ bgcolor: 'rgba(255,255,255,0.1)' }}
          />
        )}
        <img
          src={`/leaders/${person.thumb}`}
          alt={person.name}
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
      <div className="h-[30%] px-4 py-2 flex flex-col justify-center items-center">
        <h3 className="text-lg font-semibold text-cyan-300">{person.name}</h3>
        <p className="text-sm text-blue-300">{person.designation}</p>
        <p className="text-xs text-blue-400">{person.company}</p>
      </div>
    </motion.div>
  );
};

const LeadMember = () => {
  const grouped = members.reduce((acc, person) => {
    acc[person.department] = acc[person.department] || [];
    acc[person.department].push(person);
    return acc;
  }, {});

  return (
    <div className="min-h-screen px-6 py-16 bg-gradient-to-br text-white">
      {Object.entries(grouped).map(([department, people]) => (
        <div key={department} className="max-w-7xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-cyan-400 mb-12 text-center uppercase tracking-wide"
          >
            {department}
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {people.map(person => (
              <Card key={person.id} person={person} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeadMember;
