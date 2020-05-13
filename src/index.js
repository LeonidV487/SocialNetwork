import React from 'react';
import './index.css';
import state, {subscribe} from "./redux/state";
import ReactDOM from 'react-dom';
import App from './App';
import {addMessage, addPost, updateTextMessage, updatePost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import * as serviceWorker from './serviceWorker';


let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost}
                     updatePost={updatePost} addMessage={addMessage}
                     updateTextMessage={updateTextMessage}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(state);

subscribe(renderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
