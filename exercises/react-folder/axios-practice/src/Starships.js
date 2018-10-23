import React, { Component } from 'react'
import axios from "axios"
import CharacterView from "./CharacterView"

const url = "https://vschool-cors.herokuapp.com?url=https://swapi.co/api/people"


export default class Starships extends Component {
    constructor() {
        super();
        this.state = {
            starship: [],
            loading: true,
            err: null
        }
    }

getStarshipData(url) {

}

    render() {
        const {loading, starship, err} = this.state
        return (
            <div>
                {loading ?
                    <div>...Loading starship data</div>
                    :
                    err ?
                        <div>Sorry, your shit ain't here</div>
                        :
                        <div>
                            {starshipComponents}
                        </div>
                }
                
            </div>
        )
    }
}
