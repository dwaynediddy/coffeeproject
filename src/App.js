import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './screens/Landing'
import StoreApp from './store/src/StoreApp'

import { commerce } from './components/commerce/commerce'

function App() {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()

    setProducts(data)
  }

  useEffect(() => fetchProducts, [])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/StoreApp" component={StoreApp} products={products} />
        </Switch>
        {/* <Landing />
        <Product /> */}
      </Router>
    </div>
  );
}

export default App;
