import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <>
      <footer class='text-center text-lg-start bg-light text-muted'>
        <div className='container text-center mt-4'>
          <motion.img whileHover={{ scale: 1.3 }} src={Logo} alt='logo' />
        </div>
        <section class='d-flex justify-content-center border-bottom'>
          <div>
            <Link to='' class='me-4 text-reset'>
              <i class='fab fa-facebook-f'></i>
            </Link>
            <Link to='' class='me-4 text-reset'>
              <i class='fab fa-twitter'></i>
            </Link>
            <Link to='' class='me-4 text-reset'>
              <i class='fab fa-google'></i>
            </Link>
            <Link to='' class='me-4 text-reset'>
              <i class='fab fa-instagram'></i>
            </Link>
            <Link to='' class='me-4 text-reset'>
              <i class='fab fa-linkedin'></i>
            </Link>
            <Link to='' class='me-4 text-reset'>
              <i class='fab fa-github'></i>
            </Link>
          </div>
        </section>

        <section class=''>
          <div class='container text-center text-md-start mt-5'>
            <div class='row mt-3'>
              <div class='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                <h6 class='text-uppercase fw-bold mb-4'>
                  <i class='fas fa-gem me-3'></i>Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <div class='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                <h6 class='text-uppercase fw-bold mb-4'>Products</h6>
                <p>
                  <Link to='#!' class='text-reset'>
                    Angular
                  </Link>
                </p>
                <p>
                  <Link to='#!' class='text-reset'>
                    React
                  </Link>
                </p>
                <p>
                  <Link to='#!' class='text-reset'>
                    Vue
                  </Link>
                </p>
                <p>
                  <Link to='#!' class='text-reset'>
                    Laravel
                  </Link>
                </p>
              </div>
              <div class='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                <h6 class='text-uppercase fw-bold mb-4'>Useful links</h6>
                <p>
                  <Link to='#!' class='text-reset'>
                    Pricing
                  </Link>
                </p>
                <p>
                  <Link to='#!' class='text-reset'>
                    Settings
                  </Link>
                </p>
                <p>
                  <Link to='#!' class='text-reset'>
                    Orders
                  </Link>
                </p>
                <p>
                  <Link to='#!' class='text-reset'>
                    Help
                  </Link>
                </p>
              </div>

              <div class='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                <h6 class='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                  <i class='fas fa-home me-3'></i> New York, NY 10012, US
                </p>
                <p>
                  <i class='fas fa-envelope me-3'></i>
                  info@example.com
                </p>
                <p>
                  <i class='fas fa-phone me-3'></i> + 01 234 567 88
                </p>
                <p>
                  <i class='fas fa-print me-3'></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div class='text-center p-4'>
          © 2021 Copyright:
          <Link class='text-reset fw-bold' to='https://mdbootstrap.com/'>
            MDBootstrap.com
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
