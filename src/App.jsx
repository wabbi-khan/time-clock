import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./App.css";
import { CartProvider } from "react-use-cart";
import MobileHeader from "./components/MobileHeader";
import SpringWinter from "./components/SpringWinter";
import { AnimatePresence } from "framer-motion";
const App = () => {
  return (
    <CartProvider>
      <AnimatePresence>
        <Router>
          <div className='bg'>
            <NavBar />
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </div>
          <SpringWinter />
          <Footer />
          <MobileHeader />
        </Router>
      </AnimatePresence>
    </CartProvider>
  );
};

export default App;
