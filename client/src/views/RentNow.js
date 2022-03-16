import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import NavBar from '../components/NavBar';
import { Paper } from '@mui/material';
import { loadStripe } from "@stripe/stripe-js";
import { 
    Elements, 
    CardElement,
    useStripe,
    useElements 
} from "@stripe/react-stripe-js";
import axios from 'axios';
// import "./Stripe.css";

const promise = loadStripe("pk_test_51IalToAQmXzgarKriNlG0enhbeYqakTPb3e8GyHE6mbNLEIZMACg8k5J0Ul8GPk9nFEsbuyBAUzhCMF5AELLp0CZ003isiZgwB");

const styles = {
    paper: {
        width: "42%",
        height: "100%",
        padding: "15px 20px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "40px",
        marginBottom: "40px",
        fontSize: "115%"
    },
}

export default () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (!loggedInUser) {
            navigate("/");
        }
        setLoading(false);
    }, []);

    if(loading){
        return (
            <div>
                <NavBar/>
                <Paper variant="outlined" style={styles.paper} sx={{boxShadow: 3}}>
                    <h1>Loading...</h1>
                </Paper>
            </div>
        )
    }

    return (
        <div>
            <NavBar/>
            <Paper variant="outlined" style={styles.paper} sx={{boxShadow: 3}}>
                
            </Paper>
        </div>
    )
}