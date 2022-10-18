import React from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";
import DebitCardSection from "../components/DebitCardSection";
// import SpringWinter from "../components/SpringWinter";
const Home = () => {
  return (
    <div>
      <Hero />
      <Products />
      <DebitCardSection />
      {/* <SpringWinter /> */}
    </div>
  );
};

export default Home;
