import './App.css'
import Navbar from './components/header/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
// import { LinkS } from 'react-scroll'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
