import React from "react";
import "../Style/style.css";
import Watch1 from "../img/watch1.jpg";
import { BsHeart } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";
import { motion } from "framer-motion";
const ProductCard = () => {
  return (
    <>
      <div className='ProductCard ms-4'>
        <div className='product-img'>
          <div className='wishlist container'>
            <div className='sells'>sells</div>
            <div>
              <BsHeart className='icon' />
            </div>
          </div>
          <div>
            <motion.img whileHover={{ scale: 1.2 }} src={Watch1} alt='Watch1' />
          </div>
        </div>
        <div className='pro-details mt-4'>
          <div className='title '>title</div>
          <div className='price'>price</div>
        </div>
        <div className='pro-details2 mt-4'>
          <div className='mainColor'>
            <div className='color1 ms-2'></div>
            <div className='color2 ms-2'></div>
            <div className='color3 ms-2'></div>
          </div>
          <motion.button whileTap={{ scale: 0.5 }} className='btn btn-shopping'>
            <MdShoppingCart />
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
