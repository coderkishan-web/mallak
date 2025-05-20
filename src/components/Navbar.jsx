// 📁 src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleTranslate from './GoogleTranslate';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // For mobile dropdowns

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="bg-white shadow-sm relative">
      <nav className=" flex max-w-8xl items-center  justify-center flex-wrap lg:px-8" aria-label="Global">
        <div className='flex justify-center items-center gap-28 px-12 mx-2 mt-2 rounded-tr-4xl rounded-tl-4xl'>
         <div className='flex justify-between gap-4 items-center '>
   {/* Logo */}
          <div className="flex justify-center items-center lg:flex-1 md:p-6">
            <Link to="/" className="text-xl font-bold text-gray-900">
              <img src="/src/assets/logo.png" alt="" className='w-64 mb-2' />
            </Link>
          </div>
        {/* Mobile Menu Button */}
        <div className="flex lg:hidden px-6">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
</div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:gap-x-8">
            {/* About Dropdown */}
            <div className="group">
              <div className="flex items-center gap-x-1 text-sm font-semibold text-gray-900 py-6 cursor-pointer">
                <Link to="/about" className="block text-md font-semibold text-gray-800">Our Organisation</Link>
                <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="absolute left-0 top-24 w-screen hidden group-hover:block z-40">
                <div className="bg-white shadow-lg ring-1 ring-gray-200">
                  <div className="mx-auto max-w-7xl grid grid-cols-4 gap-6 p-12">
                    <a href="" className="block p-4 hover:bg-gray-800 hover:text-white rounded-lg">
                    <Link to="/about" className="text-sm font-semibold py-6">

                      <h3 className="font-semibold">About Us</h3>
                      <p className="text-sm">Innovating in specialty chemicals since 1998.</p>
                      </Link>
                    </a>
                    <a href="/about" className="block p-4 hover:bg-gray-800 hover:text-white rounded-lg">
                      <h3 className="font-semibold">Vision & Mission</h3>
                      <p className="text-sm">Empowering global innovation, made in India.</p>
                    </a>
                    <a href="#" className="block p-4 hover:bg-gray-800 hover:text-white rounded-lg">
                      <h3 className="font-semibold">Journey So Far</h3>
                      <p className="text-sm">Expanding globally with purpose and passion.</p>
                    </a>
                    <a href="#" className="block p-4 hover:bg-gray-800 hover:text-white rounded-lg">
                      <h3 className="font-semibold">Message From Chairman</h3>
                      <p className="text-sm">Visionary insights from our leadership.</p>
                    </a>
                    <a href="#" className="block p-4 hover:bg-gray-800 hover:text-white rounded-lg">
                      <Link to="/career" className="text-sm font-semibold py-6">
                      <h3 className="font-semibold">Career</h3>
                      <p className="text-sm">Grow your career with us.</p></Link>
                    </a>
                    <a href="#" className="block p-4 hover:bg-gray-800 hover:text-white rounded-lg">
                    <Link to="/awards" className="text-sm font-semibold py-6">

                      <h3 className="font-semibold">Certificate & Awards</h3>
                      <p className="text-sm">Recognized for quality and excellence.</p>
                      </Link>
                    </a>
                    <a href="#" className="block p-4 hover:bg-gray-800 hover:text-white rounded-lg">
                      <h3 className="font-semibold">News & Events</h3>
                      <p className="text-sm">Latest updates and exhibitions.</p>
                    </a>
                    <a href="#" className="block p-4 hover:bg-gray-800 hover:text-white rounded-lg">
                      <h3 className="font-semibold">Testimonials/Clients</h3>
                      <p className="text-sm">What our partners say about us.</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Dropdown */}
            <div className="group">
              <div className="flex items-center gap-x-1 text-sm font-semibold text-gray-900 cursor-pointer py-6">
                <p  className="block text-md font-semibold text-gray-800">Business Units</p>
                <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="absolute left-0 top-24 w-screen hidden group-hover:block z-40">
                <div className="bg-white shadow-lg ring-1 ring-gray-200">
                  <div className="mx-auto max-w-7xl grid grid-cols-3 gap-6 p-6">
                    <div className="border border-gray-200 rounded-xl p-6">
                      <Link to="/products" className="block p-4 hover:bg-gray-800 hover:text-white rounded-lg">
                        <h3 className="font-semibold">Pigments & Colorants</h3>
                        <p className="text-sm">Metal Finishing Chemicals</p>
                        <p className="text-sm">Construction Chemicals</p>
                        <p className="text-sm">Pharma</p>
                        <p className="text-sm">Paint, Coating, Inks and Pigments</p>
                        <p className="text-sm">Oil & Gas</p>
                        <p className="text-sm">Industrial and Household</p>
                      </Link>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6">
                      <div className="border border-gray-200 rounded-xl">
                        <a href="#" className="block p-4 hover:bg-gray-800 hover:text-white rounded-lg">
                          <h3 className="font-semibold">Chemical and Pharma Intermediate</h3>
                          <p className="text-sm">Key ingredients for pharma and specialty chemicals.</p>
                        </a>
                      </div>
                      <div className="border border-gray-200 rounded-xl mt-2">
                        <a href="#" className="block p-4 hover:bg-gray-800 hover:text-white rounded-lg">
                          <h3 className="font-semibold">Surfactants</h3>
                          <p className="text-sm">Advanced surfactants for diverse industrial uses.</p>
                        </a>
                      </div>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6">
                      <a href="#" className="block p-4 hover:bg-gray-800 hover:text-white rounded-lg">
                        <h3 className="font-semibold">Metal Powder for 3D Printing</h3>
                        <p className="text-sm">High-performance metal powders for additive manufacturing.</p>
                      </a>
                      <a href="#" className="block p-4 hover:bg-gray-800 hover:text-white rounded-lg">
                        <h3 className="font-semibold">Ionic Liquids</h3>
                        <p className="text-sm">Eco-friendly solvents for modern chemical processes.</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Static Links */}
            <Link to="/crams" className="text-md font-semibold text-gray-800 py-6">Cram Services</Link>
            <Link to="/blog" className="text-md font-semibold text-gray-800 py-6">Blogs</Link>
            <Link to="/contact" className="text-md font-semibold text-gray-800 py-6">Contact</Link>
          </div>
        </div>


        {/* Login Button */}
        <div className="hidden lg:flex lg:justify-center z-50">
          <Link to="/login" className="text-md font-semibold leading-6 text-white px-16 bg-gray-800 hover:bg-gray-900 py-4 rounded-full">Log in</Link>
          <span aria-hidden="true" className='bg-gray-800 hover:bg-gray-900 text-white text-2xl py-2 px-4 rounded-full -rotate-45'>&rarr;</span>
        </div>

       {/* Mobile Menu */}
