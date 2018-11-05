import React, { Component, createContext } from 'react'

const { Consumer, Provider } = createContext();

export default class GameProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: [5, 4]
        }
        this.moveTo = this.moveTo.bind(this);
    }
    moveTo(x, y) {
        this.setState({ position: [x, y] })
    }
    render() {
        const value = { ...this.state, moveTo: this.moveTo }
        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    }
}

export const withGameContext = C => props => (
    <Consumer>
        {value => <C {...value}{...props} />}
    </Consumer>
)
