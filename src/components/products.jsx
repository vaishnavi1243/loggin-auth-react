import React, { useEffect } from 'react';
import log from 'loglevel';
import { useNavigate } from 'react-router-dom';
const ProductList = ({ products, addToCart }) => {
  const navigate = useNavigate();
  useEffect(() => {
    log.info('ProductList component rendered with products:', products);
  }, [products]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Product List</h1>
      <button
        style={{ marginTop: '20px', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}
        onClick={() => {
          log.info('Navigating to Dashboard from ProductList');
          navigate('/');
        }}
      >
        Go to Dashboard
      </button>
      <button
        style={{ marginTop: '20px', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}
        onClick={() => {
          log.info('Navigating to Cart from ProductList');
          navigate('/cart');
        }}
      >
        Go to Cart
      </button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => { log.info('Adding product to cart:', product); addToCart(product); }}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
