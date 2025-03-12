import React, { useState } from "react";
import { FiSearch, FiBell } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import { CgMenu, CgClose } from "react-icons/cg";
import location from "../assets/loc.png";
import logo from "../assets/iconss.png";
import profile from "../assets/profile.png";
import "./Header.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <header className="header">
        <div className="left-section">
          <div className="logo-box">
            <img src={logo} alt="logo" className="profile-pic" />
            <div className="brandname1">
              <h3 className="brand-name">Unwind</h3>
              <h6 className="tag-line">Connecting emotions</h6>
            </div>
          </div>
          <div className="location">
            <img src={location} alt="location" className="loc-pic" />
            Delhi
          </div>
        </div>

        <nav className="nav">
          <a href="#" className="nav-link">Home</a>
          <div style={{ display: "flex", alignItems: "center" }}>
            <a href="#" className="nav-link">Services</a><IoIosArrowDown />
          </div>
          <a href="#" className="nav-link">Community</a>
          <a href="#" className="nav-link active">Explore</a>
        </nav>

        <div className="right-section">
          <FiSearch className="icon" />
          <FiBell className="icon" />
          <div className="profile">
            <img src={profile} alt="profile" className="profiles-pic" />
            <span>My account</span>
            <IoIosArrowDown />
          </div>
        </div>

  
        <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="menu-icon">
          {mobileMenuOpen ? <CgClose /> : <CgMenu />}
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="mobile-nav">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Community</a>
          <a href="#">Explore</a>
        </div>
      )}


      <div className="container2">
        <FaArrowLeftLong />
        <h3>Back</h3>
      </div>

      <div className="container3">
        <h2>Dictionary</h2>
        <div className="search-container">
          <FiSearch className="icon" />
          <input className="input" placeholder="Search topics, questions..." />
        </div>
      </div>
    </div>
  );
};

export default Header;
