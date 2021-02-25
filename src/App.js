import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Landing from './screens/Landing'
import Info from './components/infosection/Info'

// import Navbar from './components/header/Navbar'
// import SideBar from './components/header/sidebar/SideBar'

function App() {
  return (
    <div className="App">
      <Router>
        <Landing />
        <Info />
      </Router>
    </div>
  );
}

export default App;
