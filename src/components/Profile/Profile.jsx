import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import classes from './Profile.module.css';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo images={props.profilePage.images}/>
            <MyPosts posts={props.profilePage.posts}
                     newTextPost={props.profilePage.newTextPost}
                     dispatch={props.dispatch}
            />
        </div>
    );
}

export default Profile;