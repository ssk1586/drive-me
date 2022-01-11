import axios from 'axios';
import Cookies from 'js-cookie';
import axiosConfig from '../utils/Axios';

export const USER_DATA = Cookies.get('user') && JSON.parse(Cookies.get('user'))

const config = {
  headers: { Authorization: `Bearer ${USER_DATA?.accessToken}` }
};

export async function fetchUsers(page = 1, searchTerm, userLimit, mode, role, sortType) {

  const responce = await axiosConfig.get(`/users?sort=${sortType}&role=${role}&mode=${mode}&page=${page}&query=${searchTerm}&limit=${userLimit}`);
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

export async function fetchDriverLicense(id) {
  const responce = await axiosConfig.get(`/users/${id}?images=drivingLicense,registrationCertificate`);
  return  responce
};

export async function fetchTrips(id, sortType='type', page=1,  limit=15) {
  const responce = await axiosConfig.get(`/trips?user=${id}&sort=${sortType}&page=${page}&limit=${limit}`);
  return  responce
};

export async function fetchFeedbacks(id, page, limit) {
  const responce = await axiosConfig.get(`/users/${id}/feedbacks?page=${page}&limit=${limit}`);
  return  responce
};