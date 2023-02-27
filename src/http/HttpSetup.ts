import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

const API_URL = 'https://virtserver.swaggerhub.com/I425/ReactJS/1.0.0/';

const axiosRequestConfiguration: AxiosRequestConfig = {
  baseURL: API_URL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
};

const initialization = (config: AxiosRequestConfig): AxiosInstance => {
  const axiosInstance = axios.create(config);

  const onResponseSuccess = (response: any) => {
    return response;
  };
  const onResponseFail = async (error: any) => {
    return Promise.reject(error.response || error.message);
  };
  axiosInstance.interceptors.response.use(onResponseSuccess, onResponseFail);

  return axiosInstance;
};

export {initialization as initializeAxios, axiosRequestConfiguration};
