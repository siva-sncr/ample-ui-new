import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
// import Routes from '../routes';
import { Row, Col } from 'react-bootstrap';

class MainContent extends Component {
    render() {
        return (
           <Row>
               <Col sm={3}>
                   <div>tree view render here</div>
               </Col>
               <Col sm={9}>
                   <div>table data render here</div>
               </Col>
           </Row>
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