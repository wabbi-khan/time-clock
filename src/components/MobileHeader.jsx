import React, { useState } from "react";
import { MdHome, MdSearch, MdAddShoppingCart } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import CartContainer from "./CartContainer";
const MobileHeader = () => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <div className='mobHeader'>
      <div className='row mt-4'>
        <div className='col-md-12'>
          <div className='mainMob'>
            <div className='icon active'>
              <MdHome />
            </div>
            <div className='icon'>
              <MdSearch />
            </div>
            <div className='icon' onClick={() => setIsMenu(!isMenu)}>
              <MdAddShoppingCart />
            </div>
            {isMenu && <CartContainer close={() => setIsMenu(!isMenu)} />}

            <div className='icon'>
              <AiFillSetting />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
