import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import NoMatch from './NoMatch';
import Layout from './components/Layout';
import NavigationBar from './components/NavigationBar';
// import Jumbotron from './components/Jumbotron';
function App() {
  return (
    <>
      <NavigationBar/>
      {/* <Jumbotron/> */}
      <Layout>
        <Router>
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
