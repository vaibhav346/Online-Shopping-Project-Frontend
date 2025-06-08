import React, { useEffect, useState} from "react";
import { useParams} from "react-router-dom";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import "./AddOrUpdate.css";

const UpdateProduct = () => {
let params=useParams();
  let pid=params.pid;
  console.log(pid);
  

   
    const [name,setName]=useState('');
    const [rating,setRating]=useState('');
    const [price,setPrice]=useState('');
    const [off,setOff]=useState('');
    const [delivery,setDelivery]=useState('');
    const [bank,setBank]=useState('');
    const [img,setImg]=useState(null);

   


 useEffect(() => {
  const getproduct = () => {
    axios.get(`http://localhost:8080/admin/getbyidproduct/${pid}`)
      .then((response) => {
        const d = response.data;
        console.log(d);
        setName(d.name);
        setRating(d.rating);
        setPrice(d.price);
        setOff(d.off);
        setDelivery(d.delivery);
        setBank(d.bank);
        setImg(d.img); 
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getproduct(); // now we can safely call it
}, [pid]); // Only run when pid changes


  

    let handleSubmit=((event)=>{
  event.preventDefault();
      let updateproduct={name,rating,price,off,delivery,bank,img}
      console.log(updateproduct)
  axios.put(`http://localhost:8080/admin/updatebyidproduct/${pid}`,updateproduct)
  .then((response)=>{
    console.log(response)
    if(response.data!=null){
      alert("Product added sucessfully")
      
    }
  })
  .catch((error)=>{alert("Error")})
 })


     let handleFileChange=((event)=>{
    let file=event.target.files[0]; // upload mutiple file file is object
    let fullpath=`./image//${file.name}`;
    setImg(fullpath);
    // console.log(img);

  })

  return (
    <div className="product-form-container">
      <h2>Update Product</h2>
      <form onSubmit={handleSubmit} className="product-form">
        
        <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Product Name" required />
        <input type="number" step="0.1" name="rating" value={rating} onChange={(e)=>{setRating(e.target.value)}} placeholder="Rating" required />
        <input type="number" name="price" value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder="Price" required />
        <input type="text" name="off" value={off} onChange={(e)=>{setOff(e.target.value)}} placeholder="Discount/Offer" />
        <input type="text" name="delivery" value={delivery} onChange={(e)=>{setDelivery(e.target.value)}} placeholder="Delivery Info" />
        <input type="text" name="bank" value={bank} onChange={(e)=>{setBank(e.target.value)}} placeholder="Bank Offer" />
        <input type="file" accept="image/*" onChange={handleFileChange} />


        <button className="submit-btn" type="submit" >Update Product</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
