import React from 'react'

function CharacterView({loading, err, characters}) {
    return (
        loading ? 
            <div>...Loading character data</div>
            :
            err ? 
                <div></div>
    )
}

export default CharacterView
