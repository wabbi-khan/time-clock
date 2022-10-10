import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import "../../Style/style.css";
const NavBar = () => {
  return (
    <>
      {/* <div className='nav-circle'></div> */}
      <nav className='container navbar navbar-expand-lg bg-transparent'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to={"/"}>
            <img src={Logo} alt='logo' width={150} />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav mx-auto me-4 text-center'>
              <li className='nav-item'>
                <Link
                  className='nav-link active-link'
                  aria-current='page'
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li className='nav-item ms-4'>
                <Link className='nav-link' to={"/about"}>
                  Features
                </Link>
              </li>
              <li className='nav-item ms-4'>
                <Link className='nav-link' href='#'>
                  Pricing
                </Link>
              </li>{" "}
              <li className='nav-item ms-4'>
                <Link className='nav-link' href='#'>
                  Pricing
                </Link>
              </li>{" "}
              <li className='nav-item ms-4'>
                <Link className='nav-link' href='#'>
                  Pricing
                </Link>
              </li>{" "}
              <li className='nav-item'>
                <div className='nav-circle'></div>
              </li>
              {/* <li className='nav-item'>
              <Link className='nav-link disabled ms-4'>Disabled</Link>
            </li> */}
            </ul>
            <ul className='navbar-nav me-4 text-center nav-icons'>
              <li className='nav-item '>
                <Link className='nav-link' to={"/"}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    fill='currentColor'
                    class='bi bi-search'
                    viewBox='0 0 16 16'
                  >
                    <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
                  </svg>
                </Link>
              </li>
              <li className='nav-item ms-4'>
                <Link className='nav-link' to={"/"}>
                  <div className='items'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='25'
                      height='25'
                      fill='currentColor'
                      class='bi bi-cart-check'
                      viewBox='0 0 16 16'
                    >
                      <path d='M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z' />
                      <path d='M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z' />
                    </svg>
                    <div className='totalProducts'>01</div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className='collapse navbar-collapse' id='navbarNav'> */}

          {/* </div> */}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
