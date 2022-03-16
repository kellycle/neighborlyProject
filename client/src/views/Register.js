import React, { useState, useEffect } from 'react';
import { Paper, FormControl, TextField, Button, Link, collapseClasses } from '@mui/material';
import { navigate, Redirect } from '@reach/router';
import { styled } from '@mui/material/styles';
import axios from 'axios';


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
    form: {
        marginTop: "50px"
    },
    formControl: {
        width: 360,
        maxWidth: "100%",
        marginTop: "5px",
        paddingBottom: "5px"
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
    },
    p1: {
        fontSize: "15px",
        fontWeight: "400",
        color: "grey"
    },
    p2: {
        fontSize: "15px",
    },
    span: {
        fontWeight: "bold"
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
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
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

    const registerHandler = e => {
        e.preventDefault();
        if (name.length == 0){
            errors['name'] = "Please enter your name"
        }
        if (email.length == 0){
            errors['email'] = "Please enter your email"
        }
        if (password.length == 0){
            errors['password'] = "Please enter your password"
        }
        if (confirmPassword.length == 0){
            errors['confirmPassword'] = "Please confirm your password"
        }
        if (password !== confirmPassword){
            errors['passwordMatch'] = "Password and Confirm Password do not match" 
        }
        if (name.length > 0){
            delete errors['name']
        }
        if (email.length > 0){
            delete errors['email']
        }
        if (password.length > 0){
            delete errors['password']
        }
        if (confirmPassword.length > 0){
            delete errors['confirmPassword']
        }
        if (password === confirmPassword){
            delete errors['passwordMatch']
        }
        if (Object.keys(errors).length === 0){
            axios.post('http://localhost:8000/api/user',{
                name,
                email,
                password,
                // confirmPassword
            })
            .then(res => {
                console.log("yay");
                localStorage.setItem("user", JSON.stringify(res.data));
                setSuccess(true);
            })
            .catch(err => {
                console.log("oh no")
                // console.log(err.response.data.errors);
                // console.log(err.response.data.keyValue.email);
                if("keyValue" in err.response.data){
                    const errorUniqueEmail = err.response.data.keyValue.email; 
                    if(errorUniqueEmail === email.toLowerCase()){
                        errors['email'] = "Account already exists!"
                    }
                }
                if("errors" in err.response.data){
                    const errorResponse = err.response.data.errors;
                    for (const key in errorResponse) {
                        errors[key] = errorResponse[key].message
                    };
                }
                // console.log(errors);
                navigate("/signup");
            })
        }
        navigate("/signup");
    }

    if(success == true){
        navigate("/home");
    }

    return (
        <div>
            <Paper variant="outlined" style={styles.paper} sx={{boxShadow: 3}}>
                <h1 style={styles.title}>Neighborly</h1>
                <form style={styles.form} onSubmit={registerHandler}>
                    <h3 style={styles.title}>Create an Account</h3>
                    <FormControl style={styles.formControl} sx={{borderBottom: 1, borderColor: 'grey.300'}}>
                        {!("name" in errors) &&
                            <TextField style={styles.textField} label="Name" variant="outlined" color="success" type="text" onChange={e => setName(e.target.value)} value={name}/>
                        }
                        {"name" in errors &&
                            <ErrorTextField style={styles.textField} label="Name" variant="outlined" color="error" type="text" onChange={e => setName(e.target.value)} value={name} helperText={errors.name}/>
                        }
                        {!("email" in errors) &&
                            <TextField style={styles.textField} label="Email" variant="outlined" color="success" type="email" onChange={e => setEmail(e.target.value)} value={email}/>
                        }
                        {"email" in errors &&
                            <ErrorTextField style={styles.textField} label="Email" variant="outlined" color="error" type="email" onChange={e => setEmail(e.target.value)} value={email} helperText={errors.email}/>
                        }
                        {!("password" in errors) && !("passwordMatch" in errors) &&
                            <TextField style={styles.textField} label="Password" variant="outlined" color="success" type="password" onChange={e => setPassword(e.target.value)} value={password}/>
                        }
                        {"password" in errors &&
                            <ErrorTextField style={styles.textField} label="Password" variant="outlined" color="error" type="password" onChange={e => setPassword(e.target.value)} value={password} helperText={errors.password}/>
                        }
                        {"passwordMatch" in errors && !("password" in errors) &&
                            <ErrorTextField style={styles.textField} label="Password" variant="outlined" color="error" type="password" onChange={e => setPassword(e.target.value)} value={password} helperText={errors.passwordMatch}/>
                        }
                        {!("confirmPassword" in errors) && !("passwordMatch" in errors) &&
                            <TextField style={styles.textField} label="Confirm Password" variant="outlined" color="success" type="password" onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword}/>
                        }
                        {"confirmPassword" in errors && 
                            <ErrorTextField style={styles.textField} label="Confirm Password" variant="outlined" color="error" type="password" onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword} helperText={errors.confirmPassword}/>
                        }
                        {"passwordMatch" in errors && "password" in errors &&
                            <ErrorTextField style={styles.textField} label="Confirm Password" variant="outlined" color="error" type="password" onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword}/>
                        }
                        {"passwordMatch" in errors && !("password" in errors) && !("confirmPassword" in errors) &&
                            <ErrorTextField style={styles.textField} label="Confirm Password" variant="outlined" color="error" type="password" onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword}/>
                        }
                        <Button style={styles.button} variant="contained" type="submit">Sign Up</Button>
                        <p style={styles.p1}>By signing up, you agree to our <span style={styles.span}>Terms of Service</span> and you have read our <span style={styles.span}>Privacy Policy</span></p>
                    </FormControl>
                </form>
                <p style={styles.p2}>Have an Account? <Link href="/" underline="hover" sx={{fontWeight: 'bold'}}>Log in</Link></p>
            </Paper>
        </div>
    )
}