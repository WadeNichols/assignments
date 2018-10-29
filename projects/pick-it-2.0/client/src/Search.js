import React, { Component } from 'react'
import axios from "axios"
import Header from "./Header"
import Idle from "./Idle"
import Loading from "./Loading"
import Error from "./Error"

const tabUrl = `https://vschool-cors.herokuapp.com?url=http://www.songsterr.com/a/ra/songs.json?pattern=`

export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            loading: true,
            idle: true,
            err: null,
            alert: null,
            input: ""
        };
        this.handleResults = this.handleResults.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // this.handleNull = this.handleNull.bind(this)
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }
    handleResults(e) {
        e.preventDefault();
        this.setState({ idle: false, loading: true });
        axios
            .get(tabUrl + this.state.input)
            .then(response => {
                if(response.data.length > 0){
                    this.setState({
                        alert: false
                    })
                } else {
                    this.setState({
                        alert: true
                    })
                }
                this.setState({
                    data: response.data,
                    loading: false,
                    err: null
                });
             
            })
            .catch(err => {
                this.setState({
                    data: null,
                    loading: false,
                    err: { message: "404, data not found" }
                });
            });
    }


    render() {
        const { loading, err, data, idle } = this.state;
        const tabList = this.state.data.map(item => (
            <div key={item.id}>
                <input type="checkbox"></input>
                <a href={`http://www.songsterr.com/a/wa/song?id=${item.id}`}>
                    {item.title}
                </a>
            </div>
        ));
        return (
            <div>
                <form onSubmit={this.handleResults} type="submit">
                    <button onSubmit={this.handleResults} key="{id}" type="submit">Search</button>
                    <input onChange={this.handleChange} value={this.state.input} type="text"/>
                </form>
                <Idle idle={idle}>
                    <Loading loading={loading}>
                        <Error err={err}>
                            <ul>{this.state.alert ? "You're search returned no results": tabList}</ul>
                        </Error>
                    </Loading>
                </Idle>
            </div>
        )
    }
}
