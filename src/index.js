import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let messageData = [
  {id:1, message: "why"},
  {id:2, message: "Hello"},
  {id:3, message: "hiy"},

];

let dialogsData = [
  {id:1, name: "Dimach"},
  {id:2, name: "Greg"},
  {id:3, name: 'anton'},
  {id:4, name: 'Gordon'},
  {id:5, name: 'sasha'},
  {id:6, name: 'lolka'},
];

let postData = [
  {id:1 ,  message:"hi hello", likecount:12},
  {id:2, message:"hi hello", likecount:2},
  {id:3, message:"hi hello", likecount:1},
];


ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} dialogsData={dialogsData} messageData={messageData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
