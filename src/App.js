import React from 'react';
import './App.css';
import Header from './components/header/header';
import Nav from './components/navbar/navbar';
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs';
import {BrowserRouter, Route} from "react-router-dom";
import Settings from './components/Settings/settings';

function App(props) {
  return (
   
    <div className="app-warapper">
          <Header/>
          
      <div className="container">
          <div className="mainWrapper">   

                <Nav/>
                <div>
                  <Route path='/dialogs' render = { () => <Dialogs dialogsData= {props.state.dialogsData} messageData= {props.state.messageData } /> } />
                  <Route path='/profile' render = { () => <Profile postData={props.state.postData} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/> } />
                  <Route path='/settings' render = { () => <Settings/> } />
                
               
                
                </div>
                
          </div>
        
      </div>
    </div>
    
  );
}

export default App;
