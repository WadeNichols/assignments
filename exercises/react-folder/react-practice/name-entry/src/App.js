import React, {Component} from 'react'
import Form from "./Form"

class App extends Component {
    constructor() {
        super();
        this.state = {
            names: []
        }
        this.addName = this.addName.bind(this);
    }

    addName(name){
        this.setState(prevState => ({
            names: [name, ...prevState.names]
        }))
    }

    render(){
        let names = this.state.names.map(function(names ,i){
            return (
                <li key={i}>{names}</li>
            )
        })
        return(
        <div>
            <Form submit={inputs => this.addName(inputs.name)} />
            <ol>{names}</ol>
        </div>
        )
    }
}

export default App