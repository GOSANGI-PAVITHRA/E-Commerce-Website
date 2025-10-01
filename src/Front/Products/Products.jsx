import React from "react";
import "./Products.css"; 

const Products = ({ productItems, handleAddProduct }) => {
    return (
        <div className="products-container">
            {productItems.map((product) => (
                <div key={product.id} className="product-card">
                    
                    <img 
                        className="product-image" 
                        src={product.image} 
                        alt={product.name}
                    />
                    
                    <div className="product-details">
                        <h3 className="product-name">{product.name}</h3>
                        <div className="product-price">
                            ${product.price.toFixed(2)}
                        </div>
                    </div>
                    
                    <button 
                        className="product-add-button" 
                        onClick={() => handleAddProduct(product)}
                    >
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Products;