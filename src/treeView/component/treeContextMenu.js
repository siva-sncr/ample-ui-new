import React from 'react';
import { FormattedMessage } from 'react-intl';

const contextMenu = (props) => {
    return (
        <div className="contextMenu" style={{top:props.contextMenuPosition}}>
            <ul>
                <li><FormattedMessage id="data.editNode" /></li>
                <li><FormattedMessage id="data.addRegion" /></li>
                <li><FormattedMessage id="data.addDevice" /></li>
                <li><FormattedMessage id="data.details" /></li>
            </ul>
        </div>
    )
}

export default contextMenu;