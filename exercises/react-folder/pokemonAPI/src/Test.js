import React, { Component } from 'react';
import axios from "axios";

export default class Test extends Component {
    constructor() {
        super();
        this.state = {
            songs: []
        }
    }

    componentDidMount() {
        const artistFromInput = "stairway to heaven"
        axios.get(`https://vschool-cors.herokuapp.com?url=http://www.songsterr.com/a/ra/songs.json?pattern=stairway%to%heaven`)
            .then(response => {
                // do stuff with data
                //shoot off another request 
                //   THEN set state with ALL the data compiled together
                this.setState({
                    songs: response.data
                })
                // window.open("http://www.songsterr.com/a/wa/song?id=258")
            })
        //separate get request for lyrics
        // 
    }
    render() {
        const songComponents = this.state.songs.map(song => (
            <div key={song.id}><a target="_blank" href={`http://www.songsterr.com/a/wa/song?id=${song.id}`}>{song.title}</a>
            </div>
        ))
        return (
            <div>
                {songComponents}
            </div>
        )
    }
}
