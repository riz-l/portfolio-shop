// Import: Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Import: Styling
import "./Header.styles.scss";

// Import: Assets
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";

// UI: Header
function Header() {
  return (
    <div className="Header">
      <Link to="/">
        <div className="Header__logo">
          <Logo />
        </div>
      </Link>
      <div className="Header__navigation">
        <Link to="/">
          <div className="Header__navigation-item">
            <span>Home</span>
          </div>
        </Link>
        <Link to="/contact">
          <div className="Header__navigation-item">
            <span>Contact</span>
          </div>
        </Link>
        <Link to="/shop">
          <div className="Header__navigation-item">
            <span>Shop</span>
          </div>
        </Link>
        <Link to="/sign-in">
          <div className="Header__navigation-item Header__sign-in">
            <span>Sign In</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

// Export: Header
export default Header;
