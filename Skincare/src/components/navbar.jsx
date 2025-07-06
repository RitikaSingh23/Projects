import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
    <a className="navbar-brand" href="#">GlowSkin</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse"
      data-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Products</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
