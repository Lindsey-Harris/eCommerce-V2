import React, { useState } from "react";
import { PRODUCTS } from "../../components/products";
import { Product } from "./product";
import "./product.css";
import "../../styles/filter.css";

export const Shop = () => {
  const [sortOrder, setSortOrder] = useState("low-to-high");
  const [searchQuery, setSearchQuery] = useState("");
  const [productType, setProductType] = useState("");

  const productTypes = [
    ...new Set([
      ...PRODUCTS.filter((product) => product.productType === "Earpiece").map(
        (product) => product.type
      ),
      ...PRODUCTS.filter(
        (product) => product.productType === "Apple Watch Bands"
      ).map((product) => product.type),
      ...PRODUCTS.filter(
        (product) => product.productType === "Apple Watches"
      ).map((product) => product.type),
      ...PRODUCTS.filter(
        (product) => product.productType === "Car Phone Mounts"
      ).map((product) => product.type),
      ...PRODUCTS.filter(
        (product) => product.productType === "Charging Station"
      ).map((product) => product.type),
      ...PRODUCTS.filter(
        (product) => product.productType === "Electronics"
      ).map((product) => product.type),
    ]),
  ];
  const filteredProducts = PRODUCTS.filter(
    (product) =>
      product.productName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (productType === "" || product.type === productType)
  );
  
  let sortedProducts = [...filteredProducts];
  
  if (sortOrder === "low-to-high") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "high-to-low") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }
  
  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleProductTypeChange = (event) => {
    setProductType(event.target.value);
  };

  return (
    <div className="container">
      <div className="filter-box">
        <h3>Filter by Price:</h3>
        <label>
          <input
            type="radio"
            name="price"
            value="low-to-high"
            checked={sortOrder === "low-to-high"}
            onChange={handleSortChange}
          />
          Low to High
        </label>
        <label>
          <input
            type="radio"
            name="price"
            value="high-to-low"
            checked={sortOrder === "high-to-low"}
            onChange={handleSortChange}
          />
          High to Low
        </label>
    

        <h3>Search By Product Type:</h3>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchQueryChange}
          className="search-box"
          placeholder="Search For A Product"
        />
      </div>
      <div></div>
      <div className="products">
        {sortedProducts.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};
