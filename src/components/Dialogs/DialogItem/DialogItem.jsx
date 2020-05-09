import classes from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path} activeClassName={classes.activeLink}>
                <img src={props.image}/>
                <div className={classes.name}>{props.name}</div>
            </NavLink>
        </div>
    );
}

export default DialogItem;

