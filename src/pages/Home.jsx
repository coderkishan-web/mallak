import React, { useEffect, useState,useRef } from "react";
import IndustriesWeServe from "../components/IndustriesWeServe";
import ExploreProducts from "../components/Exploreproduct";
import OurClientele from "../components/OurClientele";
import HeroSection from "../components/HeroSection";

const Home = () => {
    const [scrollY, setScrollY] = useState(0);
  const counterRefs = useRef([]);
  const updateRotation = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateRotation);
    return () => window.removeEventListener("scroll", updateRotation);
  }, []);

   useEffect(() => {
    const counters = counterRefs.current;

    const animateCounters = () => {
      counters.forEach((counter) => {
        const target = +counter.getAttribute("data-counter");

        const updateCount = () => {
          const current = +counter.textContent.replace(/[^0-9]/g, "");
          const increment = Math.ceil(target / 100);

          if (current < target) {
            counter.textContent = current + increment + "+";
            setTimeout(updateCount, 40);
          } else {
            counter.textContent = target.toLocaleString() + "+";
          }
        };

        updateCount();
      });
    };

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter) => {
      if (counter) observer.observe(counter);
    });
  }, []);

  return (
    <>
     <HeroSection/>
    <section className="bg-gray-100 text-gray-900">
      <div className="relative bg-gray-100 text-gray-900 px-6 md:px-20 overflow-hidden">
       
        <img
          src="src/assets/imgs/molecule.png"
          alt="Molecule Design"
          className="absolute top-0 right-0 w-32 md:w-80 opacity-40"
          style={{ transform: `rotate(${scrollY * 0.2}deg)` }}
        />
       

        <section className="max-w-7xl mx-auto py-16 flex flex-col md:flex-row items-center gap-12">
          {/* Images Section */}
          <div className="relative w-full md:w-1/2 flex justify-center">
            <div className="relative w-[300px] sm:w-[350px] md:w-[500px] h-[300px] sm:h-[350px] md:h-[400px]" data-aos="fade-up">
              <img
                src="src/assets/imgs/3.jpg"
                alt="Product Image"
                className="absolute rounded-2xl -top-8 sm:-top-10 -right-8 sm:-right-10 z-10 w-3/4 shadow-2xl transition-transform transform hover:scale-105 duration-500"
              />
              <img
                src="src/assets/imgs/15.jpg"
                alt="Product Image"
                className="absolute rounded-2xl -bottom-8 sm:-bottom-10 -left-8 sm:-left-10 w-3/4 bg-[#f3bc88] shadow-2xl transition-transform transform hover:scale-105 duration-500"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 p-6 sm:p-8" data-aos="fade-left">
            <h2 className="text-4xl sm:text-5xl md:text-5xl font-medium text-[#120E37] pb-4 mb-2 transition-colors">
              About Mallak Chemicals
            </h2>
            <hr className="border-[#FF9800] w-32 sm:w-40 mb-4" />
            <h3 className="text-xl sm:text-2xl font-medium text-gray-900 transition-colors">
              Trusted by businesses in pharmaceuticals, coatings, plastics, and more.
            </h3>
            <p className="mt-4 text-sm sm:text-base">
              At Mallak Chemicals, we are a leading manufacturer of specialty chemicals, pigments, and surfactants, delivering high-quality, sustainable solutions to industries worldwide.
            </p>
            <p className="mt-2 text-sm sm:text-base">
              With a strong commitment to innovation, research, and global excellence, we serve coatings, pharmaceuticals, plastics, textiles, and more.
            </p>

            {/* Icon Section */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center -ml-6">
              <div className="transition-transform transform hover:scale-110">
                <img src="src/assets/imgs/expertise.png" alt="Decades of Expertise" className="mx-auto w-10 sm:w-12" />
                <p className="mt-2 text-xs sm:text-sm font-semibold">Decades Of<br />Expertise</p>
              </div>
              <div className="transition-transform transform hover:scale-110">
                <img src="src/assets/imgs/global-reach.png" alt="Global Reach" className="mx-auto w-10 sm:w-12" />
                <p className="mt-2 text-xs sm:text-sm font-semibold">Global<br />Reach</p>
              </div>
              <div className="transition-transform transform hover:scale-110">
                <img src="src/assets/imgs/quality.png" alt="Uncompromising Quality" className="mx-auto w-10 sm:w-12" />
                <p className="mt-2 text-xs sm:text-sm font-semibold">Uncompromising<br />Quality</p>
              </div>
              <div className="transition-transform transform hover:scale-110">
                <img src="src/assets/imgs/customizable.png" alt="Customized Solutions" className="mx-auto w-10 sm:w-12" />
                <p className="mt-2 text-xs sm:text-sm font-semibold">Customized<br />Solutions</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
      <section className="relative w-full bg-[url('src/assets/imgs/9.avif')] bg-cover bg-fixed py-20 px-8 md:px-20 text-[#120E37] flex justify-center items-center">
      <div className="relative w-full max-w-6xl text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-white/30 backdrop-blur-xl p-8 rounded-2xl">
          {[15, 150, 50, 5].map((value, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="transition-transform transform hover:scale-105 duration-500 flex flex-col items-center"
            >
              <h3
                className="text-6xl font-medium"
                data-counter={value}
                ref={(el) => (counterRefs.current[index] = el)}
              >
                0+
              </h3>
              <h3 className="text-xl mt-2">
                {[
                  "Years Of Experience",
                  "Happy Clients",
                  "Countries Exported",
                  "Factories",
                ][index]}
              </h3>
              <p className="text-sm mt-1">
                {[
                  "A legacy of innovation and quality.",
                  "Trusted by businesses worldwide.",
                  "Global reach, local excellence.",
                  "State-of-the-art manufacturing.",
                ][index]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
   <IndustriesWeServe/>
   <ExploreProducts/>
    <div className="bg-white text-[#120E37] overflow-hidden">
      <section className="max-w-7xl mx-auto py-16 px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left" data-aos="fade-right">
          <h2 className="text-4xl sm:text-5xl font-medium text-[#120E37] leading-tight transition-colors">
            Made in India
          </h2>
          <h3 className="text-lg sm:text-xl font-medium text-[#120E37] mt-4 transition-colors">
            Driving Innovation & Growth Globally 🇮🇳
          </h3>
          <hr className="border-[#FF9800] w-32 sm:w-40 my-4 mx-auto md:mx-0" />
          <p className="text-sm sm:text-base leading-relaxed">
            At Mallak Chemicals, we take pride in being a part of the "Made in India" initiative, championing self-reliance, innovation, and global excellence in the chemical industry. Our state-of-the-art manufacturing facilities, research-driven approach, and sustainable practices position us as a leading exporter of high-quality specialty chemicals to 55+ countries worldwide.
          </p>
        </div>

        {/* Image Section */}
        <div className="h-full md:w-1/2 flex justify-center" data-aos="fade-left">
          <img
            src="src/assets/imgs/makeinindia.jpg"
            alt="Late Avsharan Singh Khurana"
            className="w-full h-auto max-w-[300px] sm:max-w-[400px] md:max-w-[500px] transition-transform transform hover:scale-105 duration-500"
          />
        </div>
      </section>
    </div>

       <section className="relative flex flex-col items-center text-center px-6 py-20 bg-black text-white">
      <h2 className="text-4xl md:text-5xl font-medium" data-aos="fade-up">
        Our Exports
      </h2>
      <hr className="border-[#FF9800] w-40 my-6 mx-auto" />

      <p
        className="max-w-2xl text-md md:text-lg pb-8"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Mallak Chemicals exports high-quality specialty chemicals worldwide, serving diverse industries such as pharmaceuticals, coatings, plastics, and textiles.
      </p>
      <img
        src="src/assets/imgs/worldmap.png"
        alt="World map"
        className="w-[70%] mt-2"
        data-aos="fade-up"
        data-aos-delay="200"
      />
    </section>
    <OurClientele/>
    </>
  );
};

export default Home;
