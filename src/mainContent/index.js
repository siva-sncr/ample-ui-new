import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import Tree from '../treeView/index';
import { Row, Col } from 'react-bootstrap';
import TreeProvider from '../treeView/provider/treeProvider';
import '../resources/css/home.css';
import Routes from '../routes'

class MainContent extends Component {
    render() {
        let displayValue = (this.props.location.pathname === "/") ? "none" : "block";
        let widthValue = (this.props.location.pathname === "/") ? 12 : 9;
        let rightSectionClass = (this.props.location.pathname === "/") ? "right-col hide-tree" : "right-col show-tree";
        return (
           <Row>
               <TreeProvider>
               <Col sm={3} className="left-col" style= {{display:displayValue}}>
                   <Tree/>
               </Col>
               <Col sm={widthValue} className="right-col">
                   <Routes/>
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