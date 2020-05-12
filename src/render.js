import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, updatePost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} updatePost={updatePost}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}