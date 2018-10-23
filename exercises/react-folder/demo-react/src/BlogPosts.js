import React from 'react'

function BlogPosts(props) {
    const postElements = props.posts.map((post, i) => (
        <div key={i}>
            <hr/>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
        
        </div>
    ))
    return (
        <div>
            {postElements}
        </div>
    )
}

export default BlogPosts;