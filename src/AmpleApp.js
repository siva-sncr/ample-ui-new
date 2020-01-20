import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';

import maapStore from './store';
import Home from './home';

class Maap extends Component {
    render() {
        return (
            <Router>
                <Provider store={maapStore}>
                    <Home />
                </Provider>
            </Router>
        );
    }
}
export default Maap;