import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav class='container navbar navbar-expand-lg bg-transparent'>
      <div class='container-fluid'>
        <Link class='navbar-brand' to={"/"}>
          Navbar
        </Link>
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarNav'>
          <ul class='navbar-nav mx-auto'>
            <li class='nav-item'>
              <Link class='nav-link active' aria-current='page' to={"/"}>
                Home
              </Link>
            </li>
            <li class='nav-item'>
              <Link class='nav-link' to={"/about"}>
                Features
              </Link>
            </li>
            <li class='nav-item'>
              <Link class='nav-link' href='#'>
                Pricing
              </Link>
            </li>
            <li class='nav-item'>
              <Link class='nav-link disabled'>Disabled</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