<div className={`w-full lg:hidden bg-white ${isMenuOpen ? "block" : "hidden"}`}>
  <div className="space-y-4 px-6 pb-6 pt-4">
    
    {/* Our Organisation */}
    <div
      onClick={() => toggleDropdown("org")}
      className="flex justify-between items-center text-base font-medium text-gray-900 py-3 px-4 border rounded-lg bg-gray-50 shadow-sm cursor-pointer"
    >
      Our Organisation
      <span className="text-xl">
        {openDropdown === "org" ? "▲" : "▼"}
      </span>
    </div>
    {openDropdown === "org" && (
      <div className="ml-4 space-y-2 text-sm text-gray-800">
        <Link to="/about" className="block py-1 hover:underline">About Us</Link>
        <Link to="#" className="block py-1 hover:underline">Vision & Mission</Link>
        <Link to="#" className="block py-1 hover:underline">Journey So Far</Link>
        <Link to="#" className="block py-1 hover:underline">Chairman Message</Link>
        <Link to="/career" className="block py-1 hover:underline">Careers</Link>
        <Link to="#" className="block py-1 hover:underline">Certificates</Link>
        <Link to="#" className="block py-1 hover:underline">News & Events</Link>
        <Link to="#" className="block py-1 hover:underline">Testimonials</Link>
      </div>
    )}

    {/* Business Units */}
    <div
      onClick={() => toggleDropdown("business")}
      className="flex justify-between items-center text-base font-medium text-gray-900 py-3 px-4 border rounded-lg bg-gray-50 shadow-sm cursor-pointer"
    >
      Business Units
      <span className="text-xl">
        {openDropdown === "business" ? "▲" : "▼"}
      </span>
    </div>
    {openDropdown === "business" && (
      <div className="ml-4 space-y-2 text-sm text-gray-800">
        <Link to="/products" className="block py-1 hover:underline">Pigments & Colorants</Link>
        <Link to="#" className="block py-1 hover:underline">Metal Finishing Chemicals</Link>
        <Link to="#" className="block py-1 hover:underline">Construction Chemicals</Link>
        <Link to="#" className="block py-1 hover:underline">Pharma</Link>
        <Link to="#" className="block py-1 hover:underline">Paint, Inks & Coatings</Link>
        <Link to="#" className="block py-1 hover:underline">Oil & Gas</Link>
        <Link to="#" className="block py-1 hover:underline">Chemical Intermediates</Link>
        <Link to="#" className="block py-1 hover:underline">Surfactants</Link>
        <Link to="#" className="block py-1 hover:underline">3D Printing Powders</Link>
        <Link to="#" className="block py-1 hover:underline">Ionic Liquids</Link>
      </div>
    )}

    {/* Static Links */}
    <Link to="/crams" className="block text-base font-medium text-gray-900 py-3 px-4 border rounded-lg bg-gray-50 shadow-sm hover:bg-gray-100">CRAM Services</Link>
    <Link to="/blog" className="block text-base font-medium text-gray-900 py-3 px-4 border rounded-lg bg-gray-50 shadow-sm hover:bg-gray-100">Blogs</Link>
    <Link to="/contact" className="block text-base font-medium text-gray-900 py-3 px-4 border rounded-lg bg-gray-50 shadow-sm hover:bg-gray-100">Contact</Link>
    <Link to="/login" className="block text-base font-medium text-white text-center py-3 bg-red-700 rounded-lg shadow-md">Login</Link>

  </div>
</div>

      </nav>

      <div className='absolute top-6 md:top-14 left-0 p-4 z-50'>
          <GoogleTranslate/>
      </div>
    </header>
  );
};

export default Navbar;
