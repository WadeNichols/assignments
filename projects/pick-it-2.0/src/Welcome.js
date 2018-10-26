import React from 'react'
import { Link } from 'react-router-dom'

export default function Welcome() {
    return (
        <div>
            <h1>ClickIt to PickIt</h1>
            <Link to={"/search"}>
                    <button>PickIt</button>
            </Link>
        </div>
    )
}