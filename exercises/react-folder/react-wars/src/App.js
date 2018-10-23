import React from 'react'
import Characters from "./Characters"
import Homeworld from "./Homeworld"
import "./Styles.css"

function App() {
    return (
        <div>
            <header>
                <h1>React Wars</h1>
            </header>
            <Characters />
            {/* <Homeworld /> */}
            <footer>
                Maybe by V School ©2018
            </footer>
        </div>
    )
}

export default App