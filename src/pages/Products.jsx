import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ProductTable from '../components/ProductTable';
import { ProductContext } from '../context/ProductContext';

function Products() {
  const { categoryName } = useParams();
  const { products } = useContext(ProductContext);

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

  // This is your category-subproducts JSON from your request
  const categorySubproductsData = [
    {
      category: 'Pigments & Colorants',
      description: null,
      subproducts: [
        'Pigment By Color',
        'Pigment By Industry',
        'Pigment by Chemistry',
        'Pigment by CAS Number',
      ],
    },
    {
      category: 'Chemical and Pharma Intermediate',
      description: 'Key ingredients for pharma and specialty chemicals.',
      subproducts: ['Pigment by Chemistry', 'Pigment by CAS Number'],
    },
    {
      category: 'Surfactants',
      description: 'Advanced surfactants for diverse industrial uses.',
      subproducts: ['Pigment by Chemistry', 'Pigment by CAS Number'],
    },
    {
      category: 'Metal Powder for 3D Printing',
      description: 'High-performance metal powders for additive manufacturing.',
      subproducts: ['Pigment by Chemistry', 'Pigment by CAS Number'],
    },
    {
      category: 'Ionic Liquids',
      description: 'Eco-friendly solvents for modern chemical processes.',
      subproducts: ['Pigment by Chemistry', 'Pigment by CAS Number'],
    },
  ];

  // Find subproducts for current category, fallback to empty array
  const currentCategoryObj =
    categorySubproductsData.find(
      (cat) =>
        cat.category.toLowerCase() === categoryName.toLowerCase() ||
        cat.category.toLowerCase().includes(categoryName.toLowerCase())
    ) || { subproducts: [], description: null };

  const subproducts = currentCategoryObj.subproducts || [];

  const categoryProducts = products.filter(
    (product) =>
      product.category.toLowerCase() === categoryName.toLowerCase() ||
      product.category.toLowerCase().includes(categoryName.toLowerCase())
  );

  if (categoryProducts.length === 0) {
    return (
      <div className="p-10 text-center text-gray-600">
        <h2 className="text-2xl font-bold">No products found in this category.</h2>
      </div>
    );
  }

  const handleTabClick = (tab) => {
    if (tab === 'Product Details') {
      if (subproducts.length > 0) {
        setActiveTab(subproducts[0]); // default to first subproduct
      } else {
        setActiveTab('Product Details');
      }
      setProductDetailsOpen(false);
    } else {
      setActiveTab(tab);
      setProductDetailsOpen(false);
    }
  };

  const handleSubProductClick = (sub) => {
    setActiveTab(sub);
    setProductDetailsOpen(false);
  };

  const isDropdown = (text) => text === 'Product Details';

  const isActive = (text) =>
    activeTab === text || (isDropdown('Product Details') && subproducts.includes(activeTab));

  // Dummy CAS data for search example
  const dummyCasData = [
    { name: 'Red Pigment A', cas: '123-45-6' },
    { name: 'Blue Pigment B', cas: '234-56-7' },
    { name: 'Green Pigment C', cas: '345-67-8' },
  ];

  const filteredCasProducts = dummyCasData.filter((product) =>
    product.cas.includes(searchQuery.trim())
  );

  // Content rendering for subproducts in Product Details tab
  const subProductContent = {
    'Pigment By Color': <ProductTable products={categoryProducts}  />,
    'Pigment By Industry': (
      <div>
        <h2 className="text-2xl font-bold mb-4">Pigment By Industry</h2>
        <ul className="list-disc list-inside">
          {categoryProducts.map((product, idx) => (
            <li key={idx}>
              <strong>{product.name}</strong>:{' '}
              {product.subproducts?.length > 0
                ? product.subproducts
                    .map((sub) => (typeof sub === 'string' ? sub : sub.name || JSON.stringify(sub)))
                    .join(', ')
                : 'No subproducts available'}
            </li>
          ))}
        </ul>
      </div>
    ),
    'Pigment by Chemistry': (
      <div>
        <h2 className="text-2xl font-bold mb-4">Pigment by Chemistry</h2>
        <p>Details specific to chemistry of the pigments.</p>
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
          src="/assets/orange.jpg"
          alt="Banner"
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center px-6 sm:px-12 lg:px-24 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{categoryName}</h1>
          <p className="text-base md:text-lg max-w-2xl leading-relaxed">
            Details and insights about the category: {categoryName}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 px-4 py-10 relative">
        {textButtons.map((text) => {
          if (isDropdown(text)) {
            return (
              <div
                key={text}
                className="relative"
                onMouseEnter={() => setProductDetailsOpen(true)}
                onMouseLeave={() => setProductDetailsOpen(false)}
              >
                <button
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm shadow-sm transition-all duration-200
                    ${isActive(text) ? 'bg-black text-white' : 'bg-gray-100 text-black hover:bg-gray-200'}`}
                >
                  {text}
                  <FaChevronDown
                    className={`transition-transform duration-200 ${
                      isProductDetailsOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isProductDetailsOpen && subproducts.length > 0 && (
                  <ul className="absolute top-10 left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10 w-max min-w-[180px]">
                    {subproducts.map((sub) => (
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
          }

          return (
            <button
              key={text}
              onClick={() => handleTabClick(text)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm shadow-sm transition-all duration-200
                ${isActive(text) ? 'bg-black text-white' : 'bg-gray-100 text-black hover:bg-gray-200'}`}
            >
              {text}
            </button>
          );
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
            <ul className="list-disc list-inside space-y-1">
              {categoryProducts.map((product, i) => (
                <li key={i}>
                  <strong>{product.category}</strong>: {product.description || 'No description available.'}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
