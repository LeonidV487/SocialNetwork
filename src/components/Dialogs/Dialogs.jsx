import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import classes from './Dialogs.module.css'

const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}
                                                                       image={dialog.image}/>);

    let messageElements = props.state.messages.map(message => <Message message={message.message}/>);

    let newMessageElement = React.createRef();

    let addPost = () => {
        let text = newMessageElement.current.value;
        alert(text);
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
                        <textarea ref={newMessageElement}/>
                    </div>
                    <div>
                        <button onClick={addPost}>Write Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;