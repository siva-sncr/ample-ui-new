import React, { Component } from 'react';
import { TreeConsumer } from '../../treeView/provider/treeProvider';
import MessageView from './components/baseMeassageView';

class DeviceManagement extends Component {
    render() {
        debugger
        return (
            <React.Fragment>
                <TreeConsumer>
                    {(context) => (
                        <React.Fragment>
                            <div className="device-management">
                                {context.selectedNodeName !=="SentientEnergy" ? "" : <MessageView />}
                            </div>
                        </React.Fragment>
                    )}
                </TreeConsumer>
            </React.Fragment>
        );
    }
}

export default DeviceManagement;