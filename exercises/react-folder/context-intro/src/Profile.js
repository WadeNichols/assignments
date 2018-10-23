import React from 'react'

import { withAuthContext } from './Auth';

function Profile({username, isAuthenticated}) {
    return (
        isAuthenticated ?
            <div>
                <h3>Welcome {username}</h3>
                <img src="https://i.pinimg.com/236x/03/94/16/0394169d19c2d6d1cd8b2eabc487af78--blink-tom-delonge.jpg" alt=""/>
            </div>
            :
            <p>Please login</p>
    )
}

export default withAuthContext(Profile)