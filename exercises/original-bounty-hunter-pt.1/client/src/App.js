import React, { Component } from 'react';
import axios from "axios";

const baseUrl = "/api/bounties"

class App extends Component {

  _addCandy(url, candy){
    axios.post(url, candy).then(response => response.data);
  }

  _getBounties(url){
    return axios.get(url, {}).then(response => response.data)
  }
  
  componentDidMount(){
    this._getBounties(baseUrl)
    .then(bounties => console.log(bounties))

    this._addCandy(baseUrl, {name: "starwars name"})
    .then(candy => console.log(candy))
  }
  render() {
    return (
      <div>

      </div>
    );
  }
}

export default App;
