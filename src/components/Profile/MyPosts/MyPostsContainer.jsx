import React from "react";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        let action = addPostActionCreator();
        props.store.dispatch(action);
    }

    let updatePost = (text) => {
        let action = updatePostActionCreator(text);
        props.store.dispatch(action);
    }

    return (<MyPosts addPost={addPost} updatePost={updatePost} posts={state.profilePage.posts}/>);
}

export default MyPostsContainer;