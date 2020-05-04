

import s from "../profile.module.css";
import React from 'react';
import Post from "./post/post";


const myposts = () => {
    return (
        
              <div className={s.post}>
                  <textarea></textarea>
                  <button>добавить</button>
                  <Post message="hi" likecount="12"/>
                  <Post/>

                  
                  
              </div>

         
    )
}

export default myposts;