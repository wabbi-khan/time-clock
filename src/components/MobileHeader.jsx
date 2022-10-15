import React from "react";
import { MdHome, MdSearch, MdAddShoppingCart } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
const MobileHeader = () => {
  return (
    // <div className='container-fluid bg-dark'>

    <div className='row mt-4'>
      <div className='col-md-12'>
        <div className='mainMob'>
          <div className='icon active'>
            <MdHome />
          </div>
          <div className='icon'>
            <MdSearch />
          </div>
          <div className='icon'>
            <MdAddShoppingCart />
          </div>
          <div className='icon'>
            <AiFillSetting />
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default MobileHeader;
