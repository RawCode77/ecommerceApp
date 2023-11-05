import React from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import store from "./store";
// importing general components
import NavBar from "./components/general/NavBar";

//landing page components
import "./App.css";
import Background from "./components/landing/background";

//user components
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Background />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
