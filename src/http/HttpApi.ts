import {AxiosResponse} from 'axios';
import {initializeAxios, axiosRequestConfiguration} from './HttpSetup';

export default class QuilHttpApi {
  private axiosInstance = initializeAxios(axiosRequestConfiguration);

  public async get<T>(
    url: string,
    queryParams?: object,
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.get<T>(url, {params: queryParams});
  }

  public async post(
    url: string,
    bodyParams: object,
    queryParams?: object,
    headers?: object,
  ) {
    console.trace('post', url, bodyParams, queryParams, headers);

    const postData = () =>
      this.axiosInstance.post(url, bodyParams, {params: queryParams, headers});

    return postData();
  }

  public async put(url: string, bodyParams: object, queryParams?: object) {
    console.trace('put', url, bodyParams, queryParams);

    const putData = () =>
      this.axiosInstance.put(url, bodyParams, {params: queryParams});

    return putData();
  }

  public async delete(url: string) {
    console.trace('delete', url);

    const deleteData = () => this.axiosInstance.delete(url);

    return deleteData();
  }
}
