import React, { Component } from 'react'

import axios from "axios"


export default class Homeworld extends Component {
    constructor() {
        super();
        this.state = {
            homeworldData: null,
            loading: true
        }
    }

    getHomeworldData(url) {
        return axios.get(url).then(response => response.data)
    }
    
    handleGet(url) {
        return this.getHomeworldData(url)
        .then(homeworldData => this.setState({ homeworldData, loading: false }));
    }

    componentDidMount() {
       this.handleGet(`https://vschool-cors.herokuapp.com?url=${this.props.url}`)
    }

    componentDidUpdate(prevProps) {
        if(prevProps.url !== this.props.url)
            this.handleGet(`https://vschool-cors.herokuapp.com?url=${this.props.url}`)
    }

    render() {
        const { loading, homeworldData, err } = this.state;
        return (
            <div>
                {loading ?
                    <div>...Loading planet data</div>
                    :
                    err ?
                        <div>Sorry, your data is unavailable</div>
                        :
                        <div>
                            <h3>Planet: {homeworldData.name}</h3>
                            <p>Climate: {homeworldData.climate}</p>
                            <p>Gravity: {homeworldData.gravity}</p>
                        </div>
                }
            </div>
        )
    }
}
