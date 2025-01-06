// File: src/components/ShopCard/ShopCard.tsx
import React from "react";
import "./ShopCard.css";

interface ShopCardProps {
  name: string;
  image: string;
}

const ShopCard: React.FC<ShopCardProps> = ({ name, image }) => {
  return (
    <div className="shop-card">
      <img src={image} alt={name} className="shop-image" />
      <h3 className="shop-name">{name}</h3>
    </div>
  );
};

export default ShopCard;
