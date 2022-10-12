import React from "react";
import "../Style/style.css";
import { BiMinus, BiPlus } from "react-icons/bi";

import Wacth from "../img/hero-img.png";
const CartItems = () => {
  return (
    <>
      <div className='container cartContainer'>
        <div className='div'>
          <div className='container cartitems'>
            <div className='cartitemImg'>
              <img
                src={Wacth}
                alt='cartimg'
                width={50}
                referrerpolicy='no-referrer'
              />
              <div className='carritemConten'>
                <div>Title</div>
                <div>price</div>
              </div>
            </div>

            <div className='cartitemQty'>
              <div>
                <BiMinus />
              </div>
              <p>asd</p>
              <div>
                <BiPlus />
              </div>
            </div>
            <div className='cartitemPrice'>aasd</div>
          </div>
          <div className='container cartitems'>
            <div className='cartitemImg'>
              <img
                src={Wacth}
                alt='cartimg'
                width={50}
                referrerpolicy='no-referrer'
              />
              <div className='carritemConten'>
                <div>Title</div>
                <div>price</div>
              </div>
            </div>

            <div className='cartitemQty'>
              <div>
                <BiMinus />
              </div>
              <p>asd</p>
              <div>
                <BiPlus />
              </div>
            </div>
            <div className='cartitemPrice'>aasd</div>
          </div>
          <div className='container cartitems'>
            <div className='cartitemImg'>
              <img
                src={Wacth}
                alt='cartimg'
                width={50}
                referrerpolicy='no-referrer'
              />
              <div className='carritemConten'>
                <div>Title</div>
                <div>price</div>
              </div>
            </div>

            <div className='cartitemQty'>
              <div>
                <BiMinus />
              </div>
              <p>asd</p>
              <div>
                <BiPlus />
              </div>
            </div>
            <div className='cartitemPrice'>aasd</div>
          </div>{" "}
          <div className='container cartitems'>
            <div className='cartitemImg'>
              <img
                src={Wacth}
                alt='cartimg'
                width={50}
                referrerpolicy='no-referrer'
              />
              <div className='carritemConten'>
                <div>Title</div>
                <div>price</div>
              </div>
            </div>

            <div className='cartitemQty'>
              <div>
                <BiMinus />
              </div>
              <p>asd</p>
              <div>
                <BiPlus />
              </div>
            </div>
            <div className='cartitemPrice'>aasd</div>
          </div>{" "}
          <div className='container cartitems'>
            <div className='cartitemImg'>
              <img
                src={Wacth}
                alt='cartimg'
                width={50}
                referrerpolicy='no-referrer'
              />
              <div className='carritemConten'>
                <div>Title</div>
                <div>price</div>
              </div>
            </div>

            <div className='cartitemQty'>
              <div>
                <BiMinus />
              </div>
              <p>asd</p>
              <div>
                <BiPlus />
              </div>
            </div>
            <div className='cartitemPrice'>aasd</div>
          </div>{" "}
          <div className='container cartitems'>
            <div className='cartitemImg'>
              <img
                src={Wacth}
                alt='cartimg'
                width={50}
                referrerpolicy='no-referrer'
              />
              <div className='carritemConten'>
                <div>Title</div>
                <div>price</div>
              </div>
            </div>

            <div className='cartitemQty'>
              <div>
                <BiMinus />
              </div>
              <p>asd</p>
              <div>
                <BiPlus />
              </div>
            </div>
            <div className='cartitemPrice'>aasd</div>
          </div>
        </div>
        <button className='container ml-auto'>asd</button>
      </div>
    </>
  );
};

export default CartItems;
