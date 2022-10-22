import React, { useState } from "react";

const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [Loading, setLoading] = useState(false);
  return (
    <div className='container mt-4 pt-4'>
      <div className='row'>
        <div className='col-md-12'>
          {fields && (
            <p
              className={`py-4  text-center rounded ${
                alertStatus === "danger" ? "bg-danger text-light" : "bg-light"
              }`}
            >
              {msg}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
