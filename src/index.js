import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: "It's my first message!", likeCount: 10},
    {id: 2, message: "Hi, how are you?", likeCount: 30},
]

let dialogs = [
    {id: 1, name: "Leonid"},
    {id: 2, name: "Valeriy"},
    {id: 3, name: "Artemiy"},
    {id: 4, name: "Anastasia"},
    {id: 5, name: "George"},
    {id: 6, name: "Allen"},
]

let messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How r u?"},
    {id: 3, message: "I am waiting for you"},
    {id: 4, message: "See you soon"},
    {id: 5, message: "Have a nice day!"},
    {id: 6, message: "lmao"},
]

ReactDOM.render(
  <React.StrictMode>
    <App messages={messages} dialogs={dialogs} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
