const ADD_POST = "ADD-POST";
const UPDATE_NEW_TEXT_POST = "UPDATE-NEW-TEXT-POST";

let initialState = {
    images: {id: 1, mainPageImage: "/images/15835.jpg"},
    posts: [
        {id: 1, message: "It's my first message!", likeCount: 10},
        {id: 2, message: "Hi, how are you?", likeCount: 30},
    ],
    newTextPost: "",
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newTextPost,
                likeCount: 0,
            };
            return {
                ...state,
                newTextPost: '',
                posts: [...state.posts, newPost]
            };
        case UPDATE_NEW_TEXT_POST:
            state.newTextPost = action.newTextPost;
            return {
                ...state,
                newTextPost: action.newTextPost
            };
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostActionCreator = (text) => ({type: UPDATE_NEW_TEXT_POST, newTextPost: text});

export default profileReducer;
