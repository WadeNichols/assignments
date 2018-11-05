import React from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import HomeIcon from "@material-ui/icons/Home"
import MenuIcon from "@material-ui/icons/Menu"
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Sidebar from './SideBar';

import { withStyles } from '@material-ui/core/styles';
import { withToggler } from "atom-lib";


const buttonStyles = {
    root: {
        borderRadius: "50%",
      
    }
}

const RoundButton = withStyles(buttonStyles)(Button);


function App({ on, toggle }) {
    return (
        <div>
            <AppBar color="inherit">
                <Toolbar>
                    <SwipeableDrawer
                        open={on}
                        onOpen={toggle}
                        onClose={toggle}
                        anchor="left">
                        <Sidebar toggle={toggle} />
                    </SwipeableDrawer>
                    <Grid container justify="space-between">
                        <RoundButton variant="outlined" color="primary" onClick={toggle}>
                            <MenuIcon />
                        </RoundButton>
                        <RoundButton color="primary">
                            <HomeIcon />
                        </RoundButton>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withToggler({ on: false })(App)
