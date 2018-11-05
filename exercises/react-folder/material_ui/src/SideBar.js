import React from 'react'

import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';

function Sidebar({toggle}) {
    return (
        <List onClick={toggle}>
            <ListItem button>
                <ListItemText>
                    Home
                </ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemText>
                    About
                </ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemText>
                    Contact
                </ListItemText>
            </ListItem>
        </List>
    )
}

export default Sidebar;
