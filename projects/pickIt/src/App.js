import React from "react";

//THIRD PARTY
import Particles from "react-particles-js";

//MY COMPONENTS
import Search from "./Search";
import About from "./About";
import Header from "./Header";
import Welcome from "./Welcome";

import { Link, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <div className="app-container">
        <Particles
          className="particle"
          params={{
            particles: {
              line_linked: {
                shadow: {
                  enable: false,
                  color: "#555",
                  blur: 0
                }
              }
            }
          }}
        />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/search" component={Search} />
          <Route exact path="/about" component={About} />
        </Switch>
        <footer>©2018</footer>
      </div>
    </div>
  );
}

export default App;
