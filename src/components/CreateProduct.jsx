import React, { useState } from "react";
import {
  MdWatch,
  MdCloudUpload,
  MdDelete,
  MdAttachMoney,
} from "react-icons/md";
import { watchCategory } from "../utils/data";
import Loader from "./Loader";
import { storage } from "../firebase.config";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { saveItems } from "../utils/firebaseFunction";
const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [Loading, setLoading] = useState(false);
  const uploadImage = (e) => {
    setLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
        setFields(true);
        setMsg("Error while uploading : Try again ☹");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setLoading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          setImageAsset(downloadUrl);
          setLoading(false);
          setFields(true);
          setMsg("Image uploaded successfully 🎉");
          setAlertStatus("success");
          setTimeout(() => {
            setFields(false);
          }, 4000);
        });
      }
    );
  };
  const deleteImage = () => {
    setLoading(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setLoading(false);
      setFields(true);
      setMsg("image deleted successfully 😍");
      setAlertStatus("success");
      setTimeout(() => {
        setFields(false);
      }, 4000);
    });
  };
  const saveDetails = () => {
    setLoading(true);
    try {
      if (!title || !imageAsset || !price || !category) {
        setFields(true);
        setMsg("Requied fields can't be empty");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setLoading(false);
        }, 4000);
      } else {
        const data = {
          id: `${Date.now()}`,
          title: title,
          imageUrl: imageAsset,
          category: category,
          qty: 1,
          price: price,
        };
        saveItems(data);
        setLoading(false);
        setFields(true);
        setMsg("Data uploaded successfully 😍");
        setAlertStatus("success");
        clearData();
        setTimeout(() => {
          setFields(false);
        }, 4000);
      }
    } catch (error) {
      console.log(error);
      setFields(true);
      setMsg("Error while uploading : Try again ☹");
      setAlertStatus("danger");
      setTimeout(() => {
        setFields(false);
        setLoading(false);
      }, 4000);
    }
  };
  const clearData = () => {
    setTitle("");
    setCategory("Select Category");
    setImageAsset(null);
    setPrice("");
  };
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
        <div className='col-md-12'>
          <div className='d-flex '>
            <MdWatch />
            <input
              type='text'
              required
              value={title}
              placeholder='Watch Name'
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className='col-md-12'>
          <div className='d-flex'>
            <select onChange={(e) => setCategory(e.target.value)}>
              <option value='other'>Select Category</option>
              {watchCategory &&
                watchCategory.map((item) => (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className='col-md-12'>
          <div>
            {Loading ? (
              <Loader />
            ) : (
              <>
                {" "}
                {!imageAsset ? (
                  <>
                    <label>
                      <div>
                        <MdCloudUpload />
                        <p>Click here to upload </p>
                      </div>
                      <input
                        type='file'
                        name='uploadImage'
                        accept='image/*'
                        onChange={uploadImage}
                      />
                    </label>
                  </>
                ) : (
                  <>
                    <div>
                      <img src={imageAsset} alt='uploadedimage' width={100} />
                      <button onClick={deleteImage}>
                        <MdDelete />{" "}
                      </button>
                    </div>{" "}
                  </>
                )}{" "}
              </>
            )}
          </div>
        </div>
        <div className='col-md-12'>
          <div className='d-flex'>
            <MdAttachMoney />
            <input
              type='text'
              required
              value={price}
              placeholder='Enter Price'
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div className='col-md-12'>
          <div>
            {" "}
            <button type='button' onClick={saveDetails}>
              Save
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
