// ProductCategory.js
import React from 'react';
import log from 'loglevel';
import { useNavigate } from 'react-router-dom';
const ProductCategory = ({ products ,addToCart}) => {
    const navigate = useNavigate();
    const categories = products.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
    }, {});

    return (
        <div style={{ padding: '20px' }}>
            <h1>Product Category</h1>
            <button
                style={{ marginTop: '20px', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}
                onClick={() => {
                    log.info('Navigating to Dashboard from Product Category');
                    navigate('/');
                }}
            >
                Go to Dashboard
            </button>
            <button
                style={{ marginTop: '20px', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}
                onClick={() => {
                    log.info('Navigating to Cart from Product Category');
                    navigate('/cart');
                }}
            >
                Go to Cart
            </button>
            {Object.keys(categories).map((category) => (
                <div key={category}>
                    <h2>{category}</h2>
                    <ul>
                        {categories[category].map((product) => (
                            <li key={product.id}>
                                {product.name} - ${product.price}
                                <button onClick={() => { log.info('Adding product to cart:', product); addToCart(product); }}>
                                              Add to Cart
                                            </button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default ProductCategory;
