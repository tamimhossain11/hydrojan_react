// components/Home/TeamIntro.jsx
import { motion } from "framer-motion";

export default function TeamIntro() {
  return (
    <section className="relative py-24 px-4 lg:px-12 overflow-hidden bg-gradient-to-br from-teal-800 via-blue-950 to-indigo-950">
      <div
        className="absolute inset-0 opacity-60 bg-cover bg-center animate-pulse"
        style={{ backgroundImage: 'url(/images/underwater-bg.jpg)' }}
      />

      <motion.div
        className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 backdrop-blur-xl bg-white/10 rounded-3xl shadow-2xl border border-cyan-200/30 p-8 lg:p-12"
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          className="lg:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-300 via-cyan-200 to-blue-100 text-transparent bg-clip-text">
            Meet Team DoB Hydrojan
          </h2>
          <p className="text-lg md:text-xl text-blue-50/90 leading-relaxed">
            We are a passionate group dedicated to pushing the boundaries of underwater exploration and innovation. Our team consists of experts, visionaries, and enthusiasts committed to developing autonomous underwater vehicles (AUVs) that pave the way for groundbreaking discoveries and sustainable oceanic research.
          </p>
        </motion.div>

        <motion.div
          className="lg:w-1/2 w-full"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <video
            className="w-full h-auto rounded-3xl shadow-2xl backdrop-blur-lg bg-white/20 border border-cyan-200/40"
            src="/video/3.mp4"
            controls
            playsInline
            preload="metadata"
            poster="/Image/thumb.jpeg"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
