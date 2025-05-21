import React, { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";

const openings = [
  {
    title: "Senior Manager R&D",
    location: "MAHAD",
    unit: "R&D",
    description: "Lead R&D efforts, manage innovation and oversee lab activities.",
  },
  {
    title: "R & D Chemist",
    location: "MAHAD",
    unit: "R&D",
    description: "Assist in developing and testing new chemical formulations.",
  },
  {
    title: "Maintenance Head",
    location: "MAHAD",
    unit: "Manufacturing",
    description: "Oversee facility maintenance and ensure operational efficiency.",
  },
  {
    title: "Accounts Executive",
    location: "MAHAD",
    unit: "Finance",
    description: "Handle billing, payroll, and manage company accounts.",
  },
  {
    title: "Purchase Engineer",
    location: "MAHAD",
    unit: "Manufacturing",
    description: "Manage procurement and vendor relations for raw materials.",
  },
  {
    title: "Export Documentation",
    location: "MAHAD",
    unit: "Logistics",
    description: "Prepare and manage international shipping and export paperwork.",
  },
];

const OpeningsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    unit: "",
    role: "",
    message: "",
    resume: null,
  });

  const openApplicationForm = (job) => {
    setSelectedJob(job);
    setForm((prev) => ({
      ...prev,
      unit: job.unit,
      role: job.title,
    }));
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setShowForm(false); // Close after submission
  };

  return (
    <section className="px-4 py-16 md:px-10 max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Openings</h2>
        <p className="text-gray-500 text-base md:text-lg">
          Explore exciting career opportunities with us.
        </p>
      </div>

      <div className="space-y-3">
       {openings.map((job, index) => {
  const isHovered = hoveredIndex === index;
  const isActive = index === 0;

  return (
    <div
      key={index}
      className="group relative transition-all cursor-pointer"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      onClick={() => openApplicationForm(job)}
    >
      <div
        className={`flex items-center justify-between p-4 md:p-6 rounded-2xl border transition-all duration-300 ${
          isActive
            ? "bg-green-500 text-white border-transparent"
            : isHovered
            ? "bg-green-500 text-white border-transparent"
            : "bg-white text-black border-gray-200"
        }`}
      >
        <div className="flex items-center gap-6">
          <div
            className={`text-2xl md:text-3xl font-bold ${
              isActive || isHovered ? "text-white" : "text-black"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </div>
          <div>
            <h3
              className={`text-base md:text-lg font-semibold ${
                isActive || isHovered ? "text-white" : "text-black"
              }`}
            >
              {job.title}
            </h3>
            <p
              className={`text-sm mt-1 uppercase tracking-wider ${
                isActive || isHovered ? "text-white" : "text-gray-500"
              }`}
            >
              {job.location}
            </p>
          </div>
        </div>
        <ArrowUpRight
          size={24}
          className={`transition-transform duration-300 ${
            isActive || isHovered ? "text-white" : "text-black"
          } ${isHovered ? "rotate-45" : ""}`}
        />
      </div>

      {/* Dropdown description */}
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

      {/* Application Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-2xl relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold mb-6">Apply for {selectedJob.title}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="p-3 border border-gray-300 rounded-xl w-full"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="p-3 border border-gray-300 rounded-xl w-full"
                />
              </div>
              <input
                type="text"
                name="unit"
                value={form.unit}
                readOnly
                className="p-3 border border-gray-300 rounded-xl w-full bg-gray-100 cursor-not-allowed"
              />
              <input
                type="text"
                name="role"
                value={form.role}
                readOnly
                className="p-3 border border-gray-300 rounded-xl w-full bg-gray-100 cursor-not-allowed"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us why you're a good fit..."
                rows="4"
                className="p-3 border border-gray-300 rounded-xl w-full"
              />
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
                className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-green-500 file:text-white hover:file:bg-green-600"
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default OpeningsSection;
