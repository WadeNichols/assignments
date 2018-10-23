import React from 'react'

import { withAuthContext } from './Auth';

function Header({isAuthenticated, logout, login}) {
    return ( 
        <header>
            <h1>Welcome to my App</h1>
            {isAuthenticated ? 
                <button onClick={logout}>Logout</button>
                :
                <button onClick={login}>Login</button>
            }
        </header>
    )
}

export default withAuthContext(Header);