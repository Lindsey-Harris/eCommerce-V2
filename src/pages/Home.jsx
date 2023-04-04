import React from "react";
import '../styles/home.css';
import slide1 from "../images/slide1.webp";
import slide2 from "../images/slide2.webp";
import slide3 from "../images/slide3.webp";
import slide4 from "../images/slide4.webp";
import slide5 from "../images/slide5.webp";
import slide6 from "../images/slide6.webp";
import masterCard from "../images/mastercard-visa.jpeg";
import watch from "../images/watchHome.jpeg";


function Home() {
  return (
    <>
      <section>
        <div className="slide-container">
          <div className="image-container">
            <img src={slide1} alt="apple watches" />
            <img src={slide2} alt="apple watches" />
            <img src={slide3} alt="phone holder" />
            <img src={slide4} alt="phone holder" />
            <img src={slide5} alt="apple bands" />
            <img src={slide6} alt="phone holder" />
          </div>
        </div>
      </section>

      <section id="flex-container">
        <div className="exploreMore">
          <img src={masterCard}alt="credit/debit cards" />
          <a href="/products">
            <button className="btn">Explore More</button>
          </a>
        </div>
        <div className="exploreMoree">
          <img src={watch} alt="apple watches" />
        </div>
      </section>

      <div className="contained">
        <p>
          Electronically Yours was created for individuals who love electronics.
          I hope you enjoy!!
        </p>
      </div>
    </>
  );
}

export default Home;
