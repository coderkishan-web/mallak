import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CRAMS = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const comingDownSectionRef = useRef(null);
  const service1Ref = useRef(null);
  const service2Ref = useRef(null);
  const [active, setActive] = useState(null);

  const planRef = useRef(null);
  const optimizeRef = useRef(null);
  const produceRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { width: '100%', x: 0, willChange: 'transform, width' },
        {
          width: '30rem',
          x: 100,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom-=100',
            end: 'center center',
            scrub: 0.5,
          },
        }
      );

      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -50, willChange: 'opacity, transform' },
        {
          opacity: 1,
          x: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom-=40',
            end: 'center center',
            scrub: 0.5,
          },
        }
      );

      gsap.fromTo(
        comingDownSectionRef.current,
        { opacity: 0, y: -50, willChange: 'opacity, transform' },
        {
          opacity: 1,
          y: 0,
          ease: 'power2.out',
          duration: 1.2,
        }
      );

      // Animations for PLAN, OPTIMIZE, PRODUCE sections
      const animateSection = (ref) => {
    gsap.timeline({
  scrollTrigger: {
    trigger: ref.current,
    start: 'top 80%',
    end: 'top -50%',
    scrub: true,
  },
})
.fromTo(
  ref.current,
  { opacity: 0, y: 50, rotate: -50 },
  { opacity: 1, y: 0, rotate: 20, ease: 'power2.out' }
)
.to(
  ref.current,
  { opacity: 0, y: -30, rotate: 50, ease: 'power2.out' },
  ">-0.1" // overlap slightly for smoother transition
);


      };

      animateSection(planRef);
      animateSection(optimizeRef);
      animateSection(produceRef);
    });

    return () => ctx.revert();
  }, []);
   useEffect(() => {
    if (!service1Ref.current || !service2Ref.current) return;

    const tl1 = gsap.timeline({ paused: true });
    const tl2 = gsap.timeline({ paused: true });

    tl1.to(service1Ref.current, {
      flex: 3,
      duration: 0.5,
      ease: 'power2.out'
    }).to(service2Ref.current, {
      flex: 1,
      duration: 0.5,
      ease: 'power2.out'
    }, '<');

    tl2.to(service1Ref.current, {
      flex: 1,
      duration: 0.5,
      ease: 'power2.out'
    }).to(service2Ref.current, {
      flex: 3,
      duration: 0.5,
      ease: 'power2.out'
    }, '<');

    if (active === 'service1') {
      tl1.play();
    } else if (active === 'service2') {
      tl2.play();
    }

    return () => {
      tl1.kill();
      tl2.kill();
    };
  }, [active]);


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
          <h1 className="text-4xl md:text-5xl font-bold mb-2">CRAMS Services</h1>
          <p className="text-base md:text-lg max-w-2xl leading-relaxed">
            Lorem ipsum is a dummy or placeholder text commonly used in graphic design,
            publishing, and web development.
          </p>
        </div>
      </div>

    {/* Section that comes down */}
<section className="bg-white py-16 px-4 md:px-10 lg:px-32">
  <div
    className="max-w-7xl mx-auto text-center"
    ref={comingDownSectionRef}
    style={{ opacity: 0 }}
  >
    <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wide font-medium">
      Cool Inks & Paints
    </p>
    <h1 className="text-2xl md:text-4xl font-extrabold leading-snug mt-2">
      <span className="bg-gradient-to-r from-blue-900 to-green-500 bg-clip-text text-transparent inline-block">
        Enhancing durability, color vibrancy
      </span>
    </h1>
    <p className="mt-4 text-gray-500 max-w-md md:max-w-2xl mx-auto text-xs md:text-sm">
      Increasing the product appeal, specification needs, and resilience in a diverse
      range of industrial and commercial applications. Crafted using the
      highest quality standards and innovative color pigment systems.
    </p>
    <button className="mt-8 px-6 py-3 bg-blue-900 text-white rounded-lg font-semibold shadow hover:bg-blue-800 transition duration-300">
      Custom Inks & Paints
    </button>
  </div>
</section>

{/* Animated section with image and text */}
<section
  ref={sectionRef}
  className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-10 lg:px-20 py-10 md:py-20 gap-6 md:gap-10 relative overflow-x-hidden"
>
  <div 
    ref={textRef} 
    className="max-w-full md:max-w-lg text-left relative md:absolute md:top-40 md:right-0 lg:right-50 p-4 md:p-0"
  >
    <h2 className="text-xl md:text-3xl font-extrabold text-blue-900 mb-4">
      Global Leader in Specialty Chemicals
    </h2>
    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 max-w-full md:max-w-md">
      At Mallak Chemicals, we are a leading manufacturer of specialty chemicals, pigments, and surfactants,
      delivering high-quality, sustainable solutions to industries worldwide. With a strong commitment to
      innovation, research, and global excellence, we serve coatings, pharmaceuticals, plastics, textiles,
      and more.
    </p>
    <button className="bg-[#0b004b] text-white px-6 py-3 rounded hover:scale-105 transition-transform">
      Coatings & Paints
    </button>
  </div>

  <div
    ref={imageRef}
    className="rounded-xl overflow-hidden shadow-xl transition-all duration-700 w-full md:w-auto"
  >
    <img
      src="assets/orange.jpg"
      alt="Chemicals"
      className="w-full object-cover h-[300px] md:h-[400px] lg:h-[500px]"
    />
  </div>
</section>


    {/* PLAN Section */}
