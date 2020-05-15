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
                {id: 1, name: "Leonid", image: "https://icon-icons.com/icons2/1371/PNG/72/muslimman_90813.png"},
                {id: 2, name: "Valeriy", image: "https://icon-icons.com/icons2/1371/PNG/72/donaldtrump_90831.png"},
                {id: 3, name: "Artemiy", image: "https://icon-icons.com/icons2/1371/PNG/72/nikolatesla_90830.png"},
                {
                    id: 4,
                    name: "Anastasia",
                    image: "https://icon-icons.com/icons2/1371/PNG/72/traditionaljapanesewoman_90815.png"
                },
                {id: 5, name: "George", image: "https://icon-icons.com/icons2/1371/PNG/72/luissuarez_90807.png"},
                {id: 6, name: "Allen", image: "https://icon-icons.com/icons2/1371/PNG/72/cristianoronaldo_90805.png"},
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
                {id: 1, name: "Leonid", image: "https://icon-icons.com/icons2/1371/PNG/72/muslimman_90813.png"},
                {id: 2, name: "Valeriy", image: "https://icon-icons.com/icons2/1371/PNG/72/donaldtrump_90831.png"},
                {id: 3, name: "Artemiy", image: "https://icon-icons.com/icons2/1371/PNG/72/nikolatesla_90830.png"},
                {
                    id: 4,
                    name: "Anastasia",
                    image: "https://icon-icons.com/icons2/1371/PNG/72/traditionaljapanesewoman_90815.png"
                },
                {id: 5, name: "George", image: "https://icon-icons.com/icons2/1371/PNG/72/luissuarez_90807.png"},
                {id: 6, name: "Allen", image: "https://icon-icons.com/icons2/1371/PNG/72/cristianoronaldo_90805.png"},
            ],
        }
    },

    _callSubscriber() {
        console.log('Body of function is empty')
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newTextPost,
            likeCount: 0,
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newTextPost = '';
        this._callSubscriber(this);
    },

    updatePost(newText){
        this._state.profilePage.newTextPost = newText;
        this._callSubscriber(this);
    },

    addMessage() {
        let newMessage = {
            id: 5,
            message: this._state.dialogPage.newTextMessage,
        };

        this._state.dialogPage.messages.push(newMessage);
        this._state.dialogPage.newTextMessage = '';
        this._callSubscriber(this);
    },

    updateTextMessage(newTextMessage) {
        this._state.dialogPage.newTextMessage = newTextMessage;
        this._callSubscriber(this);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
}

export default store;