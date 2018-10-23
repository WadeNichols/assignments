import React from 'react';

//components
import SideBar from "./Sidebar";
import Main from "./Main";

function Section(props) {
    return (
        <section>
            <SideBar menuItems={props.sidebar.menuItems} />
            <Main title={props.main.title} blogPosts={props.main.blogPosts}/>
        </section>
    )
}

export default Section;