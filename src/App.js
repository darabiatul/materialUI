import React, { Component, Fragment } from 'react';
import './style/style.css';
import Home from './Home/Home';
import Form from './event/event';
import MaterialUI from './component/MaterialUI';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Menu from './component/Menu';

class App extends Component {
  render() {
    return (
      <Router>
        
        <Menu/>

        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/event">
            <Form/>
          </Route>
          <Route path="/material">
            <MaterialUI />
          </Route>
        </Switch>
      </Router >
    )
  }

}
export default App;