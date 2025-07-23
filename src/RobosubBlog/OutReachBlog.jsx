import React from 'react';

const OutReachBlog = () => {
  return (
    <div className="space-y-16 text-white">
      {/* Cover Image + Title */}
      <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg">
        <img
          src="/outreach/event31.jpg"
          alt="Event Cover"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="text-center space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-400">
          Inspiring Curiosity and Innovation: A Memorable Day
        </h1>
        <p className="text-blue-300 text-sm">28 June, 2025</p>
      </div>

      {/* Main Blog Content */}
      <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
        <p>
          The Venus Room was filled with creativity and curiosity as we, Team <strong>DoB HydroJan</strong>, welcomed nearly a hundred students to an in-depth <strong>STEM Engagement Session</strong> showcasing our journey to RoboSub 2025. The session aimed to spark curiosity, ignite ideas, and open the door to boundless future possibilities for the bright young minds present.
        </p>

        <img
          src="/outreach/event11.jpg"
          alt="Student Session"
          className="rounded-lg shadow-lg w-full object-cover"
        />

        <p>
          Hosted at <strong>St. Joseph Secondary High School</strong>, one of Bangladesh's most prestigious institutions, the session aimed to connect students to the vast world of robotics. Through dynamic discussions and immersive activities, the event united students interested in Science, Technology, Engineering, and Mathematics.
        </p>

        <p>
          The session featured comprehensive talks presented by three key speakers representing the values and vision of DoB HydroJan.
        </p>

        <img
          src="/outreach/event26.jpg"
          alt="Speakers"
          className="rounded-lg shadow-lg w-full object-cover"
        />

        <p>
        <strong>
            <a
              href="https://www.mahadirislamwafi.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-300"
            >
              Mahadir Islam Wafi
            </a>
          </strong>, team leader of HydroJan, kicked off the session with the story of <em>Dreams of Bangladesh</em> and the creation of HydroJan. He introduced the basics of AUVs and ROVs, and their relevance to the RoboSub competition and beyond.
        </p>

        {/* ✅ New Mahadi Hasan Shurov Section */}
        <img
          src="/outreach/event12.jpg"
          alt="Mahadi Hasan Shurov"
          className="rounded-lg shadow-lg w-full object-cover"
        />

        <p>
          <strong>
            <a
              href="https://www.facebook.com/mhs.shurov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-300"
            >
              Mahadi Hassan Shurov
            </a>
          </strong>, software engineer and co-lead of the HydroJan website team, gave an insightful session on the technical backbone of the project. He explained how real-time data, UI/UX architecture, and automation systems are deeply embedded in the development process. Shurov also shared how the team leverages modern tools like React, Three.js, and Vite to deliver an immersive digital experience. His presentation not only clarified the software challenges they face in the underwater robotics domain but also inspired students to think about how software plays a critical role in both innovation and impact.
        </p>

        <p>
          <strong>Athar Shihab</strong>, team co-lead, wrapped up with detailed insights into logistics, documentation, budgeting, and team management — giving students a full view of what it takes to run a global competition-ready robotics team.
        </p>

        <p>
          Following the presentation, the students eagerly engaged in a high-energy Q&A session — a powerful exchange of ideas and aspirations.
        </p>

        <img
          src="/outreach/event33.jpg"
          alt="Certificates & Badges"
          className="rounded-lg shadow-lg w-full object-cover"
        />

        <p>
          To honor their participation, every student received a <strong>certificate of participation</strong>, exclusive <strong>HydroJan badges</strong>, and <strong>RoboSub-themed stickers</strong>. We also distributed team merchandise to students and faculty — tangible tokens of our gratitude and inspiration.
        </p>

        <p>
          The event concluded with a memorable group photo session, filled with pride, hope, and the collective spirit to innovate. The air was electric with excitement — a testament to the passion of the attendees and the pride of our team in representing Bangladesh on a global robotics stage.
        </p>

        <img
          src="/outreach/event1.jpg"
          alt="Group Photo"
          className="rounded-lg shadow-lg w-full object-cover"
        />

        <p>
          The STEM Engagement Session at St. Joseph Secondary High School was a resounding success. We showcased our vision, demonstrated our RoboSub project, and, most importantly, inspired the next generation of Bangladeshi innovators. Our heartfelt thanks go out to the school authority, educators, and enthusiastic students who made this event so impactful.
        </p>

        <p>
          <strong>Team DoB HydroJan is just getting started.</strong> This event was not only an outreach — it was an eye-opener for us as well. We move forward with greater determination, ready to engage, inspire, and revolutionize the field of robotics in Bangladesh and beyond.
        </p>
      </div>
    </div>
  );
};

export default OutReachBlog;
