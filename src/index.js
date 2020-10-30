import React from "react";
import ReactDOM from "react-dom";
import * as firebase from "firebase";
import App from "./App";
import Jumbo from "./jumbo";
import Main from "./main";
const rootElement = document.getElementById("root");
var firebaseConfig = {
  apiKey: `${process.env.REACT_APP_APIKEY}`,
  authDomain: `${process.env.REACT_APP_AUTHDOMAIN}`,
  databaseURL: `${process.env.REACT_APP_DATABASEURL}`,
  projectId: `${process.env.REACT_APP_PROJECTID}`,
  storageBucket: `${process.env.REACT_APP_STORAGEBUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_MESSAGINGSENDERID}`,
  appId: `${process.env.REACT_APP_APPID}`
};
console.log(process.env);
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Jumbo />
    <Main />
  </React.StrictMode>,
  rootElement
);
