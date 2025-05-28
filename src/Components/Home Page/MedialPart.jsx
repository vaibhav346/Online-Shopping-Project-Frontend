import React from 'react';
import './MedialPart.css'


const MedialPart = () => {
  const sections = {
    "MOST SEARCHED FOR ON FLIPKA RT": ["SAMSUNG Galaxy S25 Edge", "CMF Phone 2 Pro", "Google Pixel 9A", "SAMSUNG F16", "Mobile", "POCO M7", "Nothing Phone 3a", "SAMSUNG Galaxy S25 Edge", "CMF Phone 2 Pro", "Google Pixel 9A", "SAMSUNG F16", "Mobile", "POCO M7", "Nothing Phone 3a",      "SAMSUNG Galaxy S25 Edge", "CMF Phone 2 Pro", "Google Pixel 9A", "SAMSUNG F16", "Mobile", "POCO M7", "Nothing Phone 3a", "SAMSUNG Galaxy S25 Edge", "CMF Phone 2 Pro", "Google Pixel 9A", "SAMSUNG F16", "Mobile", "POCO M7", "Nothing Phone 3a"
,    "Google Pixel 9A",  "SAMSUNG Galaxy S25 Edge", "CMF Phone 2 Pro",  "SAMSUNG F16", "Mobile", "POCO M7", "Nothing Phone 3a", "SAMSUNG Galaxy S25 Edge", "CMF Phone 2 Pro", "Google Pixel 9A", "SAMSUNG F16", "Mobile", "POCO M7", "Nothing Phone 3a"
,      "SAMSUNG Galaxy S25 Edge", "CMF Phone 2 Pro", "Google Pixel 9A", "SAMSUNG F16", "Mobile", "POCO M7", "Nothing Phone 3a", "SAMSUNG Galaxy S25 Edge", "CMF Phone 2 Pro", "Google Pixel 9A", "SAMSUNG F16", "Mobile", "POCO M7", "Nothing Phone 3a"

    ],
    "MOBILES": [
      "Motorola g64 5G", "OPPO Reno 12", "Redmi Note 50 Fusion", "REDMI 12 5G", "POCO C65","Motorola g64 5G", "OPPO Reno 12", "Redmi Note 50 Fusion", "REDMI 12 5G", "POCO C65","Motorola g64 5G", "OPPO Reno 12", "Redmi Note 50 Fusion", "REDMI 12 5G", "POCO C65"
    ],
    "CAMERA": [
      "GoPro Action Camera", "Nikon Camera", "Canon Camera", "Sony Camera","GoPro Action Camera", "Nikon Camera", "Canon Camera", "Sony Camera","GoPro Action Camera", "Nikon Camera", "Canon Camera", "Sony Camera"
    ],
    "LAPTOPS": [
      "Asus ROG Ally", "MacBook Pro M2", "Premium Laptop", "ASUS ROG Strix SCAR 16 (2023)", "Core i9 13th Gen","Asus ROG Ally", "MacBook Pro M2", "Premium Laptop", "ASUS ROG Strix SCAR 16 (2023)", "Core i9 13th Gen","Asus ROG Ally", "MacBook Pro M2", "Premium Laptop", "ASUS ROG Strix SCAR 16 (2023)", "Core i9 13th Gen"
    ],
    "TVS": [
      "TV", "LG TV", "Sony TV", "Samsung TV", "TCL TV", "Mi TV"
    ],
    "LARGE APPLIANCES": [
      "Television", "Washing Machines", "Refrigerators", "Air Conditioners"
    ],
    "CLOTHING": [
      "Sarees", "Green bridal lehenga", "Tops", "Apron for Doctors", "Shoes", "Sunglasses"
    ],
    "FOOTWEAR": [
      "Adidas Shoes", "Reebok Shoes", "Nike Shoes", "Puma Shoes", "Boots"
    ],
    "GROCERIES": [
      "PhonePe Grocery Voucher", "Hand Wash Soap", "Cashew Nuts"
    ],
    "BEST SELLING ON FLIPKART": [
      "Headphones", "Best Gas Geyser", "Kitchen Geyser"
    ],
    "FURNITURE": [
      "Furniture", "Sofas", "Beds", "Dining sets", "Wardrobes"
    ],
    "BGMH": [
      "Shampoo", "Whey Protein", "Homeopathy", "Cricket", "Cycles"
    ]
  };

  return (
    <div className="brand-directory">
      <h2>Top Stories : Brand Directory</h2>
      {Object.entries(sections).map(([category, items]) => (
        <div key={category} className="brand-section">
          <h4>{category}:</h4>
          <p>
            {items.map((item, idx) => (
              <a key={idx} href="#" className="brand-link">{item}</a>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MedialPart;
