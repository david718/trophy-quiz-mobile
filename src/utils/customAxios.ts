import axios, { AxiosRequestConfig } from 'axios';

const customAxios = () => {
  const REACT_APP_API_SERVER = `https://opentdb.com/api.php`;
  const axiosConfig: AxiosRequestConfig = {
    baseURL: REACT_APP_API_SERVER, // process.env.REACT_APP_API_SERVER
  };
  return axios.create(axiosConfig);
};

export default customAxios;
