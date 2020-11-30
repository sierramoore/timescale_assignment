import './App.scss';
import { Navigation } from './components/Navigation/Navigation';
import { About } from './components/About';
import { Blog } from './components/Blog';
import { Home } from './components/Home';
import { Footer } from './components/Footer/Footer';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Switch> 
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
