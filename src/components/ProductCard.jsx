import React from "react";
import "../Style/style.css";
import { BsHeart } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";
import { motion } from "framer-motion";
import { useCart } from "react-use-cart";
const ProductCard = ({ img, title, price, item }) => {
  const { addItem, items } = useCart();
  console.log(items);

  return (
    <>
      <div className='ProductCard ms-4'>
        <div className='product-img'>
          <div className='wishlist container'>
            <div className='sells'>Sales</div>
            <div>
              <BsHeart className='icon' />
            </div>
          </div>
          <div>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={img}
              alt='pro-img'
              referrerPolicy='no-referrer'
            />
          </div>
        </div>
        <div className='pro-details mt-4'>
          <div className='title '>{title}</div>
          <div className='price'>Rs. {price} </div>
        </div>
        <div className='pro-details2 mt-4'>
          <div className='mainColor'>
            <div>Colors:</div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className='color1 ms-2'
            ></motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className='color2 ms-2'
            ></motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className='color3 ms-2'
            ></motion.div>
          </div>
          <motion.button
            whileTap={{ scale: 0.5 }}
            onClick={() => addItem(item)}
            className='btn btn-shopping'
          >
            <MdShoppingCart />
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
