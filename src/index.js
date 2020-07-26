// Import: Dependencies
import React from "react";
import ReactDOM from "react-dom";

// Import: Service Worker
import * as serviceWorker from "./serviceWorker";

// Import: Styling
import "./index.css";

// Import: Components
import App from "./App";
import Header from "./components/UI/Header/Header.component";
import Footer from "./components/UI/Footer/Footer.component";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
