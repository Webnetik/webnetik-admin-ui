import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import ExamplePage from './example/components/ExamplePage';

export default class App extends Component {
    render(){
        return(
            <Switch>
                <Route path='/' component={ExamplePage} />
            </Switch>
        );
    }
}