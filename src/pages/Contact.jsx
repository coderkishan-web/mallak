// 📁 src/pages/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
  <>
   {/* Banner */}
   <div className="relative rounded-b-[40px] overflow-hidden shadow-md">
        <img
          src="src/assets/orange.jpg"
          alt="Banner"
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center px-6 sm:px-12 lg:px-24 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Contact</h1>
          <p className="text-base md:text-lg max-w-2xl leading-relaxed">
            Lorem ipsum is a dummy or placeholder text commonly used in graphic design,
            publishing, and web development.
          </p>
        </div>
      </div>
      <section className="bg-white px-6 md:px-12 lg:px-24 pt-20 font-sans text-[#1E1E1E] ">
      {/* Top Prompt */}
      <p className="text-sm text-[#5F40FF] mb-2">How can help you?</p>

      {/* Title + Description Row */}
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight lg:w-1/2">
          Have a project in <br /> mind? Get in touch!
        </h2>

        {/* Paragraph */}
        <p className="text-xl text-gray-500 lg:w-1/2 leading-relaxed">
          We're here to help and answer any question you might have. We look
          forward to hearing from you. Any need help you please contact us or
          meet to office with coffee.
        </p>
      </div>

      {/* Contact Grid */}
      <div className="flex justify-evenly items-center md:flex-row flex-col gap-10 mt-20 ">
        {/* Office location */}
        <div>
          <h4 className="text-lg font-medium border-b-2 border-gray-800 inline-block pb-1">
            Office location
          </h4>
          <p className="text-md text-gray-500 mt-3 leading-relaxed">
            16122 collins street,
            <br />
            Melbourne, Australia
          </p>
        </div>

        {/* Send a message */}
        <div>
          <h4 className="text-lg font-medium border-b-2 border-gray-800 inline-block pb-1">
            Send a message
          </h4>
          <p className="text-md text-gray-500 mt-3">info@yourdomain.com</p>
          <p className="text-md text-gray-500">sales@yourdomain.com</p>
        </div>

        {/* Call us directly */}
        <div>
          <h4 className="text-lg font-medium border-b-2 border-gray-800 inline-block pb-1">
            Call us directly
          </h4>
          <p className="text-md text-gray-500 mt-3">1–800–222–000</p>
          <p className="text-md text-gray-500">1–800–222–002</p>
        </div>

        {/* Join our team */}
        <div>
          <h4 className="text-lg font-medium border-b-2 border-gray-800 inline-block pb-1">
            Join our team
          </h4>
          <p className="text-md text-gray-500 mt-3">hire@yourdomain.com</p>
          <p className="text-md text-gray-500">hr@yourdomain.com</p>
        </div>
      </div>

    
    </section>
    <section className='flex justify-center items-center py-10'>
        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-16">
        <button className="w-full md:w-auto bg-gradient-to-r from-orange-500 to-[#5E30CE] text-white text-sm font-medium rounded-full px-8 py-4 flex justify-center items-center gap-10">
          <p>Let's make something great work together.</p>
        
          <span className="underline underline-offset-4">
            Got a project in mind?
          </span>
        </button>
      </div>
    </section>
    {/* img  */}
    <section className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
      {/* Background Image */}
      <img
        src="src/assets/div.png" 
        alt="Office Building Glass"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay (Optional for brightness control) */}
      <div className="absolute inset-0 bg-white/20 backdrop-brightness-95"></div>

      {/* Large Text */}
      <div className="absolute bottom-8 left-6 md:left-12 lg:left-16">
        <h1 className="text-[64px] md:text-[100px] lg:text-[150px] xl:text-[140px] font-extrabold text-[#3F00FF] leading-none tracking-tight">
          contact
        </h1>
      </div>
    </section>
    <section className="w-full px-6 md:px-16  py-20 bg-white relative flex justify-center items-center flex-col gap-10">
      {/* Background Dots (Optional) */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-[url('/dots.svg')] bg-no-repeat bg-left-top opacity-10 pointer-events-none" />

      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-lg text-indigo-600 font-medium">Get in touch with us</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-2">
          How we can help you?
        </h2>
      </div>

      {/* Form */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {/* Name */}
        <div>
          <label className="block text-lg  text-gray-900 mb-1">Enter your name*</label>
          <input
            type="text"
            placeholder="What’s your good name?"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-indigo-600 text-sm py-2 placeholder:text-gray-400"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-lg text-gray-900 mb-1">Email address*</label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-indigo-600 text-sm py-2 placeholder:text-gray-400"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-lg  text-gray-900 mb-1">Phone number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-indigo-600 text-sm py-2 placeholder:text-gray-400"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block text-lg  text-gray-900 mb-1">Subject</label>
          <input
            type="text"
            placeholder="How can we help you?"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-indigo-600 text-sm py-2 placeholder:text-gray-400"
          />
        </div>

        {/* Message - Full Width */}
        <div className="md:col-span-2">
          <label className="block text-lg  text-gray-900 mb-1">Your message</label>
          <textarea
            rows="4"
            placeholder="Describe about your project"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-indigo-600 text-sm py-2 placeholder:text-gray-400 resize-none"
          />
        </div>

        {/* Footer: Privacy + Button */}
        <div className="md:col-span-2 flex flex-col md:flex-row justify-between items-start md:items-center mt-4">
          <p className="text-xs text-gray-500 max-w-md">
            We are committed to protecting your privacy. We will never collect information about
            you without your explicit consent.
          </p>
          <button
            type="submit"
            className="mt-6 md:mt-0 px-6 py-3 bg-gray-900 text-white rounded-md shadow-md hover:bg-gray-800 transition"
          >
            Send message
          </button>
        </div>
      </form>
    </section>
  </>
  );
};

export default Contact;
