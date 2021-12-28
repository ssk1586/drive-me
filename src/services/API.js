import axios from 'axios';

const USER_DATA = JSON.parse(localStorage.getItem('user'))

const config = {
  headers: { Authorization: `Bearer ${USER_DATA.accessToken}` }
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