import axios from 'axios';

// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: 'https://172.20.3.130',
    timeout: 2500,
});

// Alter defaults after instance has been created
instance.defaults.headers.common['Authorization'] = '512A3F732E80FC56638B24AB833C29B7';
instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;