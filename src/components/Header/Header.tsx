import React from "react";
import { Link } from "react-router-dom"; // Ensure you're using React Router for navigation
import { FaShoppingCart } from "react-icons/fa";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">ShopLink</div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Explore</Link>
          </li>
          <li>
            <Link to="/cart">
              <FaShoppingCart className="cart-icon" /> Cart
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
