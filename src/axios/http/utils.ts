/*
 * @Author: xiaolu
 * @Date: 2022-03-30 14:53:51
 * @LastEditors: xiaolu
 * @LastEditTime: 2022-03-31 09:23:34
 * @Description: HTTP 状态码处理
 */

import type { AxiosResponse } from "axios";
import type { ResponseStatusMap } from "./types";

// 自定义状态码
const successHandler = (response: AxiosResponse): void => {
  responseSuccessStatusMap[response.data.code](response.data.msg);
};

// HTTP状态码
const errorHandler = (status: number): void => {
  responseErrorStatusMap[status]();
};

// code 状态码处理
const responseSuccessStatusMap: ResponseStatusMap = {
  401: (message?: string): void => {
    console.error(message);
  },
};

// HTTP 状态码处理
const responseErrorStatusMap: ResponseStatusMap = {
  401: (): void => {
    console.error(401);
  },
  403: (): void => {
    console.error(403);
  },
};

export { successHandler, errorHandler };
