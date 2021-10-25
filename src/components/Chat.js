import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import firebase from "firebase/compat";
import Avatar from "@mui/material/Avatar";

const Chat = () => {
    const {auth, firestore} = useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState('');
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    );
    const sendMessage = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        setValue('');

    };
    if (loading) return <Loader/>;
    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 50}}
                  alignItems={'center'}
                  justifyContent={'center'}>
                <div style={{
                    width: '80%',
                    height: '60vh',
                    border: '1px solid gray',
                    overflowY: "auto",
                    padding: '10px'
                }}>
                    {messages.map(message =>
                        <div>
                            <Grid container>
                                <Avatar src={message.photoURL}/>
                                {message.displayName}
                            </Grid>
                            <div>{message.text}</div>
                        </div>)}
                </div>
                <Grid container
                      direction={'column'}
                      alignItems={'flex-end'}
                      style={{width: '80%'}}>
                    <TextField value={value} onChange={e => setValue(e.target.value)} variant={'outlined'} fullWidth
                               rowsMax={2}/>
                    <Button variant={'outlined'} onClick={sendMessage}>Send</Button>

                </Grid>
            </Grid>
        </Container>
    );
};

export default Chat;