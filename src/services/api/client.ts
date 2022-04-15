import axios, { AxiosError } from 'axios';
import { API_URL } from '@/services/api/config';
import store from '@/store';
import LocalStorageService from '@/services/localStorage/LocalStorageService';

export const client = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

// TODO передача токена при запросах
client.interceptors.request.use(async (config) => {
    if (LocalStorageService.isAuth) {
      config.headers.Authorization = `Bearer ${LocalStorageService.getToken()}`
    }
    return config
});
client.interceptors.response.use(
  response => response,
   async (error: AxiosError) => {
    const originalRequest = error.config
    if (error.response!.data.type === 'tokenExpiredException') {
      const refreshToken = LocalStorageService.getRefreshToken()
      await store.dispatch('auth/fetchRefreshToken', { refreshToken });
      return client(originalRequest);
    }

    store.commit('addError', error.response);
  }
);
