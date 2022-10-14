import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import "./../Style/style.css";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchingProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/products");
        console.log(res.data);
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchingProducts();
  }, []);
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
                img={item?.Image}
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
