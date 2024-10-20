import axios from 'axios';
import { deleteCookie, getCookie } from 'cookies-next';

const axiosInstance = axios.create({
  baseURL: 'https://file-storage-lake.vercel.app/api/v1', // Replace with your API base URL
  headers: { 'Content-Type': 'application/json' },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before the request is sent
    // For example, add an authentication token to the headers
    const token = getCookie('accessToken'); // Retrieve auth token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Handle the error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Do something with the response data
    return response.data;
  },
  function (error) {
    // Handle the response error
    if (error.response && error.response.status === 401) {
      // Handle unauthorized error
      console.error('Unauthorized, logging out...');
      deleteCookie('accessToken');
      // Perform any logout actions or redirect to login page
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
