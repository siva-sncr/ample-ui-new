import React, { Component } from 'react';
import FileExplorerTheme from 'react-sortable-tree-theme-file-explorer';
import SortableTree from 'react-sortable-tree';
import '../../resources/css/treeview.css';
import { TreeContext } from '../provider/treeProvider';
import { getData } from '../../service/extendedService';
import * as treeViewUtility from '../../utilities/treeViewUtility';

class treeContainer extends Component {
    static contextType = TreeContext;
    componentDidMount() {
        this.fetchOrgData();
    }
    fetchOrgData = async () => {
        const resp = await getData("/devicemanagement/rest/orgDetails");
        if(!resp.isAxiosError){
        const rootNode = resp.data.find(e => e.type === "ROOTNODE");
        this.context.initTree(rootNode)
        }
    }
    render() {
        return (
            <div className="left-nav">
                <div className="tree" >
                    <SortableTree
                        treeData={this.context.tree}
                        theme={FileExplorerTheme}
                        onChange={(treeData) => this.context.dummy(treeData)}
                        generateNodeProps={(clickedNode) => ({
                            onClick: (event) => {
                                this.context.loadNextLevel(event,clickedNode);
                            },
                            buttons: [
                                <span>{treeViewUtility.fontIcon[clickedNode.node.type]}</span>
                            ],
                            className: (clickedNode.node.type !=="SITE" && clickedNode.node.type !=="LATERAL_SITE") ? clickedNode.node.arrow === "right" ? `glyphicon glyphicon-menu-right` : `glyphicon glyphicon-menu-down` : "",
                        })}
                    ></SortableTree>
                </div>
            </div>
        );
    }
}
export default treeContainer;