// File: src/pages/Shop.tsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { shops } from "../data/data"; // Import shops data
import "./ShopPage.css";

const ShopPage: React.FC = () => {
  const { categories } = useParams<{ categories: string }>(); // Get category from the URL
  const shopList = shops[category as keyof typeof shops] || []; // Get shops for the category

  return (
    <div className="shop-container">
      <h1 className="page-heading">{category} Shops</h1>
      <div className="shop-card-container">
        {shopList.length > 0 ? (
          shopList.map((shop) => (
            <Link
              key={shop.id}
              to={`/ProductPage/${shop.name}`} // Route to products page
              className="shop-card"
            >
              <img src={shop.image} alt={shop.name} />
              <h3>{shop.name}</h3>
            </Link>
          ))
        ) : (
          <p className="no-shops">No shops available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
