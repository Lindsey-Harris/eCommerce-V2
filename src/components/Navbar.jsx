import React, { useContext } from "react";
import '../components/navbar.css';
import '../pages/cart/cart-icon.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { ShoppingCart } from 'phosphor-react';
import { ShopContext } from "../context/shop-context";


function Navbar() {
  const { cartItems } = useContext(ShopContext);

  //calculate total number of items in cart
  const totalItems = Object.values(cartItems).reduce((acc, curr) => acc + curr, 0);
    return (
      <div className="navbar">
        <ul>
          <li><i className="fas fa-house-user"></i><Link to="/">Home</Link></li>
          <li><i className="fas fa-shopping-cart"></i><Link to="/products">Products</Link></li>
          <li><i className="fas fa-pen"></i><Link to="/contact">Contact</Link></li>
          <Link to="/cart">
            <ShoppingCart size={25} className="cart-icon" />
            {totalItems > 0 && <span className="cart-indicator">{totalItems}</span>}
          </Link>
        </ul>
      </div>
   
    );
  }
export default Navbar;
