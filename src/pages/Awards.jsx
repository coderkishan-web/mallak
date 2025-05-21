// 📁 pages/Awards.jsx
import React from 'react';

const Awards = () => {
  const certificates = [
    '/images/certificate-achievement-1.png',
    '/images/certificate-appreciation.png',
    '/images/certificate-achievement-2.png',
    '/images/certificate-certificate.png',
    '/images/certificate-achievement-1.png',
    '/images/certificate-appreciation.png',
    '/images/certificate-achievement-2.png',
    '/images/certificate-certificate.png',
  ];

  return (
   <>
     {/* Banner */}
     <div className="relative rounded-b-[40px] overflow-hidden shadow-md">
     <img
       src="assets/orange.jpg"
       alt="Banner"
       className="w-full h-[300px] object-cover"
     />
     <div className="absolute inset-0 bg-black/60 flex flex-col justify-center px-6 sm:px-12 lg:px-24 text-white">
       <h1 className="text-4xl md:text-5xl font-bold mb-2">Awards</h1>
       <p className="text-base md:text-lg max-w-2xl leading-relaxed">
         Lorem ipsum is a dummy or placeholder text commonly used in graphic design,
         publishing, and web development.
       </p>
     </div>
   </div>
    <div className="max-w-6xl mx-auto px-6 py-12 font-sans bg-gradient-to-r from-white via-gray-50 to-white">
      {/* Awards Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold uppercase mb-4 tracking-wide text-gray-900">
          AWARDS
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-2 text-lg">
          Ipsum is simply dumpsum is simply dummy text my text
        </p>
        <p className="text-gray-600 max-w-xl mx-auto text-lg">
          Ipsum is simply dumpsum is simply
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {certificates.map((imgSrc, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer flex items-center justify-center p-4"
          >
            <img
              src={imgSrc}
              alt={`Certificate ${index + 1}`}
              className="object-contain h-86"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
   </>
  );
};

export default Awards;
