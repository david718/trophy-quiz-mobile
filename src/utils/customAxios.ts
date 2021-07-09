import axios, { AxiosRequestConfig } from 'axios';

const customAxios = () => {
  const axiosConfig: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_API_SERVER,
  };
  return axios.create(axiosConfig);
};

export default customAxios;
