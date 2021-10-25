import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {LOGIN_ROUTE} from "../utils/consts";
import {NavLink} from "react-router-dom";

const NavBar = ({userAuth}) => {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" style={{background: 'pink'}}>
                <Toolbar variant={'dense'}>
                    <Grid container justifyContent="flex-end"
                          alignItems="center">
                        {userAuth ?
                            <Button variant={'outlined'}>Log out</Button>
                            :
                            <NavLink to={LOGIN_ROUTE}>
                                <Button variant={'outlined'}>Login</Button>
                            </NavLink>
                        }


                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;