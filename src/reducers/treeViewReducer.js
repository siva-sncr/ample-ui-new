import * as actionTypes from '../treeView/actions/treeViewActionTypes';
const initialState = {
    tree: [],
    // globaltree: [{
    // 	"id": 1,
    // 	"name": "SentientEnergy",
    // 	"type": "ROOTNODE"
    // }]
};
const treeviewReducer = function (currentState = initialState, action) {
    debugger
    let currentStateVal ={...currentState};
    switch (action.type) {
        case actionTypes.LOAD_INITIAL_TREE:
            return {
                ...currentState,
                tree: action.tree
            }
        case actionTypes.UPDATE_SELECTED_TREE:
            // let currentState ={...currentState};
            currentStateVal.tree.find(e => e.id === action.id).expanded = true;
            currentStateVal.tree.find(e => e.id === action.id).children = action.tree;
            return {
                ...currentState,
                tree:currentStateVal.tree
            }
        default:
            return currentStateVal
    }
}
export default treeviewReducer;