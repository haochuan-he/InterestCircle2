/*
 * @Author: HHC
 * @Date: 2024-08-10 13:52:15
 * @LastEditTime: 2024-08-13 03:51:30
 */
import { Inject, Controller, Get, Query, Post, Body, File, } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user.service';
import { DataService } from '../service/data.service';

import * as fs from 'fs';
import * as path from 'path';
import { circles } from '../model/data.model';
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
      console.log("后端登录成功")
      return { success: true, message: 'OK', data: '', uid: dataUser.id };
    } else {
      // console.log("后端登录失败")
      return { success: false, message: 'OK', data: '' };
    }
  }

  @Get('/getUser')
  async getUser(@Query() query: any) {
    console.log("后端getUser id", query);
    const user = await this.dataService.getUserById(Number(query.uid));
    console.log("后端要返回", user)
    return user;
  }

  @Get('/getAllBlogs')
  async getAllUser() {
    const result = await this.dataService.getBlogs();
    console.log("后端getAllBlogs要返回", result)
    return result;
  }

  @Get('/getAllCircles')
  async getAllCircles() {
    const result = await this.dataService.getCircles();
    console.log("后端getAllCircles要返回", result)
    return result;
  }

  @Get('/getBlogByID')
  async getBlogByID(@Query() query: any) {
    console.log("--------后端getBlogByID id", query);
    const blog = await this.dataService.getBlogById(Number(query.id));
    console.log("--------后端要返回blog", blog)
    return blog;
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

  @Post('/uploadImage')
  async uploadImage(@File('file') file?: any) {
    if (!file || !file.filename) {
      console.log('后端Invalid or missing file data');
    }
    console.log("后端/uploadImage被调用")
    console.log("后端/uploadImage file", file)

    const imagePath = path.join(__dirname, '..', '..', '..', 'FrontEnd', 'public', 'images', file.filename);
    console.log("后端获取图片路径", imagePath);

    // const imagePath = path.join(__dirname, '..','..', '..', 'dist', 'public', 'images', file.filename);//打包之后可能使用

    // // 创建目标目录，如果不存在的话
    // if (!fs.existsSync(path.dirname(imagePath))) {
    //   fs.mkdirSync(path.dirname(imagePath), { recursive: true });
    // }

    // 读取临时文件的内容
    const sourceStream = fs.createReadStream(file.data);

    const targetStream = fs.createWriteStream(imagePath);
    sourceStream.pipe(targetStream);

    return { imageURL: `../../public/images/${file.filename}` };
  }

  @Post('/createBlog')
  async createBlog(@Body() body: any) {
    const user = await this.dataService.getUserById(body.uid);
    await this.dataService.addLover(body.circle, user);
    await this.dataService.createBlog({
      id: -1,

      circle: body.circle,
      title: body.title,
      detail: body.detail,
      blogImgURL: body.blogImgURL,
      name: user.username,
      date: this.dataService.getDateTime().date,
      userImgURL: user.userImgURL,
      allComments: [],
    })

    return { success: true };
  }

  @Post('/createComment')
  async createComment(@Body() body: any) {
    const blog = await this.dataService.getBlogById(body.bid);
    blog.allComments.push({
      id: Date.now(),
      username: body.username,
      userImgURL: body.userImgURL,
      content: body.content
    })

    console.log("后端完成创建评论，现在所在blog", blog)
    return { success: true };
  }

  @Post('/createCircle')
  async createCircle(@Body() body: any) {
    const users = body.user;
    circles.push({
      id: Date.now(),
      name: body.name,
      lovers: [users]
    })

    console.log("后端完成创建圈子")
    return { success: true };
  }
}
