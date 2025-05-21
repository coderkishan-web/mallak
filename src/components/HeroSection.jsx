import { useEffect, useRef, useState } from "react";

const slides = [
  {
    title: "Global Leader in Specialty Chemicals",
    description: "Trusted by businesses in pharmaceuticals, coatings, plastics, and more.",
    image: "assets/imgs/5.jpg",
    textColor: "text-[#FEEAF3]"
  },
  {
    title: "Sustainable & Advanced Chemistry",
    description: "Powering industries worldwide with high-quality, eco-friendly, and innovative chemical solutions.",
    image: "assets/imgs/4.jpg",
    textColor: "text-[#E6F1D9]"
  },
  {
    title: "High-Performance Pigments & Surfactants",
    description: "Our products meet international quality standards and are trusted by industries worldwide.",
    image: "assets/imgs/8.jpg",
    textColor: "text-[#E1DCEE]"
  }
];

const extendedSlides = [
  slides[slides.length - 1], 
  ...slides,
  slides[0], 
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(1); 
  const [isTransitioning, setIsTransitioning] = useState(true);
  const slideTrackRef = useRef(null);

  const nextSlide = () => {
    if (currentSlide < extendedSlides.length - 1) {
      setCurrentSlide(currentSlide + 1);
      setIsTransitioning(true);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      setIsTransitioning(true);
    }
  };

  const handleTransitionEnd = () => {
    if (currentSlide === 0) {
      setIsTransitioning(false);
      setCurrentSlide(slides.length);
    } else if (currentSlide === extendedSlides.length - 1) {
      setIsTransitioning(false);
      setCurrentSlide(1);
    }
  };

  useEffect(() => {
    if (slideTrackRef.current) {
      if (isTransitioning) {
        slideTrackRef.current.style.transition = "transform 0.7s ease";
      } else {
        slideTrackRef.current.style.transition = "none";
      }
      slideTrackRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide, isTransitioning]);

  useEffect(() => {
    if (!isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);


  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); 

    return () => clearInterval(interval); 
  }, [currentSlide]); 

  const bgSlideIndex =
    currentSlide === 0
      ? slides.length - 1
      : currentSlide === extendedSlides.length - 1
      ? 0
      : currentSlide - 1;

  return (
    <section
      className="relative bg-gradient-to-l to-gray-900 from-black text-white mt-0  overflow-hidden"
      style={{
        backgroundImage: `url(${slides[bgSlideIndex].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: "background-image 0.7s ease-in-out",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative container w-full h-full mx-auto py-16 px-8 md:px-28">
        <div className="relative overflow-hidden">
          <div
            ref={slideTrackRef}
            className="flex"
            onTransitionEnd={handleTransitionEnd}
            id="heroCarouselTrack"
          >
            {extendedSlides.map((slide, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex flex-col-reverse md:flex-row items-center gap-8"
                data-aos="zoom-out"
              >
                <div className="w-full md:w-1/2 text-center md:text-left p-8">
                  <h2
                    className={`text-4xl md:text-6xl font-medium leading-tight pb-4 ${slide.textColor}`}
                  >
                    {slide.title}
                  </h2>
                  <p className="text-lg max-w-3xl mx-auto leading-relaxed pt-8">
                    {slide.description}
                  </p>
                  <div className="mt-6 flex flex-col sm:flex-row sm:justify-start justify-center gap-4">
                    <a
                      href="#products"
                      className="bg-[#FF9800] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#F2911C] transition"
                    >
                      Explore Products
                    </a>
                    <a
                      href="#quote"
                      className="border border-white text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-white hover:text-[#000053] transition"
                    >
                      Get a Quote
                    </a>
                  </div>
                </div>
                <div className="w-full md:w-1/3 flex justify-center">
                  <img
                    src={slide.image}
                    alt={`Hero Image ${index + 1}`}
                    className="w-full h-auto object-cover rounded-3xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => {
              setCurrentSlide(index + 1);
              setIsTransitioning(true);
            }}
            className={`hero-dot w-4 h-4 rounded-full cursor-pointer ${
              index === bgSlideIndex ? "bg-white opacity-100" : "bg-white opacity-50"
            }`}
          ></div>
        ))}
      </div>

      <button
        id="heroPrevBtn"
        onClick={prevSlide}
        className="absolute top-1/2 left-0 md:left-10 transform -translate-y-1/2 text-white text-3xl"
      >
        &#10094;
      </button>
      <button
        id="heroNextBtn"
        onClick={nextSlide}
        className="absolute top-1/2 right-0 md:right-10 transform -translate-y-1/2 text-white text-3xl"
      >
        &#10095;
      </button>
    </section>
  );
}
