import React from 'react';
import NavBar from '../components/NavBar';
import { Link, Paper } from '@mui/material';

const styles = {
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
    a: {
        display: "block",
        fontSize: "17px",
    },
    p: {
        fontSize: "40px",
        fontWeight: "lighter",
        marginTop: "90px",
        marginBottom: "20px"
    }
}

export default () => {
    return(
        <div>
            <NavBar/>
            <Paper variant="outlined" style={styles.paper} sx={{boxShadow: 3}}>
                <p style={styles.p}>Page coming soon...</p>
                <Link style={styles.a} href="/home" underline="hover">Return to Homepage</Link>
            </Paper>
        </div>
    )
}