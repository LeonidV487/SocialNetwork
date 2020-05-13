import {renderEntireTree} from "../render";

let state = {
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
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newTextPost,
        likeCount: 0,
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newTextPost = '';
    renderEntireTree(state);
}

export let updatePost = (newText) => {
    state.profilePage.newTextPost = newText;
    renderEntireTree(state);
}

export let addMessage = () => {
    let newMessage = {
        id: 5,
        message: state.dialogPage.newTextMessage,
    };

    state.dialogPage.messages.push(newMessage);
    state.dialogPage.newTextMessage = '';
    renderEntireTree(state);
}

export let updateTextMessage = (newTextMessage) => {
    state.dialogPage.newTextMessage = newTextMessage;
    renderEntireTree(state);
}

export default state;