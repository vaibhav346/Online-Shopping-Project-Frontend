import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20; // You can change this as needed

  useEffect(() => {
    fechproduct();
  }, []);

let fechproduct=(()=>{
  
  axios.get('http://localhost:8080/admin/productsget')
      .then((res) => {
        if (Array.isArray(res.data)) {
          setProducts(res.data);
          setError('');
        } else {
          setError('Unexpected API response format');
        }
      })
      .catch(() => {
        setError('Failed to load products. Please try again later.');
      });
})
 




  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  if (products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div>
      <div className="product-list">
        {currentProducts.map(product => (
          <div className="card" key={product.pid}>
            <img
              src=''
              alt={product.name}
              className="product-image"
              
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
