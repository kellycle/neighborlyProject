import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import {
    AppBar,
    Button,
    Link,
    Box,
    Toolbar,
    Typography,
    Tooltip,
    IconButton,
    Avatar,
    Menu,
    MenuItem,
    Container,
    Divider,
    Stack,
    TextField,
    Paper
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import MessageIcon from '@mui/icons-material/Message';
import HardwareIcon from '@mui/icons-material/Hardware';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LogoutIcon from '@mui/icons-material/Logout';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
// import { styled } from '@mui/system';
import { styled, alpha } from '@mui/material/styles';

const pages = ['Zip Code', 'Inbox', 'My Tools'];
const settings = ['Profile', 'Account Settings', 'Logout'];

const styles = {
    title: {
        fontFamily: "Arial",
        fontWeight: "lighter",
    },
    toolButton: {
        backgroundColor: "green",
        color: "white",
        fontSize: "0.875rem",
        height: "30px",
        margin: "auto 12px auto auto",
        fontFamily: "Arial",
        borderRadius: "4px",
        padding: "0 8px 0 4px",
    },
    avatar: {
        backgroundColor: "transparent",
        border: "green 2px solid",
        color: "black",
        fontSize: "16px",
        marginLeft: "12px"
    },
    add: {
        paddingRight: "4px",
    },
    search: {
        width: "50%", 
        border: "1px grey solid", 
        borderRadius: "3px",
        padding: "5px",
    },
    searchButton: {
        display: "inline-block",
        color: "white",
        backgroundColor: "green",
    },
    paper: {
        width: "20%",
        height: "100%",
        marginLeft: "2%",
        marginRight: "2%",
        marginTop: "40px",
        marginBottom: "40px",
        fontSize: "115%",
        borderRadius: "6px",
    },
}

const CustomButton = styled(Button)`
    font-family: Arial;
    font-weight: 100;
    font-size: 0.875rem;
    padding: 12px 12px 10px 12px;
    border-radius: 8px;
    color: black;
    cursor: pointer;
    border: none;
    background-color: inherit;
    text-transform: capitalize;
    
    &:active {
        background-color: #D3D3D3;
    }
`;

const SearchField = styled(InputBase)`
    color: grey.600;
    width: 90%;
    display: inline-block;
`;

export default () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [search, setSearch] = useState("");
    const [userName, setUserName] = useState("");
    // const [user, setUser] = useState();

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        // if (loggedInUser) {
        //     const foundUser = JSON.parse(loggedInUser);
        //     setUser(foundUser);
        // } 
        if (!loggedInUser) {
            navigate("/");
        }
        const foundUser = JSON.parse(loggedInUser);
        setUserName(foundUser.user.name);
    }, []);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    };

    const pageComing = () => {
        handleCloseNavMenu();
        handleCloseUserMenu();
        navigate("/pagecoming");
    }

    const handleSearch = () => {
        navigate("/pagecoming");
    }

    return(
        <div>
            <AppBar position="static" color="default">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h5"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'Arial', fontWeight: '100', mr: 4}}
                        >
                            <Tooltip title="Return to Homepage">
                                <Link href="/home" sx={{color: "inherit", textDecoration: "none"}}>Neighborly</Link>
                            </Tooltip>
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <div>
                                {pages.map((page) => (
                                        <div>
                                            {page === "Zip Code" &&
                                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                                <Typography textAlign="center">{page}</Typography>
                                            </MenuItem>
                                            }
                                            {page === "Inbox" &&
                                            <MenuItem key={page} onClick={pageComing}>
                                                <Typography textAlign="center">{page}</Typography>
                                            </MenuItem>
                                            }
                                            {page === "My Tools" &&
                                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                                <Typography textAlign="center">{page}</Typography>
                                            </MenuItem>
                                            }
                                        </div>
                                    ))}
                                    <MenuItem onClick={handleCloseNavMenu} sx={{ backgroundColor: "green", color: "white", '&:hover': {color: "white", backgroundColor: "#4C9A2A"}}}>
                                        <Typography onClick={e => navigate("/createtool")}><AddIcon sx={{fontSize:"large", verticalAlign: "text-top"}}/> Post a Tool</Typography>
                                    </MenuItem>
                                </div>
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, fontFamily: 'Arial', fontWeight: '100' }}
                        >
                            <Tooltip title="Return to homepage">
                                <Link href="/home" sx={{color: "inherit", textDecoration: "none"}}>Neighborly</Link>
                            </Tooltip>
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} style={styles.search}>
                            <SearchField placeholder="Search for a tool" sx={{ mt: "auto"}} onChange={e => {setSearch(e.target.value)}} value={search}/>
                            <Button style={styles.searchButton} onClick={handleSearch} disabled={search === ""}>
                                <SearchIcon sx={{verticalAlign: "middle"}}/>
                            </Button>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: "12px" }}>
                            <Button style={styles.toolButton} onClick={e => navigate("/createtool")}><AddIcon style={styles.add}/> Post a tool</Button>
                            <Stack
                                direction="row"
                                divider={<Divider orientation="vertical" flexItem variant="middle"/>}
                            >
                                <Divider/>
                                {pages.map((page) => (
                                    <div>
                                        {page === 'Zip Code' &&
                                            <CustomButton
                                            key={page}
                                            onClick={handleCloseNavMenu}
                                            sx={{color: 'green'}}
                                            >
                                                <Stack>
                                                    <LocationOnIcon sx={{m: "auto", fontSize: "30px"}}/>
                                                    {page}
                                                </Stack>
                                            </CustomButton>
                                        }
                                        {page === 'Inbox' &&
                                            <CustomButton
                                            key={page}
                                            onClick={pageComing}
                                            >
                                                <Stack>
                                                    <MessageIcon sx={{m: "auto", fontSize: "30px"}}/>
                                                    {page}
                                                </Stack>
                                            </CustomButton>
                                        }
                                        {page === 'My Tools' &&
                                            <CustomButton
                                            key={page}
                                            onClick={pageComing}
                                            >
                                                <Stack>
                                                    <HardwareIcon sx={{m: "auto", fontSize: "30px"}}/>
                                                    {page}
                                                </Stack>
                                            </CustomButton>
                                        }
                                    </div>
                                ))}
                                <Divider/>
                            </Stack>
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar style={styles.avatar}>{userName[0]}</Avatar>
                                    <KeyboardArrowDownIcon/>
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <div>
                                        {setting === "Logout" &&
                                            <MenuItem key={setting} onClick={handleLogout} sx={{ borderTop: 1, borderColor: 'grey.200' }}>
                                                <Typography textAlign="center">{setting}</Typography>
                                                <LogoutIcon sx={{ml: 1, verticalAlign: "top"}} fontSize="small"/>
                                            </MenuItem>
                                        }
                                        {setting !== "Logout" &&
                                            <MenuItem key={setting} onClick={pageComing}>
                                                <Typography textAlign="center">{setting}</Typography>
                                            </MenuItem>
                                        }
                                    </div>
                                    )
                                )}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}