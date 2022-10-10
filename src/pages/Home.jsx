import React from "react";
import HeroImg from "../img/asd.png";
const Home = () => {
  return (
    <div className='container-fluid mt-4 hero'>
      <div className='row'>
        <div className='col-md-6  mt-4 hero-left'>
          <div className='hero-left-content text-center'>
            <h1>Best Place For</h1>
            <span>watches</span>
          </div>
          <div>
            <p className=''>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque laudantium dicta sequi sit. Fugiat tempore, dignissimos
              explicabo
            </p>
            <div className='hero-btn ms-4'>Shop Now</div>
          </div>
        </div>
        <div className='col-md-6 text-end mt-4 hero-right'>
          {/* <img src={HeroImg} alt='HeroImg' className='mt-4 ' /> */}
          {/* <div className='hero-circle'></div> */}
          <img src={HeroImg} alt='hero img' />
        </div>
      </div>
    </div>
  );
};

export default Home;
