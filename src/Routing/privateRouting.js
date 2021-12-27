import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { isLogin } from '../utils';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const user = localStorage.getItem('token');
    return (

        <Route {...rest} render={props => (
            user ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;