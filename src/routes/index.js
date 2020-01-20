import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import asyncRoute from './asyncRoute';


class Routes extends Component {

    render() {
        return (
            <Switch>
                {/* <Route exact path='/' render={() => (<Redirect to='/rcs-messaging' />)} /> */}
                <Route exact path='/'/>
                <Route path="/rcs-messaging" />
                <Route path="/analytics" component={asyncRoute('analytics')} />
                <Route path="/automation" component={asyncRoute('automation')} />
            </Switch>
        );
    }
}

export default Routes;
