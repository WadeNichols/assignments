import React, { Component } from 'react'

export default class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = props.inputs;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        const{title, amount, date} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="title" onChange={this.handleChange} value={title} type="text"/>
                <input name="date"onChange={this.handleChange} value={date} type="text"/>
                <input name="amount"onChange={this.handleChange} value={amount} type="text"/>
                <button>Save</button>
            </form>
        )
    }
}

