import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super();
        this.state = {
            items: []
        }
        this.addNumber = this.addNumber.bind(this);
        this.deleteNumber = this.deleteNumber.bind(this);
    }
    deleteNumber(index) {
        this.setState(prevState => ({
            items: prevState.items.filter((num, i) => index !== i)
        }))
    }
    addNumber(num) {
        this.setState(prevState => ({
            items: [...prevState.items, num]
        }))
    }
    replaceNumber(newNum, index){
        this.setState(prevState => ({
            items: prevState.items.map((num, i) => i === index ? newNum : num)
        }))
    }
    render() {
        const numberListItems = this.state.items.map((num, i) => (
            <li key={i} >
                <button onClick={() => this.deleteNumber(i)}>X</button>
                <button onClick={() => this.replaceNumber(Math.floor(Math.random()* 101), i)}>Replace Number</button>
                {num}
            </li>
        ))
        return (
            <div>
                <button onClick={() => this.addNumber(Math.floor(Math.random() * 101))}>Generate Random Number</button>
                <ul>
                    {numberListItems}
                </ul>
                <input type="text"/>
            </div>
        )
    }
}