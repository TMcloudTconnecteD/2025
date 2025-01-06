// File: src/components/CategoryCard.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./CategoryCard.css";

interface CategoryCardProps {
  id: number;
  name: string;
  image: string; // Can handle both static images and GIFs
}

const CategoryCard: React.FC<CategoryCardProps> = ({ id, name, image }) => {
  return (
    <Link to={`/pages/ShopPage/${name}`} className="category-card" key={id}>
      <img src={image} alt={name} className="category-card-image" />
      <h3 className="category-card-title">{name}</h3>
    </Link>
  );
};

export default CategoryCard;
