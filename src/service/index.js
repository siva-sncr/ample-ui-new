import axios from 'axios';

// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: 'https://a2p.maap-qa.us.sncrmmp.com',
    timeout: 2500,
});

// Alter defaults after instance has been created
instance.defaults.headers.common['Authorization'] = '512A3F732E80FC56638B24AB833C29B7';
instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;