import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, ...rest }) => { 

    const token = localStorage.getItem('token')
    if (token) {
        return (
            <Route { ...rest }>
                { children }
            </Route>
        );
    } else {
        return <Redirect to="/login"/>
    }
}

interface PrivateRouteProps {
    path: string,
    exact?: boolean
}

export default PrivateRoute;