import {combineReducers} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";

export const rootReducer = combineReducers({
        profilePage: profileReducer,
        dialogPage: dialogReducer,
        sidebar: sidebarReducer
    }
)
