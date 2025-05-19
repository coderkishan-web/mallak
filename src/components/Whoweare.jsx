import React from 'react';

const WhoWeAre = () => {
  const sections = [
    {
      number: '01',
      title: 'Who We Are',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard',
      points: [
        'Ipsum is simply dummy text',
        'Ipsum is simply dummy text',
        'Ipsum is simply dummy text',
        'Ipsum is simply dummy text',
      ],
    },
    {
      number: '02',
      title: 'Our Mission',
      description:
        'To deliver quality products with innovation and integrity to meet industry needs.',
      points: [
        'Dedicated R&D',
        'Customer satisfaction',
        'Global standards',
        'Continuous improvement',
      ],
    },
    {
      number: '03',
      title: 'Our Vision',
      description:
        'To be the global leader in sustainable chemical solutions.',
      points: [
        'Eco-conscious approach',
        'Leadership in innovation',
        'Scalable solutions',
        'Global partnerships',
      ],
    },
  ];

  return (
    <section
      className="relative w-full min-h-screen px-6 py-12 flex flex-col lg:flex-row justify-evenly items-center gap-10 overflow-hidden rounded-[20px]"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="src/assets/WhatsApp Video 2025-05-19 at 1.35.48 PM.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Left Heading */}
      <div>
        <h1 className="text-5xl lg:text-8xl font-extrabold text-[#1e2b53]">
          MALLAK <br /> CHEMICALS
        </h1>
      </div>

      {/* Right Card with Scroll Snap */}
      <div>
        <div
          className="bg-white rounded-xl shadow-2xl max-w-md h-[500px] overflow-y-scroll snap-y snap-mandatory scroll-smooth p-6 space-y-10 hidescroll"
        >
          {sections.map((section, index) => (
            <div key={index} className="shrink-0 h-[500px]">
              <h2 className="text-3xl font-bold text-[#1e2b53] mb-3">{section.number}</h2>
              <hr className="border-gray-300 mb-4" />

              <h3 className="text-xl font-bold text-[#1e2b53] mb-1">{section.title}</h3>
              <p className="text-gray-600 text-sm mb-5">{section.description}</p>

              <div className="space-y-3">
                {section.points.map((text, idx) => (
                  <div
                    key={idx}
                    className="flex items-center text-sm border-t border-gray-300 pt-2"
                  >
                    <span className="text-gray-500 mr-4 font-semibold p-2">/{section.number.padStart(2, '0')}</span>
                    <span className="text-gray-700">{text}</span>
                  </div>
                ))}
                <hr className="border-gray-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
