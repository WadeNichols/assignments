import React, { createContext, Component } from 'react'

export const AuthContext = createContext();


class Auth extends Component {
    constructor() {
        super();
        this.state = {
            username: undefined,
            isAuthenticated: false,
            admin: false
        }
        this.logout = this.logout.bind(this);
        this.login = this.login.bind(this);
    }

    logout() {
        this.setState({
            username: undefined,
            isAuthenticated: false,
            admin: false
        })
    }

    login() {
        this.setState({
            username: "boomerBaby",
            isAuthenticated: true,
            admin: true
        })
    }

    render(){
        const props = {
            login: this.login,
            logout: this.logout,
            ...this.state
        }
        return(
            <AuthContext.Provider value={props}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export const withAuthContext = C => props => ( 
    <AuthContext.Consumer>
        {value => <C {...value}{...props}/>}
    </AuthContext.Consumer>
)

export default Auth;