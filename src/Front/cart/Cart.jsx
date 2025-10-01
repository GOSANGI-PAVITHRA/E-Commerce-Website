import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";


const Cart = ({ 
    cartItems, 
    handleAddProduct, 
    handleRemoveProduct, 
    handleCartClearance 
}) => {
    const totalPrice = cartItems.reduce(
        (price, item) => price + item.quantity * item.price, 
        0
    );

    return (
        <div className="cart-container">
            
            <div className="cart-items-header">
                <h2>Your Shopping Cart ({cartItems.length} items)</h2>
                {cartItems.length > 0 && (
                    <button 
                        className="empty-cart-button" 
                        onClick={handleCartClearance}
                    >
                        Empty Cart
                    </button>
                )}
            </div>
            
            <div className="cart-items-list">
                {cartItems.length === 0 && (
                    <div className="cart-empty-message">
                        No items are added to the cart.
                        <Link to="/">Shop Now</Link>
                    </div>
                )}

                {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        
                        <div className="cart-item-info">
                            <img 
                                className="cart-item-image" 
                                src={item.image} 
                                alt={item.name}
                            />
                            <div className="cart-item-details">
                                <h3>{item.name}</h3>
                                <span className="cart-item-price">
                                    ${item.price.toFixed(2)}
                                </span>
                            </div>
                        </div>
                    
                        <div className="cart-item-controls">
                            <button 
                                className="cart-add-button" 
                                onClick={() => handleAddProduct(item)}
                            >
                                +
                            </button>
                            <span className="cart-quantity">{item.quantity}</span>
                            <button 
                                className="cart-remove-button" 
                                onClick={() => handleRemoveProduct(item)}
                            >
                                -
                            </button>
                        </div>
                        
                        <div className="cart-item-subtotal">
                            ${(item.quantity * item.price).toFixed(2)}
                        </div>

                    </div>
                ))}
            </div>

            {cartItems.length > 0 && (
                <div className="cart-footer">
                    <div className="cart-total-price">
                        Total Order: 
                        <span className="total-amount">${totalPrice.toFixed(2)}</span>
                    </div>

                    <div className="cart-actions">
                        <Link to="/checkout" className="checkout-link">
                            <button className="checkout-button">
                                Checkout
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;