import React from 'react';
import LeaderData from '../Json Data/LeaderData.json';
import SingleLeader from './SingleLeader';
import { motion } from 'framer-motion';

const Leader = () => {
    // Enhanced grouping with sorting
    const groupedLeaders = {
        "Leadership": LeaderData
            .filter(leader => leader.designation.toLowerCase().includes('leader'))
            .sort((a, b) => a.designation === "Team Leader" ? -1 : 1),
        "Technical Leads": LeaderData
            .filter(leader => leader.designation.toLowerCase().includes('lead') && 
                           !leader.designation.toLowerCase().includes('leader'))
            .sort((a, b) => a.name.localeCompare(b.name)),
        "Team Members": LeaderData
            .filter(leader => !leader.designation.toLowerCase().includes('lead'))
            .sort((a, b) => a.name.localeCompare(b.name))
    };

    // Advanced animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                when: "beforeChildren"
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 12,
                mass: 0.5
            }
        },
        hover: {
            y: -10,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const titleVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.02,
            transition: {
                type: "spring",
                stiffness: 300
            }
        }
    };

    return (
        <section className="relative py-24 bg-cover bg-center bg-no-repeat bg-fixed min-h-screen" 
                style={{ backgroundImage: "url(/images/background/underwater-bg.jpg)" }}>
            
            {/* Advanced overlay with animated gradient */}
            <motion.div 
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
                <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-indigo-900/20"
                    animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear"
                    }}
                />
            </motion.div>
            
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header with enhanced animation */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    variants={sectionVariants}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-20"
                >
                    <motion.span 
                        className="inline-block text-blue-300 font-medium text-lg mb-3 tracking-wider"
                        variants={titleVariants}
                        whileHover="hover"
                    >
                        Meet Our Team
                    </motion.span>
                    <motion.h2 
                        className="text-5xl md:text-6xl font-bold text-white mb-5"
                        variants={titleVariants}
                        whileHover="hover"
                    >
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Leadership</span>
                    </motion.h2>
                    <motion.div 
                        className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"
                        variants={titleVariants}
                        whileHover={{
                            scaleX: 1.3,
                            transition: { type: "spring", stiffness: 300 }
                        }}
                    />
                </motion.div>

                {/* Leadership Sections */}
                {Object.entries(groupedLeaders).map(([group, leaders]) => (
                    leaders.length > 0 && (
                        <div key={group} className="mb-20 last:mb-0">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                variants={sectionVariants}
                                viewport={{ once: true, margin: "-50px" }}
                                className="mb-12"
                            >
                                <h3 className="text-3xl font-bold text-white text-center">
                                    <motion.span 
                                        className="inline-block pb-3 border-b-2 border-cyan-400"
                                        whileHover={{ scaleX: 1.1 }}
                                        transition={{ type: "spring" }}
                                    >
                                        {group}
                                    </motion.span>
                                </h3>
                            </motion.div>

                            <motion.div 
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                            >
                                {leaders.map(leader => (
                                    <motion.div 
                                        key={leader.id}
                                        variants={cardVariants}
                                        whileHover="hover"
                                        className="w-full"
                                    >
                                        <SingleLeader speaker={leader} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    )
                ))}
            </div>
        </section>
    );
};

export default Leader;