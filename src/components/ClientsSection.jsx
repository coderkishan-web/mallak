import React from 'react';
import bgImage from '/src/assets/Rectangle 16.png'; 
const clients = [
  { src: 'src/assets/client/logosilde1.jpg', alt: 'Siegwerk' },
    { src: 'src/assets/client/logosilde2.jpg', alt: 'Siegwerk' }, 
     { src: 'src/assets/client/logosilde3.jpg', alt: 'Siegwerk' }, 
      { src: 'src/assets/client/logosilde4.png', alt: 'Siegwerk' },
        { src: 'src/assets/client/logosilde5.png', alt: 'Siegwerk' },
   { src: 'src/assets/client/logosilde6.jpg', alt: 'Siegwerk' },
    { src: 'src/assets/client/logosilde7.jpg', alt: 'Siegwerk' }, 
     { src: 'src/assets/client/logosilde8.jpg', alt: 'Siegwerk' }, 
      { src: 'src/assets/client/logosilde9.png', alt: 'Siegwerk' },
        { src: 'src/assets/client/logosilde10.png', alt: 'Siegwerk' },
  
];

const ClientsSection = () => {
  return (
  <section
  style={{ backgroundImage: `url(${bgImage})` }}
  className="bg-cover bg-center bg-no-repeat py-32 px-4"
>
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e1b4b] uppercase tracking-wide">
          Clients
        </h2>

        {/* Subheading */}
        <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
          Ipsum is simply dumIpsum is simply dummy text my text <br />
          Ipsum is simply dumIpsum is simply
        </p>

        {/* Grid container */}
        <div className="mt-12 flex justify-center items-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 rounded-xl shadow-md p-4 w-36 h-24 flex items-center justify-center transition hover:shadow-lg"
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  className="max-h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
