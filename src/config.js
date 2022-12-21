import axios from 'axios';
import { EnumKey } from './utils/enum';
import Cookies from 'js-cookie';

export const axiosInstance = axios.create({
  baseURL: 'https://bookingbe.onrender.com/',
  withCredentials: true
});

axiosInstance.interceptors.request.use(function (config) {
  const AK = Cookies.get(EnumKey.access_token);
  config.headers['Authorization'] = AK;
  return config;
}, null, { synchronous: true });
