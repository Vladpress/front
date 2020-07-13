import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Divider } from '@material-ui/core';


 const PrivateRoute = ({ component: Component, ...rest}) => {
    const token = Boolean(localStorage.getItem('token'));

    return (
    <Route {...rest} render={(props) => (
        token 
        ? <Component {...props} />
        : <Redirect to='/auth'/>
    )} />  
)}

export default PrivateRoute;