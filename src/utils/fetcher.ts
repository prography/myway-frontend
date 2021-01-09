import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.copl.kr',
});

export default instance;