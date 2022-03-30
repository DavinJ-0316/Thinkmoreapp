import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000',
});

API.interceptors.request.use((request) => {
  const authToken = sessionStorage.getItem('TMA_AUTH_TOKEN');

  request.headers['X-Auth-Token'] = authToken;

  return request;
});

API.interceptors.response.use((response) => {
  const authToken = response.headers['X-Auth-Token'.toLowerCase()];

  sessionStorage.setItem('TMA_AUTH_TOKEN', authToken);

  return response;
})

export default API
