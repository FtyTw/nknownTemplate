import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from 'axios';

const axiosDefaults = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

class Network {
  client: AxiosInstance;
  constructor(
    baseURL: string,
    onFulfilled: (
      config: InternalAxiosRequestConfig,
    ) => Promise<InternalAxiosRequestConfig> | InternalAxiosRequestConfig,
  ) {
    const axiosInstance = axios.create({baseURL, ...axiosDefaults});

    axiosInstance.interceptors.request.use(onFulfilled, error => error);
    axiosInstance.interceptors.response.use(
      response => response,
      error => error,
    );
    this.client = axiosInstance;
  }

  async request(config: AxiosRequestConfig) {
    return this.client(config);
  }
}

export default Network;
