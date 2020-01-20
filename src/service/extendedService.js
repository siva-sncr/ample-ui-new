import instance from './index';

export const postData = async(url, params, returnName) => {
    return instance.get(url)
    .then((response) => {
        if (typeof response.data === 'object') {
            var data = response.data[returnName] ? response.data[returnName] : response.data;
            return data;
        }
    }, (error) => {
        return error;
    });
}