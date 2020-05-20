import React from 'react'
import '../../../resources/css/index.css';
import { FormattedMessage } from 'react-intl';

var Message = () => {
    return (
        <div className="col-xs-12 col-md-12 padding-0 bg-grey ">
            <div className="help-texts">
                <span><FormattedMessage id="data.deviceManagementBaseMsg"/></span>
            </div>
        </div>
    )
}

export default Message