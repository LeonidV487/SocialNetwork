import React from "react";
import Post from "./Post/Post";
import classes from './MyPosts.module.scss';

const MyPosts = ({posts, addPost, updatePost, newTextPost}) => {

    const addPostLocal = () => {
        addPost();
    };

    const updatePostLocal = (event) => {
        const text = event.target.value;
        updatePost(text);
    };

    const getPostElements = () => posts.map(({ message, likeCount }) => {
        return <Post message={message} likeCount={likeCount}/>
    });

    return (
        <div className={classes.postBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea
                        onChange={updatePostLocal}
                        value={newTextPost}
                    />
                </div>
                <div>
                    <button onClick={addPostLocal}>{'Add post'}</button>
                </div>
            </div>
            <div className={classes.posts}>
                {getPostElements()}
            </div>
        </div>
    );
}

export default MyPosts;
