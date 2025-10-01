import React from "react";
import { Link } from "react-router-dom"; 
import "./styleFooter.css";

export default function Footer() {
  return (
    <div className="footer-main">
      <div className="container">
      
        <div className="footer-columns"> 
          <div className="col">
            <h4>COMPANY</h4>
            <ul className="list-unstyled"> 
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/privacy">Privacy Policies</Link></li>
            </ul>
          </div>
          
          
          <div className="col">
            <h4>ONLINE SHOPPING</h4>
            <ul className="list-unstyled"> 
              
              <li><Link to="/products/laptops">LAPTOPS</Link></li>
              <li><Link to="/products/watches">WATCHES</Link></li>
              <li><Link to="/products/mobiles">MOBILES</Link></li>
              <li><Link to="/products/gadgets">ELECTRONIC GADGETS</Link></li>
            </ul>
          </div>
          
          
          <div className="col">
            <h4>GET HELP</h4>
            <ul className="list-unstyled"> 
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/shipping">SHIPPING</Link></li>
              <li><Link to="/returns">RETURNS</Link></li>
              <li><Link to="/payment">PAYMENT OPTIONS</Link></li>
            </ul>
          </div>
          
          
          <div className="col">
            <h4>FOLLOW US</h4>
            <ul className="list-unstyled"> 
              <li>
                <a className="footer-a" href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a>
              </li>
              <li>
                <a className="footer-a" href="https://facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
              </li>
              <li>
                <a className="footer-a" href="https://instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
              </li>
            </ul>
          </div>
          
        </div>

        <hr className="footer-divider" />
        
        
        <div className="footer-bottom-row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} XYZ.Products | All rights reserved | 
            <Link to="/terms" className="footer-link-inline">Terms Of Service</Link> | 
            <Link to="/privacy" className="footer-link-inline">Privacy</Link>
          </p>
        </div>
        
      </div>
    </div>
  );
}