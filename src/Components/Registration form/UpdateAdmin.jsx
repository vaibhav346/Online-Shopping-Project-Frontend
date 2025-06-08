import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import "./AddOrUpdate.css";
import axios from "axios";

export default function UpdateAdmin() {

 let params=useParams();
  let aid=params.aid;
  console.log(aid);

  let [adminusername,setAdminusername]=useState('');
  let [adminpassword,setAdminpassword]=useState('');
  let [email,setEmail]=useState('');
  let [imgurl,setImg]=useState(null);


  let handleSubmit=((event)=>{
  event.preventDefault();
    let updateadmin={adminusername,adminpassword,email,imgurl}
    // console.log(updateadmin)
  axios.put(`http://localhost:8080/admin/adminupdatebyid/${aid}`,updateadmin)
  .then((response)=>{
    // console.log(response)

    if(response.data!=null){
      alert("Product added sucessfully")
    }
  })
  .catch((error)=>{alert("Error")})


 })


 useEffect(()=>{
 let getadmindata=()=>{
    axios.get(`http://localhost:8080/admin/findbyid/${aid}`)
    .then((response)=>{
        const d=response.data;

        setAdminusername(d.adminusername)
        setAdminpassword(d.adminpassword)
        setEmail(d.email)
    })
 .catch((error) => {
        console.log(error);
      });
  };
 getadmindata();

 },[aid])


    let handleFileChange=((event)=>{
    let file=event.target.files[0]; // upload mutiple file file is object
    let fullpath=`./image//${file.name}`;
    setImg(fullpath);
    // console.log(imgurl);

  })
  return (
    <div>
       <div className="product-form-container">
      <h2>Update Admin Data</h2>
      <form onSubmit={handleSubmit} className="product-form" encType="multipart/form-data" noValidate>
        <input
          type="text"
          name="adminusername"
          value={adminusername}
          onChange={(e)=>{setAdminusername(e.target.value)}}
         
         
        />
      
      

        <input
          type="text"
          name="adminpassword"
          value={adminpassword}
          onChange={(e)=>{setAdminpassword(e.target.value)}}
          
        />
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          
        />
      

        
       <input type="file" accept="image/*" onChange={handleFileChange} />

        <button className="submit-btn" type="submit" >
          Update Admin
        </button>
      </form>
    </div>

    </div>
  )
}
