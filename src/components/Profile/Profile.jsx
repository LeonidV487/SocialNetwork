import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import classes from './Profile.module.css';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     addPost={props.addPost}
                     newTextPost={props.profilePage.newTextPost}
                     updatePost={props.updatePost}
            />
        </div>
    );
}

export default Profile;