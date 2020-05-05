import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src='https://thumbs.dreamstime.com/b/wide-black-brick-wall-texture-dark-gray-brickwork-background-wide-black-brick-wall-texture-spacious-dark-gray-masonry-background-124596974.jpg'/>
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;