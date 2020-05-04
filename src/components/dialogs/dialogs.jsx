import React from 'react';
import s from "./dialogs.module.css";
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  return <div className={s.item} >
  <NavLink to ={'/Dialogs/' + props.id}>{props.name}</NavLink>
    </div>
}

const Dialogs =( ) => {
  return (
    <div className={s.dialogs_wrapp}>
        <div className={s.names}>
        <DialogItem id="1" name="Dimach"/>
        <DialogItem id="2" name="Greg"/>
        <DialogItem id="3" name="Vasia"/>
        <DialogItem id="4" name="Jane"/>
        
        
        </div>

        <div className={s.dialogs_chat}>
          <div>Hi  <br></br>
          Heloo <br/>
          eaaaah</div>
        </div>

    </div>
  );
}


export default Dialogs;