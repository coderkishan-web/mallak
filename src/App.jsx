// 📁 src/App.js
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';


import Home from './pages/Home';
import About from './pages/About';
import CRAMS from './pages/CRAMS';
import Blog from './pages/Blog';
import CareerAtMallak from './pages/CareerAtMallak';
import Contact from './pages/Contact';
import Awards from './pages/Awards';

import Footer from './components/Footer';
import Products from './pages/Products';
import Login from './pages/Login';
import Productsub from './pages/Subproduct';
import FloatingButtons from './components/FloatingButtons';
import SmoothScroll from './components/SmoothScroll';
Login
const App = () => {
  //   useEffect(() => {
  //   const handleContextMenu = (e) => {
  //     e.preventDefault();
  //   };

  //   document.addEventListener('contextmenu', handleContextMenu);

  //   return () => {
  //     document.removeEventListener('contextmenu', handleContextMenu);
  //   };
  // }, []);
  return (
    <div>
      {/* <SmoothScroll/> */}
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/crams" element={<CRAMS />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/career" element={<CareerAtMallak />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/Productsub" element={<Productsub />} />
        {/* <Route path="/products" element={<Products />} /> */}
           <Route path="/products/:categoryName" element={<Products />} />
        <Route path="/Login" element={<Login/>} />

      </Routes>

      <Footer/>
      <FloatingButtons/>
    </div>
  );
};

export default App;
