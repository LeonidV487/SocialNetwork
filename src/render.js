import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addMessage, addPost, updateTextMessage, updatePost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} updatePost={updatePost} addMessage={addMessage} updateTextMessage={updateTextMessage}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}