import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import dashboard from '../mainContent/dashboard'
import asyncRoute from './asyncRoute';

class Routes extends Component {

    render() {
        return (
            <Switch>
                <Route exact path='/' component={dashboard}/> 
                <Route path="/line-monitoring" component={asyncRoute('lineMonitoring')} />  
                <Route path="/device-management" component={asyncRoute('deviceManagement')} />              
            </Switch>
        );
    }
}

export default Routes;
