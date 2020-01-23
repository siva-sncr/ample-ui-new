import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { MemoryRouter as Router } from "react-router-dom";
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import Login from '../login/container/loginContainer';
import MainContent from '../mainContent';
import '../resources/css/style.css';

class HomeComponent extends Component {
    render() {
        let content = null;
        if (this.props.loggedIn) {
            content =
                <Grid fluid={true} className="home height-100">
                    <Row className="height-100">
                        <Col xs={12} md={12} className="right-col padding-0">
                            <MainContent />
                        </Col>
                    </Row>
                </Grid>
        } else {
            content = <Login />
        }
        return (
            <Router>
                {content}
            </Router>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loginReducer.loggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeComponent));