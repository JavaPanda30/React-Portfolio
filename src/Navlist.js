import React from "react";
import "./Navlist.css";
import { Link } from "react-router-dom";
function Navlist() {
  return (
    <div className="navbar">
      <Link to="./">
        <div>HOME</div>
      </Link>
      <Link to="./projects">
        <div>PROJECTS</div>
      </Link>
      <Link to="./about">
        <div>ABOUT</div>
      </Link>
    </div>
  );
}

export default Navlist;
