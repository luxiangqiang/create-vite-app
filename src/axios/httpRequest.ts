/*
 * @Author: xiaolu
 * @Date: 2022-03-30 14:30:35
 * @LastEditors: xiaolu
 * @LastEditTime: 2022-04-06 17:36:39
 * @Description:
 */

import Request from "./http";

const httpRequester = new Request({
  timeout: 1000 * 60 * 5,
});

export default httpRequester;
