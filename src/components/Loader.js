import React from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const Loader = () => {
    return (
        <Container>
            <Grid container
            style={{height: window.innerHeight -50}}
            alignItems={'center'}
            justify={'center'}>
                <Grid container
                      alignItems={'center'}
                      justify={'column'}>
                <div className="lds-ripple">
                    <div></div>
                    <div></div>
                </div>
                </Grid>
            </Grid>

        </Container>
    );
};

export default Loader;