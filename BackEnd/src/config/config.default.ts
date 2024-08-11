/*
 * @Author: HHC
 * @Date: 2024-08-10 13:52:15
 * @LastEditTime: 2024-08-11 15:25:24
 */
import { MidwayConfig } from '@midwayjs/core';
export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1723269135702_8654',
  koa: {
    port: 7001,
    session: {
      key: '1001', // 会话密钥
      maxAge: 24 * 60 * 60 * 1000, // 会话过期时间
      httpOnly: true, // 是否只允许HTTP访问
      signed: true, // 是否签名

    }
  },
  cors: {
    origin: "*"
  }
} as MidwayConfig;
