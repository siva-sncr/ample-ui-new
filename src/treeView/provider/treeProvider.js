import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as treeBuilderActions from '../actions/treeViewActionBuilder';
import { getData } from '../../service/extendedService';
export const TreeContext = React.createContext();

class TreeProvider extends Component {

  state = {
    tree: [],
  }
  initTree = (treeData) => {
    treeData.title = treeData.name;
    treeData.path = `${treeData.id}/regions`;
    treeData.arrow = "right";
    this.setState({
      tree: Object.assign([], [treeData])
    })
  }
  dummy = (tree) => {
  }
  loadNextLevel = async (event, node) => {
    if (event.target.parentElement.closest('.rst__tree').querySelector('.active-tree-node'))
      event.target.parentElement.closest('.rst__tree').querySelector('.active-tree-node').classList.remove('active-tree-node');
    if (event.target.getElementsByClassName("rstcustom__rowLabel")[0]) {
      event.target.getElementsByClassName("rstcustom__rowLabel")[0].getElementsByTagName("span")[0].classList.add("active-tree-node");
    } else {
      event.target.closest(".rstcustom__rowContents").getElementsByTagName("span")[0].classList.add("active-tree-node");
    }
    const expanded = node.node.expanded ? !node.node.expanded : true;
    const arrow = node.node.arrow ? !node.node.arrow : "right";
    const selectedNodeType = node.node.type;
    let url = "";
    switch (selectedNodeType) {
      case "ROOTNODE":
        url = `${url}/${node.node.path}`;
        break;
      case "REGION":
        url = `${node.node.path}/substations`;
        break;
      case "SUBSTATION":
        url = `${node.node.path}/feeders`;
        break;
      case "FEEDER":
        url = `${node.node.path}/childnodes`;
        break;
      case "LATERAL":
        let pathArr = node.node.path.split("/");
        pathArr[pathArr.length - 2] = "laterals";
        pathArr = pathArr.join("/");
        url = `${pathArr}/lateralsites`;
        break;
      default:
        url = ""
        break;
    }
    if (url) {
      const resp = await getData(`/devicemanagement/rest${url}`);
      if (!resp.isAxiosError) {
        const changedRespFrmt = resp.data.map((e) => {
          let obj = {
            name: e.name,
            title: e.name,
            type: e.type,
            id: e.name + "_" + e.type,
            path: `${url}/${e.name}`,
            arrow: "right"
          };
          return obj;
        });
        let currentStateVal = { ...this.state };
        let urlSplitArr = node.node.path.split("/");
        let regionNameIndex = currentStateVal.tree[0].children ? currentStateVal.tree[0].children.findIndex(e => e.name === urlSplitArr[urlSplitArr.indexOf("regions") + 1]) : "";
        let subStationNameIndex = (regionNameIndex !== "" && regionNameIndex !== -1) ? currentStateVal.tree[0].children[regionNameIndex].children ? currentStateVal.tree[0].children[regionNameIndex].children.findIndex(e => e.name === urlSplitArr[urlSplitArr.indexOf("substations") + 1]) : "" : "";
        let feederNameIndex = (regionNameIndex !== "" && regionNameIndex !== -1) ? (subStationNameIndex !== "" && subStationNameIndex !== -1) ? currentStateVal.tree[0].children[regionNameIndex].children[subStationNameIndex].children ? currentStateVal.tree[0].children[regionNameIndex].children[subStationNameIndex].children.findIndex(e => e.name === urlSplitArr[urlSplitArr.indexOf("feeders") + 1]) : "" : "" : "";
        let lateralNameIndex = (regionNameIndex !== "" && regionNameIndex !== -1) ? (subStationNameIndex !== "" && subStationNameIndex !== -1) ? (feederNameIndex !== "" && feederNameIndex !== -1) ? currentStateVal.tree[0].children[regionNameIndex].children[subStationNameIndex].children[feederNameIndex].children ? currentStateVal.tree[0].children[regionNameIndex].children[subStationNameIndex].children[feederNameIndex].children.findIndex(e => e.name === urlSplitArr[urlSplitArr.indexOf("childnodes") + 1]) : "" : "" : "" : "";
        switch (selectedNodeType) {
          case "ROOTNODE":
            currentStateVal.tree[0].expanded = expanded;
            currentStateVal.tree[0].arrow = arrow;
            currentStateVal.tree[0].children = changedRespFrmt;
            break;
          case "REGION":
            currentStateVal.tree[0].children[regionNameIndex].expanded = expanded;
            currentStateVal.tree[0].children[regionNameIndex].arrow = arrow;
            currentStateVal.tree[0].children[regionNameIndex].children = changedRespFrmt;
            break;
          case "SUBSTATION":
            currentStateVal.tree[0].children[regionNameIndex].children[subStationNameIndex].expanded = expanded;
            currentStateVal.tree[0].children[regionNameIndex].children[subStationNameIndex].arrow = arrow;
            currentStateVal.tree[0].children[regionNameIndex].children[subStationNameIndex].children = changedRespFrmt;
            break;
          case "FEEDER":
            currentStateVal.tree[0].children[regionNameIndex].children[subStationNameIndex].children[feederNameIndex].expanded = expanded;
            currentStateVal.tree[0].children[regionNameIndex].children[subStationNameIndex].children[feederNameIndex].arrow = arrow;
            currentStateVal.tree[0].children[regionNameIndex].children[subStationNameIndex].children[feederNameIndex].children = changedRespFrmt;
            break;
          case "LATERAL":
            currentStateVal.tree[0].children[regionNameIndex].children[subStationNameIndex].children[feederNameIndex].children[lateralNameIndex].expanded = expanded;
            currentStateVal.tree[0].children[regionNameIndex].children[subStationNameIndex].children[feederNameIndex].children[lateralNameIndex].arrow = arrow;
            currentStateVal.tree[0].children[regionNameIndex].children[subStationNameIndex].children[feederNameIndex].children[lateralNameIndex].children = changedRespFrmt;
            break;
          default:
            break;
        }
        this.setState({
          tree: Object.assign([], currentStateVal.tree)
        });
      }
    }
  }
  render() {
    return (
      <TreeContext.Provider value={{
        tree: this.state.tree,
        initTree: this.initTree,
        loadNextLevel: this.loadNextLevel,
        dummy: this.dummy
      }}>
        {this.props.children}
      </TreeContext.Provider>
    )
  }
}

const mapStateToProps = state => {
  return {
    // globalData: state.treeReducer.globaltree,
    // tree: state.treeReducer.tree,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    // initTree: (tree) => dispatch(treeBuilderActions.initTree(tree)),
    // loadNextLevelTree: (tree, node) => dispatch(treeBuilderActions.loadNextLevelTree(tree, node)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TreeProvider);
export const TreeConsumer = TreeContext.Consumer;