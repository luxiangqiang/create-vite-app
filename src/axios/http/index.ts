/*
 * @Author: xiaolu
 * @Date: 2022-03-30 14:09:18
 * @LastEditors: xiaolu
 * @LastEditTime: 2022-04-07 10:20:25
 * @Description: Request 类
 */
import axios from "axios";
import { BASE_URL } from "@/axios/http/base";
import { successHandler, errorHandler } from "./utils";
import type { AxiosResponse, AxiosInstance, AxiosRequestConfig } from "axios";

class Request {
  // Axios 实例
  public instance: AxiosInstance;

  // 构造函数
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);

    // 请求拦截器
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        console.error(config);
        config.url = `${BASE_URL}${config.url}`;
        return config;
      },
      (err: any) => err
    );

    // 响应拦截器
    this.instance.interceptors.response.use(
      (response: AxiosResponse): any => {
        console.error(response);
        if (response.data.code !== 200) {
          successHandler(response);
        }
        return response?.data?.data;
      },
      (error: any) => {
        console.error(error);
        errorHandler(error?.response?.status);
      }
    );
  }

  // 网络请求
  request() {
    return this.instance;
  }
}

export default Request;
