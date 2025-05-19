import React, { useEffect, useRef } from "react";

const OurClientele = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const firstGroup = slider.children[0];
    let position = 0;
    const speed = 1; // Adjust scroll speed here

    let animationFrameId;

    const animate = () => {
      position -= speed;

      // Reset position when first group fully scrolled out of view
      if (-position >= firstGroup.offsetWidth) {
        position = 0;
      }

      slider.style.transform = `translate3d(${position}px, 0, 0)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-40">
        <h2 className="text-4xl sm:text-5xl font-medium text-[#120E37] leading-tight transition-colors text-center mb-8">
          Our Trusted Partners
        </h2>
        <hr className="border-[#FF9800] w-40 mb-12 mx-auto" />

        <div className="relative overflow-hidden">
          {/* Logo Slider Container */}
          <div
            id="logoSlider"
            ref={sliderRef}
            className="flex space-x-12 will-change-transform"
            style={{ transform: "translate3d(0, 0, 0)" }}
          >
            {/* Logo Group 1 */}
            <div className="flex-shrink-0 flex space-x-12 items-center">
              <img
                src="src/assets/client/logosilde1.jpg"
                alt="Client Logo"
                className="h-12 w-auto transition-all duration-300"
              />
              <img
                src="src/assets/client/logosilde2.jpg"
                alt="Client Logo"
                className="h-12 w-auto transition-all duration-300"
              />
              <img
                src="src/assets/client/logosilde3.jpg"
                alt="Client Logo"
                className="h-12 w-auto transition-all duration-300"
              />
              <img
                src="src/assets/client/logosilde4.png"
                alt="Client Logo"
                className="h-12 w-auto transition-all duration-300"
              />
              <img
                src="src/assets/client/logosilde5.png"
                alt="Client Logo"
                className="h-12 w-auto transition-all duration-300"
              />
              <img
                src="src/assets/client/logosilde6.jpg"
                alt="Client Logo"
                className="h-12 w-auto transition-all duration-300"
              />
            </div>

            {/* Logo Group 2 (Duplicate for seamless loop) */}
            <div className="flex-shrink-0 flex space-x-12 items-center">
              <img
                src="src/assets/client/logosilde7.jpg"
                alt="Client Logo"
                className="h-12 w-auto transition-all duration-300"
              />
              <img
                src="src/assets/client/logosilde8.jpg"
                alt="Client Logo"
                className="h-12 w-auto transition-all duration-300"
              />
              <img
                src="src/assets/client/logosilde9.png"
                alt="Client Logo"
                className="h-12 w-auto transition-all duration-300"
              />
              <img
                src="src/assets/client/logosilde10.png"
                alt="Client Logo"
                className="h-12 w-auto transition-all duration-300"
              />
              <img
                src="src/assets/client/logosilde1.jpg"
                alt="Client Logo"
                className="h-12 w-auto transition-all duration-300"
              />
              <img
                src="src/assets/client/logosilde2.jpg"
                alt="Client Logo"
                className="h-12 w-auto transition-all duration-300"
              />
            </div>

            {/* Logo Group 3 (Duplicate for seamless loop) */}
            <div className="flex-shrink-0 flex space-x-12 items-center">
              <img
                src="src/assets/client/logosilde3.jpg"
                alt="Client Logo"
                className="h-12 w-auto transition-all duration-300"
              />
              <img
                src="src/assets/client/logosilde4.png"
                alt="Client Logo"
                className="h-12 w-auto transition-all duration-300"
              />
              <img
                src="src/assets/client/logosilde5.png"
                alt="Client Logo"
                className="h-12 w-auto transition-all duration-300"
              />
              <img
                src="src/assets/client/logosilde6.jpg"
                alt="Client Logo"
                className="h-12 w-auto transition-all duration-300"
              />
              <img
                src="src/assets/client/logosilde7.jpg"
                alt="Client Logo"
                className="h-12 w-auto transition-all duration-300"
              />
              <img
                src="src/assets/client/logosilde8.jpg"
                alt="Client Logo"
                className="h-12 w-auto transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClientele;
