import React from 'react';
import s from "./dialogs.module.css";

import Message from "./message/message";
import DialogItem from "./dialogitem/dialogitem";



let newMessage = React.createRef();

let sendMessage =()=> {
  let  text = newMessage.current.value;
    alert(text)
}



const Dialogs =(props ) => {

  

  

  

  


    let dialogElements = props.dialogsData.map( d => <DialogItem id={d.id} name={d.name}/>) ;
    let messageElements = props.messageData.map( m => <Message id={m.id} message={m.message}/>) ;
    
      
    

  return (
    <div className={s.dialogs_wrapp}>
        <div className={s.names}>
            {dialogElements}
          
        
        
        </div>

        <div className={s.dialogs_chat}>
          <div>
             {messageElements}
             <textarea ref={newMessage}></textarea>
             <button onClick= {sendMessage} >отправить</button>

             
           <br/>
          </div>
        </div>

    </div>
  );
}


export default Dialogs;