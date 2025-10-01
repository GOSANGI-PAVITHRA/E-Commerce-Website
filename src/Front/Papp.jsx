import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import data from "../back/Data/Data"; 
import Header from "./Header/Header";
import Products from "./Products/Products"; 
import Cart from "./cart/Cart"; 
import Auth from "./auth/Auth"; 
import Checkout from "./checkout/Checkout"; 
import Footer from "./Footer/Footer";
import Home from "./Home/Home"; 

const Papp = () => {
  const { productItems } = data;
  const [cartItems, setCartItems] = useState([]);
  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);

    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);

    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleCartClearance = () => {
    setCartItems([]);
  };
  
  const handleCheckout = () => {
    setCartItems([]);
  };

  return (
    <div>
      <Router>
        <Header cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route
            path="/products"
            element={<Products productItems={productItems} handleAddProduct={handleAddProduct} />}
          />
          
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                handleAddProduct={handleAddProduct}
                handleRemoveProduct={handleRemoveProduct}
                handleCartClearance={handleCartClearance}
              />
            }
          />
          <Route path="/auth" element={<Auth />} />
          <Route 
            path="/checkout" 
            element={<Checkout cartItems={cartItems} handleCheckout={handleCheckout} />} 
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default Papp;