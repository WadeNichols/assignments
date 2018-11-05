import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default function Header() {
        return (
            <div>
                <h1 className="title">PickIt</h1>
                <nav>
                    <Link className="nav"to="/">Welcome</Link>
                    <Link className="nav"to="/search">Search</Link>
                    <Link className="nav"to="/about">How to...</Link>
                </nav>
            </div>
        )
}

