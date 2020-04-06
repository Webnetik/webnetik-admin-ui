import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import UsersPage from './users/components/UsersPage';
import RolesAndCapabilitiesPage from "./roles-and-capabilities/components/RolesAndCapabilitiesPage";
import {Layout} from "antd";
import MyMenu from "./menu/components/Menu";
import LoginPage from "./login/components/LoginPage";
import Authenticate from "./login/HOC/Authenticate";
import WithoutAuthenticate from "./login/HOC/WithoutAuthenticate";
import TopMenu from "./menu/components/TopMenu";
import ProfilePage from "./profile/components/ProfilePage";

export default class App extends Component {
    render() {
        return(
            <Layout style={{ height: '100vh' }}>
                <Switch>
                    <Route path='/' component={Authenticate(MyMenu)} />
                </Switch>
                <Layout>
                    <Route path='/' component={Authenticate(TopMenu)} />
                    <Switch>
                        <Route path='/' exact={true} component={Authenticate(RolesAndCapabilitiesPage)} />
                        <Route path='/roles-and-capabilities' component={Authenticate(RolesAndCapabilitiesPage)} />
                        <Route path='/users' component={Authenticate(UsersPage)} />
                        <Route path='/my-profile' component={Authenticate(ProfilePage)} />
                        <Route path='/login' exact={true} component={WithoutAuthenticate(LoginPage)} />
                    </Switch>
                </Layout>
            </Layout>
        );
    }
}