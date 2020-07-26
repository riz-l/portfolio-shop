// Import: Dependencies
import React from "react";

// Import: Styling
import "./Header.styles.scss";

// Import: Assets
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";

// UI: Header
function Header() {
  return (
    <div className="Header">
      <div className="Header__logo">
        <Logo />
      </div>
      <div className="Header__navigation">
        <div className="Header__navigation-item">
          <span>Home</span>
        </div>
        <div className="Header__navigation-item">
          <span>Contact</span>
        </div>
        <div className="Header__navigation-item">
          <span>Shop</span>
        </div>
        <div className="Header__navigation-item Header__sign-in">
          <span>Sign In</span>
        </div>
      </div>
    </div>
  );
}

// Export: Header
export default Header;
