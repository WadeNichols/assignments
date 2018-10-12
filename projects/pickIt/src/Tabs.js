import React, { Component } from 'react'
import axios from 'axios'

const tabUrl = `https://vschool-cors.herokuapp.com?url=http://www.songsterr.com/a/ra/songs.json?pattern=`

export default class Tabs extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            // lyrics: [],
            loading: true,
            err: null,
            input: ""
        }
        this.handleResults = this.handleResults.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.setState({
           input: event.target.value
        })
    }

    handleResults(e) {
        e.preventDefault();
        axios.get(tabUrl + this.state.input)
            .then (response => {
            this.setState({
                data: response.data, loading: false, err: null})
        })
        .catch(err => {this.setState({data: null, loading: false, err: {message:"404, data not found"}})})
    }



    render() {
        const {data, loading, err} = this.state
        console.log(this.state.data)
        const tabList = data.map(item => (<div key ={item.id}><a target="_blank"href={`http://www.songsterr.com/a/wa/song?id=${item.id}`}>{item.title}</a>
        </div>
        ))
        return (
            <div>
                <form onSubmit={this.handleResults}type="submit">
                    <button onSubmit={this.handleResults}key='{id}'type="submit">Submit</button>
                    <input onChange={this.handleSubmit}value={this.state.input} type="text"/>
                </form>
                {loading ? 
                    <div>...Gathering results</div>
                    :
                    err ? 
                    <p>err.message</p>
                    :
                    <ul>{tabList}</ul>
                    }
            </div>
        )
    }
}
