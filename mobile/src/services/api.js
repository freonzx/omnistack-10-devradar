import axios from 'axios';

const api = axios.create({
  baseURL: 'https://blooming-wildwood-40548.herokuapp.com/',
});

export default api;
