/*
 * @Author: HHC
 * @Date: 2024-08-10 13:52:15
 * @LastEditTime: 2024-08-11 01:19:31
 */
import { Inject, Controller, Get, Query, Post, Body } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user.service';
import { DataService } from '../service/data.service';
@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;
  @Inject()
  dataService: DataService;

  // @Get('/get_user')
  // async getUser(@Query('uid') uid) {
  //   const user = await this.userService.getUser({ uid });
  //   return { success: true, message: 'OK', data: user };
  // }

  @Get('/checkLogin')
  async checkLogin(@Query() query: any) {
    // console.log('后端Received query --GET checkLogin:', query);
    // console.log("...查询数据库...");
    const username = query.UserName;
    const password = query.Password;

    const dataUser = await this.dataService.getUserByName(username);

    if (dataUser != undefined && password === dataUser.password) {
      // console.log("后端登录成功")
      return { success: true, message: 'OK', data: '' };
    } else {
      // console.log("后端登录失败")
      return { success: false, message: 'OK', data: '' };
    }
  }


  @Post('/register')
  async register(@Body() body: any) {
    // console.log('后端Received query --POST register:', body);
    // console.log("...更新数据库...");
    const username = body.UserName;
    const password = body.Password;

    const dataUser = await this.dataService.createUser({ id: -1, userImgURL: '', username: username, password: password });

    // console.log("后端创建用户为", dataUser);
    if (dataUser == undefined) {
      return { success: false, message: 'OK', data: '' }
    } else {
      return dataUser;
    }
  }
}
