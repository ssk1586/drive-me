import axios from "axios";
import Cookies from 'js-cookie';

export async function userLogin({ email, pass }) {
  const responce = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`, {
    "email": email,
    "password": pass,
  });
  return await responce.data;
};

export const isAdmin = () => {
  const data = JSON.parse(Cookies.get('user'))
  const isAdminRole = data.user.role == 'admin' ? true : false;
  return isAdminRole;
};

export const deleteCookies = () => {
  Cookies.remove('user');
  Cookies.remove('accessToken');
  Cookies.remove('refreshToken');
  window.location.href = '/signIn';
};
