import { Inject, Controller, Get, Query } from '@midwayjs/core';
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
    console.log('后端Received query:', query);
    console.log("...查询数据库...");
    const username = query.UserName;
    const password = query.Password;

    const dataUser = await this.dataService.getUserByName(username);

    if (dataUser != undefined && password === dataUser.password) {
      console.log("后端登录成功")
      return { success: true, message: 'OK', data: '' };
    } else {
      console.log("后端登录失败")
      return { success: false, message: 'OK', data: '' };
    }
  }
}
