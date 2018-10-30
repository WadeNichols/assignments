import React, { Component, createContext } from 'react'
import axios from "axios"

export const TabContext = createContext();
const tabsUrl = "/api/tabs"

export default class Favorites extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            err: null,
            favorites: []
        }
    }

    _getTabData(url) {
        return axios.get(url).then(response => response.data)
    }
    _handleTabData(favorites) {
        return this._getTabData(tabsUrl)
            .then(tabs => (
                [
                   (favorites)
                ]
            ))
    }
    componentDidMount() {
        this._handleTabData()
        .then(tabs => this.setState ({
            loading: false,
            err: null,
            favorites: []
        }))
        .catch(err => this.setState ({
            err
        }))
    }
    render() {
        const props = {
            toggleCollection: this._toggleCollection,
            ...this.state
        }
        return (
            <TabContext.Provider value={props}>
                {this.props.children}
            </TabContext.Provider>
        )
    }
}

export const withTabContext = Comp => props => (
    <TabContext.Consumer>
        {value => <Comp {...value} {...props} />}
    </TabContext.Consumer>
)





// import React from 'react'


// export default function Favorites() {
//     return (
//         <Favorites />
//     )

// }