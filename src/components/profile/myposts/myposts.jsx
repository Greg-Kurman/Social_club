

import s from "../profile.module.css";
import React from 'react';
import Post from "./post/post";




const myposts = (props) => {
    debugger;
 
    let postElement = props.postData.map( p => <Post id={p.id} message={p.message} likecount={p.likecount}/>);

    return (
        
              <div className={s.post}>
                  <textarea></textarea>
                  <button>добавить</button>
                  {postElement}

                  
                  
              </div>

         
    )
}

export default myposts;