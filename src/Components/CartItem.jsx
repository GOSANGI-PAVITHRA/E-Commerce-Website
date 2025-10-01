import React from 'react';

const CartItem = ({ item, handleAddProduct, handleRemoveProduct }) => {
  const itemSubtotal = (item.quantity * item.price).toFixed(2);
  
  return (
    <div className="cart-item-row">
      <img
        className="cart-item-image"
        src={item.image}
        alt={item.name}
      />
      <div className="cart-item-details">
        <h4 className="cart-item-name">{item.name}</h4>
        <p className="cart-item-unit-price">${item.price.toFixed(2)}</p>
      </div>
      
      <div className="cart-item-quantity-control">
        <button
          className="cart-quantity-button remove"
          onClick={() => handleRemoveProduct(item)}
        >
          –
        </button>
        <span className="cart-quantity-display">{item.quantity}</span>
        <button
          className="cart-quantity-button add"
          onClick={() => handleAddProduct(item)}
        >
          +
        </button>
      </div>
      
      <div className="cart-item-subtotal">
        <span className="subtotal-label">Subtotal:</span>
        <span className="subtotal-value">${itemSubtotal}</span>
      </div>
    </div>
  );
};

export default CartItem;