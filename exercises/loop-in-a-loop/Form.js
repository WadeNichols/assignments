import React, { Component, createRef } from 'react'

export default class Form extends Component {
    constructor(){
        super();
        this.uploader = createRef()
    }
    render() {
        return (
            <form onsSubmit={this.props.submit(this.uploader.current.files)}>
                <input name="file" ref={this.uploader} type="file" placeholder="Please upload your file"/>
                <button>Upload</button>
            </form>
        )
    }
}
