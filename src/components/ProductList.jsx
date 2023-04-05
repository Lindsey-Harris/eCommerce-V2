// ProductList.js

import React, { useState } from "react";
import { PRODUCTS } from "./products";

export const ProductList = () => {
  const [productTypeFilter, setProductTypeFilter] = useState("");
  const filteredProducts = PRODUCTS.filter(
    (product) =>
      product.productType.toLowerCase() === productTypeFilter.toLowerCase() ||
      productTypeFilter === ""
  );

  const handleProductTypeChange = (event) => {
    setProductTypeFilter(event.target.value);
  };

  return (
    <div>
      <h3>Filter by Type:</h3>
      <label>
        <select value={productTypeFilter} onChange={handleProductTypeChange}>
          <option value="">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Apple Watch Bands">Apple Watch Bands</option>
          <option value="Apple Watches">Apple Watches</option>
          <option value="Car Phone Mounts">Car Phone Mounts</option>
          <option value="Charging Station">Charging Station</option>
        </select>
      </label>
      <h3>Filtered Products:</h3>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <img src={product.productImage} alt={product.productName} />
            <p>{product.productName}</p>
            <p>${product.price}</p>
            <p>{product.productType}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

