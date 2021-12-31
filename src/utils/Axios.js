import axios from 'axios';
import Cookies from 'js-cookie';
import { deleteCookies } from '../services/userService'

const axiosConfig = axios.create({
    validateStatus: (status) => status < 500,
});

axiosConfig.interceptors.response.use(
  (config) => {
    if (config.status === 401) {
      deleteCookies()
    };
    return config.data
  },
);
  
axiosConfig.interceptors.request.use(
  (config) => {
    const USER_DATA = Cookies.get('accessToken')
    config.baseURL = process.env.REACT_APP_BASE_URL;
    config.headers.Authorization = `Bearer ${USER_DATA}`
    return config
  },
);

export default axiosConfig;