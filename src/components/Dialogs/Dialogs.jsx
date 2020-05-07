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
        <div className={classes.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: "Leonid"},
        {id: 2, name: "Valeriy"},
        {id: 3, name: "Artemiy"},
        {id: 4, name: "Anastasia"},
        {id: 5, name: "George"},
        {id: 6, name: "Allen"},
    ]

    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How r u?"},
        {id: 3, message: "I am waiting for you"},
        {id: 4, message: "See you soon"},
        {id: 5, message: "Have a nice day!"},
        {id: 6, message: "lmao"},
    ]

    let dialogElements = dialogs.map(dialog => <DialogsItem id={dialog.id} name={dialog.name}/>);

    let messageElements = messages.map(message => <Message message={message.message}/>);

    return (
        <div className={classes.dialogMenu}>
            <div className={classes.dialogs}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
        </div>
    );
}

export default Dialogs