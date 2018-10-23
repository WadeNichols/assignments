import React, {Component} from 'react'

class Form extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            zip: '',
            gender: '',
            maritalStatus: '',
            occupation: '',
            description: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        const {firstName, lastName, dateOfBirth, email, phone, address, city, zip, gender, maritalStatus, occupation, description};
        return (
           <div>
               <form onSubmit={this.handleSubmit}>
                   <label htmlFor="">First:</label>
                   <input onChange={this.handleChange}name="firstName"value={}type="text"/>
                   <label htmlFor="">Last:</label>
                   <input onChange={this.handleChange}name="lastName"value={}type="text"/>
                   <label htmlFor="">Date Of Birth:</label>
                   <input onChange={this.handleChange}name="dateOfBirth"value={}type="text"/>
                   <label htmlFor="">Email:</label>
                   <input onChange={this.handleChange}name="email"value={}type="text"/>
                   <label htmlFor="">Phone:</label>
                   <input onChange={this.handleChange}name="phone"value={}type="number"/>
                   <label htmlFor="">Address:</label>
                   <input onChange={this.handleChange}name="address"value={}type="text"/>
                   <label htmlFor="">City:</label>
                   <input onChange={this.handleChange}name="city"value={}type="text"/>
                   <label htmlFor="">Zip:</label>
                   <input onChange={this.handleChange}name="zip"value={}type="number"/>
                   <label htmlFor="">Gender:</label>
                   <input onChange={this.handleChange}name="gender"value={}type="text"/>
                   <label htmlFor="">Marital Status:</label>
                   <input onChange={this.handleChange}name="maritalStatus"value={}type="text"/>
                   <label htmlFor="">Occupation</label>
                   <input onChange={this.handleChange}name="occupation"value={}type="text"/>
                   <label htmlFor="">Description</label>
                   <input onChange={this.handleChange}name="description"value={}type="text"/>
               </form>
           </div> 
        )
        }
    }
