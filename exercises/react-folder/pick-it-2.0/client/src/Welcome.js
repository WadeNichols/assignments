import React from 'react'
import { Link } from 'react-router-dom'

export default function Welcome() {
    return (
        <div className="welcome-note">
            <Link to={"/search"}>
                <button className ="welcome-button"></button>
            </Link>
            <div className="color-box-container">
                <div className="color-welcome-box"></div>
            </div>
        </div>
    )
}