import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {id: 1, message: "It's my first message!", likeCount: 10},
        {id: 2, message: "Hi, how are you?", likeCount: 30},
    ]

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
                <Post message={postsData[0].message} likeCount={postsData[0].likeCount}/>
                <Post message={postsData[1].message} likeCount={postsData[1].likeCount}/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
}

export default MyPosts;