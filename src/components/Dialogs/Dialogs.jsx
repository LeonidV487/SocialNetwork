import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import classes from './Dialogs.module.css'
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialog-reducer";

const Dialogs = (props) => {

    let dialogElements = props.dialogPage.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}
                                                                            image={dialog.image}/>);

    let messageElements = props.dialogPage.messages.map(message => <Message message={message.message}/>);

    let addMessage = () => {
        let action = addMessageActionCreator();
        props.dispatch(action);
    }

    let updateMessage = (event) => {
        let text = event.target.value
        let action = updateMessageActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={classes.dialogMenu}>
            <div className={classes.dialogs}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                <div>
                    {messageElements}
                </div>
                <div className={classes.addMessage}>
                    <div>
                        <textarea placeholder='Enter your message'
                                  onChange={updateMessage}
                                  value={props.dialogPage.newTextMessage}
                        />
                    </div>
                    <div>
                        <button onClick={addMessage}>Write Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;