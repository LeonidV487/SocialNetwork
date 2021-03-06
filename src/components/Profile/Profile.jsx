import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import classes from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo images={props.store.getState().profilePage.images}/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
}

export default Profile;