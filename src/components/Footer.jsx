import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';
import { motion } from 'framer-motion';
const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-light text-muted">
        <div className="container text-center">
          <motion.img
            whileHover={{ scale: 1.3 }}
            src={Logo}
            alt="logo"
            className="mt-4"
          />
        </div>
        <section className="d-flex justify-content-center border-bottom">
          <div>
            <Link to="" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </Link>
            <Link to="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link to="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </Link>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Time O Clock
                </h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias, ab animi ipsa labore laborum saepe quaerat
                  laudantium nostrum modi nam!
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
                <p>
                  <Link to="#!" className="text-reset">
                    Home
                  </Link>
                </p>
                <p>
                  <Link to="#!" className="text-reset">
                    About
                  </Link>
                </p>
                <p>
                  <Link to="#!" className="text-reset">
                    Shop
                  </Link>
                </p>
                <p>
                  <Link to="#!" className="text-reset">
                    Contact
                  </Link>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <Link to="#!" className="text-reset">
                    Term & Conditions
                  </Link>
                </p>
                <p>
                  <Link to="#!" className="text-reset">
                    Privacy
                  </Link>
                </p>
                <p>
                  <Link to="#!" className="text-reset">
                    Orders
                  </Link>
                </p>
                {/* <p>
                  <Link to="#!" className="text-reset">
                    Help
                  </Link>
                </p> */}
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i>Hyderabad, Sindh
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  kwahab789@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i>+92-331-3507810
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4">
          © 2023 Copyright:
          <Link className="text-reset mx-2 fw-bold" to="#">
            timeoclock.com
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
