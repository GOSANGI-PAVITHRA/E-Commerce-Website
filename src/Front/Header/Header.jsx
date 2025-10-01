import React from "react";
import { Link } from "react-router-dom"; 
import './Header.css'; 

const Header = ({ cartItems }) => {
    return (
        <header className="header">
            
            <div className="logo">
                <Link to="/">
                    <h1>Shoppy</h1>
                </Link>
            </div>

            <nav className="header-links">
                <ul>
                    <li>
                        <Link to="/">Home</Link> 
                    </li>
                    
                    <li>
                        <Link to="/products">Products</Link> 
                    </li>
                    
                    
                    <li>
                        <Link to="/cart" className="cart-link">
                            Cart
                        </Link>
                    </li>

                    <li>
                        <Link to="/auth">Login</Link>
                    </li>
                    
                </ul>
            </nav>
        </header>
    );
};

export default Header;