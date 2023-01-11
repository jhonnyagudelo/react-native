import axios from 'axios';

const baseURL = 'https://kaput-spoon-production.up.railway.app/api';

const cafeApi = axios.create({ baseURL });

export default cafeApi;
