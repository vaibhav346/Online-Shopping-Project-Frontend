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
    return <h3>Loading admin data...</h3>;
  }

  return (
    <div >
      <table striped="columns"   className='table table-bordered border-dark '>
        <thead>
          <tr>
            <th>aid</th>
            <th>adminusername</th>
            <th>adminpassword</th>
            <th>imgurl</th>
            <th>email</th>
            <th colSpan="3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{admin.aid}</td>
            <td>{admin.adminusername}</td>
            <td>{admin.adminpassword}</td>
            <td>{admin.imgurl}</td>
            <td>{admin.email}</td>
            <td>
              <button className='update' >Update</button>
              <button className='delete'>Delete</button>
              <button className='update'  onClick={()=>{nevagite(`/addproduct/${admin.aid}`)}}>Add</button>
            </td>
          </tr>
        </tbody>
      </table>

      <table striped="columns"   className='table table-bordered border-dark '>
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
      </table>

      {/* Removed Refresh Button: not needed if using state update */}
    </div>
  );
}
