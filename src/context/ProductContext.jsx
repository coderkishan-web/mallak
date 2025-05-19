// 📁 src/context/ProductContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const data = [
  {
    "id": 1,
    "name": "Linear Guide LM10",
    "category": "Guides",
    "shortDescription": "Compact linear guide for precise motion control.",
    "description": "Full description of LM10 guide for industrial automation.",
    "slug": "linear-guide-lm10",
    "productCode": "LM10-1234",
    "subCategory": "Precision Guides",
    "imgUrl": "https://example.com/img/linear-guide-lm10.jpg",
    "specifications": {
      "Weight": "15 kg",
      "Material": "Steel",
      "Length": "500mm",
      "Width": "60mm",
      "Load Capacity": "2000N",
      "Speed": "2 m/s",
      "Temperature Range": "-20°C to 80°C"
    },
    "applications": "Used in industrial automation for precise motion control in machinery.",
    "keyFeatures": [
      "Compact design",
      "High precision",
      "Corrosion-resistant material"
    ],
    "optional": {
      "image": {
        "src": "https://example.com/img/optional-part.jpg"
      },
      "title": "Optional Accessories",
      "description": "Various accessories available for enhanced performance."
    },
    "comparison": [
      {
        "id": 2,
        "name": "Actuator AX40",
        "category": "Actuators",
        "shortDescription": "High-speed actuator for heavy loads.",
        "slug": "actuator-ax40"
      },
      {
        "id": 3,
        "name": "Ball Screw BS20",
        "category": "Screws",
        "shortDescription": "Precision ground ball screw for CNC systems.",
        "slug": "ball-screw-bs20"
      }
    ],
    "sections": {
      "overview": {
        "title": "Overview",
        "intro": "The Linear Guide LM10 is designed for high precision and efficiency.",
        "description": "The LM10 offers exceptional performance in industrial applications, particularly where precision and reliability are paramount.",
        "images": [
          {
            "src": "https://example.com/img/overview-image1.jpg"
          },
          {
            "src": "https://example.com/img/overview-image2.jpg"
          }
        ]
      }
    }
  },
  {
    "id": 2,
    "name": "Actuator AX40",
    "category": "Actuators",
    "shortDescription": "High-speed actuator for heavy loads.",
    "description": "Detailed features of the AX40 actuator series.",
    "slug": "actuator-ax40",
    "productCode": "AX40-5678",
    "subCategory": "Heavy Duty Actuators",
    "imgUrl": "https://example.com/img/actuator-ax40.jpg",
    "specifications": {
      "Weight": "30 kg",
      "Material": "Aluminum",
      "Max Load": "10000N",
      "Speed": "4 m/s",
      "Power Consumption": "350W",
      "Temperature Range": "-10°C to 90°C"
    },
    "applications": "Used in automated systems requiring fast, heavy-duty motion for lifting and transporting.",
    "keyFeatures": [
      "High-speed operation",
      "Heavy load capacity",
      "Energy efficient"
    ],
    "optional": {
      "image": {
        "src": "https://example.com/img/optional-actuator.jpg"
      },
      "title": "Heavy-duty Accessories",
      "description": "Various accessories are available to extend the functionality of the actuator."
    },
    "comparison": [
      {
        "id": 1,
        "name": "Linear Guide LM10",
        "category": "Guides",
        "shortDescription": "Compact linear guide for precise motion control.",
        "slug": "linear-guide-lm10"
      },
      {
        "id": 3,
        "name": "Ball Screw BS20",
        "category": "Screws",
        "shortDescription": "Precision ground ball screw for CNC systems.",
        "slug": "ball-screw-bs20"
      }
    ],
    "sections": {
      "overview": {
        "title": "Overview",
        "intro": "The Actuator AX40 is designed for high-speed, heavy-duty applications.",
        "description": "This actuator is built for extreme performance in industries where both speed and load-bearing capacity are critical.",
        "images": [
          {
            "src": "https://example.com/img/actuator-overview1.jpg"
          },
          {
            "src": "https://example.com/img/actuator-overview2.jpg"
          }
        ]
      }
    }
  }
]
;

      setProducts(data);
      setFilteredProducts(data);
      const uniqueCategories = ['All', ...new Set(data.map(p => p.category))];
      setCategories(uniqueCategories);
      setLoading(false);
    } catch (err) {
      console.error('Failed to fetch products:', err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(p => p.category === selectedCategory));
    }
  }, [selectedCategory, products]);

  return (
    <ProductContext.Provider value={{ products, filteredProducts, categories, selectedCategory, setSelectedCategory, loading }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
