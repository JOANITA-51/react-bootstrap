import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from "./components/pages/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path = "/" component={Home} />
          
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
