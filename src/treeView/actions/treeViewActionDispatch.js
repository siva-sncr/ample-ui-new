import * as actionTypes from './treeViewActionTypes';

export const setTree = (tree) => {
    //map response tree name to title - since tree view library needs tittle. 
    return {
        type: actionTypes.LOAD_INITIAL_TREE,
        tree: tree
    };
};
export const loadNextLevelTree = (tree,id) => {
    //map response tree name to title - since tree view library needs tittle. 
    return {
        type: actionTypes.UPDATE_SELECTED_TREE,
        tree: tree,
        id:id
    };
};
