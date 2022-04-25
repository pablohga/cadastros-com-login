import axios from 'axios';

const api = axios.create({
  /*baseURL: 'http://localhost:3000/api'*/
  baseURL: 'https://cadastros-com-login-b6ycd5sfx-wildgadget.vercel.app/api'
});

export default api;
