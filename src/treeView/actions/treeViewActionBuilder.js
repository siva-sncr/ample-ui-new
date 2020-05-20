import * as actionDispatch from './treeViewActionDispatch';

export const initTree = (data) => {
    return dispatch => {
        dispatch(actionDispatch.setTree(data)); // sending only orgnode
    };
};
export const loadNextLevelTree = (data,id) => {
    return dispatch => {
        dispatch(actionDispatch.loadNextLevelTree(data,id)); 
    };
};
