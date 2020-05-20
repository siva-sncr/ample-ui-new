import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { MemoryRouter as Router } from "react-router-dom";
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import Login from '../login/container/loginContainer';
import MainContent from '../mainContent';
import '../resources/css/style.css';
import Header from "../header/component/headerComponent";
import Footer from '../footer/component/footerComponent';

class HomeComponent extends Component {
    render() {
        let content = null;
        //  if (this.props.loggedIn) {
            if (true) {
            content =<Grid fluid={true}>
                        <Row><Col sm={12}><Header /></Col></Row>
                        <Row><Col sm={12}><MainContent /></Col></Row>
                        <Row><Col sm={12}><Footer /></Col></Row>
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