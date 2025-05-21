// CompanyCulture.jsx
import React from "react";


const CompanyCulture = () => {
  return (
    <section className="px-6 py-10 lg:px-20 font-sans">
      <h2 className="text-4xl font-bold leading-tight mb-2">Company Culture</h2>
      <p className="text-lg text-gray-700 max-w-3xl mb-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Box 1 */}
        <div className="bg-green-300 rounded-xl p-6 flex flex-col justify-between min-h-[250px]">
          <h3 className="italic font-semibold text-4xl text-gray-800 mb-4">Passion for Growth</h3>
          <p className="text-gray-800 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow.
          </p>
        </div>

        {/* Image 1 (2-row height) */}
        <div className="lg:row-span-2 rounded-xl overflow-hidden">
          <img src="assets/Frame 66.png" alt="Team working" className="w-full h-full object-cover" />
        </div>

        {/* Box 2 */}
        <div className="bg-purple-300 rounded-xl p-6 flex flex-col justify-between min-h-[250px]">
          <h3 className="italic font-semibold text-4xl text-gray-800 mb-4">Collaborative and Supportive</h3>
          <p className="text-gray-800 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown .
          </p>
        </div>

        {/* Box 3 (spans 2 columns) */}
        <div className="bg-green-300 rounded-xl p-6 lg:col-span-2 flex flex-col justify-between min-h-[250px]">
          <h3 className="italic font-semibold text-4xl text-gray-800 mb-4">Passion for Growth</h3>
          <p className="text-gray-800 text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.
          </p><p className="text-gray-800 text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.
          </p><p className="text-gray-800 text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.
          </p>
          <div className="mt-4 text-right">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-900 inline-block">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-10 10m0-10h10v10" />
            </svg>
          </div>
        </div>

        {/* Image 2 */}
        <div className="rounded-xl overflow-hidden">
          <img src='assets/Frame 63.png' alt="Discussion" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default CompanyCulture;
