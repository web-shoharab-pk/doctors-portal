import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContaxt } from '../../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const {userInfo } = useContext(UserContaxt)
 
        return (
        <Route
            {...rest}
            render={({ location }) =>
            userInfo.email && sessionStorage.getItem('token') ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
   
};

export default PrivateRoute;