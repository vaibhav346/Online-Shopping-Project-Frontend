import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './ProductList.css';

const ProductList = () => {
  let[product,setProduct]=useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20; // You can change this as needed


 useEffect(()=>{
  fechproduct();
 },[])

 let fechproduct=(()=>{
  axios.get("http://localhost:8080/admin/productsget")
  .then((response)=>{
    console.log(response)
    setProduct(response.data)

  })
  .catch((error)=>{console.log(error)})
 })




  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = product.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(product.length / productsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

 

  if (product.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div>
      <div className="product-list">
        {currentProducts.map(product => (
          <div className="card" key={product.pid}>
            {console.log(product.img)}
            <img
              src={product.img}
              
              alt={product.name}
              
              style={{ width: '225px', height: '300px', objectFit: 'cover', borderRadius: '10px' }}
            />
           <div className="product-info">
  <h3>{product.name}</h3>
  <div className="rating">⭐ {product.rating}</div>
  <div className="price">
    ₹{typeof product.price === 'number'
      ? product.price.toLocaleString()
      : product.price}
  </div>
  <div className="discount">{product.off}</div>
  <div className="delivery">Delivery: {product.delivery}</div>
  <div className="bank-offer">Bank Offer: {product.bank}</div>

  {/* Buttons */}
 <div className="button-group">
  <button className="btn add-to-cart" >
    🛒 ADD TO CART
  </button>
  <button className="btn buy-now" >
    ⚡ BUY NOW
  </button>
</div>

</div>

          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          ◀ Prev
        </button>
        <span> Page {currentPage} of {totalPages} </span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next ▶
        </button>
      </div>
    </div>
  );
};

export default ProductList;
