import React from "react";
import "../Style/style.css";
import WinterImg from "../img/winter.png";
import Watches from "./Watches";
const SpringWinter = () => {
  return (
    <div className='bg'>
      <div className='container winterSec'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='winterLeft'>
              <img src={WinterImg} alt='WinterImg' />
            </div>
          </div>
          <div className='col-md-6'>
            <div className='winterRight'>
              <div className='heading'>
                <h2>
                  Spring Winter <span> 2022</span>{" "}
                </h2>
              </div>
              <div className='para my-4'>
                We are happy to introduce the new Lawson Collection. These are
                three quartz models with simplicity and elegance kept in mind.
                We are happy to introduce the new Spring Collection. To are
                three quartz models with simplicity and elegance kept in mind.
              </div>
              <div className='btn'>shop the look</div>
            </div>
          </div>
        </div>
        <div>
          <Watches />
        </div>
      </div>
    </div>
  );
};

export default SpringWinter;
