const ADD_POST = "ADD-POST";
const UPDATE_NEW_TEXT_POST = "UPDATE-NEW-TEXT-POST";

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newTextPost,
                likeCount: 0,
            };
            state.posts.push(newPost);
            state.newTextPost = '';
            return state;
        case UPDATE_NEW_TEXT_POST:
            state.newTextPost = action.newTextPost;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostActionCreator = (text) => ({type: UPDATE_NEW_TEXT_POST, newTextPost: text});

export default profileReducer;