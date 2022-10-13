import React from "react";
import "../Style/style.css";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useCart } from "react-use-cart";
const CartItems = () => {
  const { isEmpty, items, updateItemQuantity, removeItem, emptyCart } =
    useCart();
  console.log(items);
  if (isEmpty) return <h3 className='text-center'>Your Cart Is Empty</h3>;

  return (
    <>
      <div className='container cartContainer'>
        <div className='div'>
          {items.map((item) => (
            <div className='container cartitems'>
              <div className='cartitemImg'>
                <img
                  src={item.Image}
                  alt='cartimg'
                  width={50}
                  height={50}
                  referrerpolicy='no-referrer'
                />
                <div className='carritemConten'>
                  <div>{item.title}</div>
                  <div>{item.price}</div>
                </div>
              </div>

              <div className='cartitemQty'>
                <div>
                  <BiMinus />
                </div>
                <p>{item.quantity}</p>
                <div>
                  <BiPlus />
                </div>
              </div>
              <div className='cartitemPrice'>{item.itemTotal}</div>
            </div>
          ))}
        </div>
        <button className='container ml-auto'>Checkout</button>
      </div>
    </>
  );
};

export default CartItems;
