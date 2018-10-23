import React from 'react'
import { Link } from 'react-router-dom'

function Welcome(){
    return(
        <div className="welcome-container">
            <div className="pickImage"/>
            <div className="title-container">
                <h1 className="tabs">Tabs</h1>
                <Link to="/search">
                    <button className="button-welcome">PickIt</button>
                </Link>
                <Link to="/search">
                </Link>
                <h1 className="clickIt">ClickIt to PickIt</h1>
            </div>
        </div>
    )
}

export default Welcome;