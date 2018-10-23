import { Provider } from 'react-redux'
import Characters from "./Characters"


function App() {
    return (
        <div>
            <Characters render={({loading, characters, err})=>(
                loading ?
                    <div>...Loading character data</div>
                    :
                    err ? 
                        <div>Your data is unavailable</div> :
                        <div>
                            {characters.map((character, i) => )
                            <Character}

                        </div>

                )}
        </div>
    )
}


export default App;