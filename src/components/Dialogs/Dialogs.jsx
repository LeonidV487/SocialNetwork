import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path} activeClassName={classes.activeLink}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.text}</div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogMenu}>
            <div className={classes.dialogs}>
                <DialogsItem name="Leonid" id="1"/>
                <DialogsItem name="Valeriy" id="2"/>
                <DialogsItem name="Artemiy" id="3"/>
                <DialogsItem name="Anastasia" id="4"/>
                <DialogsItem name="George" id="5"/>
                <DialogsItem name="Allen" id="6"/>
            </div>
            <div className={classes.messages}>
                <Message text="Hi"/>
                <Message text="How r u?"/>
                <Message text="I am waiting for you"/>
                <Message text="See you soon"/>
                <Message text="Have a nice day!"/>
                <Message text="lmao"/>
            </div>
        </div>
    );
}

export default Dialogs