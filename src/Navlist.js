import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navlist.css";

function Navlist() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="navbar">
      <div className={`navlist ${showDropdown ? 'hide-on-small' : ''}`}>
        <Link to="/">HOME</Link>
        <Link to="/projects">PROJECTS</Link>
        <Link to="/about">ABOUT</Link>
      </div>
      <div className={`dropdown ${showDropdown ? 'show-on-small' : ''}`} onClick={toggleDropdown}>
        <button className="dropbtn">MENU</button>
        <div className={`dropdown-content ${showDropdown ? 'show' : ''}`}>
          <Link to="/" onClick={() => setShowDropdown(false)}>HOME</Link>
          <Link to="/projects" onClick={() => setShowDropdown(false)}>PROJECTS</Link>
          <Link to="/about" onClick={() => setShowDropdown(false)}>ABOUT</Link>
        </div>
      </div>
    </div>
  );
}

export default Navlist;
