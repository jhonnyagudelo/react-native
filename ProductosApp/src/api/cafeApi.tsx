import axios from 'axios';

const baseUrl = 'http://kaput-spoon-production.up.railway.app/api';

const cafeApi = axios.create({ baseUrl });

export default cafeApi;
