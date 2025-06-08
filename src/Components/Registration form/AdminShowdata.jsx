import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function AdminShowdata() {
  const location = useLocation();
  const [admin, setAdmin] = useState(null);
  let nevagite=useNavigate();

  useEffect(() => {
    const adminData = location.state;

    // Fallback: check if location.state is available
    if (adminData?.aid) {
      axios.get(`http://localhost:8080/admin/findbyid/${adminData.aid}`)
        .then((response) => {
          setAdmin(response.data);
        })
        .catch((error) => {
          console.error('Error fetching admin:', error);
        });
    }
  }, [location.state]);

  const deleteProduct = (pid) => {
    axios.delete(`http://localhost:8080/admin/deletebyidproduct/${pid}`)
      .then(() => {
        alert("Product deleted successfully");

        // Remove deleted product from UI
        setAdmin((prevAdmin) => ({
          ...prevAdmin,
          plist: prevAdmin.plist.filter((product) => product.pid !== pid),
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  };

 if (!admin) {
  return <h2 className="text-center">Loading admin data...</h2>;
}
// console.log("Product List:", admin.plist);

  return (
    <div className='container'>
      

      {/* <table striped="columns"   className='table table-bordered border-dark '>
        <thead>
          <tr>
            <th>pid</th>
            <th>name</th>
            <th>rating</th>
            <th>price</th>
            <th>off</th>
            <th>delivery</th>
            <th>bank</th>
            <th>img</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {admin.plist?.map((product, index) => (
            <tr key={index}>
              <td>{product.pid}</td>
              <td>{product.name}</td>
              <td>{product.rating}</td>
              <td>{product.price}</td>
              <td>{product.off}</td>
              <td>{product.delivery}</td>
              <td>{product.bank}</td>
              <td>{product.img}</td>
              <td>
                <button className='update' onClick={()=>{nevagite(`/updateproduct/${product.pid}`)}}>Update</button>
                <button className='delete' onClick={() => deleteProduct(product.pid)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}

     
        <div response>
                <div className="card response" style={{width: "40rem"}} >
  <img src={admin.imgurl} className="card-img-top"  alt="Vaibhav img"
  style={{ width: '286px', height: '300px', objectFit: 'cover', borderRadius: '10px' }} ></img>
  <div class="card-body">
    <h5 class="card-title">{admin.adminusername}</h5>
    <p class="card-text">
        <strong>Admin Id:</strong>{admin.aid} <br />
        <strong>Email:</strong>{admin.email} <br />
       
    </p>
     <button className='update' >Update</button>
              <button className='delete'>Delete</button>
              <button className='update'  onClick={()=>{nevagite(`/addproduct/${admin.aid}`)}}>Add</button>
  </div>
  </div>
  <br />
  <br />
  </div>

         <div className='row'>
          <br />
{
        admin.plist?.map((product, index)=>
            <div className='col-3  response'  key={index}>
                <div className="card response" style={{width: "18rem"}} >
  <img src={product.img} style={{ width: '286px', height: '300px', objectFit: 'cover', borderRadius: '10px' }} className="card-img-top"  alt="Vaibhav img"
  style={{ width: '286px', height: '300px', objectFit: 'cover', borderRadius: '10px' }} ></img>
  <div class="card-body">
    {console.log(product.name)}
    <h5 class="card-title">{product.name}</h5>
    <p class="card-text">
        <strong>Rating:</strong>{product.rating} <br />
        <strong>Price:</strong>{product.price} <br />
        <strong>Offer:</strong>{product.off} <br />
        <strong>Delivery Charge:</strong>{product.delivery} <br />
        <strong>Bank:</strong>{product.bank} <br />
        <strong>Product Id Number:</strong>{product.pid} <br />
       
    </p>
    <button className='update' onClick={()=>{nevagite(`/updateproduct/${product.pid}`)}}>Update</button>
                <button className='delete' onClick={() => deleteProduct(product.pid)}>Delete</button>
  </div>
</div>
            </div>
        )
    }
        </div>
   </div>
  );
}
