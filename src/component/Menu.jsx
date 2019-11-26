import React, { Component, Fragment } from 'react';
import '../style/style.css';
import Home from '../Home/Home';
import Form from '../event/event';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class Menu extends Component {
    render() {
        return (
                <div className="wrapper">
                    <div className="header">
                        <div className="navbar">
                            <div className="logo">
                                <img className="imgfluid" src={require('../logo/babastudio-logo.png')} />
                            </div>
                            <div className="nama">
                                <ul>
                                    <Link to="/" className="li">HOME</Link>
                                    <Link to="/event" className="li">EVENT</Link>
                                    <Link to="/material" className="li">MATERIALUI</Link>
                                    <Link to="/" className="li">GALLERY</Link>
                                    <Link to="/" className="li">KONTAK</Link>
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }

}
export default Menu;