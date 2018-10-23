import React, { Component } from 'react'

export default class AddForm extends Component {
    constructor() {
        super();
        this.state = {
            id: "",
            amount: "",
            date: "",
            title: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        const {target} = event;
        this.setState({
            [target.name]: target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.submit(this.state)
    }

    render() {
        const{id, title, amount, date} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="">Id</label>
                <input name="id" onChange={this.handleChange} value={id} type="text"/>
                <label htmlFor="">Title:</label>
                <input name="title" onChange={this.handleChange} value={title} type="text"/>
                <label htmlFor="">Date:</label>
                <input name="date"onChange={this.handleChange} value={date} type="text"/>
                <label htmlFor="">Amount:</label>
                <input name="amount"onChange={this.handleChange} value={amount} type="text"/>
                <button>+</button>
                <hr/>
            </form>
        )
    }
}

