import React from 'react'
import '../styles/components/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="Navbar">
        <h1 id="logo">
          <Link to="/">LOGO</Link>
        </h1>
        <div id="nav-links">
          <Link to="/search">Search</Link>
            <a href="#">Offers</a>
            <a href="#">Help</a>
            <Link to="/signup">Sign Up</Link>
        </div>
    </nav>
  )
}

export default Navbar