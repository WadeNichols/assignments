import React from 'react'
import { render } from 'react-dom'

import App from "./App";

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const customStyles = {
    palette: {
        type: 'light',
        primary: {
            main: "rgba(200,50,0)"
        }
      },
}

const theme = createMuiTheme(customStyles);

render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>
    ,
    document.getElementById("root")
)