import React, { useState, useEffect } from "react";
import { WatchData } from "../utils/data";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { firestore } from "../firebase.config";
const Watches = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    const AllWatchItems = async () => {
      const items = await getDocs(
        query(collection(firestore, "watchItems"), orderBy("id", "desc"))
      );
      const Data = items.docs.map((doc) => doc.data());
      setData(Data);
      setFilterData(Data);
    };
    AllWatchItems();
    FilterData();
  }, []);

  const FilterData = (nameItem) => {
    console.log(nameItem);
    const lala = data?.filter((e) => e.title === nameItem);
    setFilterData(lala);
  };

  console.log(data);
  return (
    <div className='container mt-4 pb-4'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='wacthHead mt-4'>
            <h1>everyone's desires</h1>
            <span>Watches</span>
          </div>
        </div>
        <div className='col-md-12'>
          <div className='watchBtnContent my-4'>
            {WatchData.map((item) => (
              <motion.button
                whileFocus={{ scale: 1.2 }}
                whileHover={{ scale: 1.2 }}
                className='watchBtnBg'
                onClick={() => FilterData(item.name)}
                key={item.id}
              >
                <div className='watchIcnon'>{item.icon}</div>
                <div className='watchName mt-2'> {item.name} </div>
              </motion.button>
            ))}
          </div>
        </div>
        {/* <div className='row text-center  mt-4'> */}
        <div className='col-md-12'>
          <div
            className='d-flex flex-wrap align-items-center justify-content-center text-center'
            style={{ paddingBottom: "30px" }}
          >
            {filterData.map((item) => (
              <ProductCard
                key={item}
                title={item.title}
                price={item.price}
                img={item?.imageUrl}
                item={item}
              />
            ))}
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Watches;
