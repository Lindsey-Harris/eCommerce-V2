import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import '../styles/products.css'

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const res = await axios.get("http://localhost:3001/products");
                setProducts(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllProducts();
    }, []);

    console.log(Products);

    return (
        <div>
            <h1>Products Page</h1>
            <div className="products-container">
                {products.map((product) => (
                    <div key={product.id} className="product-item">
                        <img src={product.image_url} alt={product.name} />
                        <div className="product-details">
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <span className="product-price">${product.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Products;













