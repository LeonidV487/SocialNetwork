import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import {Route} from "react-router-dom";

const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar sidebar={props.store._state.sidebar}/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile
                    profilePage={props.store._state.profilePage}
                    addPost={props.store.addPost.bind(props.store)}
                    updatePost={props.store.updatePost.bind(props.store)}/>}
                />
                <Route path='/dialogs' render={() => <Dialogs
                    dialogPage={props.store._state.dialogPage}
                    addMessage={props.store.addMessage.bind(props.store)}
                    updateTextMessage={props.store.updateTextMessage.bind(props.store)}/>}
                />
                <Route path='/news' render={News}/>
                <Route path='/music' render={Music}/>
                <Route path='/settings' render={Settings}/>
                <Route path='/friends' render={Friends}/>
            </div>
        </div>
    );
}

export default App;
