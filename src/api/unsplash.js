import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 5e2999c4382a04a7dd046c17cec9695564aaee8cfc628e1a53dff98a7e33b856'
    }
});