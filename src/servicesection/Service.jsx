import React from 'react';
import bann from "../assets/banner.png";
import "./Service.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <img src={bann} alt="banner" className="footer-banner" />
      <h4 className="footer-heading">Book your consultation with us</h4>
      <h5 className="footer-subheading">Consultations start from ₹149 only</h5>
      <button className="footer-button">Book now</button>
    </div>
  );
};

export default Footer;