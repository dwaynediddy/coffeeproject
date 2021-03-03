import React, { useState, useEffect } from 'react'
import './App.css';
import { commerce } from './components/lib/commerce'

import Products from './products/Products'
import Navbar from './components/navbar/Navbar'

function StoreApp() {
  const [ products, setProdcuts ] = useState([])
  // const [cart, setCart] = useState({})

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()

    setProdcuts(data)
  }

  useEffect(() => fetchProducts(), [])

  return (
    <div className="App">
      <Navbar />
      <Products products={products} />
    </div>
  );
}

export default StoreApp;
