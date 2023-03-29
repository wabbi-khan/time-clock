import React from 'react';
import '../Style/style.css';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { useCart } from 'react-use-cart';
const CartItems = () => {
  const { isEmpty, items, updateItemQuantity } = useCart();
  if (isEmpty)
    return (
      <h3 className="text-center text-light mt-4 pt-4">Your Cart Is Empty</h3>
    );

  return (
    <>
      <div className="container cartContainer">
        <div className="div">
          {items.map((item) => (
            <div className="container cartitems">
              <div className="cartitemImg">
                <img
                  src={item.imageUrl}
                  alt="cartimg"
                  width={50}
                  height={50}
                  referrerpolicy="no-referrer"
                />
                <div className="carritemConten">
                  <div>{item.title}</div>
                  <div>$. {item.price}</div>
                </div>
              </div>

              <div className="cartitemQty">
                <div
                  onClick={(e) =>
                    updateItemQuantity(item.id, item.quantity - 1)
                  }
                >
                  <BiMinus />
                </div>
                <p>{item.quantity}</p>
                <div
                  onClick={(e) =>
                    updateItemQuantity(item.id, item.quantity + 1)
                  }
                >
                  <BiPlus />
                </div>
              </div>
              <div className="cartitemPrice">{item.itemTotal}</div>
            </div>
          ))}
        </div>
        <button className="container ml-auto mt-2">Checkout</button>
      </div>
    </>
  );
};

export default CartItems;
