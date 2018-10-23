import React from 'react';

import MenuItems from "./MenuItems";

function SideBar(props) {
    return (
        <nav>
            <MenuItems links={props.menuItems}/>
        </nav>
    )
}

export default SideBar;