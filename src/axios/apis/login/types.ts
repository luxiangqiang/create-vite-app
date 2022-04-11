/*
 * @Author: xiaolu
 * @Date: 2022-04-06 16:52:02
 * @LastEditors: xiaolu
 * @LastEditTime: 2022-04-07 16:19:35
 * @Description:
 */

export type GetRelationDataType = {
  domain: string;
  nodeName: string;
  matchType: string;
};

export type ResponseRelationData<T> = {
  node: Array<T>;
  relationship: Array<T>;
};
