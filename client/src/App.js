import React from "react";
// import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes } from "react-router-dom";
// import store from "./store";

// importing general components
import NavBar from "./components/general/NavBar.js";

//landing page components
import "./App.css";
import Background from "./components/landing/background.js";

function App() {
  return (
    // <Provider >
    <Router>
      <div className="App">
        <NavBar />
        <Routes exact path="/" component={Background} />
      </div>
    </Router>
    // </Provider>
  );
}

export default App;
