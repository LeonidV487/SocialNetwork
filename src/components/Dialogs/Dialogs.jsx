import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import classes from './Dialogs.module.css'

const Dialogs = ({dialogPage, updateMessage, addMessage}) => {

    const addMessageLocal = () => {
        addMessage();
    }

    const updateMessageLocal = ({ target: { value } }) => {
        updateMessage(value);
    }

    const getDialogElements = () => {
        return dialogPage.dialogs.map(({id, name, image}) => <DialogItem id={id} name={name} image={image}/>);
    }

    const getMessageElements = () => {
        return dialogPage.messages.map(({message}) => <Message message={message}/>);
    }

    return (
        <div className={classes.dialogMenu}>
            <div className={classes.dialogs}>
                {getDialogElements()}
            </div>
            <div className={classes.messages}>
                <div>
                    {getMessageElements()}
                </div>
                <div className={classes.addMessage}>
                    <div>
                        <textarea
                            placeholder='Enter your message'
                            onChange={updateMessageLocal}
                            value={dialogPage.newTextMessage}
                        />
                    </div>
                    <div>
                        <button onClick={addMessageLocal}>Write Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
