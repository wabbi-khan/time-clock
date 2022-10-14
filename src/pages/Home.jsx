import React from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";
import DebitCardSection from "../components/DebitCardSection";
const Home = () => {
  return (
    <>
      <div className='bg'>
        <Hero />
        <Products />
      </div>
      <DebitCardSection />
    </>
  );
};

export default Home;
