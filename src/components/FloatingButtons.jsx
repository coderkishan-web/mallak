import React, { useEffect, useState } from "react";

const FloatingButtons = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollBtn(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll to Top Button */}
      {showScrollBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 bg-gray-800 hover:bg-gray-900 text-white text-3xl px-3 py-2 rounded-full shadow-lg z-50 transition-all duration-300"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}

      {/* WhatsApp Button */}
      <a
        className="fixed bottom-4 right-4 z-50"
        href="https://wa.me/918422802636"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with us on WhatsApp"
      >
        <img
          src="assets/imgs/whatsapp.png"
          alt="WhatsApp"
          className="w-14 h-14 hover:scale-105 transition-transform duration-300"
        />
      </a>
    </>
  );
};  

export default FloatingButtons;
