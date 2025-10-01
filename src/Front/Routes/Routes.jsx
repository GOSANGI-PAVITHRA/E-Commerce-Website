import React from "react";
import Products from "../Products/Products.jsx";
import Cart from "../cart/Cart.jsx";
import Checkout from "../checkout/Checkout.jsx"; 
import Auth from "../auth/Auth.jsx";             
import { Route, Routes as RouterRoutes } from "react-router-dom"; 

const Routes = (props) => {
  return (
    <div className="routes-container">
      <RouterRoutes>
        <Route path="/" exact element={
          <Products
            productItems={props.productItems}
            handleAddProduct={props.handleAddProduct}
          />
        } />
        
        <Route path="/products" exact element={
          <Products
            productItems={props.productItems}
            handleAddProduct={props.handleAddProduct}
          />
        } />

        <Route path="/cart" exact element={
          <Cart
            cartItems={props.cartItems}
            handleAddProduct={props.handleAddProduct}
            handleRemoveProduct={props.handleRemoveProduct}
            handleCartClearance={props.handleCartClearance}
          />
        } />

        <Route path="/auth" exact element={<Auth />} />
        
        <Route path="/checkout" exact element={
          <Checkout 
            cartItems={props.cartItems}
            handleCheckout={props.handleCheckout} 
          />
        } />
        
        <Route path="*" element={
            <h1 style={{textAlign: 'center', margin: '50px'}}>404 Not Found</h1>
        } />
        
      </RouterRoutes>
    </div>
  );
};

export default Routes;