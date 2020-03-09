import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import PageContent from './content/components/PageContent';
import TopBar from './top-bar/components/TopBar';

export default class App extends Component {
    render(){
        return(
            <>
                <Switch>
                    <Route path='/' component={PageContent} />
                </Switch>
            </>
        );
    }
}