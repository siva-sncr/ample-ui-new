import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FormControl, Row, Col, Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';

import { RcsMsgContext } from '../provider/rcsMsgProvider';
import TableView from '../../../hoc/tableView';
import SingleSelectComponent from '../../../hoc/singleSelectDropdownComponent';
import * as actionBuilder from "../actions";
import Loader from '../../../hoc/loader';

class RcsMsgContainer extends Component {
    
    static contextType = RcsMsgContext;

    state = {
        list: this.props.list
    };

    componentWillReceiveProps(nextProps, prevProps) {
        if ((nextProps.list !== prevProps.list) && (nextProps.list.length > 0)) {
            this.context.updateMsgList(nextProps.list);
        }
    }

    onRCSMsgSubmit = (evt, obj, returnName) => {
        evt.preventDefault();
        let params = {};
        params['RCSMessage'] = { 'textMessage' : obj.textMessage };
        params['messageContact'] = { 'userContact' : obj.userContact[0] };
        this.props.rcsMsgSubmit(obj.url, params, returnName);
    };

    render() {
        let LoaderData = (this.props.loading) ? <Loader elementClass="ajax-loader" /> : null
        return (
            <React.Fragment>
                {LoaderData}
                <div className={(this.props.loading) ? 'rcs_messaging transparent' : 'rcs_messaging'}>
                    <div className="header">
                            <FormattedMessage id="rcsMessaging.heading.title"></FormattedMessage>
                        <div className="desc">
                            <FormattedMessage id="rcsMessaging.heading.desc"></FormattedMessage>
                        </div>
                    </div>
                    <div className="title">
                        <FormattedMessage id="rcsMessaging.heading.subTitle"></FormattedMessage>
                    </div>
                    <div className="method_url">
                        <FormattedMessage id="rcsMessaging.content.methodUrlTitle"></FormattedMessage>
                        <Row className="method_url_row">
                            <Col xs={3} md={3} className="padding-0">
                                <SingleSelectComponent handleChange={(evt) => this.context.setMethodType(evt)} data={this.context.state.methodTypes} />
                            </Col>
                            <Col xs={9} md={9}>
                                <FormControl 
                                    type="text"
                                    name="url"
                                    value={this.context.state.url}
                                    onChange={(evt) => this.context.onChange(evt)}
                                    placeholder="enter the url" />
                            </Col>
                        </Row>
                    </div>

                    <div className="headers">
                        <FormattedMessage id="rcsMessaging.content.headers.title"></FormattedMessage>
                        <Row className="headers_row">
                            <Col xs={6} md={6} className="padding-0">
                                <FormattedMessage id="rcsMessaging.content.headers.contentType">
                                    {placeholder=>  
                                        <FormControl readOnly type="input" defaultValue={placeholder} />
                                    }
                                </FormattedMessage>
                                <FormattedMessage id="rcsMessaging.content.headers.botId">
                                    {placeholder=>  
                                        <FormControl readOnly type="input" defaultValue={placeholder} />
                                    }
                                </FormattedMessage>
                                <FormattedMessage id="rcsMessaging.content.headers.token">
                                    {placeholder=>  
                                        <FormControl readOnly type="input" defaultValue={placeholder} />
                                    }
                                </FormattedMessage>

                            </Col>
                            <Col xs={6} md={6}>
                                <FormControl 
                                    name="contentType"
                                    value={this.context.state.contentType}
                                    onChange={(evt) => this.context.onChange(evt)} />
                                <FormControl 
                                    name="botId"
                                    value={this.context.state.botId}
                                    onChange={(evt) => this.context.onChange(evt)} />
                                <FormControl 
                                    name="token"
                                    value={this.context.state.token}
                                    onChange={(evt) => this.context.onChange(evt)} />
                            </Col>
                        </Row>
                    </div>

                    <div className="headers maap-std">
                        <FormattedMessage id="rcsMessaging.content.standard.title"></FormattedMessage>
                        <Row className="standard_row">
                            <Col xs={6} md={6} className="padding-0">
                                <SingleSelectComponent single handleChange={(evt) => this.context.setCardType(evt)} data={this.context.state.cardTypes} />
                            </Col>
                        </Row>
                        <div className="MDN_row">
                            <FormattedMessage id="rcsMessaging.content.standard.addMdn"></FormattedMessage>
                        </div>
                        <Row className="standard_row">
                            <Col xs={12} md={12} className="pl-0">
                                <TagsInput value={this.context.state.userContact} onChange={(evt) => this.context.handleChange(evt)} />
                            </Col>
                        </Row>
                        <Row className="standard_row">
                            <Col xs={12} md={12} className="pl-0">
                                <FormControl 
                                    componentClass="textarea"
                                    placeholder="textarea"
                                    rows={15}
                                    name="textMessage" 
                                    value={this.context.state.textMessage}
                                    onChange={(evt) => this.context.onChange(evt)} />
                            </Col>
                        </Row>
                        <Row className="standard_row">
                            <Col xs={2} md={2} className="pl-0 pull-right">
                                <Button
                                    className="submit"
                                    size="lg"
                                    block
                                    onClick={(evt) => this.onRCSMsgSubmit(evt,this.context.state, 'RCSMessage')} >
                                    <FormattedMessage id="common.button.submit"></FormattedMessage>
                                </Button>
                            </Col>
                        </Row>
                    </div>

                    <div className="headers maap-std">
                        <FormattedMessage id="rcsMessaging.content.msgStatus.title"></FormattedMessage>
                        <Row className="standard_row">
                            <Col xs={8} md={8} className="padding-0">
                                <TableView options={this.context.state.options} s={this.context.onPageChange} tableVerticalScroll={this.context.state.tableVerticalScroll}></TableView>
                                <Col xs={3} md={3} className="padding-0 pull-right">
                                    <Button
                                        size="lg"
                                        block
                                        onClick={(evt) => this.refreshAll(evt)} >
                                        <FormattedMessage id="common.button.refreshAll"></FormattedMessage>
                                    </Button>
                                </Col>
                            </Col>
                        </Row>
                    </div>

                    <div className="headers maap-std">
                        <FormattedMessage id="rcsMessaging.content.saveJson.title"></FormattedMessage>
                        <Row className="standard_row">
                            <Col xs={8} md={8} className="padding-0">
                                <FormattedMessage id="rcsMessaging.content.saveJson.text"></FormattedMessage>
                            </Col>
                        </Row>
                        <Row className="standard_row">
                            <Col xs={8} md={8} className="padding-0">
                                <FormControl 
                                    name="saveJson" />
                            </Col>
                        </Row>
                        <Row className="standard_row">
                            <Col xs={8} md={8} className="padding-0">
                                <Col xs={3} md={3} className="padding-0 pull-right">
                                    <Button
                                        size="lg"
                                        block
                                        onClick={(evt) => this.save(evt)} >
                                        <FormattedMessage id="common.button.save"></FormattedMessage>
                                    </Button>
                                </Col>
                            </Col>
                        </Row>
                    </div>

                </div>
            </React.Fragment >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.rcsMsgData.list,
        loading: state.rcsMsgData.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        rcsMsgSubmit: (url, data, returnName) => dispatch(actionBuilder.rcsMsgSubmit(url, data, returnName))
    }
}
  

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RcsMsgContainer));