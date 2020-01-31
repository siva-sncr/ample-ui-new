import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
// import Routes from '../routes';
import Tree from '../treeView/index';
import { Row, Col } from 'react-bootstrap';
import TreeProvider from '../treeView/provider/treeProvider';

class MainContent extends Component {
    render() {
        return (
           <Row>
               <TreeProvider>
               <Col sm={3} className="left-col">
                   <Tree/>
               </Col>
               <Col sm={9} className="right-col">
                   <div>table data render here</div>
               </Col>
               </TreeProvider>
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