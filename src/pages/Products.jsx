import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ProductTable from '../components/ProductTable';

function Products() {
  const textButtons = [
    'Introduction',
    'Product Details',
    'Infrastructure USP',
    'Sustainability',
    'Logistics and packing',
    'Purchase needs',
    'Downloads',
    'Inquiry (Distributor / Agency)',
  ];

  const [activeTab, setActiveTab] = useState('Introduction');
  const [isProductDetailsOpen, setProductDetailsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const subProducts = [
    'Pigment By Color',
    'Pigment By Industry',
    'Pigment by Chemistry',
    'Pigment by CAS Number',
  ];

  const dummyCasData = [
    { name: 'Red Pigment A', cas: '123-45-6' },
    { name: 'Blue Pigment B', cas: '234-56-7' },
    { name: 'Green Pigment C', cas: '345-67-8' },
  ];

  const filteredCasProducts = dummyCasData.filter((product) =>
    product.cas.includes(searchQuery.trim())
  );

  const handleTabClick = (tab) => {
    if (tab === 'Product Details') {
      // Ignore toggle on click — dropdown opens on hover only now
      setActiveTab('Pigment By Color'); // Default sub tab
    } else {
      setActiveTab(tab);
      setProductDetailsOpen(false);
    }
  };

  const handleSubProductClick = (sub) => {
    setActiveTab(sub);
    setProductDetailsOpen(false); // Close dropdown after selecting sub product
  };

  // Open dropdown on hover
  const handleMouseEnter = () => setProductDetailsOpen(true);
  // Close dropdown on mouse leave
  const handleMouseLeave = () => setProductDetailsOpen(false);

  const subProductContent = {
    'Pigment By Color': <ProductTable />, // default visible in Product Details
    'Pigment By Industry': (
      <div>
        <h2 className="text-2xl font-bold mb-4">Pigment By Industry</h2>
        <p>Details and data specific to Industry-based pigments.</p>
      </div>
    ),
    'Pigment by Chemistry': (
      <div>
        <h2 className="text-2xl font-bold mb-4">Pigment by Chemistry</h2>
        <p>Details and data specific to chemical composition of pigments.</p>
      </div>
    ),
    'Pigment by CAS Number': (
      <div>
        <h2 className="text-2xl font-bold mb-4">Pigment by CAS Number</h2>
        <input
          type="text"
          placeholder="Search by CAS Number..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black mb-4"
        />
        <div className="space-y-2">
          {filteredCasProducts.length > 0 ? (
            filteredCasProducts.map((product, idx) => (
              <div
                key={idx}
                className="p-4 bg-gray-100 rounded-md shadow-sm flex justify-between"
              >
                <span>{product.name}</span>
                <span className="text-sm text-gray-600">{product.cas}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No products found.</p>
          )}
        </div>
      </div>
    ),
  };

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Banner */}
      <div className="relative rounded-b-[40px] overflow-hidden shadow-md">
        <img
          src="assets/orange.jpg"
          alt="Banner"
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center px-6 sm:px-12 lg:px-24 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Products</h1>
          <p className="text-base md:text-lg max-w-2xl leading-relaxed">
            Lorem ipsum is a dummy or placeholder text commonly used in graphic design,
            publishing, and web development.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 px-4 py-10 relative">
        {textButtons.map((text) => {
          const isActive =
            activeTab === text || (text === 'Product Details' && subProducts.includes(activeTab));
          const isDropdown = text === 'Product Details';

          if (isDropdown) {
            return (
              <div
                key={text}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm shadow-sm transition-all duration-200
                    ${isActive ? 'bg-black text-white' : 'bg-gray-100 text-black hover:bg-gray-200'}`}
                >
                  {text}
                  {isProductDetailsOpen ? (
                    <FaChevronUp className="text-xs" />
                  ) : (
                    <FaChevronDown className="text-xs" />
                  )}
                </button>

                {isProductDetailsOpen && (
                  <ul className="absolute top-8 left-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    {subProducts.map((sub) => (
                      <li
                        key={sub}
                        onClick={() => handleSubProductClick(sub)}
                        className={`px-6 py-3 cursor-pointer hover:bg-gray-100 ${
                          activeTab === sub ? 'bg-gray-200 font-semibold' : ''
                        }`}
                      >
                        {sub}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          } else {
            return (
              <button
                key={text}
                onClick={() => handleTabClick(text)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm shadow-sm transition-all duration-200
                  ${isActive ? 'bg-black text-white' : 'bg-gray-100 text-black hover:bg-gray-200'}`}
              >
                {text}
              </button>
            );
          }
        })}
      </div>

      {/* Line with Arrow */}
      <div className="relative px-6">
        <hr className="border border-black" />
        <span className="absolute -top-1 right-6 w-2 h-2 border-black border-r border-b rotate-45" />
      </div>

      {/* Main Content */}
      <div className="mt-10 px-4 sm:px-8 lg:px-24">
        {subProductContent[activeTab] ? (
          subProductContent[activeTab]
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-4">{activeTab}</h2>
            <p>Content for {activeTab} tab goes here.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
