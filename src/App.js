// Import: Dependencies
import React from "react";
import { Switch, Route } from "react-router-dom";

// Import: Styling
import "./index.css";

// Import: UI Components
import Header from "./components/UI/Header/Header.component";
import Footer from "./components/UI/Footer/Footer.component";

// Import: Page Components
import ContactPage from "./components/pages/ContactPage/ContactPage.component";
import HomePage from "./components/pages/HomePage/HomePage.component";

// Component: App
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
      <Footer />
    </div>
  );
}

// Export: App
export default App;
