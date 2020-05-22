

import s from "../profile.module.css";
import React from 'react';
import Post from "./post/post";





const myposts = (props) => {
    
 
    let postElement = props.postData.map( p => <Post id={p.id} message={p.message} likecount={p.likecount}/>);






    let newPostElement = React.createRef();


    let addPost = () => {
        
        props.addPost(); 
    }
    
    let onPostChange =()=> {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        
              <div className={s.post}>
                  <textarea onChange={onPostChange}  ref={newPostElement}  value={props.newPostText}></textarea>
                  <button onClick= {addPost} >добавить</button>
                  {postElement}

                  
                  
              </div>

         
    )
}

export default myposts;