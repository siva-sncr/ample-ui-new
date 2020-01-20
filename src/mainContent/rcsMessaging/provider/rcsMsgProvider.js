import React, { Component } from 'react';
import * as RcsMsgUtility from '../../../utility/RcsMsgUtility';

export const RcsMsgContext = React.createContext();

class RcsMsgProvider extends Component {

  state = {
    methodTypes: [
      {value: "Select", selected:true, text: ''},
      { value: "GET", text: ''},
      { value: "POST", text: 'https://a2p.maap-qa.us.sncrmmp.com/rcsbotsgateway/rcs/bot/v1/yummybakeryccmiqa/messages' }
    ],
    url: '',
    contentType: 'application/json',
    token: 'Bearer 07cf03fac7c440818b5b9d5eaccb6843dc8374ec144e44f3b886af35e3f80edf3f8267d0b4cd468ba00000f0032a69cbcd15b6b2b94b47b3b05ecb60abd6fb2ab9608314953043cda7ec62726a6f0e3a',
    botId: '',
    userContact: ['+919743898026'],
    textMessage: 'Text Message - Message from Bangalore QA Team through Automation script',
    cardTypes: [{value:'Choose Card'}],
    options: RcsMsgUtility.tableOptions,
    tableVerticalScroll: true
  }

  setMethodType = (evt) => {
    let result = this.state.methodTypes.find( ({ value }) => value === evt[0].value );
    this.setState({ url: result['text'] });
  }

  setCardType = (evt) => {
    console.log(" evt ",evt);
  }

  handleChange = (userContact) => {
    this.setState({userContact: userContact});
  }
  
  onChange = (evt, stateVar) => {
    this.setState({[evt.target.name]: evt.target.value});
  }

  updateMsgList = (list) => {
    let tablelist = list.map(obj => {
      return {
        number: this.state.userContact[0],
        ...obj,
        action:<a href="void:javascript(0);"> Refresh </a>
      }
    });
    RcsMsgUtility.tableOptions.list = tablelist;
  }

  onTablePageChange = (pageNo, sizePerPage) => {
    RcsMsgUtility.tableOptions.pageNo = pageNo;
    RcsMsgUtility.tableOptions.pageSize = sizePerPage;
  }

  render() {
    return (
      <RcsMsgContext.Provider value={{
        state: this.state,
        setMethodType: this.setMethodType,
        handleChange: this.handleChange,
        updateMsgList: this.updateMsgList,
        onPageChange: this.onTablePageChange,
        setCardType: this.setCardType,
        onChange: this.onChange,
        msgSubmit: this.msgSubmit
      }}>
        {this.props.children}
      </RcsMsgContext.Provider>
    )
  }
}

export default RcsMsgProvider;

export const RcsMsgConsumer = RcsMsgContext.Consumer;