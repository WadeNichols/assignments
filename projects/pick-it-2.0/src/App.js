import React from "react";

//My Components
import Search from "./Search"
import HowTo from "./HowTo"
import Header from "./Header"
import Welcome from "./Welcome"

import { Switch, Route } from "react-router-dom"


export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/search" component={Search} />
        <Route exact path="/how-to" component={HowTo} />

      </Switch>
      <footer>©2018</footer>
    </div>
  );
}