import { useStoreAuth } from '@/store/Auth';
import axios from 'axios';

const { token } = useStoreAuth.getState();
export const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
api.interceptors.request.use((config) => {
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
