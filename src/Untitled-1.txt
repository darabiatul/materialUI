import React, { Component, Fragment } from 'react';
import './style/style.css';
import Home from './Home/Home';
import Form from './event/event';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <div className="header">
            <div className="navbar">
              <div className="logo">
                <img className="imgfluid" src={require('./logo/babastudio-logo.png')} />
              </div>
              <div className="nama">
                <ul>
                  <Link to="/" className="li">HOME</Link>
                  <Link to="/" className="li">BLOGS</Link>
                  <Link to="/" className="li">GALLERY</Link>
                  <Link to="/" className="li">KONTAK</Link>
                  <Link to="/form" className="li">SIMPLE EVENT</Link>
                </ul>
              </div>
            </div>
          </div>
          <Fragment>
            {/*<Home/> */}
            <Route path="/" exact component={Home} />
            <Route path="/form" component={Form} />
          </Fragment>
        </div>
      </Router >
    )
  }

}
export default App;