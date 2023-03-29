import React, { useState } from 'react';
import {
  MdWatch,
  MdCloudUpload,
  MdDelete,
  MdAttachMoney,
} from 'react-icons/md';
import { BiCategory } from 'react-icons/bi';
import { watchCategory } from '../utils/data';
import Loader from './Loader';
import { storage } from '../firebase.config';
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { saveItems } from '../utils/firebaseFunction';
// import { useStateValue } from '../context/StateProvider';
// import { AllWatchItems } from "../utils/firebaseFunction";
// import { actionType } from '../context/reducer';
const CreateProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState('danger');
  const [msg, setMsg] = useState(null);
  const [Loading, setLoading] = useState(false);
  // const [{ watchItems }, dispatch] = useStateValue();
  const uploadImage = (e) => {
    setLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(uploadProgress);
      },
      (error) => {
        console.log(error);
        setFields(true);
        setMsg('Error while uploading : Try again ☹');
        setAlertStatus('danger');
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
          setMsg('Image uploaded successfully 🎉');
          setAlertStatus('success');
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
      setMsg('image deleted successfully 😍');
      setAlertStatus('success');
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
        setAlertStatus('danger');
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
        setMsg('Data uploaded successfully 😍');
        setAlertStatus('success');
        clearData();
        setTimeout(() => {
          setFields(false);
        }, 4000);
      }
    } catch (error) {
      console.log(error);
      setFields(true);
      setMsg('Error while uploading : Try again ☹');
      setAlertStatus('danger');
      setTimeout(() => {
        setFields(false);
        setLoading(false);
      }, 4000);
    }
    // fetchData();
  };
  const clearData = () => {
    setTitle('');
    setCategory('Select Category');
    setImageAsset(null);
    setPrice('');
  };

  // const fetchData = async () => {
  //   await AllWatchItems().then((data) => {
  //     dispatch({
  //       type: actionType.SET_WATCH_ITEMS,
  //       watchItems: data,
  //     });
  //   });
  // };
  return (
    <div className="container mt-4 pt-4">
      <div className="row customClassForm">
        <div className="col-md-12">
          {fields && (
            <p
              className={`py-4  text-center rounded ${
                alertStatus === 'danger' ? 'bg-danger text-light' : 'bg-light'
              }`}
            >
              {msg}
            </p>
          )}
        </div>
        <div className="col-md-12">
          <div className="d-flex watchName">
            <MdWatch />
            <input
              type="text"
              required
              value={title}
              placeholder="Watch Name"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="d-flex category">
            <div>
              <BiCategory />
            </div>
            <select onChange={(e) => setCategory(e.target.value)}>
              <option value="other">Select Category</option>
              {watchCategory &&
                watchCategory.map((item) => (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="col-md-12">
          <div className="uploadImage">
            {Loading ? (
              <Loader />
            ) : (
              <>
                {' '}
                {!imageAsset ? (
                  <>
                    {/* <label> */}
                    <div className="clickHere">
                      <div>
                        <MdCloudUpload />
                      </div>
                      <div>Click here to upload </div>
                    </div>
                    <div>
                      <input
                        className="uploadHere"
                        type="file"
                        name="uploadImage"
                        accept="image/*"
                        onChange={uploadImage}
                      />
                    </div>
                    {/* </label> */}
                  </>
                ) : (
                  <>
                    <div>
                      <img src={imageAsset} alt="uploadedimage" width={100} />
                      <button onClick={deleteImage} className="deleteBtn">
                        <MdDelete />{' '}
                      </button>
                    </div>{' '}
                  </>
                )}{' '}
              </>
            )}
          </div>
        </div>
        <div className="col-md-12">
          <div className="d-flex watchName">
            <MdAttachMoney />
            <input
              type="text"
              required
              value={price}
              placeholder="Enter Price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="uploadBtn">
            <button type="button" onClick={saveDetails}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                  ></path>
                </svg>{' '}
                Create Product
              </span>
            </button>
            {/* <button type="button" onClick={saveDetails}>
              Create Product
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
