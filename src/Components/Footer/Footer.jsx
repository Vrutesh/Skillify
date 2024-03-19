import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo.png";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-logo">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="footer-social">
          <i className="bi bi-instagram"></i>
          <i className="bi bi-twitter-x"></i>
          <i className="bi bi-facebook"></i>
        </div>
        <div className="footer-copyrights">
          <p>© Copyright 2023. All Rights Reserved by Skillify.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
