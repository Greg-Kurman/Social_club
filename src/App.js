import React from 'react';
import './App.css';
import Header from './components/header/header';
import Nav from './components/navbar/navbar';
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs';
import {BrowserRouter, Route} from "react-router-dom";
import Settings from './components/Settings/settings';

function App() {
  return (
    <BrowserRouter>
    <div className="app-warapper">
          <Header/>
          
      <div className="container">
          <div className="mainWrapper">   

                <Nav/>
                <div>
                  <Route path='/dialogs' component={Dialogs}/>
                  <Route path='/profile' component={Profile}/>
                  <Route path='/settings' component={Settings}/>
                
               
                
                </div>
                
          </div>
        
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
