import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/giovannasdj/podcastr/',
});

export default api;
