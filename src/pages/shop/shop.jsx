import React from "react";
import { PRODUCTS } from '../../components/products';
import { Product } from './product';
import './product.css';

export const Shop = () => {
  return (
    <div className="products">
      {PRODUCTS.map((product) => (
        <Product data={product} />
      ))}
    </div>
  )   
}
