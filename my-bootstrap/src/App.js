import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import NoMatch from './NoMatch';
import Layout from './components/Layout';
function App() {
  return (
    <>
      <Layout>
        <Router>
        <nav>
          <ul>
            <li>
            <Link to = "/">Home</Link>
            </li>
            <li>
              <Link to = "/about">About</Link>
            </li>
            <li>
              <Link to = "/contact">Contact</Link>
            </li>
                    
          </ul>

        </nav>
        
          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path="/about"><About/></Route>
            <Route path = "/contact"><Contact/></Route>
            <Route ><NoMatch/></Route>
          </Switch>
        </Router>
      </Layout>
    </>
  );
}

export default App;
