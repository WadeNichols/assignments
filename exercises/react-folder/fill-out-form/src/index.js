import React from 'react';
import {render}from 'react-dom';
import "./styles.css";
import App from './App';
import {BrowserRouter} from "react-router-dom"

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
)


import React, { Component } from 'react'

export default class Timer extends Component {
    constructor() {
        super();
        this.state = {
            elapsedTime: 0
        }
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
