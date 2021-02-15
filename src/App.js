import './App.css'
import { BrowserRouter as Router} from 'react-router-dom'

import { createBrowserHistory } from "history";

// Enable Browser History for Back and Forward Button
export const appHistory = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={appHistory} />   
      <h2>Livs bitch ass cawfee shop</h2>
    </div>
  );
}

export default App;
