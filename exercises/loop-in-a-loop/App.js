import React, { Component } from 'react'

import Form from "./Form"

export default class App extends Component {
    constructor() {
        super();
        this.handleUpload = this.handleUpload.bind(this);
    }
    sendFile(file){
        axios.post{"/api/images", file}
    }
    handleUpload(file){
        return e => {
            const formData = new FormData();
            formData.append("file", uploader.current.files[0])
            e.preventDefault();
            this.sendFile(formData)
        }
    }
    render(){
        return (
            <div>
                <Form submit={this.handleUpload} />
            </div>
        )
    }
}