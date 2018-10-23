import React, { Component } from 'react'
import axios from "axios"
import Character from "./Character"


const url = "https://vschool-cors.herokuapp.com?url=https://swapi.co/api/people"

export default class Characters extends Component {
    constructor() {
        super();
        this.state = {
            characters: [],
            loading: true,
            err: null
        }
    }

    getCharacterData(url) {
        return axios.get(url).then(response => response.data.results)
    }

    handleGetCharacterData(){
        this.getCharacterData(url)
            .then(characters => this. setState ({
                characters,

            }))
    }

    componentDidMount() {
        this.handleGetCharacterData();
    }

    render() {
        return this.props.render(this.state)
    }
}
