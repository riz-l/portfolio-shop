// Import: Dependencies
import React from "react";
import { Switch, Route } from "react-router-dom";

// Import: Styling
import "./index.css";

// Import: UI Components
import Footer from "./components/UI/Footer/Footer.component";
import Header from "./components/UI/Header/Header.component";

// Import: Page Components
import ContactPage from "./components/pages/ContactPage/ContactPage.component";
import HomePage from "./components/pages/HomePage/HomePage.component";
import ShopPage from "./components/pages/ShopPage/ShopPage.component";

// Component: App
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
      <Footer />
    </div>
  );
}

// Export: App
export default App;
