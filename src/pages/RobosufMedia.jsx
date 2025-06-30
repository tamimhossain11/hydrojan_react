import React from "react";

const RobosubMedia = () => {
  const mediaVideos = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your own video URLs
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
  ];

  return (
    <section className="min-h-screen px-6 py-20 bg-gradient-to-br from-[#020617] via-[#0a1128] to-[#050b1e] text-white space-y-16">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
          RoboSub Media Highlights
        </h2>
        <p className="text-blue-300 max-w-2xl mx-auto">
          Watch the journey of DoB HydroJan through our outreach programs, technical demos, and behind-the-scenes stories.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {mediaVideos.map((videoUrl, idx) => (
          <div
            key={idx}
            className="rounded-xl overflow-hidden shadow-lg border border-blue-800 aspect-video"
          >
            <iframe
              src={videoUrl}
              title={`RoboSub Media ${idx + 1}`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RobosubMedia;
