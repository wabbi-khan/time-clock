import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import { motion } from "framer-motion";
import CartItems from "./CartItems";
import { useCart } from "react-use-cart";

const CartContainer = ({ close }) => {
  const { emptyCart } = useCart();
  return (
    <motion.div
      className='showCart bg-light'
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
    >
      <div className='showCartContainer'>
        <motion.div
          whileTap={{ scale: 0.75 }}
          className='Backicon'
          onClick={close}
        >
          <MdOutlineKeyboardBackspace />
        </motion.div>
        <p className='mt-4'>Cart</p>
        <motion.div
          whileTap={{ scale: 0.7 }}
          className='removeItems'
          onClick={(e) => emptyCart(e)}
        >
          Clear
          <RiRefreshFill />
        </motion.div>
      </div>
      <div className='containerrr'>
        <CartItems />
      </div>
    </motion.div>
  );
};

export default CartContainer;
