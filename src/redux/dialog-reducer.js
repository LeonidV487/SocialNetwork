const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-TEXT-MESSAGE";

const initialState = {
    dialogs: [
        {id: 1, name: "Leonid", image: "/images/diver-avatar_114346.png"},
        {id: 2, name: "Valeriy", image: "/images/muslimman_90813.png"},
        {id: 3, name: "Artemiy", image: "/images/davegrohl_90806.png"},
        {id: 4, name: "Anastasia", image: "/images/trinity_90829.png"},
        {id: 5, name: "George", image: "/images/fireman-avatar_114351.png"},
        {id: 6, name: "Allen", image: "/images/cristianoronaldo_90805.png"},
    ],
    messages: [],
    newTextMessage: "",
};

const dialogReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_MESSAGE:
            const messages = state.messages;
            const newMessage = {
                id: ++state.messages.length,
                message: state.newTextMessage
            };
            messages.push(newMessage);
            return {
                ...state,
                messages,
                newTextPost: ''
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newTextMessage: action.newTextMessage
            };
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateMessageActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newTextMessage: text});

export default dialogReducer;
