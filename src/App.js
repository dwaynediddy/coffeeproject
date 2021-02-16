import './App.css'
import { BrowserRouter as Router} from 'react-router-dom'

import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import Profile from './components/Profile'

function App() {
  return (
    <div className="App">
      <h2>Livs bitch ass cawfee shop</h2>
      <LoginButton />
      <LogoutButton />
      <Profile /> 
    </div>
  );
}

export default App;
