import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <div className={classes.postWrapper}>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRD5eXgGQfnlQXkNm9l7JF_CL78xhQuaLmA9ANvO_ezBz4lKVrC&usqp=CAU'/>
                <div className={classes.message}>
                    {props.message}
                </div>
            </div>
            <div className={classes.likes}>
                <span>likes: </span> {props.likeCount}
            </div>
        </div>
    );
}

export default Post;
