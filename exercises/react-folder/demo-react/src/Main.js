import React from 'react';

//components
import BlogPosts from "./BlogPosts";

function Main(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <BlogPosts posts={props.blogPosts} />
        </div>
    )
}

export default Main;