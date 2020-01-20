import axios from 'axios';

// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: 'https://a2p.maap-qa.us.sncrmmp.com',
    timeout: 2500,
});

// Alter defaults after instance has been created
instance.defaults.headers.common['Authorization'] = 'Bearer 07cf03fac7c440818b5b9d5eaccb6843dc8374ec144e44f3b886af35e3f80edf3f8267d0b4cd468ba00000f0032a69cbcd15b6b2b94b47b3b05ecb60abd6fb2ab9608314953043cda7ec62726a6f0e3a';
instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;