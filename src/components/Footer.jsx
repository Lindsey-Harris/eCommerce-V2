import React from "react";
import '../styles/footer.css';
import fbLogo from '../images/FB Logo.webp';
import twitterLogo from '../images/twitter logo.png';
import instaLogo from '../images/insta logo.webp';
import snapchatLogo from '../images/SC logo.png';
import { BrowserRouter, Route, Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
    <a href="https://www.facebook.com/"><img className="facebook" src={fbLogo} alt="facebook logo" /></a>
    <a href="https://twitter.com/"><img className="twitter" src={twitterLogo} alt="twitter logo" /></a>
    <a href="https://www.instagram.com/"><img className="instagram" src={instaLogo} alt="instagram logo" /></a>
    <a href="https://www.snapchat.com/"><img className="snapchat" src={snapchatLogo} alt="snapchat logo" /></a>
  </footer>
  );
}

export default Footer;
