// Import: Dependencies
import React from "react";

// Import: Styling
import "./HomePage.styles.scss";

// Import: Components
import { ReactComponent as Hero } from "../../../assets/images/hero.svg";

// Page: HomePage
function HomePage() {
  return (
    <div className="HomePage">
      <div className="HomePage__introduction">
        <h1 className="HomePage__title">rizji keyboards</h1>
        <span className="HomePage__lead">Find everything you need here.</span>
        <div className="HomePage__button">
          <span>Sign Up</span>
        </div>
      </div>
      <div className="HomePage__hero-image">
        <Hero />
      </div>
    </div>
  );
}

// Export: HomePage
export default HomePage;
