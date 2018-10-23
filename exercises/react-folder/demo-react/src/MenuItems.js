import React from 'react';


function MenuItems(props) {
    const linkElements = props.links.map((link, i) => <li key={i}><a href="#">{link}</a></li>)
    return (
        <ul>
            {linkElements}
        </ul>
    )
}

export default MenuItems