import './App.css'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './screens/Landing'
import Product from '../src/components/products/Products'

import { commerce } from '../src/components/commerce/commerce'

function App() {

  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const { data }= await commerce.products.list()

    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/products" component={Product} />
        </Switch>
        {/* <Landing />
        <Product /> */}
      </Router>
    </div>
  );
}

export default App;
