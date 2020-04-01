import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import UsersPage from './users/components/UsersPage';
import RolesAndCapabilitiesPage from "./roles-and-capabilities/components/RolesAndCapabilitiesPage";

export default class App extends Component {
    render() {
        return(
            <>
                <Switch>
                    <Route path='/' exact={true} component={RolesAndCapabilitiesPage} />
                    <Route path='/roles-and-capabilities' component={RolesAndCapabilitiesPage} />
                    <Route path='/users' component={UsersPage} />
                </Switch>
            </>
        );
    }
}