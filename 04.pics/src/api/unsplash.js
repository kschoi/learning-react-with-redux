import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 5869ea741bfb94a8215604a6abc0ec1ba600e8515eeeb3dbab751fdfa598640d'
  }
});