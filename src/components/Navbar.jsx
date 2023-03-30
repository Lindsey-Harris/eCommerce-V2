import React from "react";
import '../components/navbar.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { ShoppingCart } from 'phosphor-react';

function Navbar() {
  return (
    <div className="navbar">
      <ul>
      <li><i className="fas fa-house-user"></i><Link to="/">Home</Link></li>
      <li><i className="fas fa-shopping-cart"></i><Link to="/products">Products</Link></li>
        <li><i className="fas fa-pen"></i><Link to="/contact">Contact</Link></li>
        <Link to="/cart">
          <ShoppingCart size={25} />
          </Link>
          </ul>
      </div>
   
  );
}

export default Navbar;
