import React from "react";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {useDispatch, useSelector} from "react-redux";

const DialogsContainer = () => {
    const dialogPage = useSelector(({dialogPage}) => dialogPage);
    const dispatch = useDispatch();

    let addMessage = () => {
        let action = addMessageActionCreator();
        dispatch(action);
    }

    let updateMessage = (text) => {
        let action = updateMessageActionCreator(text);
        dispatch(action);
    }

    return (<Dialogs addMessage={addMessage} updateMessage={updateMessage} dialogPage={dialogPage}/>);
}

export default DialogsContainer;
