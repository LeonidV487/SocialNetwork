import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRD5eXgGQfnlQXkNm9l7JF_CL78xhQuaLmA9ANvO_ezBz4lKVrC&usqp=CAU'/>
                {props.message}
                <div className={classes.likes}>
                    <span>likes: </span> {props.likeCount}
                </div>
            </div>
        </div>
    );
}

export default Post;
