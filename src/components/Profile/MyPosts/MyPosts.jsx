import React from "react";
import Post from "./Post/Post";
import classes from './MyPosts.module.css';

const MyPosts = (props) => {

    let postElements = props.posts.map(post => <Post message={post.message} likeCount={post.likeCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }

    return (
        <div className={classes.postBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea ref={newPostElement}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;