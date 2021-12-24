import axios from "axios";

export async function userLogin({ email, pass }) {
  const responce = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`, {
    "email": email,
    "password": pass,
  });
  return await responce.data;
};