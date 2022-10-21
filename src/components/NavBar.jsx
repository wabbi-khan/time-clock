import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./../img/logo.png";
// import { MdOutlineKeyboardBackspace } from "react-icons/md";
// import { RiRefreshFill } from "react-icons/ri";
import { motion } from "framer-motion";
import "./../Style/style.css";
import { useCart } from "react-use-cart";
// import CartItems from "./CartItems";
import CartContainer from "./CartContainer";
import Avatar from "../img/avatar.png";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const NavBar = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider(app);
  const { totalItems } = useCart();
  const [isMenu, setIsMenu] = useState(false);
  // * Login user
  const [{ user }, dispatch] = useStateValue();
  const Login = async () => {
    const {
      user: { refreshToken, providerData },
    } = await signInWithPopup(firebaseAuth, provider);
    // console.log(res);
    dispatch({
      type: actionType.SET_USER,
      user: providerData[0],
    });
  };
  return (
    <>
      {/* <div className='nav-circle'></div> */}

      <nav className='container navbar navbar-expand-lg bg-transparent'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to={"/"}>
            <motion.img
              whileHover={{ scale: 1.3 }}
              src={Logo}
              alt='logo'
              width={150}
            />
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
            <ul className='navbar-nav mx-auto  text-center'>
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
                <Link className='nav-link' to={"/"}>
                  Features
                </Link>
              </li>
              <li className='nav-item ms-4'>
                <Link className='nav-link' to={"/"}>
                  Pricing
                </Link>
              </li>{" "}
              <li className='nav-item ms-4'>
                <Link className='nav-link' to={"/"}>
                  About
                </Link>
              </li>{" "}
              <li className='nav-item ms-4'>
                <Link className='nav-link' to={"/"}>
                  Contact
                </Link>
              </li>{" "}
              <li className='nav-item d-sm-none'>
                <div className='nav-circle'></div>
              </li>
            </ul>
            <ul className='navbar-nav text-center nav-icons'>
              <li className='nav-item mx-4'>
                <Link className='nav-link' to={"/"}>
                  <div className='searchIcon'>
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
                  </div>
                </Link>
              </li>
              <li className='nav-item mx-4'>
                <Link className='nav-link' to={"/"}>
                  <div className='items' onClick={() => setIsMenu(!isMenu)}>
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
                    <div className='totalProducts text-center'>
                      {totalItems}
                    </div>
                  </div>
                  {isMenu && <CartContainer close={() => setIsMenu(!isMenu)} />}
                </Link>
              </li>
              <li className='nav-item mx-4'>
                <div className='avatar'>
                  <motion.img
                    whileTap={{ scale: 0.6 }}
                    src={user ? user.photoURL : Avatar}
                    alt='Avatar'
                    referrerpolicy='no-referrer'
                    onClick={Login}
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='container mt-2 mobTop'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='mobcontent'>
              <div>
                <img src={Logo} width={150} alt='log' />
              </div>
              <div className='nav-item ms-4'>
                {/* <Link className='nav-link' to={"/"}> */}
                <div className='items' onClick={() => setIsMenu(!isMenu)}>
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
                  <div className='totalProducts text-center'>{totalItems}</div>
                </div>
                {isMenu && <CartContainer close={() => setIsMenu(!isMenu)} />}
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