<section className="bg-[#AA8FF7] py-16 px-6 sm:px-12 md:px-16 lg:px-32">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
    {/* Title */}
    <div className="text-center sm:text-left flex-shrink-0 w-full sm:w-1/4">
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-black leading-tight">PLAN</h1>
    </div>

    {/* Image */}
    <div className="w-56 sm:w-64 md:w-72 flex-shrink-0">
      <img ref={planRef} src="assets/67375dc0bd3a005362c9a436_Service 1-p-500 1.png" alt="Plan Visual" className="w-full" />
    </div>

    {/* Text & badges */}
    <div className="flex-1 text-center sm:text-left">
      <p className="text-base sm:text-lg md:text-xl font-medium text-black mb-6 max-w-xl mx-auto sm:mx-0">
        Create tailored content strategies that resonate with your target audience, helping you grow engagement and increase visibility on YouTube and Facebook
      </p>
      <div className="flex flex-wrap gap-3 justify-center sm:justify-start max-w-xl mx-auto sm:mx-0">
        {Array(6).fill('Lorem Ipsum').map((text, index) => (
          <div key={index} className="bg-[#8466C6] text-white rounded-full px-6 py-2 text-sm">
            {text}
          </div>
        ))}
      </div>
    </div>
  </div>
  <div className="border-t border-black mt-16"></div>
</section>

{/* OPTIMIZE Section */}
<section className="bg-[#8ff794] py-16 px-6 sm:px-12 md:px-16 lg:px-32">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
    <div className="text-center sm:text-left flex-shrink-0 w-full sm:w-1/4">
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-black leading-tight">OPTIMIZE</h1>
    </div>
    <div className="w-56 sm:w-64 md:w-72 flex-shrink-0">
      <img ref={optimizeRef} src="assets/67375dbf641bdbb782e3f73c_Service 2-p-500 1.png" alt="Optimize Visual" className="w-full" />
    </div>
    <div className="flex-1 text-center sm:text-left">
      <p className="text-base sm:text-lg md:text-xl font-medium text-black mb-6 max-w-xl mx-auto sm:mx-0">
        Create tailored content strategies that resonate with your target audience, helping you grow engagement and increase visibility on YouTube and Facebook
      </p>
      <div className="flex flex-wrap gap-3 justify-center sm:justify-start max-w-xl mx-auto sm:mx-0">
        {Array(6).fill('Lorem Ipsum').map((text, index) => (
          <div key={index} className="bg-[#8466C6] text-white rounded-full px-6 py-2 text-sm">
            {text}
          </div>
        ))}
      </div>
    </div>
  </div>
  <div className="border-t border-black mt-16"></div>
</section>

{/* PRODUCE Section */}
<section className="bg-[#6260d4] py-16 px-6 sm:px-12 md:px-16 lg:px-32">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
    <div className="text-center sm:text-left flex-shrink-0 w-full sm:w-1/4">
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-black leading-tight">PRODUCE</h1>
    </div>
    <div className="w-56 sm:w-64 md:w-72 flex-shrink-0">
      <img ref={produceRef} src="assets/673761e2253e781a3b91677b_Service 3 (1)-p-500 1.png" alt="Produce Visual" className="w-full" />
    </div>
    <div className="flex-1 text-center sm:text-left">
      <p className="text-base sm:text-lg md:text-xl font-medium text-black mb-6 max-w-xl mx-auto sm:mx-0">
        Create tailored content strategies that resonate with your target audience, helping you grow engagement and increase visibility on YouTube and Facebook
      </p>
      <div className="flex flex-wrap gap-3 justify-center sm:justify-start max-w-xl mx-auto sm:mx-0">
        {Array(6).fill('Lorem Ipsum').map((text, index) => (
          <div key={index} className="bg-[#8466C6] text-white rounded-full px-6 py-2 text-sm">
            {text}
          </div>
        ))}
      </div>
    </div>
  </div>
  <div className="border-t border-black mt-16"></div>
</section>


     <div className="w-full py-20 px-10 bg-white text-black">
  <h2 className="text-3xl sm:text-4xl md:text-6xl text-center mb-20">
    RESOURCES FOR <br /> REVENUE
  </h2>
  <div className="flex gap-6 px-6 transition-all duration-500" style={{ height: '400px' }}>
    <div
      ref={service1Ref}
      onMouseEnter={() => setActive('service1')}
      className="flex-[2] relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500"
    >
      <img
        src="assets/orange.jpg"
        alt="Service 1"
        className="object-cover w-full h-full"
      />
      <div className="absolute top-4 left-4 px-4 py-1.5 bg-gray-300/60 rounded-full text-white font-semibold text-sm sm:text-base">
        Service 1
      </div>
      <div className="absolute bottom-14 md:bottom-4 left-4 bg-black/70 text-white p-3 rounded-xl text-sm sm:text-base font-semibold w-full">
        Enhancing durability, color vibrancy, and performance with advanced pigments
      </div>
      <div className="absolute bottom-4 right-4 bg-white text-black p-3 rounded-full">
        <span className="text-lg sm:text-xl">↗</span>
      </div>
    </div>

    <div
      ref={service2Ref}
      onMouseEnter={() => setActive('service2')}
      className="flex-[1] relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500"
    >
      <img
        src="assets/orange.jpg"
        alt="Service 2"
        className="object-cover w-full h-full"
      />
      <div className="absolute top-4 left-4 px-4 py-1.5 bg-cyan-400/60 rounded-full text-white font-semibold text-sm sm:text-base">
        Service 2
      </div>
      <div className="absolute bottom-14 md:bottom-4 left-4 bg-black/70 text-white p-3 rounded-xl text-sm sm:text-base font-semibold w-full">
        Enhancing durability, color vibrancy, and performance with advanced pigments
      </div>
      <div className="absolute bottom-4 right-4 bg-white text-black p-3 rounded-full">
        <span className="text-lg sm:text-xl">↗</span>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default CRAMS;
