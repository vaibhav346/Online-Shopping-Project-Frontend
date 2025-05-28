import React, { useState } from 'react';
import './Home.css';
import { FaSearch, FaShoppingCart, FaUserCircle, FaStore, FaBars } from 'react-icons/fa';
import Slider from "react-slick"; // <-- Import Slider
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './Footer';
import MedialPart from './MedialPart';

// Sample carousel images
const sliderImages = [
  "/image/1.webp",
  "/image/2.webp",
  "/image/3.webp",
  "/image/4.webp",
  "/image/5.webp",
  "/image/6.webp",
  "/image/7.webp",
  "/image/8.webp",
  "/image/9.webp"
];

const categories = [
  { name: "Top Offers", image: "/image/toffers.png" },
  { name: "Mobiles & Tablets", image: "/image/mobile.png" },
  { name: "TVs & Appliances", image: "/image/washing.webp" },
  { name: "Electronics", image: "/image/tv-appliances.png" },
  { name: "Fashion", image: "/image/kapade.webp" },
  { name: "Beauty, Food..", image: "/image/beauty.webp" },
  { name: "Home & Kitchen", image: "/image/home.webp" },
  { name: "Furniture", image: "/image/sofa.webp" },
  { name: "Flight Bookings", image: "/image/flight.webp" },
  { name: "Grocery", image: "/image/grocery.webp" }
];

const products = [
    { name: "Best Truewireless H...", price: "Grab Now", image: "/image/tv-appliances.png" },
    { name: "Noise Smartwatches", price: "From ₹1,099", image: "/image/sofa.webp" },
    { name: "Fastrack Smartwatch", price: "From ₹1,399", image: "/image/washing.webp" },
    { name: "Best Selling Mobile S...", price: "From ₹499*", image: "/image/mobile.png" },
    { name: "Projector", price: "From ₹6990", image: "/image/flight.webp" },
    { name: "Top Mirrorless Camer...", price: "Shop Now!", image: "/image/washing.webp" }
  ];

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
    <header className="flipkart-header">
      <div className="top-bar">
        <div className="logo">
          Vaibhavkart
          <span className="explore-plus">Explore <span className="plus">Plus</span></span>
        </div>

        <div className="search-bar">
          <button><FaSearch /></button>
          <input type="text" placeholder="Search for products, brands and more" />
        </div>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <button className="login-btn">
            <FaUserCircle style={{ marginRight: '6px' }} /> Login
          </button>

          <a href="#" className="cart">
            <FaShoppingCart />
            <span className="link-text">Cart</span>
          </a>

          <a href="#" className="seller-link">
            <FaStore />
            <span className="link-text">Become a Seller</span>
          </a>
        </nav>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </button>
      </div>

      {/* Category Menu */}
      <div className="catetory-bar">
        <div className="category-menu">
          {categories.map((cat, index) => (
            <div className="category-item" key={index}>
              <img src={cat.image} alt={cat.name} />
              <p>{cat.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Image Slider Below Categories */}
      <div className="slider-container">
        <Slider {...settings}>
          {sliderImages.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`Banner ${index + 1}`} className="slider-img" />
            </div>
          ))}
        </Slider>
      </div>
      
      <div className="electronics-container">
      <div className="electronics-left">
        <h2>Best of Electronics</h2>
        <div className="product-slider">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="electronics-banner">
        <img src="/image/tv-appliances.png" alt="Electronics Offer" />
      </div> */}
      
    </div>
    </header>
   <MedialPart></MedialPart>
    <Footer></Footer>
    </div>
  );
};

export default Home;
