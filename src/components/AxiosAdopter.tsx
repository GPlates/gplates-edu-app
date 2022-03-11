import Axios from 'axios';

export const axios = Axios.create();
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// for further configuration on axios request