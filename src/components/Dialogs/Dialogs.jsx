import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import classes from './Dialogs.module.css'

const Dialogs = (props) => {


    let dialogElements = props.dialogPage.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}
                                                                            image={dialog.image}/>);

    let messageElements = props.dialogPage.messages.map(message => <Message message={message.message}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let action = {type: "ADD-MESSAGE"};
        props.dispatch(action);
    }

    let updateMessage = () => {
        let text = newMessageElement.current.value;
        let action = {type: "UPDATE-NEW-TEXT-MESSAGE", newTextMessage: text};
        props.dispatch(action);
    }

    return (
        <div className={classes.dialogMenu}>
            <div className={classes.dialogs}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
                <div className={classes.addMessage}>
                    <div>
                        <textarea onChange={updateMessage}
                                  ref={newMessageElement}
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