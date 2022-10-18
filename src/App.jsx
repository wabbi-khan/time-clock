import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
import { CartProvider } from "react-use-cart";
import MobileHeader from "./components/MobileHeader";
import SpringWinter from "./components/SpringWinter";
const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className='bg'>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
        <SpringWinter />
        <Footer />
        <MobileHeader />
      </Router>
    </CartProvider>
  );
};

export default App;
