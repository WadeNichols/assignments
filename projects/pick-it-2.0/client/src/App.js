import React from "react";
import AppBar from '@material-ui/core/AppBar'

//My Components
import Search from "./Search"
import HowTo from "./HowTo"
import Header from "./Header"
import Welcome from "./Welcome"
import FavoritesList from "./FavoritesList"


import { Switch, Route } from "react-router-dom"


export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/search" component={Search} />
        <Route exact path="/how-to" component={HowTo} />
        <Route path="/favorites" component={FavoritesList} />
      </Switch>
      <footer>©2018</footer>
    </div>
  );
}