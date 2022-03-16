import React from 'react';
import NavBar from '../components/NavBar';
import { Paper, Stack, Breadcrumbs, Typography, Link, Container, Button } from '@mui/material';
import LawnMower from '../static/zac-gudakov-YouwuPpcD9U-unsplash 2.jpg';
import ImgOne from '../static/1.png';
import ImgTwo from '../static/2.jpg';
import ImgThree from '../static/3.png';
import ImgFour from '../static/4.png';
import ImgFive from '../static/5.png';
import ImgSix from '../static/6.png';
import ImgSeven from '../static/7.png';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ChatIcon from '@mui/icons-material/Chat';
import { styled } from '@mui/material/styles';
import Map from '../components/Map';
import { navigate } from '@reach/router';

const images = [ImgOne, ImgTwo, ImgThree, ImgFour, ImgFive, ImgSix, ImgSeven];

const styles = {
    imagePaper: {
        width: "50%",
        height: "100%",
        padding: "25px 25px 150px 25px",
    },
    detailPaper: {
        width: "50%",
        padding: "25px 25px 150px 25px",
        textAlign: "Left",
        fontFamily: "Arial",
    },
    lawnMower: {
        maxWidth: "100%",
        width: "85%",
    },
    breadcrumbs: {
        marginLeft: "3%",
        marginTop: "2%"
    },
    imageList: {
        marginTop: "6px"
    },
    img: {
        width: "90%",
        height: "auto"
    },
    div: {
        padding: "30px 20px 20px 20px",
        width: "80%"
    }
}

const RentButton = styled(Button)`
    color: white;
    background-color: green;
    margin-bottom: 12px; 
    
    &:hover {
        background-color: #006400;
    }
    &:active {
        background-color: #007F00;
    }
`;

const ChatButton = styled(Button)`
    color: green;
    background-color: white;
    border: green solid 1px;

    &:hover {
        background-color: #ECECEC;
    }
    &:active {
        background-color: #ECECEC;
    }
`;

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default (props) => {
    const{ zipcode } = props;
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/home">
            Home
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href="/getting-started/installation/"
            onClick={handleClick}
        >
            Grass
        </Link>,
        <Typography key="3" color="text.primary">
            Lawnmower 3000
        </Typography>,
    ];

    return(
        <div>
            <NavBar/>
            <Stack spacing={2} style={styles.breadcrumbs}>
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                >
                    {breadcrumbs}
                </Breadcrumbs>
            </Stack>
            <Stack direction="row">
                <Container style={styles.imagePaper}>
                    <img src={LawnMower} style={styles.lawnMower}/>
                    <Stack direction="row" style={styles.imageList}>
                        {images.map((image) => (
                            <div>
                                <img src={image} style={styles.img}/>
                            </div>
                        ))}
                    </Stack>
                </Container>
                <Container style={styles.detailPaper}>
                    <Typography variant="h5" sx={{ fontWeight: "600" }}>$87/day</Typography>
                    <Typography variant="h4" sx={{ fontWeight: "600", mt: "6px", mb: "8px" }}>Lawnmower 3000</Typography>
                    <Typography>Husqwana Lawnmower</Typography>
                    <Typography>Electric Lawnmower</Typography>
                    <Typography>982-acres per charge</Typography>
                    <Typography>A clean cut at all angles</Typography>
                    <div style={styles.div}>
                        <RentButton fullWidth onClick={e => navigate("/pagecoming")}>Rent Now</RentButton>
                        <ChatButton fullWidth onClick={e=>navigate("/pagecoming")}><ChatIcon sx={{marginRight: "4px"}} fontSize="small"/>Chat with Owner</ChatButton>
                    </div>
                    <div style={{width: "80%", padding: "0px 20px"}}>
                        <Map google={props.google}
                            center={{ lat: 47.628933, lng: -122.343181}}
                            height='300px'
                            zoom={15}/>
                    </div>
                </Container>
            </Stack>
        </div>
    )
}