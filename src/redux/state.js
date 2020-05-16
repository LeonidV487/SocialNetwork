const ADD_POST = "ADD-POST";
const UPDATE_NEW_TEXT_POST = "UPDATE-NEW-TEXT-POST";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-TEXT-MESSAGE";

let store = {

    _state: {
        profilePage: {
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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newTextPost,
                likeCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newTextPost = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_TEXT_POST) {
            this._state.profilePage.newTextPost = action.newTextPost;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 5,
                message: this._state.dialogPage.newTextMessage,
            };
            this._state.dialogPage.messages.push(newMessage);
            this._state.dialogPage.newTextMessage = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogPage.newTextMessage = action.newTextMessage;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostActionCreator = (text) => ({type: UPDATE_NEW_TEXT_POST, newTextPost: text});
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateMessageActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newTextMessage: text});

export default store;