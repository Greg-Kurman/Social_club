


import s from "./profile.module.css";
import React from 'react';
import Myposts from './myposts/myposts';
import ProfileInfo from './profileinfo/profileinfo';




const Profile = (props) => {
    return (
        <div className={s.mainContent}>
             <ProfileInfo/>
             
              <Myposts postData={props.postData}/>
              
         </div>
    )
}

export default Profile;