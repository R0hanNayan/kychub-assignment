import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Menu</h3>
      <ul>
        <li><Link to="/">Product Details</Link></li>
        <li><Link to="/compare">Compare Products</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
