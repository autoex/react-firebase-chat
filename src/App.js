import React, {useState} from 'react';
import './App.css'
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/NavBar";
import AppRouter from "./components/AppRouter";

const App = () => {
    const [userAuth, setUserAuth] = useState(false);
    return (
        <BrowserRouter>
            <NavBar userAuth={userAuth}/>
            <AppRouter userAuth={userAuth}/>
        </BrowserRouter>
    );
};

export default App;