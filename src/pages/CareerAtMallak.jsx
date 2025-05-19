// 📁 src/pages/CareerAtMallak.jsx
import React from 'react';
import CompanyCulture from '../components/cultureData';
import StaffTestimonials from '../components/StaffTestimonials';
import OpeningsSection from '../components/OpeningsSection';

const CareerAtMallak = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Career at Mallak</h1>
          <p className="text-base md:text-lg max-w-2xl leading-relaxed">
            Lorem ipsum is a dummy or placeholder text commonly used in graphic design,
            publishing, and web development.
          </p>
        </div>
      </div>
      <CompanyCulture/>
      <StaffTestimonials/>
      <OpeningsSection/>
  </>
  );
};

export default CareerAtMallak;
