import React, { useState, useEffect } from 'react';
import { Paper, FormControl, TextField, Button, Link } from '@mui/material';
import { Redirect, navigate } from '@reach/router';

const styles = {
    title: {
        fontFamily: "Arial",
        fontWeight: "lighter"
    },
    paper: {
        width: "32%",
        height: "100%",
        padding: "25px 25px 150px 25px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "40px",
        marginBottom: "40px",
        fontSize: "115%"
    },
    formControl: {
        width: 360,
        maxWidth: "100%",
        marginTop: "30px",
        paddingBottom: "17px"
    },
    a: {
        display: "block",
        fontSize: "17px",
    },
    textField: {
        marginBottom: "15px"
    },
    button: {
        backgroundColor: "green",
        marginBottom: "20px"
    },
    p: {
        fontSize: "40px",
        fontWeight: "lighter",
        marginTop: "90px",
        marginBottom: "20px"
    }
}

export default () => {
    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            navigate("/home");
        }
    }, []);

    return(
        <div>
            <Paper variant="outlined" style={styles.paper} sx={{boxShadow: 3}}>
                <h1 style={styles.title}>Neighborly</h1>
                <p style={styles.p}>Page coming soon...</p>
                <Link style={styles.a} href="/" underline="hover">Return to Login</Link>
            </Paper>
        </div>
    )
}