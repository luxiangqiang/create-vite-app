/*
 * @Author: xiaolu
 * @Date: 2022-03-30 14:04:08
 * @LastEditors: xiaolu
 * @LastEditTime: 2022-04-07 16:21:21
 * @Description:
 */

import httpRequester from "@/axios/httpRequest";
import type * as types from "./types";

type ResponseRelationItem = {
  name: string;
  uuid: number;
};

const requestInstance = httpRequester.request();

export function getRelationData(
  data: types.GetRelationDataType
): Promise<types.ResponseRelationData<ResponseRelationItem>> {
  return requestInstance.post("/getDomainGraph", data) as Promise<
    types.ResponseRelationData<ResponseRelationItem>
  >;
}
