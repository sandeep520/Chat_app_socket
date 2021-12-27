import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { isLogin } from '../utils';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    
    const user = localStorage.getItem('token');

    
    return (
     
        <Route {...rest} render={props => (
            user && restricted ?
                <Redirect to="/chat" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;