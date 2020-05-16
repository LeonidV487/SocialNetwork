import React from "react";
import Post from "./Post/Post";
import classes from './MyPosts.module.css';
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

    let postElements = props.posts.map(post => <Post message={post.message} likeCount={post.likeCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let action = addPostActionCreator();
        props.dispatch(action);
    }

    let updatePost = () => {
        let text = newPostElement.current.value;
        let action = updatePostActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={classes.postBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea onChange={updatePost}
                              ref={newPostElement}
                              value={props.newTextPost}
                    />
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