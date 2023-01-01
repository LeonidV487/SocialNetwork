import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {useSelector} from "react-redux";

const Profile = () => {
    const images = useSelector(({profilePage}) => profilePage.images);

    return (
        <div>
            <ProfileInfo images={images}/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
