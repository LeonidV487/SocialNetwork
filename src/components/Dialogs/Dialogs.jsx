import React from "react";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import classes from './Dialogs.module.css'

const Dialogs = (props) => {

    let dialogElements = props.dialogs.map(dialog => <DialogsItem id={dialog.id} name={dialog.name}/>);

    let messageElements = props.messages.map(message => <Message message={message.message}/>);

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

export default Dialogs;