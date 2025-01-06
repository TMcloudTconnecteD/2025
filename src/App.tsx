// File: src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Categories from "./pages/Categories";
import ShopPage from "./pages/ShopPage";
import Products from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Feedback from "./components/Feedback/Feedback";

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <main>
          <Routes>
            {/* Home Page: Displays Categories */}
            <Route path="/" element={<Categories />} />

            {/* Shop Page: Displays Shops for Selected Category */}
            <Route path="/data/:categoryId" element={<ShopPage />} />

            {/* Products Page: Displays Products for Selected Shop */}
            <Route
              path="/pages/ShopPage/:shopName/products"
              element={<Products />}
            />

            {/* Cart Page: Displays Cart Items */}
            <Route path="/cart" element={<Cart />} />

            {/* Checkout Page: Handles Order Checkout */}
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>

        {/* Feedback Component */}
        <Feedback />

        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
