import React from "react";
import ReactDOM from "react-dom";
import * as firebase from "firebase";
import App from "./App";
import Jumbo from "./jumbo";
import Main from "./main";
const rootElement = document.getElementById("root");
var firebaseConfig = {
  apiKey: "AIzaSyBdVy7Tn4HniT6NMzvARzp6qRbF3mHmhRM",
  authDomain: "potent-symbol-233716.firebaseapp.com",
  databaseURL: "https://potent-symbol-233716.firebaseio.com",
  projectId: "potent-symbol-233716",
  storageBucket: "potent-symbol-233716.appspot.com",
  messagingSenderId: "1075928338495",
  appId: "1:1075928338495:web:b0ca7383d74ae5e030a88a"
};
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Jumbo />
    <Main />
  </React.StrictMode>,
  rootElement
);
