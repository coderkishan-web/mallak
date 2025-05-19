import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../context/ProductContext'; // Import the custom hook

const TabButton = ({ label, icon, tab, activeTab, setActiveTab }) => (
  <button
    className={`tab-btn px-3 py-2 rounded-md transition whitespace-nowrap text-sm font-medium shadow ${
      activeTab === tab
        ? 'active-tab bg-white text-black'
        : 'text-gray-600 hover:text-red-600 hover:bg-white'
    }`}
    data-tab={tab}
    onClick={() => setActiveTab(tab)}
  >
    <i className={`fas ${icon} mr-1`}></i> {label}
  </button>
);

const ProductDetails = () => {
  const { slug } = useParams();  // Using `slug` to fetch the product
  const { products, loading } = useProducts();  // Fetch data from context
  const [product, setProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (products.length > 0) {
      const productItem = products.find((p) => p.slug === slug);  // Find the product by slug
      setProduct(productItem || null);  // Set the product or null if not found
    }
  }, [slug, products]);

  if (loading) return <div className="text-center py-16">Loading...</div>;
  if (!product) return <div className="text-center py-16">Product not found</div>;

  const { name, category, shortDescription, description } = product;

  return (
    <section id="linear-guide-section" className="relative px-4 sm:px-6 lg:px-20 py-16 w-full">
      <div className="text-center mb-12">
        <h2 className="text-sm text-red-600 font-semibold uppercase">{category}</h2>
        <h1 className="text-3xl md:text-4xl font-bold">
          <span className="text-red-600">{name}</span>
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base">{shortDescription}</p>
        <div className="mt-2 flex justify-center gap-2 text-sm">
          <span className="bg-gray-100 px-3 py-1 rounded-full">Product Code: {product.id}</span>
          <span className="bg-gray-100 px-3 py-1 rounded-full">Category: {category}</span>
        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-center gap-12 items-start">
        <div className="flex flex-col items-center lg:items-start space-y-6 w-full md:w-[300px] lg:w-[500px]">
          <img src={`/images/${slug}.jpg`} alt={name} className="w-full max-w-sm mx-auto rounded-lg shadow-lg" />

          <div className="w-full max-w-sm">
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
              <h3 className="font-semibold text-gray-700 mb-2">Key Features</h3>
              <ul className="space-y-2 text-sm">
                {/* Add actual feature list here */}
                <li className="flex items-start">
                  <i className="fas fa-check text-red-500 mt-1 mr-2"></i> High Precision
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-red-500 mt-1 mr-2"></i> Durable Construction
                </li>
                {/* Add more features */}
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="bg-red-600 text-white px-6 py-2 rounded shadow text-sm hover:bg-red-700 transition flex items-center gap-2 justify-center">
                <i className="fas fa-download"></i> Download CAD Files
              </a>
              <button className="border border-red-600 text-red-600 px-6 py-2 rounded text-sm hover:bg-red-50 transition flex items-center gap-2 justify-center">
                <i className="fas fa-file-invoice-dollar"></i> Request Quote
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden w-full">
          <div className="bg-gray-100 p-3 sm:p-4">
            <div className="flex flex-wrap gap-3 sm:gap-4 border-b pb-2" id="tab-menu">
              <TabButton label="Product Information" icon="fa-info-circle" tab="overview" activeTab={activeTab} setActiveTab={setActiveTab} />
              <TabButton label="Product Comparison" icon="fa-balance-scale" tab="comparison" activeTab={activeTab} setActiveTab={setActiveTab} />
              <TabButton label="Specifications" icon="fa-list-alt" tab="specs" activeTab={activeTab} setActiveTab={setActiveTab} />
              <TabButton label="Applications" icon="fa-industry" tab="apps" activeTab={activeTab} setActiveTab={setActiveTab} />
              <TabButton label="Request Quote" icon="fa-envelope" tab="quote" activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
          </div>

          <div className="p-6">
               {activeTab === 'overview' && (
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Product Information</h2>
            <p className="text-gray-700 mb-6">{product.description}</p>
            <ul className="space-y-2 text-sm text-gray-700 mb-6">
              {product.keyFeatures && product.keyFeatures.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <i className="fa fa-check-circle mr-2 text-green-500"></i>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800">Product Images:</h3>
              {product.sections?.overview?.images?.map((image, index) => (
                <img key={index} src={image.src} alt={`Product Image ${index + 1}`} className="rounded-lg" />
              ))}
            </div>
          </div>
        )}
          {activeTab === 'comparison' && (
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Product Comparison</h2>
            <p className="text-gray-700 mb-6">Compare this product with similar options below:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products
                .filter((p) => p.category === product.category && p.id !== product.id)
                .map((compProduct) => (
                  <div key={compProduct.id} className="border p-4 rounded-lg shadow-md">
                    <h3 className="font-semibold text-lg">{compProduct.name}</h3>
                    <p className="text-sm text-gray-600">{compProduct.shortDescription}</p>
                    <a href={`/product/${compProduct.slug}`} className="text-blue-600 mt-2 block">View Details</a>
                  </div>
                ))}
            </div>
          </div>
        )}

{activeTab === 'specs' && (
  <div className="bg-gray-50 p-6 rounded-lg">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Product Specifications</h2>
    <ul className="space-y-2 text-sm text-gray-700">
      {product.specifications && Object.entries(product.specifications).map(([key, value]) => (
        <li key={key} className="flex justify-between">
          <span className="font-medium">{key}:</span>
          <span>{value}</span>
        </li>
      ))}
    </ul>
  </div>
)}

{activeTab === 'apps' && (
  <div className="bg-gray-50 p-6 rounded-lg">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Applications</h2>
    <p className="text-gray-700 mb-6">{product.applications || 'No applications listed for this product.'}</p>
  </div>
)}

{activeTab === 'quote' && (
  <div className="bg-gray-50 p-6 rounded-lg">
    <h1 className="text-2xl font-semibold mb-6">Request for Quote</h1>
    <p className="text-gray-600 mb-6">To receive a quote please fill in the form below.</p>
    <form className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
        <input type="text" id="name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
        <input type="email" id="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
      </div>
      <div>
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
        <input type="number" id="quantity" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
      </div>
      <div>
        <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded shadow-sm hover:bg-red-700 transition">Submit Request</button>
      </div>
    </form>
  </div>
)}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
