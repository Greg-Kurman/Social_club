import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import State, {subscribe} from './components/redux/state';
import {addPost , updateNewPostText} from './components/redux/state';
import { BrowserRouter } from 'react-router-dom';



let rerenderEntireTree = () => {
  


ReactDOM.render(

    <BrowserRouter>
    <App state={State} addPost={addPost} updateNewPostText={updateNewPostText}/>,
    </BrowserRouter>,

  document.getElementById('root')
)

};

rerenderEntireTree();

subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
