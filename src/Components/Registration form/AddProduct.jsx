import React, { useState } from "react";
import { useParams} from "react-router-dom";
import "./AddOrUpdate.css";
import axios from "axios";
// import axios from "axios";

const AddProduct = () => {
  let params=useParams();
  let aid=params.aid;
  console.log(aid);

  let [name,setName]=useState('');
  let [rating,setRating]=useState('');
  let [price,setPrice]=useState('');
  let [off,setOff]=useState('');
  let [delivery,setDelivery]=useState('');
  let [bank,setBank]=useState('');
  let [img,setImg]=useState(null);

 

 let handleSubmit=((event)=>{
  event.preventDefault();

    const newProduct = {
      name,
      rating: parseFloat(rating),
      price: parseFloat(price),
      off,
      delivery,
      bank,
      img
    };

    const adminData = {
      plist: [newProduct]
    };

  
  axios.put(`http://localhost:8080/admin/updatebyid/${aid}`,adminData)
  .then((response)=>{
    console.log(response)
    if(response.data!=null){
      alert("Product added sucessfully")
    }

    // Optional: update local plist
          // plist.push(response.data); 
          // (Make sure plist is in state or context to reflect this change in UI)
  })
  .catch((error)=>{alert("Error")})


 })

  


  let handleFileChange=((event)=>{
    let file=event.target.files[0]; // upload mutiple file file is object
    let fullpath=`./image//${file.name}`;
    setImg(fullpath);
    console.log(img);

  })
 
  return (
    <div className="product-form-container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit} className="product-form" encType="multipart/form-data" noValidate>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e)=>{setName(e.target.value)}}
          placeholder="Product Name"
          required
         
        />
      

        <input
          type="number"
          name="rating"
          step="0.1"
          value={rating}
          onChange={(e)=>{setRating(e.target.value)}}
          placeholder="Rating"
          required
          
        />


        <input
          type="number"
          name="price"
          value={price}
          onChange={(e)=>{setPrice(e.target.value)}}
          placeholder="Price"
          required
        
        />
      

        <input
          type="text"
          name="off"
          value={off}
          onChange={(e)=>{setOff(e.target.value)}}
          placeholder="Discount/Offer"
        />
        <input
          type="text"
          name="delivery"
          value={delivery}
          onChange={(e)=>{setDelivery(e.target.value)}}
          placeholder="Delivery Info"
        />
        <input
          type="text"
          name="bank"
          value={bank}
          onChange={(e)=>{setBank(e.target.value)}}
          placeholder="Bank Offer"
        />

        
        <input
          type="file"
          name="img"
          accept="image/*"
          onChange={handleFileChange}
          
        />

        <button className="submit-btn" type="submit" >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
