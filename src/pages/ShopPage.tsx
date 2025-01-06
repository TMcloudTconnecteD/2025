import React from "react";
import { useParams } from "react-router-dom";
import { categories, shops } from "../data/data";
import ShopCard from "../components/ShopCard/ShopCard";
import "./ShopPage.css";

const ShopPage: React.FC = () => {
  // Extract categoryId from URL params with fallback
  const { categoryId } = useParams<{ categoryId: string }>();

  // Ensure categoryId is always a string (fallback to empty string or default categoryId)
  const validCategoryId = categoryId || ""; // Use '' as fallback or specify a default value

  // Find the category using validCategoryId
  const category = categories.find(
    (cat) => cat.id === parseInt(validCategoryId)
  );

  // Get the shop list for the categoryId, with fallback to an empty array if no valid shops found
  const shopList = shops[parseInt(validCategoryId)] || [];

  return (
    <div className="shop-page">
      <h1 className="shop-heading">
        {category?.name ? `${category.name} Shops` : "Shops"}
      </h1>
      <div className="shop-card-container">
        {shopList.length > 0 ? (
          shopList.map((shop, index) => (
            <ShopCard key={index} name={shop.name} image={shop.image} />
          ))
        ) : (
          <p>No shops available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
