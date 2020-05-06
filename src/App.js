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
    <BrowserRouter>
    <div className="app-warapper">
          <Header/>
          
      <div className="container">
          <div className="mainWrapper">   

                <Nav/>
                <div>
  <Route path='/dialogs' render = { () => <Dialogs dialogsData= {props.dialogsData} messageData= {props.messageData } /> } />
                  <Route path='/profile' render = { () => <Profile postData={props.postData}/> } />
                  <Route path='/settings' render = { () => <Settings/> } />
                
               
                
                </div>
                
          </div>
        
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
