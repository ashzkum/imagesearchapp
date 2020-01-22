import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 2b651b47110a0d8d33e6328a2e93aaf0267a764c883f60b6d33cae0decf9f31e'
      }
});