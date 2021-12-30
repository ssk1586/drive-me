import axios from 'axios';
import Cookies from 'js-cookie';

const USER_DATA = JSON.parse(Cookies.get('user'))

const config = {
  headers: { Authorization: `Bearer ${USER_DATA?.accessToken}` }
};

export async function fetchUsers(page = 1, searchTerm, userLimit) {
  const responce = await axios.get(`${process.env.REACT_APP_BASE_URL}/users?role=user&mode=passenger&page=${page}&query=${searchTerm}&limit=${userLimit}`, 
    config
  );
  return await responce.data;
};

export async function fetchStatus(status) {
  const responce = await axios.get(`${process.env.REACT_APP_BASE_URL}/users?role=user&mode=passenger&banned=${status}`,
  config
  );
  return await responce.data
};

export async function deleteUser(id) {
  const responce = await axios.delete(`${process.env.REACT_APP_BASE_URL}/users/${id}`,
  config
  );
  return await responce.data
} 

export async function fetchSort(sortType) {
  const responce = await axios.get(`${process.env.REACT_APP_BASE_URL}/users?sort=${sortType}&role=user&mode=passenger&page=2&query=&limit=15`,
  config
  );
  return await responce.data
} 

export async function fetchNewAdmin(values) {
  const responce = await axios.post(`${process.env.REACT_APP_BASE_URL}/users`,
  {
    email: values.email, password: values.pass, name:  values.name, surname:  values.surname
  },
  config,

  );
  return await responce.data
}
