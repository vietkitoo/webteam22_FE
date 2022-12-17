import axios from 'axios';
export const axiosInstance = axios.create({
  baseURL: 'https://webteam22-be.vercel.app',
  withCredentials: true
});
