import React, {Component} from 'react'
import AddForm from "./AddForm"


class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const {target, name} = event;
        this.setState({
            [target.name]: target.value
        })
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.submit(this.state)
        }

    render() {
        return (
            <AddForm 
            handleSubmit={this.handleSubmit}v 
            handleChange={this.handleChange}
            inputs={this.state}
            />
        )
    }

}
export default Form