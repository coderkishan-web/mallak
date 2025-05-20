// 📁 src/pages/About.jsx
import React from 'react';
import WhoWeAre from '../components/Whoweare';
import ClientsSection from '../components/ClientsSection';
import TestimonialCarousel from '../components/TestimonialCarousel';

const reasons = [
  {
    title: 'Global Reach',
    desc: 'Trusted by industries worldwide.',
    icon: 'src/assets/Clip path frame-1.png', // replace with your actual path
    color: 'bg-teal-600',
  },
  {
    title: 'High-Quality Standards',
    desc: 'Adhering to international quality and safety norms.',
    icon: 'src/assets/Clip path frame-2.png',
    color: 'bg-blue-900',
  },
  {
    title: 'Custom Solutions',
    desc: 'Tailored chemical formulations to meet client-specific needs',
    icon: 'src/assets/Clip path frame-3.png',
    color: 'bg-purple-800',
  },
  {
    title: 'Eco-Friendly Manufacturing',
    desc: 'Sustainable processes that minimize waste and pollution.',
    icon: 'src/assets/yy.png',
    color: 'bg-red-700',
  },
];
const About = () => {
  return (
   <>
    {/* Banner */}
    <div className="relative rounded-b-[40px] overflow-hidden shadow-md">
        <img
          src="src/assets/orange.jpg"
          alt="Banner"
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center px-6 sm:px-12 lg:px-24 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">About</h1>
          <p className="text-base md:text-lg max-w-2xl leading-relaxed">
            Lorem ipsum is a dummy or placeholder text commonly used in graphic design,
            publishing, and web development.
          </p>
        </div>
      </div>
   <div className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
  <h2 className="text-3xl sm:text-4xl font-semibold mb-10">Why Choose Us?</h2>

  {/* Arrow background decoration (only on md and above) */}
  <img
    src="/circuit-left.png"
    alt=""
    className="hidden md:block absolute left-0 top-0 h-full opacity-10 pointer-events-none"
  />
  <img
    src="/circuit-right.png"
    alt=""
    className="hidden md:block absolute right-0 top-0 h-full opacity-10 pointer-events-none"
  />

  <div className="flex flex-wrap justify-center items-center gap-y-14 sm:gap-y-8 gap-x-8 sm:gap-x-14">
    {reasons.map((reason, index) => (
      <div
        key={index}
        className="relative flex flex-col items-center w-60 sm:w-[220px] py-16 sm:py-10"
      >
        {/* Rotated diamond */}
        <div className="relative w-28 sm:w-32 h-28 sm:h-32">
          <div
            className={`transform rotate-45 w-full h-full ${reason.color} rounded-md shadow-lg`}
          ></div>
          <img
            src={reason.icon}
            alt={reason.title}
            className="absolute top-1/2 left-1/2 w-16 sm:w-20 h-16 sm:h-20 transform -translate-x-1/2 -translate-y-1/2 object-contain"
          />
          <div
            className={`absolute bottom-[-24px] sm:bottom-[-28px] left-1/2 transform -translate-x-1/2 rounded-full w-8 sm:w-10 h-8 sm:h-10 ${reason.color} shadow-md border-4 border-white`}
          ></div>
        </div>

        {/* Text */}
        <h3 className="text-lg sm:text-xl font-semibold mt-6 sm:mt-8 text-[#1e2b53]">
          {reason.title}
        </h3>
        <p className="text-sm sm:text-md text-gray-600 mt-1 px-2">
          {reason.desc}
        </p>

        {/* Arrows between cards — only on xl screens */}
        {index !== reasons.length - 1 && (
          <div className="absolute right-[-40px] top-28 sm:top-32 hidden xl:block">
            <img src="/src/assets/Clip path group.png" alt="arrow" className="w-16 sm:w-18" />
          </div>
        )}
      </div>
    ))}
  </div>
</div>

   <div id='whoweare'>
   <WhoWeAre/>
   </div>
    <ClientsSection/>
    <TestimonialCarousel/>
   </>
  );
};

export default About;
