import React from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { store } from "./store";

// importing general components
import NavBar from "./components/general/NavBar";

//landing page components
import "./App.css";
import background from "./components/landing/background";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route exact path="/" component={background} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
