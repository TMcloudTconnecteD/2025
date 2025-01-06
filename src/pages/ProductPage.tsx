// File: src/pages/Products.tsx
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/data"; // Import product data
import { CartContext } from "../context/CartContext"; // Cart context
import "./ProductPage.css";

const ProductPage: React.FC = () => {
  const { shopName } = useParams<{ shopName: string }>(); // Get shop name from the URL
  const productList = products[shopName as keyof typeof products] || []; // Get products for the shop
  const { addToCart } = useContext(CartContext); // Access cart functionality

  return (
    <div className="products-container">
      <h1 className="page-heading">{shopName} Products</h1>
      <div className="product-card-container">
        {productList.length > 0 ? (
          productList.map((product) => {
            const discountedPrice = (product.price * 0.98).toFixed(2); // Calculate 2% discount
            return (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p className="price">
                  <span>Price: KES {product.price}</span>
                  <span className="discounted">Now: KES {discountedPrice}</span>
                </p>
                <button
                  className="add-to-cart"
                  onClick={() => addToCart({ ...product, discountedPrice })}
                >
                  Add to Cart
                </button>
              </div>
            );
          })
        ) : (
          <p className="no-products">No products available for this shop.</p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
