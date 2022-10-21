import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
// import { CartProvider } from "react-use-cart";
// import MobileHeader from "../components/MobileHeader";
import SpringWinter from "../components/SpringWinter";
// import { AnimatePresence } from "framer-motion";
// import CreateProduct from "../components/CreateProduct";
const mainPage = () => {
  return (
    <>
      <div className='bg'>
        <NavBar />
        <Home />

        {/* <MobileHeader /> */}
      </div>
      <SpringWinter />
      <Footer />
    </>
  );
};

export default mainPage;
