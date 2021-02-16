import './App.css'
import { BrowserRouter as Router} from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import Profile from './components/Profile'

function App() {
  const { isLoading } = useAuth0()

  if (isLoading) return <div>Loading...</div>
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
