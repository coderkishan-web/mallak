import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    date: "May 8, 2020",
    title: "Outstanding Experience",
    text: `Working with this team was seamless. They understood our goals and delivered a fantastic product!`,
    image: "src/assets/Rectangle 1.png",
  },
  {
    id: 2,
    date: "June 12, 2021",
    title: "Professional and Creative",
    text: `The attention to detail and creativity they bring to the table is impressive. Highly recommend!`,
    image: "src/assets/Rectangle 1-1.png",
  },
  {
    id: 3,
    date: "Sept 23, 2022",
    title: "Efficient and Reliable",
    text: `They met our deadlines and communicated thoroughly through the entire process. Very reliable.`,
    image: "src/assets/Rectangle 1-1.png",
  },
  {
    id: 4,
    date: "Feb 17, 2023",
    title: "Exceptional Support",
    text: `Their post-delivery support and availability was exceptional. We’ll be working with them again soon.`,
    image: "src/assets/Rectangle 1.png",
  },
];

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const length = testimonials.length;

  const prev = () => {
    setActive((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  const next = () => {
    setActive((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const getIndex = (index) => (index + length) % length;

  return (
    <div className="bg-blue-50 relative rounded-xl py-12 px-4 sm:px-6 lg:px-20 select-none overflow-hidden">
      <h2 className="text-center text-teal-800 font-semibold text-xl sm:text-2xl mb-10 sm:mb-12">
        What Our Clients Say About Us
      </h2>

      {/* Carousel Layout */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 relative z-10">
        {/* Left Card (hide on mobile) */}
        <div className="hidden md:flex w-52 min-h-[220px] bg-white p-6 rounded-lg shadow-md flex-col justify-center text-gray-700 text-sm font-semibold transition-opacity duration-300">
          <h3 className="font-bold mb-3">{testimonials[getIndex(active - 1)].title}</h3>
          <p className="font-normal text-xs leading-tight">
            {testimonials[getIndex(active - 1)].text.slice(0, 100)}...
          </p>
        </div>

        {/* Main Card */}
        <div className="w-full sm:w-[90%] lg:w-[700px] bg-white rounded-xl shadow-lg flex flex-col sm:flex-row overflow-hidden">
          <img
            src={testimonials[active].image}
            alt="Client"
            className="w-full sm:w-64 h-48 sm:h-auto object-cover"
          />
          <div className="p-4 sm:p-6 flex flex-col">
            <span className="text-xs text-gray-500 mb-2">{testimonials[active].date}</span>
            <h3 className="text-gray-800 font-semibold text-base sm:text-lg mb-3">
              {testimonials[active].title}
            </h3>
            <p className="text-sm text-gray-700 leading-snug">{testimonials[active].text}</p>
          </div>
        </div>

        {/* Right Card (hide on mobile) */}
        <div className="hidden md:block w-52 h-64 rounded-lg overflow-hidden shadow-md relative">
          <img
            src={testimonials[getIndex(active + 1)].image}
            alt="Client"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Decorative images (hidden on mobile) */}
      <img
        src="src/assets/Ornament 80.png"
        alt="Decorative Left"
        className="hidden sm:block absolute left-4 sm:left-8 top-16 h-32 sm:h-48 z-0"
      />
      <img
        src="src/assets/Ornament 81.png"
        alt="Decorative Right"
        className="hidden sm:block absolute right-4 sm:right-20 top-16 h-32 sm:h-48 z-0"
      />

      {/* Navigation */}
      <div className="mt-8 sm:mt-10 flex justify-center items-center gap-6">
        <button
          onClick={prev}
          aria-label="Previous"
          className="text-teal-800 hover:text-teal-600 transition-colors text-3xl"
        >
          &#8249;
        </button>
        <div className="flex gap-3">
          {testimonials.map((_, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className={`w-3.5 h-3.5 rounded-full cursor-pointer ${
                active === i ? "bg-teal-800" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next"
          className="text-teal-800 hover:text-teal-600 transition-colors text-3xl"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}
