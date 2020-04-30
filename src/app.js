import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Layout} from "antd";

import UsersPage from './users/components/UsersPage';
import RolesAndCapabilitiesPage from './roles-and-capabilities/components/RolesAndCapabilitiesPage';
import MyMenu from "./menu/components/Menu";
import LoginPage from "./login/components/LoginPage";
import TopMenu from "./menu/components/TopMenu";
import ProfilePage from "./profile/components/ProfilePage";
import CoursesPage from "./courses/components/CoursesPage";
import AddNewCoursePage from "./courses/components/AddNewCoursePage";
import PrivateRoute, {LoginRoute} from "./login/components/PrivateRoute";
import AddOrModifyUserPage from "./users/components/AddOrModifyUserPage";

export default function App() {
    return(
        <Layout style={{ height: '100vh' }}>
            <Switch>
                <Route path='/' component={MyMenu} />
            </Switch>
            <Layout>
                <Route path='/' component={TopMenu} />
                <Switch>
                    <LoginRoute path='/login' exact component={LoginPage} />

                    <PrivateRoute path='/' exact component={RolesAndCapabilitiesPage} />
                    <PrivateRoute path='/roles-and-capabilities' component={RolesAndCapabilitiesPage} />

                    <PrivateRoute path='/users' exact component={UsersPage} />
                    <PrivateRoute path='/users/add-user' component={AddOrModifyUserPage} />

                    <PrivateRoute path='/my-profile' component={ProfilePage} />

                    <PrivateRoute path='/courses' exact component={CoursesPage} />
                    <PrivateRoute path='/courses/add-course' component={AddNewCoursePage} />
                    <PrivateRoute path='/courses/edit-course/:id' component={AddNewCoursePage} />
                </Switch>
            </Layout>
        </Layout>
    );
}
