import React from "react";
import HeroImg from "../img/hero-img.png";
const Home = () => {
  return (
    <div className='container-fluid mt-4 hero'>
      <div className='row'>
        <div className='col-md-6 text-center mt-4 hero-left'>
          <div className='hero-left-content'>
            <h1>Best Place For</h1>
            <span>watches</span>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque laudantium dicta sequi sit. Fugiat tempore, dignissimos
              explicabo
            </p>
          </div>
        </div>
        <div className='col-md-4 text-end mt-4 hero-right'>
          <img src={HeroImg} alt='HeroImg' className='mt-4 ' />
          <div className='hero-circle'></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
