import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const openings = [
  {
    title: "Senior Manger R&d",
    location: "MAHAD",
    description: "Lead R&D efforts, manage innovation and oversee lab activities. t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    title: "R & D Chemist",
    location: "MAHAD",
    description: "Assist in developing and testing new chemical formulations. t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    title: "Maintainence Head",
    location: "MAHAD",
    description: "Oversee facility maintenance and ensure operational efficiency. t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    title: "Accounts Executive",
    location: "MAHAD",
    description: "Handle billing, payroll, and manage company accounts. t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    title: "Purchase Engineer",
    location: "MAHAD",
    description: "Manage procurement and vendor relations for raw materials. t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    title: "Export Documentation",
    location: "MAHAD",
    description: "Prepare and manage international shipping and export paperwork. t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
];

const OpeningsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="px-4 py-16 md:px-10 max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Openings</h2>
        <p className="text-gray-500 text-base md:text-lg">
          Lorem Ipsum is simply dummy text of the printing and
        </p>
      </div>

      <div className="space-y-3">
        {openings.map((job, index) => {
          const isActive = index === 0;
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={index}
              className={`group relative transition-all`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`flex items-center justify-between p-4 md:p-6 rounded-2xl cursor-pointer ${
                  isActive
                    ? "bg-green-500 text-white"
                    : "bg-white text-black border border-gray-200"
                }`}
              >
                <div className="flex items-center gap-6">
                  <div
                    className={`text-2xl md:text-3xl font-bold ${
                      isActive ? "text-white" : "text-black"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3
                      className={`text-base md:text-lg font-semibold ${
                        isActive ? "text-white" : "text-black"
                      }`}
                    >
                      {job.title}
                    </h3>
                    <p
                      className={`text-sm mt-1 uppercase tracking-wider ${
                        isActive ? "text-white" : "text-gray-500"
                      }`}
                    >
                      {job.location}
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={24}
                  className={`transition-transform duration-300 ${
                    isActive ? "text-white" : "text-black"
                  } ${isHovered ? "rotate-45" : ""}`}
                />
              </div>

              {/* Dropdown Description */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out px-6 text-sm text-gray-600 ${
                  isHovered ? "max-h-40 py-2 opacity-100" : "max-h-0 py-0 opacity-0"
                }`}
              >
                {job.description}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OpeningsSection;
