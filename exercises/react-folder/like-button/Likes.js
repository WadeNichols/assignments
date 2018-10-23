import React, {Component}  from 'react';

class Likes extends Component{
    constructor(){
        super();
        this.state = {
            likes: 0,
            dislikes: 0
        }
        this.handleUpvote = this.handleUpvote.bind(this);
        this.handleDownVote = this.handleDownVote.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    handleUpvote(){
        this.setState(prevState =>({
            likes: prevState.likes + 1
        }))
    }
    handleDownVote(){
        this.setState(prevState => ({
            dislikes: prevState.dislikes +1
        }))
    }
    handleReset(){
        this.setState({likes: 0, dislikes: 0})
    }
    render(){
        const {likes, dislikes} = this.state;
        return (
            <div>
                <button onClick={this.handleUpVote}>Like</button>
                <button onClick={this.handleDownVote}>Dislike</button>
                <button onClick={this.handleReset}>Reset</button>
                <p>Likes: <span>{likes}</span></p>
                <p>Dislikes: <span>{dislikes}</span></p>
            </div>
        )
    }
}

export default Likes;