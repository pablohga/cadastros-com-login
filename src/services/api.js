import axios from 'axios';
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
const api = axios.create({
  baseURL: 'http://localhost:3000/api'
 /* baseURL: 'https://cadastros-com-login-b6ycd5sfx-wildgadget.vercel.app/api'*/
});

export default api;
