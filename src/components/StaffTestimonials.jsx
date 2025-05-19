import React, { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "John Doe",
    position: "UX Designer",
    feedback: "Lorem Ipsum is simply dummy text used in the industry since the 1500s.",
  },
  {
    name: "Jane Smith",
    position: "Lead Developer",
    feedback: "Design is how it works. Great design speaks louder than words.",
  },
  {
    name: "Alex Johnson",
    position: "Project Manager",
    feedback: "A team that communicates well creates projects that shine.",
  },
  {
    name: "Emily Davis",
    position: "Marketing Head",
    feedback: "Effective marketing starts with listening and understanding users.",
  },
  {
    name: "Michael Brown",
    position: "CTO",
    feedback: "Technology fuels progress. We push boundaries every day.",
  },
];

const StaffTestimonials = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const extendedTestimonials = [...testimonials, ...testimonials.slice(0, visibleCount)];

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCount(1);
      } else if (width < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => prev + 1);
      setIsTransitioning(true);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Handle loop reset
  useEffect(() => {
    if (slideIndex === testimonials.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setSlideIndex(0);
      }, 700); // Match with transition duration

      return () => clearTimeout(timer);
    }
  }, [slideIndex]);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-20 bg-white overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">What Our Staff Said</h2>
        <p className="text-lg text-gray-600">Here’s what our team says about working with us</p>
      </div>

      <div className="overflow-hidden" ref={containerRef}>
        <div
          ref={trackRef}
          className="flex gap-6"
          style={{
            width: `${(extendedTestimonials.length * 100) / visibleCount}%`,
            transform: `translateX(-${(slideIndex * 100) / extendedTestimonials.length}%)`,
            transition: isTransitioning ? "transform 0.7s ease-in-out" : "none",
          }}
        >
          {extendedTestimonials.map((item, index) => (
            <div
              key={index}
              className="p-4"
              style={{ width: `${100 / extendedTestimonials.length}%` }}
            >
              <div className="border rounded-xl p-6 shadow-md bg-white h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-md bg-gray-300" />
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900">{item.name}</h4>
                    <p className="text-gray-600">{item.position}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                  {item.feedback}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffTestimonials;
