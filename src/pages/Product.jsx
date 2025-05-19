// 📁 src/pages/Product.jsx
import { useEffect, useState } from 'react';
import { useProducts } from '../context/ProductContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Product = () => {
  const {
    products,
    categories,
    selectedCategory,
    setSelectedCategory,
    loading,
  } = useProducts();

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  // ✅ Correct: Filter from `products` (not undefined allProducts)
  const getFilteredProducts = () => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || selectedCategory === ''
          ? true
          : product.category === selectedCategory;

      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  };

  const finalFilteredProducts = getFilteredProducts();

  if (loading) return <div className="p-10 text-center">Loading products...</div>;

  return (
    <div className="w-full h-auto py-20">
      {/* Category + Search */}
      <div className="flex justify-center items-center flex-col md:flex-row md:gap-10 lg:gap-20 w-full lg:mx-2">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="mb-4 p-2 border rounded category-dropdown w-72 lg:w-96"
        >
          <option value="All">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <input
          type="text"
          id="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for a product..."
          className="mb-4 p-2 w-72 lg:w-96 border rounded"
        />
      </div>

      {/* Product List */}
      <div className="productlist">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="product-list">
            {finalFilteredProducts.length > 0 ? (
              finalFilteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform border-white border-2 hover:border-red-500 flex flex-col items-center justify-center"
                  data-aos="fade-up"
                >
                  <Link to={`/product/${product.slug}`} className="inline-block mt-2 text-red-600 font-medium">
                    <div className="p-4 border-red-300 flex flex-col items-start justify-center">
                      <img
                        src={product.imgUrl || 'https://via.placeholder.com/300x200?text=No+Image'}
                        alt={product.name}
                        className="h-72 object-contain rounded-md mb-4"
                      />
                      <h4 className="font-semibold text-lg text-[#1a1a1a]">{product.name}</h4>
                      <p className="text-md text-gray-600">{product.category}</p>
                      <p className="text-[#ff0000] pt-2 font-medium inline-flex items-center gap-1">
                        View <i className="fas fa-arrow-right"></i>
                      </p>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-center col-span-full text-gray-600">No products found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
