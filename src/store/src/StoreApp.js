import React, { useState, useEffect } from 'react'
import './App.css';
import { commerce } from './components/lib/commerce'

import Products from './products/Products'
import Navbar from './components/navbar/Navbar'

function StoreApp() {
  const [ products, setProdcuts ] = useState([])
  const [cart, setCart] = useState({})

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()

    setProdcuts(data)
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())

    
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)

    setCart(item.cart)
  }

  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])

  console.log(cart)

  return (
    <div className="App">
      <Navbar totalItems={cart.total_items} />
      <Products products={products} onAddToCart={handleAddToCart} />
    </div>
  );
}

export default StoreApp;
