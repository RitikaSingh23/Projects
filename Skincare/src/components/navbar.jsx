import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Navbar.css'; 

const Navbar = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <nav className="navbar" data-aos="fade-down">
      <div className="logo">MyShop</div>
      <ul className="nav-links">
        <li><a href="#"><i className="fas fa-home"></i> Home</a></li>
        <li><a href="#"><i className="fas fa-box"></i> Products</a></li>
        <li><a href="#"><i className="fas fa-info-circle"></i> About</a></li>
        <li><a href="#"><i className="fas fa-envelope"></i> Contact Us</a></li>
        <li><a href="#"><i className="fas fa-shopping-cart"></i> Cart</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
