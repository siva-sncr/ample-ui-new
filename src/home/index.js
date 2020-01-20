import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { MemoryRouter as Router } from "react-router-dom";
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from '../header';
import MainContent from '../mainContent';

import '../resources/css/style.css';
import '../resources/css/bootstrap-multiselect.css';

class HomeComponent extends Component {
/*
    state = {

    }
    
    componentDidMount() {
    }
    componentWillReceiveProps(newProps) {
    } */

    render() {

        return (
            <Router>
                <Grid fluid={true} className="home height-100">
                    <Row className="height-100">
                        <Col xs={3} md={3} className="left-col height-100 padding-0">
                            <Header />
                        </Col>
                        <Col xs={9} md={9} className="right-col padding-0">
                            <MainContent />
                        </Col>
                    </Row>
                </Grid>
            </Router>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeComponent));