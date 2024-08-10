/*
 * @Author: HHC
 * @Date: 2024-08-10 13:52:15
 * @LastEditTime: 2024-08-10 15:23:36
 */
import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1723269135702_8654',
  koa: {
    port: 7001,
  },
  cors: {
    origin: "*"
  }
} as MidwayConfig;
