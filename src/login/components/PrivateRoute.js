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
        const authenticate = async () => {
            setAuthenticated(await loadUser());
        };
        authenticate();
    }, []);

    if(authenticated !== null) {
        let route = null;
        if(!authenticated || authenticated === 'Token expired') {
            route = <Route {...rest} render={props => {
                return <Redirect to='/login' />
            }} />;
        } else {
            route = <Route {...rest} render={props => {
                return <Component {...props} />;
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
        const authenticate = async () => {
            setAuthenticated(await authenticateUser());
        };
        authenticate();
    }, []);

    if(authenticated !== null) {
        let route = null;
        if(!authenticated || authenticated === 'Token expired') {
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
