// File: src/components/CategoryCard/CategoryCard.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./CategoryCard.css";

interface CategoryCardProps {
  id: number;
  name: string;
  image: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ id, name, image }) => {
  return (
    <Link to={`/shops/${id}`} className="category-card-link">
      <div className="category-card">
        <img src={image} alt={name} className="category-image" />
        <h3 className="category-name">{name}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
