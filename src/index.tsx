import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./context/CartContext"; // Import CartProvider

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <CartProvider>  {/* Wrap App with CartProvider */}
      <App />
    </CartProvider>
  </React.StrictMode>
);
