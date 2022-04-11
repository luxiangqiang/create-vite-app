/*
 * @Author: xiaolu
 * @Date: 2022-03-30 14:26:27
 * @LastEditors: xiaolu
 * @LastEditTime: 2022-03-30 16:28:08
 * @Description:
 */

export type ResponseStatusMap = {
  [status: number | string]: (mes?: string) => void;
};
