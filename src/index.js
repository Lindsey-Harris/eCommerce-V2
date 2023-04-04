import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import { Shop } from "./pages/shop/shop"; //products.jsx
import { Cart } from "./pages/cart/cart";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ShopContextProvider } from "./context/shop-context";

export default function App() {
  return (
    <div className="Index">
      <ShopContextProvider>
        <BrowserRouter>
          <h1>Electronically Yours</h1>
          <Navbar />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="products" element={<Shop />} />
              <Route path="cart" element={<Cart />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
