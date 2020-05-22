let rerenderEntireTree = () => {
    console.log('state change')
}


let state = {

    messageData : [
                            {id:1, message: "why"},
                            {id:2, message: "Hello"},
                            {id:3, message: "hiy"},
                        
                        ],
      
      dialogsData : [
                            {id:1, name: "Dimach"},
                            {id:2, name: "Greg"},
                            {id:3, name: 'anton'},
                            {id:4, name: 'Gordon'},
                            {id:5, name: 'sasha'},
                            {id:6, name: 'lolka'},
                        ],
      
      postData : [
                            {id:1 , message:"hi hello", likecount:12},
                            {id:2, message:"hi hello", likecount:2},
                            {id:3, message:"hi hello", likecount:1},
                        ],

    }

export const addPost = (postMessage) => {
    let newPost = {
        id: 6,
        message: postMessage,
        likesCount: 0,

    };
    state.postData.push(newPost);
    state.newPostText= '';
    rerenderEntireTree();
}



export const updateNewPostText = (newText) => {
    state.newPostText = newText;
    rerenderEntireTree(); 
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}
    

export default state;

