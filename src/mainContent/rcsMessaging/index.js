import React, { Component } from 'react'
import RcsMsgContainer from './container/RcsMsgContainer';
import RcsMsgProvider from './provider/rcsMsgProvider';

class rcsMessaging extends Component {
    
    state = {
    };
    
    render() {
        return (
            <RcsMsgProvider>
                <RcsMsgContainer />
            </RcsMsgProvider>
        );
    }
}

export default rcsMessaging;