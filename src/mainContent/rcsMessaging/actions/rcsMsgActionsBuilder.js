import * as rcsMsgDispatch from './rcsMsgActionDispatch';
import { postData } from '../../../service/extendedService';

export const rcsMsgSubmit = (url, params, returnName) => {
    return dispatch => {
        dispatch(rcsMsgDispatch.onLoading(true));
        postData(url, params, returnName).then(response => {
            console.log(" Msg Submit  response  ",response);
            dispatch(rcsMsgDispatch.onRcsMsgSubmit(response))
        })
        .catch(error => {
            console.log(" Msg Submit  error  ",error);
            dispatch(rcsMsgDispatch.onRcsMsgSubmit(null))
        });

    };
};