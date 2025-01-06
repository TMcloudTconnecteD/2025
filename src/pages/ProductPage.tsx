import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Import useCart hook
import { products } from "../data/data";
import "./ProductPage.css";

const ProductPage: React.FC = () => {
  const { shopName } = useParams<{ shopName: string }>(); // Get shop name from the URL
  const productList = products[shopName as keyof typeof products] || []; // Get products for the shop
  const { addToCart } = useCart(); // Use the useCart hook to get the cart functions

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
                  onClick={() =>
                    addToCart({
                      id: product.id, // Ensure id is passed as a number
                      name: product.name,
                      price: parseFloat(discountedPrice), // Convert discounted price to a number
                      quantity: 1,
                      image: product.image,
                    })
                  }
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
