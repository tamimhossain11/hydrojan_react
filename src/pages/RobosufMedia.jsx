import React from "react";

const RobosubMedia = () => {
  const mediaVideos = [
    "https://www.youtube.com/embed/z0UIQMQ7qM0?si=zyMAU-mWLsf6n56w&start=1",
    "https://www.youtube.com/embed/z0UIQMQ7qM0?si=zyMAU-mWLsf6n56w&start=1",
    "https://www.youtube.com/embed/z0UIQMQ7qM0?si=zyMAU-mWLsf6n56w&start=1",
    "https://www.youtube.com/embed/z0UIQMQ7qM0?si=zyMAU-mWLsf6n56w&start=1",
  ];

  return (
    <section className="min-h-screen px-6 py-20 bg-gradient-to-br from-[#020617] via-[#0a1128] to-[#050b1e] text-white space-y-16">

      {/* Media Coverage Section */}
      <div className="w-full border border-cyan-800 rounded-lg overflow-hidden bg-[#0f172a] shadow-lg">
        <div className="flex justify-center">
          <img
            src="/Image/News1.jpg"
            alt="Jagoron News Cover"
            className="w-3/5 h-full object-cover"
          />
        </div>
        <div className="p-6 text-center">
          <h3 className="text-2xl font-semibold text-cyan-300 mb-2">Media Coverage</h3>
          <p className="text-blue-200 mb-4">
            Read the featured article about DoB HydroJan's success and journey at RoboSub in national news outlet <strong>Jagoron News</strong>.
          </p>
          <a
            href="https://jagoronnews.com/news/detail/2132/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full transition duration-300"
          >
            Read Full Article
          </a>
        </div>
      </div>
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
          RoboSub Media Highlights
        </h2>
        <p className="text-blue-300 max-w-2xl mx-auto">
          Watch the journey of DoB HydroJan through our outreach programs, technical demos, and behind-the-scenes stories.
        </p>
      </div>

      {/* Videos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {mediaVideos.map((videoUrl, idx) => (
          <div
            key={idx}
            className="rounded-xl overflow-hidden shadow-lg border border-blue-800 aspect-video"
          >
            <iframe
              width="560"
              height="315"
              src={videoUrl}
              title={`YouTube video player ${idx + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>

      
    </section>
  );
};

export default RobosubMedia;
