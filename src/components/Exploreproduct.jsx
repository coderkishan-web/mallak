import React, { useEffect, useRef, useState } from "react";

const products = [
  {
    title: "Pigments & Colorants",
    img: "src/assets/imgs/colors1.png",
    desc: "Vibrant, durable, and high-purity pigments for coatings, plastics, inks, and textiles, ensuring superior color consistency and performance.",
  },
  {
    title: "Surfactants & Detergents",
    img: "src/assets/imgs/11.avif",
    desc: "Eco-friendly and high-efficiency surfactants, emulsifiers, and wetting agents for personal care, home care, and industrial cleaning applications.",
  },
  {
    title: "Chemical & Pharmaceutical Intermediates",
    img: "src/assets/imgs/10.jpg",
    desc: "High-purity intermediates designed for pharmaceutical formulations, agrochemicals, and specialty applications, ensuring compliance with global quality standards.",
  },
  {
    title: "Ionic Liquids & Specialty Chemicals",
    img: "src/assets/imgs/4.jpg",
    desc: "Advanced ionic liquids, catalysts, and functional chemicals tailored for industrial and research-based applications.",
  },
  {
    title: "Coating & Adhesive Additives",
    img: "src/assets/imgs/7.avif",
    desc: "Performance-enhancing resins, dispersions, and additives to improve adhesion, durability, and surface properties for industrial coatings.",
  },
];

const ExploreProducts = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(4);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Extended products for infinite loop: add first visibleCount items at the end
  const extendedProducts = [...products, ...products.slice(0, visibleCount)];

  // Responsive visibleCount based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCount(1);
      } else if (width < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => prev + 1);
      setIsTransitioning(true);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Reset slideIndex when reaching the clone slides at the end
  useEffect(() => {
    if (slideIndex === products.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setSlideIndex(0);
      }, 700); // Should match the CSS transition duration

      return () => clearTimeout(timer);
    }
  }, [slideIndex]);

  // Manual navigation handlers
  const handlePrev = () => {
    if (slideIndex === 0) {
      // Jump to clone at end without transition, then go back one slide with transition
      setIsTransitioning(false);
      setSlideIndex(products.length);
      setTimeout(() => {
        setIsTransitioning(true);
        setSlideIndex(products.length - 1);
      }, 20);
    } else {
      setSlideIndex(slideIndex - 1);
      setIsTransitioning(true);
    }
  };

  const handleNext = () => {
    if (slideIndex === products.length) {
      // Reset to start without transition, then move to slide 1 with transition
      setIsTransitioning(false);
      setSlideIndex(0);
      setTimeout(() => {
        setIsTransitioning(true);
        setSlideIndex(1);
      }, 20);
    } else {
      setSlideIndex(slideIndex + 1);
      setIsTransitioning(true);
    }
  };

  return (
    <section className="h-auto py-20 px-4 md:px-8 lg:px-16 text-center bg-black items-center overflow-hidden relative">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium text-[#f7fef9] pb-4 mb-2 transition-colors">
        Explore Our Products
      </h2>
      <hr className="border-[#FF9800] w-40 mb-12 mx-auto" />

      <img
        src="imgs/molecule9.png"
        alt=""
        className="absolute top-1/2 right-0 w-32 md:w-72 opacity-10 z-10"
      />
      <img
        src="imgs/molecule8.png"
        alt=""
        className="absolute bottom-1/2 left-0 w-32 md:w-96 opacity-10"
      />

      <div className="relative max-w-5xl mx-auto hidescroll">
        {/* Previous Button */}
        <button
          className="absolute left-[-20px] sm:left-[-30px] md:left-[-40px] top-40 -translate-y-1/2 z-20 shadow-lg"
          onClick={handlePrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Carousel Track */}
        <div className="overflow-hidden" ref={containerRef}>
          <div
            ref={trackRef}
            className="flex gap-4"
            style={{
              width: `${(extendedProducts.length * 100) / visibleCount}%`,
              transform: `translateX(-${(slideIndex * 100) / extendedProducts.length}%)`,
              transition: isTransitioning ? "transform 0.7s ease-in-out" : "none",
            }}
          >
            {extendedProducts.map((item, index) => (
              <div
                key={index}
                className="px-2"
                style={{ width: `${100 / extendedProducts.length}%` }}
              >
                <a href="#" className="block transform transition-transform duration-500 hover:scale-105">
                  <div className="relative rounded-md overflow-hidden shadow-lg h-72">
                    <img
                      src={item.img}
                      className="absolute inset-0 w-full h-full object-cover"
                      alt={item.title}
                    />
                  </div>
                  <div className="mt-4 text-left">
                    <h5 className="font-medium text-xl mb-2 text-white">{item.title}</h5>
                    <p className="text-sm text-gray-300 mb-2">{item.desc}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          className="absolute right-[-20px] sm:right-[-30px] md:right-[-40px] top-40 -translate-y-1/2 z-20 shadow-lg"
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ExploreProducts;
