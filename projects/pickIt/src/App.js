import React from 'react'
import Tabs from './Tabs'

function App() {
    return (
        <div>
            <header>
                <h1>pickIt</h1>
                <nav>
                    <h4>Home</h4>
                    <h4>Artist</h4>
                    <h4>Song</h4>

                </nav>
            </header>
            <Tabs />
            <br/>
            <footer>
                ©2018
            </footer>
        </div>
    )
}

export default App;