import React, { Component } from 'react';
import FileExplorerTheme from 'react-sortable-tree-theme-file-explorer';
import SortableTree from 'react-sortable-tree';
import '../../resources/css/treeview.css';
import { TreeContext } from '../provider/treeProvider';
import { getData } from '../../service/extendedService';
import * as treeViewUtility from '../../utilities/treeViewUtility';
import ContextMenu from '../component/treeContextMenu';

class treeContainer extends Component {
    static contextType = TreeContext;
    constructor(props) {
        super(props);
        this.state = {
            contextMenuClassName: "",
            contextMenuPosition:null,
            selectedNodeId:null
        }
        this.tree = React.createRef();
    }
    
    componentDidMount() {
        this.fetchOrgData();
    }
    fetchOrgData = async () => {
        const resp = await getData("/devicemanagement/rest/orgDetails");
        if (!resp.isAxiosError) {
            const rootNode = resp.data.find(e => e.type === "ROOTNODE");
            this.context.initTree(rootNode)
        }
        this.tree.current.getElementsByClassName("ReactVirtualized__Grid ReactVirtualized__List rst__virtualScrollOverride")[0].addEventListener("scroll",this.highlightOnScroll);
    }
    openContextMenu = (event,selectedNode) => {
        this.setState({
            contextMenuClassName: "context" + selectedNode.node.id,
            contextMenuPosition: event.clientY +"px"
        })
    }
    closeContextMenu = (event,clickedNode) => {
        this.setState({
            contextMenuClassName: "",
            selectedNodeId:clickedNode.node.id
        })
    }
   highlightOnScroll = () =>{
       if(this.tree.current.getElementsByClassName(this.state.selectedNodeId)[0]){
    this.tree.current.getElementsByClassName(this.state.selectedNodeId)[0].parentElement.parentElement.parentElement.getElementsByTagName("span")[0].classList.add("active-tree-node");
   }
}
    render() {
        return (
            <div className="left-nav">
                <div className="tree" ref={this.tree} >
                    <SortableTree
                        treeData={this.context.tree}
                        theme={FileExplorerTheme}
                        onChange={(treeData) => this.context.dummy(treeData)}
                        canDrag={false}
                        generateNodeProps={(clickedNode) => ({
                            onClick: (event) => {
                                this.closeContextMenu(event,clickedNode);
                                this.context.loadNextLevel(event, clickedNode);
                            },
                            onContextMenu: (event) => {
                                event.preventDefault();
                                this.openContextMenu(event,clickedNode);
                            },
                            onMouseLeave: () => {
                                //   this.closeContextMenu();
                            },
                            buttons: [
                                <span className={clickedNode.node.id}></span>,
                                <span>{treeViewUtility.fontIcon[clickedNode.node.type]}</span>,
                                <div style={{ paddingLeft: (clickedNode.node.name.length * 8) + "px", display: this.state.contextMenuClassName === "context" + clickedNode.node.id ? "block" : "none"}}><ContextMenu contextMenuPosition = {this.state.contextMenuPosition}/></div>
                            ],
                            className: (clickedNode.node.type !== "SITE" && clickedNode.node.type !== "LATERAL_SITE") ? clickedNode.node.arrow === "right" ? `glyphicon glyphicon-menu-right` : `glyphicon glyphicon-menu-down` : "",
                        })}
                    ></SortableTree>
                </div>
            </div>
        );
    }
}
export default treeContainer;