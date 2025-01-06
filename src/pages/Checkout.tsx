import React from "react";
import { useCart } from "../context/CartContext";
import "./Checkout.css";

const Checkout: React.FC = () => {
  const { cartItems, totalPrice } = useCart();

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="checkout-item">
          <p>{item.name}</p>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
      <h2>Total: ${totalPrice}</h2>
      <button>Place Order</button>
    </div>
  );
};

export default Checkout;
