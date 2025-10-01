import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const carouselImages = [
    '/assets/Image1.jpg',
    '/assets/Image2.jpeg',
    '/assets/Image3.jpg',
];

const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => 
            (prevIndex + 1) % carouselImages.length
        );
    };

    const goToPrevImage = () => {
        setCurrentImageIndex((prevIndex) => 
            (prevIndex - 1 + carouselImages.length) % carouselImages.length
        );
    };

    useEffect(() => {
        const interval = setInterval(goToNextImage, 5000); 
        return () => clearInterval(interval); 
    }, []); 

    return (
        <div className="home-container">
            <section className="carousel-section">
                <div className="carousel-inner">
                    <img 
                        src={carouselImages[currentImageIndex]} 
                        alt={`Carousel Image ${currentImageIndex + 1}`} 
                        className="carousel-image" 
                    />
                    
                    <button className="carousel-button prev" onClick={goToPrevImage}>
                        &#10094; 
                    </button>
                    
                    <button className="carousel-button next" onClick={goToNextImage}>
                        &#10095; 
                    </button>
                </div>
            </section>

            <section className="cta-banner">
                <h2>Shop Smarter, Live Better.</h2>
                <p>Explore our latest collection of laptops, TVs, and gadgets at unbeatable prices.</p>
                <Link to="/products" className="shop-all-products-button">Shop All Products</Link>
            </section>

            <section className="promo-banners">
                <div className="banner-item">
                    <img src="/assets/Apple laptop.jpeg" alt="Laptops" />
                    <h3>Laptops</h3>
                    <Link to="/products?category=laptops" className="shop-now-button">Shop Now</Link>
                </div>
                <div className="banner-item">
                    <img src="/assets/Oneplus Phone.jpeg" alt="Smartphones" />
                    <h3>Smartphones</h3>
                    <Link to="/products?category=smartphones" className="shop-now-button">Shop Now</Link>
                </div>
                <div className="banner-item">
                    <img src="/assets/Dell headphone.jpeg" alt="Headphones" />
                    <h3>Accessories</h3>
                    <Link to="/products?category=Headphones" className="shop-now-button">Shop Now</Link>
                </div>
            </section>
 
        </div>
    );
};

export default Home;