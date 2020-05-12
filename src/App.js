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
            <NavBar state={props.state.sidebar}/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
                <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogPage}/>}/>
                <Route path='/news' render={News}/>
                <Route path='/music' render={Music}/>
                <Route path='/settings' render={Settings}/>
                <Route path='/friends' render={Friends}/>
            </div>
        </div>
    );
}

export default App;
