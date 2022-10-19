import React, { useState } from "react";
import { WatchData } from "../utils/data";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { productsData } from "../utils/products";
// import axios from "axios";
const Watches = () => {
  const [items, setItems] = useState(productsData);
  // console.log(productsData);
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const fetchingProducts = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:5000/products");
  //       console.log(res.data);
  //       setData(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchingProducts();
  // }, []);
  const FilterItems = (nameItem) => {
    const updateItems = productsData.filter(
      (currentName) => currentName.title === nameItem
    );
    setItems(updateItems);
  };
  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='wacthHead'>
            <h1>everyone's desires</h1>
            <span>Watches</span>
          </div>
        </div>
        <div className='col-md-12'>
          <div className='watchBtnContent'>
            {WatchData.map((item) => (
              <motion.button
                whileFocus={{ scale: 1.2 }}
                whileHover={{ scale: 1.2 }}
                className='watchBtnBg'
                key={item.id}
                onClick={() => FilterItems(item.name)}
              >
                <div className='watchIcnon'>{item.icon}</div>
                <div className='watchName mt-2'> {item.name} </div>
              </motion.button>
            ))}
          </div>
        </div>
        <div className='row text-center mainRow mt-4'>
          <div className='col-md-12 product-right mb-4'>
            <div className=' d-flex'>
              {items.map((item) => (
                <ProductCard
                  key={item}
                  title={item.title}
                  price={item.price}
                  img={item?.Image}
                  item={item}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watches;
