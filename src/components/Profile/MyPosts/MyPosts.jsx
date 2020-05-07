import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: 1, message: "It's my first message!", likeCount: 10},
        {id: 2, message: "Hi, how are you?", likeCount: 30},
    ]

    let postElements = posts.map(post => <Post message={post.message} likeCount={post.likeCount}/>)

    return (
        <div className={classes.postBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;