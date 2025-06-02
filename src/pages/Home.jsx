// src/components/Home.jsx
import RevealSection from "../components/RevealSection";

export default function Home() {
  return (
    <div className="bg-[#0b0c10] text-white space-y-32 px-4 md:px-20 pt-24 pb-40">
      <RevealSection>
        <section className="text-center text-4xl font-bold">Welcome to Hydrojan</section>
      </RevealSection>

      <RevealSection delay={0.3}>
        <section className="bg-white/10 p-8 rounded-xl backdrop-blur-lg shadow-xl">
          <h2 className="text-2xl mb-4 font-semibold">Our Mission</h2>
          <p className="text-gray-300">Innovating the underwater world.</p>
        </section>
      </RevealSection>

      <RevealSection delay={0.6}>
        <section className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white/10 p-6 rounded-lg backdrop-blur-md">
              <h3 className="font-semibold text-xl">Card {i}</h3>
              <p className="text-gray-400 mt-2">Some cool detail about Hydrojan tech.</p>
            </div>
          ))}
        </section>
      </RevealSection>

      {/* More sections like Submarine animation, etc. */}
    </div>
  );
}
