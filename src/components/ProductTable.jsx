import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const filters = ['Violet', 'Blue', 'Green', 'Yellow', 'Orange', 'Red'];

const ProductTable = ({ products }) => {
  const navigate = useNavigate();

  const [activeFilter, setActiveFilter] = useState('');
  const [activeChemistry, setActiveChemistry] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Find the Pigments & Colorants category data
  const selectedCategory = products.find(
    (item) => item.category === 'Pigments & Colorants'
  );

  // Use this as the base product list to filter and paginate
  const productsToFilter = selectedCategory ? selectedCategory.products : [];

  useEffect(() => {
    // Start with all products in the selected category
    let data = productsToFilter;

    // Apply color filter if active
    if (activeFilter) {
      data = data.filter((p) => p.categoryColor === activeFilter);
    }

    // Apply search filter if search term present
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      data = data.filter(
        (p) =>
          (p.name && p.name.toLowerCase().includes(term)) ||
          (p.cas && p.cas.toLowerCase().includes(term))
      );
    }

    // Apply chemistry filter if active
    if (activeChemistry) {
      data = data.filter((p) => p.chemistry === activeChemistry);
    }

    setFilteredData(data);
    setCurrentPage(1);
  }, [activeFilter, searchTerm, activeChemistry, productsToFilter]);

  const handleFilterClick = (filter) => {
    if (activeFilter === filter) {
      setActiveFilter('');
    } else {
      setActiveFilter(filter);
      setActiveChemistry('');
    }
  };

  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (direction) => {
    if (direction === 'prev' && currentPage > 1) setCurrentPage((prev) => prev - 1);
    if (direction === 'next' && currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handleProductClick = (product) => {
    navigate('/productsub', { state: { product } });
  };

  const handleChemistryClick = (chemistry, e) => {
    e.stopPropagation();

    const filteredByChem = productsToFilter.filter(p => p.chemistry === chemistry);

    if (filteredByChem.length === 1) {
      navigate('/productsub', { state: { product: filteredByChem[0] } });
      setActiveChemistry('');
      setActiveFilter('');
    } else if (filteredByChem.length > 1) {
      setActiveChemistry(chemistry);
      setActiveFilter('');
    } else {
      setActiveChemistry('');
    }
  };

  return (
    <div className="p-8 bg-white rounded-xl shadow-sm">
      {/* Filter buttons: only show if Pigments & Colorants category exists */}
      {selectedCategory && (
        <div className="flex flex-wrap gap-10 justify-center my-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className={`px-10 py-2 rounded-2xl border-2 font-medium transition-all duration-300 text-lg md:text-base ${
                activeFilter === filter
                  ? 'bg-black text-white border-black'
                  : 'border-gray-400 text-gray-700 hover:bg-gray-100'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      )}

      {/* Search Box */}
      <div className="flex justify-end mb-6">
        <input
          type="text"
          placeholder="Search by name or CAS number..."
          className="border border-gray-300 px-4 py-2 rounded-md w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-black"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Active Chemistry Filter Badge */}
      {activeChemistry && (
        <div className="mb-4 text-sm text-gray-700">
          Filtering by chemistry: <strong>{activeChemistry}</strong>
          <button
            className="ml-2 text-red-500 underline"
            onClick={() => setActiveChemistry('')}
          >
            Clear
          </button>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto border border-gray-200 rounded-xl">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4 text-left"><input type="checkbox" /></th>
              <th className="p-4 text-left">Mass Tone</th>
              <th className="p-4 text-left">Colour Index</th>
              <th className="p-4 text-left">Malack Code</th>
              <th className="p-4 text-left">Chemistry</th>
              <th className="p-4 text-left">CAS Number</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {paginatedData.length > 0 ? (
              paginatedData.map((product, index) => (
                <tr
                  key={product.id || index}
                  className="cursor-pointer hover:bg-gray-50"
                  onClick={() => handleProductClick(product)}
                >
                  <td className="p-4"><input type="checkbox" /></td>
                  <td className="p-4">...</td> {/* You can replace "..." with actual Mass Tone data if you have */}
                  <td className="p-4">{product.name}</td>
                  <td className="p-4">{product.code}</td>
                  <td
                    className="p-4 underline text-blue-600"
                    onClick={(e) => handleChemistryClick(product.chemistry, e)}
                  >
                    {product.chemistry}
                  </td>
                  <td className="p-4">{product.cas}</td>
                  <td className="p-4">⋮</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center p-6 text-gray-500 italic">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mt-6 gap-4">
        <div className="flex items-center gap-3 text-sm">
          <span>Items per page:</span>
          <select
            className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none"
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            {[5, 10, 20, 50].map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-3">
          <button
            className={`px-3 py-1 border rounded-md ${
              currentPage === 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'hover:bg-gray-200'
            }`}
            onClick={() => handlePageChange('prev')}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span className="font-semibold">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className={`px-3 py-1 border rounded-md ${
              currentPage === totalPages
                ? 'text-gray-400 cursor-not-allowed'
                : 'hover:bg-gray-200'
            }`}
            onClick={() => handlePageChange('next')}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
