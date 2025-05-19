import React from "react";

const industries = [
  {
    title: "Coatings & Paints",
    description:
      "Enhancing durability, color vibrancy, and performance with advanced pigments and additives for industrial and decorative coatings.",
    img: "src/assets/imgs/16.avif",
    bg: "bg-[#F8D3DE]/30",
    delay: 0,
    imgClass: "object-cover",
  },
  {
    title: "Pharmaceuticals & Healthcare",
    description:
      "Delivering high-purity chemical intermediates for pharmaceutical formulations and healthcare applications.",
    img: "src/assets/imgs/22.avif",
    bg: "bg-[#F9E383]/10",
    delay: 200,
    imgClass: "object-cover",
  },
  {
    title: "Plastic & Masterbatches",
    description:
      "Providing high-quality colorants and stabilizers for superior plastic manufacturing and enhanced product longevity.",
    img: "src/assets/imgs/5.jpg",
    bg: "bg-[#DEEBF9]/30",
    delay: 400,
    imgClass: "object-contain",
  },
  {
    title: "Printing Inks & Graphic Arts",
    description:
      "Developing high-performance pigments and dispersions for vibrant and long-lasting printing inks.",
    img: "src/assets/imgs/23.webp",
    bg: "bg-[#E7F4D4]/30",
    delay: 600,
    imgClass: "object-contain",
  },
  {
    title: "Detergents & Surfactants",
    description:
      "Formulating eco-friendly surfactants and emulsifiers for superior cleaning, foaming, and wetting properties.",
    img: "src/assets/imgs/10.jpg",
    bg: "bg-[#CCB9D9]/30",
    delay: 800,
    imgClass: "object-cover",
  },
  {
    title: "Textile & Leather",
    description:
      "Enhancing fabric and leather processing with specialty chemicals for dyeing, finishing, and treatment.",
    img: "src/assets/imgs/19.webp",
    bg: "bg-[#E8A8A6]/10",
    delay: 1000,
    imgClass: "object-contain",
  },
];

const IndustriesWeServe = () => {
  return (
    <div
      className="relative bg-gray-50 text-[#120E37] py-16 px-6 md:px-12"
      data-aos="fade-up"
      data-aos-delay="0"
    >
      {/* Background Molecules */}
      <img
        src="src/assets/imgs/molecule3.png"
        alt="Molecule Design"
        className="absolute top-[50%] right-0 w-32 md:w-72 opacity-20 pointer-events-none"
      />
      <img
        src="src/assets/imgs/molecule6.png"
        alt="Molecule Design"
        className="absolute bottom-[50%] left-0 w-32 md:w-60 opacity-20 pointer-events-none"
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-medium leading-tight text-[#120E37]">
          Industries We Serve
        </h2>
        <hr className="border-[#FF9800] w-20 md:w-40 my-4 mx-auto" />
        <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          At Mallak Chemicals, we cater to a diverse range of industries by providing high-performance, sustainable, and industry-specific chemical solutions. Our expertise spans across multiple sectors, ensuring quality, reliability, and innovation in every application.
        </p>

        {/* Industry Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 sm:gap-8">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              className={`text-center ${industry.bg} shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden`}
              data-aos="fade-up"
              data-aos-delay={industry.delay}
            >
              <img
                src={industry.img}
                alt={industry.title}
                className={`mx-auto w-24 h-24 sm:w-28 sm:h-28 md:w-full md:h-60 rounded-2xl hover:scale-105 duration-500 ${industry.imgClass}`}
              />
              <h3 className="text-lg sm:text-xl font-semibold mt-4">
                {industry.title}
              </h3>
              <p className="p-4 text-xs sm:text-sm max-w-xs mx-auto">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesWeServe;
