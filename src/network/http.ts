import Network from './network';

import {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
  isAxiosError,
} from 'axios';
import { NknownData } from '@redux/types';

export const baseURL = 'https://swapi.dev/api/';
class nknownNetworkContainer extends Network {
  // drop your fetch methods here
  async fetchNknownData(data: NknownData) {
    const url = `people/${data.id}`;
    const response: AxiosResponse<any> | AxiosError = await this.request({
      url,
      method: 'get',
    });

    if (isAxiosError(response)) {
      throw new Error(response?.response?.data?.message);
    }

    return response;
  }

  async fetchNknownPlanetsData(data?: any) {
    const url = 'planets';
    const response: AxiosResponse<any> | AxiosError = await this.request({
      url,
      method: 'get',
      data,
    });

    if (isAxiosError(response)) {
      throw new Error(response?.response?.data?.message);
    }

    return response;
  }
}
const onFullFilled = async (config: InternalAxiosRequestConfig) => {
  // provide own config changes with interceptor, for example add authorization key to every request if it's needed:
  // const token = await getValue(STORAGE_KEYS.AUTH);
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }
  return config;
};
export const nknownNetwork = new nknownNetworkContainer(baseURL, onFullFilled);
