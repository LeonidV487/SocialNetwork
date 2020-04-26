import React from "react";
import  classes from './Profile.module.css';

const Profile = () => {
    return  <div className={classes.content}>
        <div>
            <img
                src='https://thumbs.dreamstime.com/b/wide-black-brick-wall-texture-dark-gray-brickwork-background-wide-black-brick-wall-texture-spacious-dark-gray-masonry-background-124596974.jpg'/>
        </div>
        <div>ava + description</div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div>
                <div>
                    post1
                </div>
                <div>
                    post2
                </div>
            </div>
        </div>
    </div>
}

export default Profile;