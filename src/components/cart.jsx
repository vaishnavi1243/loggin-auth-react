import React, { useEffect } from 'react';
import log from 'loglevel';
import { useNavigate } from 'react-router-dom';
const Cart = ({ cart, removeFromCart }) => {
  const navigate = useNavigate();
  useEffect(() => {
    log.info('Cart component rendered with items:', cart);
  }, [cart]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Cart</h1><button
        style={{ marginTop: '20px', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}
        onClick={() => {
          log.info('Navigating to Dashboard from Cart');
          navigate('/');
        }}
      >
        Go to Dashboard
      </button>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => { log.info('Removing product from cart:', item); removeFromCart(item.id); }}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
