// File: src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Categories from "./pages/Categories";
import ShopPage from "./pages/ShopPage";
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
            <Route path="/shops/:categoryId" element={<ShopPage />} />

            {/* Commenting out ProductPage and its routes for now */}
            {/* <Route path="/shops/:shopName/products" element={<ProductPage />} /> */}

            {/* Cart Page: Displays Cart Items */}
            <Route path="/cart" element={<Cart />} />

            {/* Checkout Page: Handles Order Checkout */}
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>

        {/* Feedback Section */}
        <Feedback />

        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
