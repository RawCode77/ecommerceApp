import React from "react";
// import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="main-navbar bg-main">
      <h1>
        <a href="/">
          <i class="fas fa-store"></i> dev-Shop
        </a>
      </h1>
      <ul>
        <li>
          <a href="/merchant">Merchants</a>
        </li>
        <li>
          <a href="/register">Register</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar