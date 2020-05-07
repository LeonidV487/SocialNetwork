import React from "react";
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={classes.imageWrapper}>
                <img src='https://wallpaperplay.com/walls/full/5/a/9/15835.jpg' alt="horizontal"/>
            </div>
            <div className={classes.description}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;