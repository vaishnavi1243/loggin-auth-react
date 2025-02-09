import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard';
import ProductCategory from './components/productCategory';
import ProductList from './components/products';
import Cart from './components/Cart';
import log from 'loglevel';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    log.info('info', 'Welcome to the application!');
    setTimeout(()=>{
      log.info('Fetching products...');
      const fetchedProducts = [
        { id: 1, name: 'Product 1', price: 100, category: 'Electronics' },
        { id: 2, name: 'Product 2', price: 200, category: 'Clothing' },
        { id: 3, name: 'Product 3', price: 150, category: 'Electronics' },
        { id: 4, name: 'Product 4', price: 250, category: 'Clothing' },
        { id: 5, name: 'Product 5', price: 50, category: 'Electronics' },
        { id: 6, name: 'Product 6', price: 80, category: 'Clothing' },
        { id: 7, name: 'Product 7', price: 300, category: 'Electronics' },
        { id: 8, name: 'Product 8', price: 120, category: 'Clothing' },
        { id: 9, name: 'Product 9', price: 400, category: 'Electronics' },
        { id: 10, name: 'Product 10', price: 500, category: 'Clothing' },
        { id: 11, name: 'Product 11', price: 600, category: 'Electronics' },
        { id: 12, name: 'Product 12', price: 700, category: 'Clothing' },
      ];
      setProducts(fetchedProducts);
      log.info('Products loaded successfully:', fetchedProducts);
    },2000)
  
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    log.info(`Added to cart: ${product.name}`, { product });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    log.info(`Removed product from cart with ID: ${productId}`);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/product-list" element={<ProductList products={products} addToCart={addToCart} />} />
        <Route path="/product-category" element={<ProductCategory products={products} addToCart={addToCart}/>} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
    </Router>
  );
};

export default App;
