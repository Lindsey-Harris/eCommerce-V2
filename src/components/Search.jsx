


// import React, { useRef, useState, useEffect } from "react";
// import axios from "axios";
// import '../styles/search.css';

// const Search = () => {
//   const [search, setSearch] = useState("");
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   // const [cartItems, setCartItems] = useState([]);

//   const inputRef = useRef(null);

//   const handleChange = (e) => setSearch(e.target.value);

//   useEffect(() => {
//     const fetchAllProducts = async () => {
//       try {
//         const res = await axios.get("http://localhost:8800/products");
//         setProducts(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchAllProducts();
//   }, []);

//   const [minPrice, setMinPrice] = useState(0);
//   const [maxPrice, setMaxPrice] = useState(500);

//   useEffect(() => {
//     const filtered = products.filter((product) => {
//       const titleMatch = product.title
//         .toLowerCase()
//         .includes(search.toLowerCase());
//       const priceMatch = product.price >= minPrice && product.price <= maxPrice;
//       return titleMatch && priceMatch;
//     });
//     setFilteredProducts(filtered);
//   }, [products, search, minPrice, maxPrice]);

//   return (
//     <div>
//       <div className="searchBar">
//         <label>Search:</label>
//         <input
//           ref={inputRef}
//           onChange={handleChange}
//           placeholder="Find a Fragrance"
//           type="text"
//         />
//       </div>
//       <div className="maxnmin">
//         <label>Min Price:</label>
//         <input
//           type="number"
//           value={minPrice}
//           onChange={(e) => setMinPrice(Math.max(0, e.target.value))}
//         />
//         <label>Max Price:</label>
//         <input
//           type="number"
//           value={maxPrice}
//           onChange={(e) => setMaxPrice(Math.min(500, e.target.value))}
//         />
//       </div>
//       <div className="products-container">
//         {filteredProducts && filteredProducts.length > 0 ? (
//           filteredProducts.map((product) => (
//             <div key={product.id} className="product-item">
//               <img src={product.image_url} alt={product.name} />
//               <div className="product-details">
//                 <h2>{product.name}</h2>
//                 <p>{product.description}</p>
//                 <span className="product-price">${product.price}</span>
//                 {/* <button onClick={() => setCartItems((prevItems) => [...prevItems, product])}>
//                                     Add to Cart
//                                 </button> */}
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No products found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Search;

