import React from "react";
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={classes.imageWrapper}>
                <img src={props.images.mainPageImage} alt="horizontal"/>
            </div>
            <div className={classes.description}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;