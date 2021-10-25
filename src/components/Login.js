import React, {useContext} from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Context} from "../index";
import firebase from "firebase/compat";

const Login = () => {
    const {auth} = useContext(Context);

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const {user} = await auth.signInWithPopup(provider);
        console.log(user)
    }
    return (

        <Button onClick={login} variant={'outlined'}>Enter with Google</Button>

    );
};

export default Login;