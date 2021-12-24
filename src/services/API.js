import axios from 'axios';

export async function fetchUsers() {
  const responce = await axios.get(`${process.env.REACT_APP_BASE_URL}/users?role=user&mode=passenger&page=1&limit=30`);
  return await responce.data;
};
