import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css'; 

const Checkout = ({ cartItems, handleCheckout }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
    country: '',
  });

  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  useEffect(() => {
    if (cartItems.length === 0) {
      alert("Your cart is empty. Redirecting to products.");
      navigate('/');
    }
  }, [cartItems, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Cannot place order with an empty cart.");
      navigate('/');
      return;
    }
    
    if (handleCheckout) {
        handleCheckout(formData);
    }

    alert(`Order Placed Successfully! 
Total Payable: $${totalPrice.toFixed(2)} 
Shipping to: ${formData.name}`);
    navigate('/');
  };

  return (
    <div className="checkout-container">
      <div className="checkout-form-card">
        <h2>Shipping Information</h2>
        <form onSubmit={handleSubmit} className="checkout-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" name="address" required value={formData.address} onChange={handleChange} />
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city" required value={formData.city} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="zip">ZIP Code</label>
                    <input type="text" id="zip" name="zip" required value={formData.zip} onChange={handleChange} />
                </div>
            </div>

            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input type="text" id="country" name="country" required value={formData.country} onChange={handleChange} />
            </div>
            
            <hr />

            <div className="order-summary">
                <h3>Order Summary</h3>
                
                {cartItems.map(item => (
                    <div key={item.id} className="summary-item">
                        <span>{item.name} x {item.quantity}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                ))}

                <div className="order-summary-total">
                    <h4>Total Payable:</h4>
                    <h4>${totalPrice.toFixed(2)}</h4>
                </div>

                <button type="submit" className="place-order-button">
                    Place Order
                </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;