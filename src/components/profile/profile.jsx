


import s from "./profile.module.css";
import React from 'react';
import Myposts from './myposts/myposts';
import ProfileInfo from './profileinfo/profileinfo';




const Profile = () => {
    return (
        <div className={s.mainContent}>
             <ProfileInfo/>
             
              <Myposts />
              
         </div>
    )
}

export default Profile;