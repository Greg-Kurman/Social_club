

import s from './navbar.module.css';
import React from 'react';
import {NavLink} from 'react-router-dom';


const nav = () => {
    return (
        <nav className={s.nav}> 
              <div><NavLink   to='/Profile' activeClassName={s.active}>Profile</NavLink></div>

              <div><NavLink   to='/Dialogs' activeClassName={s.active}>Dialogs</NavLink></div>
              <div><NavLink   to='/Settings' activeClassName={s.active}>Settings</NavLink></div>
              

            </nav>
    )
}

export default nav;