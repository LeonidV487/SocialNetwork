let state = {
    profilePage: {
        posts: [
            {id: 1, message: "It's my first message!", likeCount: 10},
            {id: 2, message: "Hi, how are you?", likeCount: 30},
        ],
    },
    dialogPage: {
        dialogs: [
            {id: 1, name: "Leonid"},
            {id: 2, name: "Valeriy"},
            {id: 3, name: "Artemiy"},
            {id: 4, name: "Anastasia"},
            {id: 5, name: "George"},
            {id: 6, name: "Allen"},
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How r u?"},
            {id: 3, message: "I am waiting for you"},
            {id: 4, message: "See you soon"},
            {id: 5, message: "Have a nice day!"},
            {id: 6, message: "lmao"},
        ]
    }
}

export default state;