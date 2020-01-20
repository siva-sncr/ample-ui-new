import React, { Component } from 'react';
import { Row, Col, ButtonToolbar, Button } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationProvider, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';
import filterFactory from "react-bootstrap-table2-filter";
import NoDataAvailable from './noDataAvailableComponent';

class TableView extends Component {
        state = {
                options: this.props.options,
        }

        handleNextPage = ({
                page,
                onPageChange
        }) => () => {
                onPageChange(page + 1);
        }

        handlePrevPage = ({
                page,
                onPageChange
        }) => () => {
                onPageChange(page - 1);
        }

        handleFirstPage = ({
                page,
                onPageChange
        }) => () => {
                onPageChange(1);
        }

        handleLastPage = ({
                page,
                onPageChange
        }) => () => {
                let lastPageNumber = Math.ceil(Number(this.state.options.totalSize) / Number(this.state.options.sizePerPage));
                onPageChange(lastPageNumber);
        }
        componentWillReceiveProps(nextProps) {
                let options = Object.assign({}, this.state.options)
                if (nextProps.options && nextProps.options.list)
                        options.list = nextProps.options.list
                if (nextProps.options && nextProps.options.sizePerPage)
                        options.sizePerPage = nextProps.options.sizePerPage
                if (nextProps.options && nextProps.options.columnList)
                        options.columnList = nextProps.options.columnList
                if (nextProps.options && nextProps.options.totalSize)
                        options.totalSize = nextProps.options.totalSize
                if (nextProps.devicesCount)
                        options.totalSize = nextProps.devicesCount
                this.setState({ options });
        }

        render() {
                let { list, totalSize, sizePerPage, columnList, defaultSorted, page } = this.props.options;
                let paginationOptions = {
                        custom: true,
                        page,
                        sizePerPage,
                        showTotal: true,
                        totalSize: this.state.options.totalSize,
                        sizePerPageList: [{
                                text: '10', value: 10
                        }, {
                                text: '25', value: 25
                        }, {
                                text: '50', value: 50
                        }, {
                                text: '75', value: 75
                        }],
                        
                        // A numeric array is also available. the purpose of above example is custom the text
                        onSizePerPageChange: (sizePerPage, page) => {
                                this.props.s(1, sizePerPage);
                        },
                        onPageChange: (page, sizePerPage) => {
                                this.props.s(page, sizePerPage);
                        }
                };
                const handleChange = (type, newState) => {
                        this.props.options.page = newState.page;
                }
                const paginationDisabled = this.props.tableVerticalScroll ? true : list && list.length > 0 ? false : true;

                let bootstrapTableClass=this.props.tableVerticalScroll?"table-fixed":"";

                return (
                        <PaginationProvider
                                pagination={paginationFactory(paginationOptions)}
                        >
                                {
                                        ({
                                                paginationProps,
                                                paginationTableProps
                                        }) => (
                                                        <div >
                                                                <BootstrapTable
                                                                       classes={bootstrapTableClass}
                                                                        onTableChange={handleChange}
                                                                        keyField='id'
                                                                        data={list}
                                                                        sizePerPage={sizePerPage}
                                                                        totalSize={totalSize}
                                                                        columns={columnList}
                                                                        noDataIndication={() => <NoDataAvailable />}
                                                                        defaultSorted={defaultSorted}
                                                                        filter={filterFactory()}
                                                                        remote={{ pagination: true }}
                                                                        {...paginationTableProps}

                                                                />
                                                                <Row className="padding-10-0" hidden={paginationDisabled}>
                                                                        <Col xs={8} md={8} sm={8} className="text-right" style={{ 'float': 'right', 'display': '-webkit-box' }}>
                                                                                <SizePerPageDropdownStandalone
                                                                                        {...paginationProps}
                                                                                />&nbsp;&nbsp;
                                                                {paginationProps.page === 1 ? paginationProps.page : ((paginationProps.page * paginationProps.sizePerPage) - paginationProps.sizePerPage) + 1} - {((paginationProps.page * paginationProps.sizePerPage) > paginationProps.totalSize) ? paginationProps.totalSize : (paginationProps.page * paginationProps.sizePerPage)} of {paginationProps.totalSize} Rows
                                                        </Col>
                                                                        <Col xs={5} md={5} sm={5} className="text-right" style={{ 'float': 'right', 'position': 'absolute', 'right': '0px' }}>
                                                                                <ButtonToolbar className="pull-right">
                                                                                        <Button
                                                                                                disabled={paginationProps.page === 1}
                                                                                                variant="link" className="noborder" onClick={this.handlePrevPage(paginationProps)}>&lt; Prev</Button>
                                                                                        <Button variant="link" className="noborder" onClick={this.handleFirstPage(paginationProps)}>&laquo; First</Button>
                                                                                        <Button variant="link" className="noborder" onClick={this.handleLastPage(paginationProps)}>Last &raquo;</Button>
                                                                                        <Button
                                                                                                disabled={(paginationProps.page * paginationProps.sizePerPage) > paginationProps.totalSize}
                                                                                                variant="link" className="noborder" onClick={this.handleNextPage(paginationProps)}>Next &gt;</Button>
                                                                                </ButtonToolbar>
                                                                        </Col>
                                                                </Row>
                                                        </div>
                                                )
                                }
                        </PaginationProvider>


                );
        }
}

export default TableView;