import React from 'react';
import s from "./../dialogs.module.css";
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  return <div className={s.item} >
  <NavLink to ={'/Dialogs/' + props.id}>{props.name}</NavLink>
    </div>
}



export default DialogItem;