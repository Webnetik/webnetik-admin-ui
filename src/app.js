import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import PageContent from './content/components/PageContent';
import TopBar from './top-bar/components/TopBar';

import UsersPage from './users/UsersPage';

export default class App extends Component {
    render(){
        return(
            <>
                <Switch>
                    <Route path='/' exact={true} component={PageContent} />
                    <Route path='/roles-and-capabilities' component={PageContent} />
                    <Route path='/users' component={UsersPage} />
                </Switch>
            </>
        );
    }
}