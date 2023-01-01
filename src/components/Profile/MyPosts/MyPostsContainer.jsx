import React from "react";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {useDispatch, useSelector} from "react-redux";

const MyPostsContainer = () => {
    const posts = useSelector(({profilePage}) => profilePage.posts)
    const dispatch = useDispatch()

    let addPost = () => {
        let action = addPostActionCreator();
        dispatch(action);
    }

    let updatePost = (text) => {
        let action = updatePostActionCreator(text);
        dispatch(action);
    }

    return (<MyPosts addPost={addPost} updatePost={updatePost} posts={posts}/>);
}

export default MyPostsContainer;
