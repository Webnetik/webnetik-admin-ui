import React, {useContext, useEffect, useState} from 'react';
import {
    Route,
    Redirect,
} from "react-router-dom";
import authenticateUser from "../../common/actions/validateAuthenticatedUser";

export const PrivateRouteContext = React.createContext({
    loadUser: () => {
        return authenticateUser();
    }
});

function PrivateRoute({ component: Component, ...rest }) {
    const privateRouteContext = useContext(PrivateRouteContext);
    const { loadUser } = privateRouteContext;
    const [authenticated, setAuthenticated] = useState(null);

    useEffect( () => {
        setAuthenticated(loadUser());
    }, []);

    if(authenticated !== null) {
        let route = null;
        if(authenticated) {
            route = <Route {...rest} render={props => {
                return <Component {...props} />;
            }} />;
        } else {
            route = <Route {...rest} render={props => {
                return <Redirect to='/login' />
            }} />;
        }
        return route;
    } else {
        return <></>;
    }
}

export function LoginRoute({ component: Component, ...rest }) {
    const [authenticated, setAuthenticated] = useState(null);

    useEffect( () => {
        setAuthenticated(authenticateUser());
    }, []);

    if(authenticated !== null) {
        let route = null;
        if(!authenticated) {
            route = <Route {...rest} render={props => {
                return  <Component {...props} />;
            }} />;
        } else {
            route = <Route {...rest} render={props => {
                return <Redirect to='/' />
            }} />;
        }
        return route;
    } else {
        return <></>;
    }
}

export default PrivateRoute;
