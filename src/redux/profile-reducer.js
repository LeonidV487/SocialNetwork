const ADD_POST = "ADD-POST";
const UPDATE_NEW_TEXT_POST = "UPDATE-NEW-TEXT-POST";

let initialState = {
    images: {id: 1, mainPageImage: "/images/15835.jpg"},
    posts: [],
    newTextPost: "",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const posts = state.posts;
            const newPost = {
                id: ++state.posts.length,
                message: state.newTextPost,
                likeCount: 0
            };
            posts.push(newPost);
            return {
                ...state,
                posts,
                newTextPost: ''
            };
        case UPDATE_NEW_TEXT_POST:
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
