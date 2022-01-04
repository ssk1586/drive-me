import axios from 'axios';
import Cookies from 'js-cookie';
import axiosConfig from '../utils/Axios';

const USER_DATA = Cookies.get('user') && JSON.parse(Cookies.get('user'))

const config = {
  headers: { Authorization: `Bearer ${USER_DATA?.accessToken}` }
};

export async function fetchUsers(page = 1, searchTerm, userLimit, mode, role) {
  const responce = await axiosConfig.get(`/users?role=${role}&mode=${mode}&page=${page}&query=${searchTerm}&limit=${userLimit}`);
  return responce;
};

export async function fetchStatus(status, mode) {
  const responce = await axiosConfig.get(`/users?role=user&mode=${mode}&banned=${status}`)
  return responce;
};

export async function deleteUser(id) {
  const responce = await axiosConfig.delete(`${process.env.REACT_APP_BASE_URL}/users/${id}`,
  config
  );
  return await responce.data
};

export async function fetchSort(sortType, mode) {
  const responce = await axiosConfig.get(`/users?sort=${sortType}&role=user&mode=${mode}&page=1&query=&limit=15`);
  return  responce
};

export async function fetchNewAdmin(values) {
  const responce = await axios.post(`${process.env.REACT_APP_BASE_URL}/users`,
  {
    email: values.email, password: values.pass, name:  values.name, surname:  values.surname
  },
  config,
  );
  return await responce.data
};

export async function fetchAdmins(page = 1, searchTerm, userLimit, role) {
  const responce = await axiosConfig.get(`/users?role=${role}&page=${page}&query=${searchTerm}&limit=${userLimit}`);
  return responce;
};

export async function fetchSortAdmins(sortType) {
  const responce = await axiosConfig.get(`/users?sort=${sortType}&role=moderator&page=1&query=&limit=15`);
  return  responce
};
