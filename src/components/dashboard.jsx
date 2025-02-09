// Dashboard.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import log from 'loglevel';

const Dashboard = () => {
  const navigate = useNavigate();
  return (

    <div style={{ padding: '20px', display:'flex',alignItems:'center',justifyContent:'center', flexDirection:"column" }}>
<div style={{display:'flex', flexDirection:"column"}}>
  <h1 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 'bold', color: '#333' }}>
  Welcome to E-Commerce Application
</h1>

    <h5 style={{display:"flex",justifyContent:'center'}}>Dashboard</h5>
    </div>
    <div style={{display:"flex", flexDirection:"row"}}>
    <button onClick={() => { log.info('Navigating to Product List'); navigate('/product-list'); }}>
      Go to Product List
    </button>
    <button onClick={() => { log.info('Navigating to Product Category'); navigate('/product-category'); }}>
      Go to Product Category
    </button>
    <button onClick={() => { log.info('Navigating to Cart'); navigate('/cart'); }}>
      Go to Cart
    </button>
    </div>
  </div>
  );
};

export default Dashboard;
