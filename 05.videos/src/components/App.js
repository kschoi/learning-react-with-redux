import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import Home from './Home';

class App extends React.Component {

  render() {
    return (
      <HashRouter basename="/">
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
      </HashRouter>
    );
  }
};

const Contact = () => <div>Contact...</div>;

export default App;