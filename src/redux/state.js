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

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newTextPost,
            likeCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newTextPost = '';
        this._callSubscriber(this._state);
    },

    updatePost(newTextPost) {
        this._state.profilePage.newTextPost = newTextPost;
        this._callSubscriber(this._state);
    },

    addMessage() {
        let newMessage = {
            id: 5,
            message: this._state.dialogPage.newTextMessage,
        };

        this._state.dialogPage.messages.push(newMessage);
        this._state.dialogPage.newTextMessage = '';
        this._callSubscriber(this._state);
    },

    updateTextMessage(newTextMessage) {
        this._state.dialogPage.newTextMessage = newTextMessage;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        if (action.type === "ADD-POST") {
            this.addPost();
        } else if (action.type === "UPDATE-NEW-TEXT-POST") {
            this.updatePost(action.newTextPost);
        } else if (action.type === "ADD-MESSAGE") {
            this.addMessage();
        } else if (action.type === "UPDATE-NEW-TEXT-MESSAGE") {
            this.updateTextMessage(action.newTextMessage);
        }
    }
}

export default store;