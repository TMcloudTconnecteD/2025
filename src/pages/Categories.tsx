// File: src/pages/Categories.tsx
import React from "react";
import { categories } from "../data/data"; // Import categories from data.tsx
import CategoryCard from "../components/CategoryCard/CategoryCard"; // Import CategoryCard component
import "./Categories.css";

const Categories: React.FC = () => {
  return (
    <div className="categories-container">
      {/* Page heading */}
      <h1 className="page-heading">shopLink_shopFree🦅</h1>

      {/* Container for category cards */}
      <div className="card-container">
        {categories.map((category) => (
          <CategoryCard
            key={category.id} // Unique key for each card
            id={category.id}
            name={category.name}
            image={category.image} // Image for the category
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
