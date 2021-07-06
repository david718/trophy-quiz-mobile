import axios, { AxiosRequestConfig } from 'axios';

const customAxios = () => {
  console.log(process.env.REACT_APP_API_SERVER);
  const axiosConfig: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_API_SERVER,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return axios.create(axiosConfig);
};

export default customAxios;
