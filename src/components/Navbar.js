import React from 'react';
import './Navbar.css'; // Import CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
     
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Clusters</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">E-Commerce</a></li>
        <li><a href="#">Teams</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
