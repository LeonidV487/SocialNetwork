import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import classes from './Dialogs.module.css'

const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} image={dialog.image}/>);

    let messageElements = props.state.messages.map(message => <Message message={message.message}/>);

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