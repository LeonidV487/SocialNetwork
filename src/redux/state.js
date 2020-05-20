import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sideBarReducer from "./sidebar-reducer";


let store = {

    _state: {
        profilePage: {
            images: {id: 1, mainPageImage: "/images/15835.jpg"},
            posts: [
                {id: 1, message: "It's my first message!", likeCount: 10},
                {id: 2, message: "Hi, how are you?", likeCount: 30},
            ],
            newTextPost: "",
        },
        dialogPage: {
            dialogs: [
                {id: 1, name: "Leonid", image: "/images/diver-avatar_114346.png"},
                {id: 2, name: "Valeriy", image: "/images/muslimman_90813.png"},
                {id: 3, name: "Artemiy", image: "/images/davegrohl_90806.png"},
                {id: 4, name: "Anastasia", image: "/images/trinity_90829.png"},
                {id: 5, name: "George", image: "/images/fireman-avatar_114351.png"},
                {id: 6, name: "Allen", image: "/images/cristianoronaldo_90805.png"},
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How r u?"},
                {id: 3, message: "I am waiting for you"},
                {id: 4, message: "See you soon"},
                {id: 5, message: "Have a nice day!"},
                {id: 6, message: "lmao"},
            ],
            newTextMessage: "",
        },
        sidebar: {
            profiles: [
                {id: 1, name: "Leonid", image: "/images/diver-avatar_114346.png"},
                {id: 2, name: "Valeriy", image: "/images/muslimman_90813.png"},
                {id: 3, name: "Artemiy", image: "/images/davegrohl_90806.png"},
                {id: 4, name: "Anastasia", image: "/images/trinity_90829.png"},
                {id: 5, name: "George", image: "/images/fireman-avatar_114351.png"},
                {id: 6, name: "Allen", image: "/images/cristianoronaldo_90805.png"},
            ],
        }
    },

    _callSubscriber() {
        console.log('Body of function is empty')
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
        this._state.sidebar = sideBarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

export default store;