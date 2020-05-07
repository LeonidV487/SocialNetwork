import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
                <div className={classes.posts}>
                    <Post message="It's my first message!" likeCount='10'/>
                    <Post message="Hi, how are you?" likeCount='30'/>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
        </div>
);
}

export default MyPosts;