import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "20px", backgroundColor: "#4CAF50", color: "#fff", fontSize: "18px" }}>
      <h1 style={{ fontSize: "30px" }}>Carpooling</h1>
      <ul style={{ display: "flex", listStyle: "none", gap: "20px" }}>
        <li><Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link></li>
        <li><Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>About</Link></li>
        <li><Link to="/login" style={{ color: "#fff", textDecoration: "none" }}>Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
