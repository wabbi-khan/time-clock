import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./../Style/style.css";
// import { useStateValue } from "../context/StateProvider";
// import { AllWatchItems } from "../utils/firebaseFunction";
// import axios from "axios";
// import { productsData } from "../utils/products";
import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { firestore } from "../firebase.config";

const Products = () => {
  const [data, setData] = useState([]);
  // const [{ watchItems }] = useStateValue();
  // console.log(watchItems);
  useEffect(() => {
    const AllWatchItems = async () => {
      const items = await getDocs(
        query(collection(firestore, "watchItems"), orderBy("id", "desc"))
      );
      const Data = items.docs.map((doc) => doc.data());
      setData(Data);
    };
    AllWatchItems();
  }, []);

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
  return (
    <div className='container mt-4'>
      <div className='proHeading col-md-12'>
        <h3 className='text-center my-4'>TOP PRODUCTS</h3>
        <div className='text-center mb-4'>
          Explore the TimeOClock collection of prestigious, high-precision
          timepieces. TimeOClock offers a wide assortment of Classic and
          Professional watch models to suit any wrist.
        </div>
      </div>
      <div className='row text-center mainRow'>
        <div className='col-md-12 product-right mb-4'>
          <div className=' d-flex'>
            {data.map((item) => (
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
      </div>
    </div>
  );
};

export default Products;
