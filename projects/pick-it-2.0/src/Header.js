import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div>
            <h1>PickIt</h1>
            <nav>
                <Link className="nav"to={"/"}>Welcome</Link>
                <Link className="nav"to={"/search"}>Search</Link>
                <Link className="nav"to={"how-to"}>How to...</Link>
                <Link className="nav"to={"/favorites"}>Favorites</Link>
            </nav>
        </div>
    )
}