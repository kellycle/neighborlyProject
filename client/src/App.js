import { Router } from '@reach/router';
import React from 'react';
import './App.css';

import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import ForgotPassword from './views/ForgotPassword';
import ToolInfo from './views/ToolInfo';
import PageComing from './views/PageComing';
import CreateTool from './views/CreateTool';
import RentNow from './views/RentNow';


function App(props) {
    return ( 
    <div className = "App">
        <Router>
            <Login path="/"/>
            <Register path="/signup"/>
            <ForgotPassword path="/recoverpassword"/>
            <Home path="/home"/>
            <ToolInfo path="/toolinfo"/>
            <PageComing path="/pagecoming"/>
            <CreateTool path="/createtool"/>
            <RentNow path="/rentnow"/>
        </Router>
    </div>
    );
}

export default App;


// import { Router } from '@reach/router';
// import React from 'react';
// import './App.css';

// import Main from './views/Main';
// import Connect from './views/Connect';
// import Payments from './views/Payments';
// import LoginRegister from './views/LoginRegister';
// import CheckoutForm2 from './views/CheckoutForm2';
// import img from './Neighbourly.PNG';
// import { Box } from '@material-ui/core';

// // Create
// import UserCreate from './views/User/UserCreate';
// import ToolCreate from './views/Tool/ToolCreate';
// import ReviewCreate from './views/Review/ReviewCreate';
// //Detail
// import UserDetail from './views/User/UserDetail';
// import ToolDetail from './views/Tool/ToolDetail';
// import ReviewDetail from './views/Review/ReviewDetail';
// //Edit
// import UserEdit from './views/User/UserEdit';
// import ToolEdit from './views/Tool/ToolEdit';
// import ReviewEdit from './views/Review/ReviewEdit';


// function App(props) {
//     return ( 
//     < div className = "App">
//         <div>
//             <Box letterSpacing={3}>
//             <img src={img} style={{width: '50px', height: '50px', display: 'inline-block', verticalAlign: 'middle'}}/>
//             <h1 style={{display: 'inline-block', verticalAlign: 'middle'}}>Neighborly</h1> 
//             </Box>
//         </div>
//         {/* <Link to = { `/homepage` } > Back to Home </Link> <br/> */}
//         <Router >
//             <LoginRegister path = "/"/>
//             <Main path = "/homepage"/>
//             <UserCreate path = "/user/new" />
//             <ToolCreate path="/user/:id/new_tool"/>
//             <ReviewCreate path="/user/:id/new_review"/>

//             <UserEdit path = "/user/:id/edit" />
//             <ToolEdit path = "/user/:id/tool/edit" />
//             <ReviewEdit path = "/user/:id/review/edit" />

//             <UserDetail path = "/user/:id" />
//             <ToolDetail path = "/user/:id/tool"/>
//             <ReviewDetail path = "/user/:id/review/:id"/>

//             <Connect path = "/user/:id/connect"/>
//             <Payments path= "/user/:id/payments"/>
//             <CheckoutForm2 path = "/user/:_id/tool/:tool_id/checkout"/>
//         </Router>
//         </div>
//     );
// }

// export default App;