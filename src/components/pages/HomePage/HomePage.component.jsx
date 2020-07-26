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
        <div className="HomePage__introduction-text">
          <h1>rizji keyboards</h1>
          <p>Keyboards by fanatics, for fanatics.</p>
        </div>
        <div className="HomePage__cta">
          <div className="HomePage__cta-button">
            <span>Sign Up</span>
          </div>
        </div>
      </div>
      <div className="HomePage__image">
        <Hero />
      </div>
    </div>
  );
}

// Export: HomePage
export default HomePage;
