import axios from 'axios';

// export const BASE_URL = 'http://ec2-52-59-240-83.eu-central-1.compute.amazonaws.com:9090';

console.log(process.env.REACT_APP_BASE_URL)

export async function fetchUsers() {
  const responce = await axios.get(`${process.env.REACT_APP_BASE_URL}/users?role=user&mode=passenger&page=1&limit=30`);
  return await responce.data;
};
