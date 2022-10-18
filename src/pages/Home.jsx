import React from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";
import DebitCardSection from "../components/DebitCardSection";
const Home = () => {
  return (
    <div>
      <Hero />
      <Products />
      <DebitCardSection />
    </div>
  );
};

export default Home;
