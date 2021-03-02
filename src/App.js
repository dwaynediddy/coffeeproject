import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './screens/Landing'
import Product from '../src/components/products/Products'

function App() {
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
