import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import Routes from '../routes';

class MainContent extends Component {

    componentDidMount() {
    }

    componentWillReceiveProps(newProps) {
    }

    render() {

        return (
            <React.Fragment>
                <Routes />
            </React.Fragment>

        );
    }
}


const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainContent));