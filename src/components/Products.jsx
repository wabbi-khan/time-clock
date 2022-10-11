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
