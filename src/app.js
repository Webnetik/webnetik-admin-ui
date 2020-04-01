import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import UsersPage from './users/components/UsersPage';
import RolesAndCapabilitiesPage from "./roles-and-capabilities/components/RolesAndCapabilitiesPage";
import {Layout} from "antd";
import MyMenu from "./menu/components/Menu";

export default class App extends Component {
    render() {
        return(
            <Layout style={{ height: '100vh' }}>
                <MyMenu />
                <Layout>
                    <Switch>
                        <Route path='/' exact={true} component={RolesAndCapabilitiesPage} />
                        <Route path='/roles-and-capabilities' component={RolesAndCapabilitiesPage} />
                        <Route path='/users' component={UsersPage} />
                    </Switch>
                </Layout>
            </Layout>
        );
    }
}