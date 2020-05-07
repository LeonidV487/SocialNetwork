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

    let dialogsData = [
        {id: 1, name: "Leonid"},
        {id: 2, name: "Valeriy"},
        {id: 3, name: "Artemiy"},
        {id: 4, name: "Anastasia"},
        {id: 5, name: "George"},
        {id: 6, name: "Allen"},
    ]

    let messageData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How r u?"},
        {id: 3, message: "I am waiting for you"},
        {id: 4, message: "See you soon"},
        {id: 5, message: "Have a nice day!"},
        {id: 6, message: "lmao"},
    ]

    return (
        <div className={classes.dialogMenu}>
            <div className={classes.dialogs}>
                <DialogsItem id={dialogsData[0].id} name={dialogsData[0].name}/>
                <DialogsItem id={dialogsData[1].id} name={dialogsData[1].name}/>
                <DialogsItem id={dialogsData[2].id} name={dialogsData[2].name}/>
                <DialogsItem id={dialogsData[3].id} name={dialogsData[3].name}/>
                <DialogsItem id={dialogsData[4].id} name={dialogsData[4].name}/>
                <DialogsItem id={dialogsData[5].id} name={dialogsData[5].name}/>
            </div>
            <div className={classes.messages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
                <Message message={messageData[3].message}/>
                <Message message={messageData[4].message}/>
                <Message message={messageData[5].message}/>
            </div>
        </div>
    );
}

export default Dialogs