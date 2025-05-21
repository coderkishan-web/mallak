import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-[#12073b] text-white px-6 md:px-12 lg:px-20 py-12 rounded-t-[60px]">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Logo and Description */}
        <div className="md:max-w-[400px]">
          <div className="flex items-center gap-2 mb-10">
            <img src="assets/logo.png" alt="" className='w-72'/>
            
          </div>
          <p className="text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s
          </p>
          <div className="flex gap-4 mt-6 text-xl">
            <FaFacebookF className="hover:text-[#3b5998] transition" />
            <FaLinkedinIn className="hover:text-[#0077b5] transition" />
            <FaInstagram className="hover:text-[#e1306c] transition" />
            <FaYoutube className="hover:text-[#ff0000] transition" />
          </div>
        </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {/* Our Organisation */}
        <div>
          <h3 className="text-[#00b7ff] font-semibold mb-4">Our Organisation</h3>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Vision & Mission</li>
            <li>Why Choose Us</li>
            <li>Clients</li>
          </ul>
        </div>

        {/* Business Units */}
        <div>
          <h3 className="text-[#00b7ff] font-semibold mb-4">Business Units</h3>
          <ul className="space-y-2 text-sm">
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-[#00b7ff] font-semibold mb-4">Products</h3>
          <ul className="space-y-2 text-sm">
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>
      </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-screen-xl mx-auto mt-10 pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm">Copyrights all reserved</p>
        <div className="flex gap-2 items-center w-full md:w-auto">
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-3 rounded-full bg-white/20 text-white placeholder-white text-sm w-full md:w-64 focus:outline-none"
          />
          <button className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium">
            Enquire
          </button>
          <div className="bg-white text-black p-3 rounded-full">
            <FaArrowUpRightFromSquare className="text-lg" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
