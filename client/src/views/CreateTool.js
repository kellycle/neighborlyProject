import React, { useState, useEffect } from 'react';
import { Paper, FormControl, TextField, Button, Link, InputAdornment, OutlinedInput } from '@mui/material';
import { navigate, Redirect } from '@reach/router';
import NavBar from '../components/NavBar';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';

const styles = {
    title: {
        fontFamily: "Arial",
        fontWeight: "lighter"
    },
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
    formControl: {
        width: "80%",
        maxWidth: "100%",
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
        marginBottom: "20px",
        marginTop: "12px"
    },
    p: {
        fontSize: "15px"
    },
    label: {
        textAlign: "left",
        fontSize: "15px",
        marginBottom: "8px"
    }
}

export default () => {
    const [id, setId] = useState("");
    const [toolName, setToolName] = useState("");
    const [toolDescription, setToolDescription] = useState("");
    const [pictureUrl, setPictureUrl] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (!loggedInUser) {
            navigate("/");
        }
        const foundUser = JSON.parse(loggedInUser);
        setId(foundUser.user._id);
    }, []);

    const handlePost = e => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/user/${id}/tool`, {
            toolName,
            toolDescription,
            pictureUrl,
            location,
            price
        })
        .then(res => {
            console.log("yay");
            console.log(res);
            navigate("/home");
        })
        .catch(err => {
            console.log("oh no");
        })
    }

    return(
        <div>
            <NavBar/>
            <Paper variant="outlined" style={styles.paper} sx={{boxShadow: 3}}>
                <h2 style={styles.title}>Post a Tool</h2>
                <form style={styles.form} onSubmit={handlePost}>
                    <FormControl style={styles.formControl}>
                        <label for="toolName" style={styles.label}>Tool name<span style={{color: "red", marginLeft: "2px"}}>*</span></label>
                        <TextField style={styles.textField} id="toolName" placeholder="Enter tool name here" onChange={e => setToolName(e.target.value)} value={toolName}/>
                        <label for="toolDescription" style={styles.label}>Description of Tool<span style={{color: "red", marginLeft: "2px"}}>*</span></label>
                        <TextField style={styles.textField} id="toolDescription" placeholder="Enter description here" multiline rows={3} onChange={e => setToolDescription(e.target.value)} value={toolDescription}/>
                        <label for="toolPicture" style={styles.label}>Picture URL</label>
                        <TextField style={styles.textField} id="toolPicture" placeholder="Enter picture URL" onChange={e => setPictureUrl(e.target.value)} value={pictureUrl}/>
                        <label for="toolLocation" style={styles.label}>Location<span style={{color: "red", marginLeft: "2px"}}>*</span></label>
                        <TextField style={styles.textField} id="toolLocation" placeholder="Enter City and State or Zip Code" onChange={e => setLocation(e.target.value)} value={location}/>
                        <label for="toolPrice" style={styles.label}>Price per day<span style={{color: "red", marginLeft: "2px"}}>*</span></label>
                        <OutlinedInput style={styles.textField} id="toolPrice" type="number" startAdornment={<InputAdornment position="start">$</InputAdornment>} placeholder="0.00" onChange={e => setPrice(e.target.value)} value={price}/>
                        <Button sx={{ backgroundColor: "green", marginBottom: "20px",marginTop: "12px", '&:hover': {backgroundColor: "green"}}} variant="contained" type="submit" disabled={toolName === "" || toolDescription === "" || location === "" || price === ""}><AddIcon sx={{fontSize:"medium", paddingBottom: "1px", marginRight: "4px"}}/>Post Tool</Button>
                    </FormControl>
                </form>
            </Paper>
        </div>
    )
}