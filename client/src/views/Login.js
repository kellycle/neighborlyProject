import React, { useState, useEffect } from 'react';
import { Paper, FormControl, TextField, Button, Link } from '@mui/material';
import { navigate, Redirect } from '@reach/router';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import Cookies from 'js-cookie';

const styles = {
    title: {
        fontFamily: "Arial",
        fontWeight: "lighter"
    },
    paper: {
        width: "32%",
        height: "100%",
        padding: "25px 25px 35px 25px",
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
        fontSize: "15px"
    }
}

const ErrorTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'red',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'red',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'red',
    },
    '&:hover fieldset': {
        borderColor: 'red',
    },
    '&.Mui-focused fieldset': {
        borderColor: 'red',
    },
    },
});

export default () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        // console.log(loggedInUser);
        if (loggedInUser) {
            // const foundUser = JSON.parse(loggedInUser);
            navigate("/home");
        }
    }, []);

    const loginHandler = e => {
        e.preventDefault();
        console.log(errors);
        if (email.length == 0){
            errors['email'] = "Please enter your email"
        }
        if (password.length == 0){
            errors['password'] = "Please enter your password"
        }
        if (email.length > 0){
            delete errors['email']
        }
        if (password.length > 0){
            delete errors['password']
        }
        if("invalid" in errors){
            delete errors['invalid']
        }
        if (Object.keys(errors).length === 0){
            axios.post('http://localhost:8000/api/user/login',{
                email,
                password
            })
            .then(res => {
                console.log("yay");
                localStorage.setItem("user", JSON.stringify(res.data));
                setSuccess(true);
            })
            .catch(res => {
                console.log("oh no")
                errors['invalid'] = "Invalid email or password";
                navigate("/");
            })
        }
        navigate("/");
    }

    if(success == true){
        navigate("/home");
    }

    return(
        <div>
            <Paper variant="outlined" style={styles.paper} sx={{boxShadow: 3}}>
                <h1 style={styles.title}>Neighborly</h1>
                <form onSubmit={loginHandler}>
                    <FormControl style={styles.formControl} sx={{ borderBottom: 1, borderColor: 'grey.300'}}>
                        {!("email" in errors) && !("invalid" in errors) && 
                            <TextField style={styles.textField} label="Email" variant="outlined" color="success" type="email" onChange={e => setEmail(e.target.value)} value={email}/>
                        }
                        {"email" in errors &&
                            <ErrorTextField style={styles.textField} label="Email" variant="outlined" color="error" type="email" onChange={e => setEmail(e.target.value)} value={email} helperText={errors.email}/>
                        }
                        {"invalid" in errors && !("email" in errors) &&
                            <ErrorTextField style={styles.textField} label="Email" variant="outlined" color="error" type="email" onChange={e => setEmail(e.target.value)} value={email} helperText={errors.invalid}/>
                        }
                        {!("password" in errors) && !("invalid" in errors)  && 
                            <TextField style={styles.textField} label="Password" variant="outlined" color="success" type="password" onChange={e => setPassword(e.target.value)} value={password}/>
                        }
                        {"password" in errors &&
                            <ErrorTextField style={styles.textField} label="Password" variant="outlined" color="error" type="password" onChange={e => setPassword(e.target.value)} value={password} helperText={errors.password}/>
                        }
                        {"invalid" in errors && !("password" in errors) &&
                            <ErrorTextField style={styles.textField} label="Password" variant="outlined" color="error" type="password" onChange={e => setPassword(e.target.value)} value={password}/>
                        }
                        <Button style={styles.button} variant="contained" type="submit">Log In</Button>
                        <Link style={styles.a} href="/recoverpassword" underline="hover">Forgot Password?</Link>
                    </FormControl>
                </form>
                <p style={styles.p}>New to Neighborly? <Link href="/signup" underline="hover" sx={{fontWeight: 'bold'}}>Sign Up</Link></p>
            </Paper>
        </div>
    )
}