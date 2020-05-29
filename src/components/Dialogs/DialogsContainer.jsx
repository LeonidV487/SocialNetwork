import React from "react";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState();

    let addMessage = () => {
        let action = addMessageActionCreator();
        props.store.dispatch(action);
    }

    let updateMessage = (text) => {
        let action = updateMessageActionCreator(text);
        props.store.dispatch(action);
    }

    return (<Dialogs addMessage={addMessage} updateMessage={updateMessage} dialogPage={state.dialogPage}/>);
}

export default DialogsContainer;