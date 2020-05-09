import React from "react";
import classes from './Friends.module.css';

const Friends = (props) => {
    return (
        <div className={classes.friend}>
            <img src={props.image}/>
        </div>
    );
}

export default Friends;