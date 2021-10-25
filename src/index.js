import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {initializeApp} from "firebase/firebase-app";
import firebase from "firebase/compat";


const app = initializeApp({
    apiKey: "AIzaSyAmwL41NDus_F2fW7wg4vpR2uAJSCcjXeU",
    authDomain: "chat-react-27a19.firebaseapp.com",
    projectId: "chat-react-27a19",
    storageBucket: "chat-react-27a19.appspot.com",
    messagingSenderId: "342524046577",
    appId: "1:342524046577:web:e6e116de8e602537374d50"
});

const Context = createContext(null)
const auth = firebase.auth()
const firestore = firebase.firestore()
ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App/>
    </Context.Provider>,
    document.getElementById('root')
);

