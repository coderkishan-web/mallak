import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  { id: 1, tone: '', name: 'Pigment Violet 3', code: 'Syaahee V 0031D1', chemistry: 'Fanal Pigments/Violet', cas: '1325-82-2', category: 'Violet' },
  { id: 2, tone: '', name: 'Pigment Violet 4', code: 'Syaahee V 0031D1', chemistry: 'Fanal Pigments/kishan', cas: '1325-82-2', category: 'Violet' },
  { id: 22, tone: '', name: 'Pigment Violet 4', code: 'Syaahee V 0031D1', chemistry: 'Fanal Pigments/kishan', cas: '1325-82-2', category: 'Violet' },
  { id: 3, tone: '', name: 'Pigment Violet 3', code: 'Syaahee V 0031D1', chemistry: 'Fanal Pigments/Violet', cas: '1325-82-2', category: 'Violet' },
  { id: 4, tone: '', name: 'Pigment Blue 5', code: 'Syaahee B 1234A5', chemistry: 'Fanal Pigments/prachiti', cas: '1234-56-7', category: 'Blue' },
  { id: 5, tone: '', name: 'Pigment Green 2', code: 'Syaahee G 8765B2', chemistry: 'Fanal Pigments/Green', cas: '4321-65-4', category: 'Green' },
];

const filters = ['Violet', 'Blue', 'Green', 'Yellow', 'Orange', 'Red'];

const ProductTable = () => {
  const navigate = useNavigate();

  const [activeFilter, setActiveFilter] = useState('');
  const [activeChemistry, setActiveChemistry] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() => {
    let data = products;

    if (activeFilter) {
      data = data.filter((p) => p.category === activeFilter);
    }

    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      data = data.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.cas.toLowerCase().includes(term)
      );
    }

    if (activeChemistry) {
      data = data.filter((p) => p.chemistry === activeChemistry);
    }

    setFilteredData(data);
    setCurrentPage(1);
  }, [activeFilter, searchTerm, activeChemistry]);

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

  // Navigate to Productsub page and pass product data
  const handleProductClick = (product) => {
    navigate('/productsub', { state: { product } });
  };

  // Handle chemistry click with filter + redirect logic
  const handleChemistryClick = (chemistry, e) => {
    e.stopPropagation();

    // Find all products with this chemistry
    const filteredByChem = products.filter(p => p.chemistry === chemistry);

    if (filteredByChem.length === 1) {
      // Exactly 1 product - redirect directly
      navigate('/productsub', { state: { product: filteredByChem[0] } });
      setActiveChemistry('');
      setActiveFilter('');
    } else if (filteredByChem.length > 1) {
      // Multiple products - set chemistry filter and clear category filter
      setActiveChemistry(chemistry);
      setActiveFilter('');
    } else {
      // No product for this chemistry - clear filters (optional)
      setActiveChemistry('');
    }
  };

  return (
    <div className="p-8 bg-white rounded-xl shadow-sm">
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-10 justify-center my-4">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterClick(filter)}
            className={`px-10 py-2 rounded-2xl border-2 font-medium transition-all duration-300 text-lg md:text-base ${
              activeFilter === filter ? 'bg-black text-white border-black' : 'border-gray-400 text-gray-700 hover:bg-gray-100'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

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
            {paginatedData.map((product) => (
              <tr
                key={product.id}
                className="hover:bg-gray-50 transition-all cursor-pointer"
                onClick={() => handleProductClick(product)}
              >
                <td className="p-4">
                  <input
                    type="checkbox"
                    onClick={e => e.stopPropagation()} // prevent row click when checkbox clicked
                  />
                </td>
                <td className="p-4">
                  <div className="w-20 h-6 border border-gray-300 rounded-md bg-gray-100" />
                </td>
                <td className="p-4 text-blue-600 underline">
                  {product.name}
                </td>
                <td className="p-4 text-sm text-gray-800">{product.code}</td>
                <td
                  className="p-4 text-sm text-blue-600 underline"
                  onClick={(e) => handleChemistryClick(product.chemistry, e)}
                >
                  {product.chemistry}
                </td>
                <td className="p-4">
                  <span className="bg-gray-100 text-sm px-3 py-1 rounded-md inline-block">{product.cas}</span>
                </td>
                <td
                  className="p-4 text-lg text-gray-600 cursor-pointer"
                  onClick={(e) => e.stopPropagation()}
                >
                  ⋮
                </td>
              </tr>
            ))}
            {paginatedData.length === 0 && (
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
            className={`px-3 py-1 border rounded-md ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-200'}`}
            onClick={() => handlePageChange('prev')}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span className="font-semibold">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className={`px-3 py-1 border rounded-md ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-200'}`}
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
