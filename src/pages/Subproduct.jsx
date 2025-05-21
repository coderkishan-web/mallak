import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Productsub = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  if (!product) {
    navigate('/');
    return null;
  }

  // Manage collapse state for each section
  const [openSections, setOpenSections] = useState({
    projectDescription: true,
    regulations: true,
    massTone: false,
    physicalData: false,
    structuralFormula: false,
    application: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const TableRow = ({ label, value }) => (
    <tr className="border-b border-gray-200">
      <td className="py-3 px-4 text-sm text-gray-700">{label}</td>
      <td className="py-3 px-4 text-sm text-gray-700 border-l border-gray-300">{value || '-'}</td>
    </tr>
  );

  return (
      <>
       {/* Banner */}
       <div className="relative rounded-b-[40px] overflow-hidden shadow-md">
       <img
         src="assets/orange.jpg"
         alt="Banner"
         className="w-full h-[300px] object-cover"
       />
       <div className="absolute inset-0 bg-black/60 flex flex-col justify-center px-6 sm:px-12 lg:px-24 text-white">
         <h1 className="text-4xl md:text-5xl font-bold mb-2">Single Product</h1>
         <p className="text-base md:text-lg max-w-2xl leading-relaxed">
           Lorem ipsum is a dummy or placeholder text commonly used in graphic design,
           publishing, and web development.
         </p>
       </div>
     </div>
    <div className="max-w-7xl mx-auto p-8 bg-white rounded-xl shadow-lg">
    
      {/* Top two panels side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">

        {/* Project Description */}
        <div className="rounded-lg border border-gray-300 overflow-hidden shadow-sm">
          <button
            onClick={() => toggleSection('projectDescription')}
            className="flex justify-between items-center bg-gray-600 text-white px-6 py-4 w-full text-left"
          >
            <div className="flex items-center space-x-3">
              <span className="text-3xl font-extrabold">01</span>
              <div>
                <div className="text-lg font-semibold">Project Description</div>
                <div className="text-xs font-light">Lorem</div>
              </div>
            </div>
            <span className="text-xl">{openSections.projectDescription ? '▲' : '▼'}</span>
          </button>

          {openSections.projectDescription && (
            <table className="w-full bg-white text-left text-gray-700">
              <tbody>
                <TableRow label="Color Index Name" value={product.name} />
                <TableRow label="Color Index Number (C.I No.)" value={product.code} />
                <TableRow label="Chemical Type / Class" value={product.chemistry} />
                <TableRow label="CAS NO" value={product.cas} />
                <TableRow label="EINECS Number" value={product.einecs || '-'} />
              </tbody>
            </table>
          )}
        </div>

        {/* Regulations */}
        <div className="rounded-lg border border-gray-300 overflow-hidden shadow-sm">
          <button
            onClick={() => toggleSection('regulations')}
            className="flex justify-between items-center bg-gray-600 text-white px-6 py-4 w-full text-left"
          >
            <div className="flex items-center space-x-3">
              <span className="text-3xl font-extrabold">02</span>
              <div>
                <div className="text-lg font-semibold">Regulations</div>
                <div className="text-xs font-light">Lorem</div>
              </div>
            </div>
            <span className="text-xl">{openSections.regulations ? '▲' : '▼'}</span>
          </button>

          {openSections.regulations && (
            <table className="w-full bg-white text-left text-gray-700">
              <tbody>
                <TableRow label="Color Index Name" value={product.name} />
                <TableRow label="Color Index Number (C.I No.)" value={product.code} />
                <TableRow label="Chemical Type / Class" value={product.chemistry} />
                <TableRow label="CAS NO" value={product.cas} />
                <TableRow label="EINECS Number" value={product.einecs || '-'} />
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Other collapsible sections stacked below */}
      <div className="space-y-4 grid grid-cols-1 md:grid-cols-2  gap-4">
        {[
          { id: 'massTone', number: '03', title: 'Mass Tone', description: 'Lorem', content: <p>{product.massTone || 'No data available.'}</p> },
          { id: 'physicalData', number: '04', title: 'Physical Data', description: 'Lorem', content: <p>{product.physicalData || 'No data available.'}</p> },
          { id: 'structuralFormula', number: '05', title: 'Structural Formula', description: 'Lorem', content: <p>{product.structuralFormula || 'No data available.'}</p> },
          { id: 'application', number: '06', title: 'Application', description: 'Lorem', content: <p>{product.application || 'No data available.'}</p> },
        ].map(({ id, number, title, description, content }) => (
          <div
            key={id}
            className="rounded-lg border border-gray-300 shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleSection(id)}
              className="flex justify-between items-center w-full px-6 py-4 text-left bg-white"
            >
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-extrabold">{number}</span>
                <div>
                  <div className="text-lg font-semibold">{title}</div>
                  <div className="text-xs font-light">{description}</div>
                </div>
              </div>
              <span className="text-xl">{openSections[id] ? '▲' : '▼'}</span>
            </button>
            {openSections[id] && (
              <div className="px-6 pb-6 pt-0 border-t border-gray-300 bg-gray-50 text-gray-700">
                {content}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 text-right">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-900 transition"
        >
          Back to Products
        </button>
      </div>
    </div>
      </>
  );
};

export default Productsub;
