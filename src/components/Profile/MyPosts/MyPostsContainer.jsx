import React from "react";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {useDispatch, useSelector} from "react-redux";

const MyPostsContainer = () => {
    const profilePageData = useSelector(({profilePage}) => ({
        posts: profilePage.posts,
        newTextPost: profilePage.newTextPost
    }));
    const dispatch = useDispatch()

    const addPost = () => {
        dispatch(addPostActionCreator());
    }

    const updatePost = (text) => {
        dispatch(updatePostActionCreator(text));
    }

    return <MyPosts
        addPost={addPost}
        updatePost={updatePost}
        posts={profilePageData.posts}
        newTextPost={profilePageData.newTextPost}
    />
}

export default MyPostsContainer;
