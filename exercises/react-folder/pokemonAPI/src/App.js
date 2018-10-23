import React from 'react';
import Timer from './Timer';
import CoinFlip from './CoinFlip';
import PokemonList from './PokemonList';

import Test from "./Test"

function App (){
    return (
      <div className="App">
        <Timer />
        <CoinFlip />
        <PokemonList />
        <Test/>
      </div>
    );
}

export default App;
