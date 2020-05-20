const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-TEXT-MESSAGE";

const dialogReducer = (state, action) => {

    switch(action.type){
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newTextMessage,
            };
            state.messages.push(newMessage);
            state.newTextMessage = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newTextMessage = action.newTextMessage;
            return state;
        default:
            return state
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateMessageActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newTextMessage: text});

export default dialogReducer;