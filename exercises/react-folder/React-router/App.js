import React, { Component } from 'react';

//components
import About from "./About";
import Home from "./Home";
import Services from "./Services";
import MatchService from "./MatchService";
import { Link, Switch, Route } from "react-router-dom";

//services data
import services from "./services.json";

function App() {
    return (
        <div>
            <header>
                <h1>Intro to React Router</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                </nav>
            </header>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route exact path="/services" component={Services} />
                <Route path="/services/:serviceId" component={MatchService} />
            </Switch>
            <footer>
                ©2018
            </footer>
        </div>
    )
}

export default App;