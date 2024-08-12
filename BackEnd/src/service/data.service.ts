/*
 * @Author: HHC
 * @Date: 2024-08-10 20:21:22
 * @LastEditTime: 2024-08-13 01:40:29
 */
import { Provide } from '@midwayjs/core';
import { User, Blog, Circle, users, blogs, circles } from '../model/data.model'

@Provide()
export class DataService {

    getDateTime() {
        const date = new Date();
        const dateString = date.toISOString().split('T')[0]; // 2024-08-12
        console.log("后端生成日期：", dateString);
        return { date: dateString };
    }

    async createUser(user: User): Promise<User> {
        // console.log("后端DataService", user)
        // console.log("后端DataService", this.getUserByName(user.username) )
        // console.log("现在所有用户", this.getUsers())

        if (await this.getUserByName(user.username) == undefined)//避免用户名重复
        {
            // console.log("创建新用户");
            const newUser = { ...user, id: Date.now() };//id采用时间戳保证唯一性；解构赋值（...user）来复制传入的 user 对象的所有属性
            newUser.userImgURL = "/images/defaultUser.jpg"
            users.push(newUser);
            // console.log("新用户is", newUser);

            return newUser;
        } else {
            return undefined;
        }

    }

    async getUsers(): Promise<User[]> {
        return users;
    }

    async getUserById(id: number): Promise<User | undefined> {
        return users.find(user => user.id === id);
    }

    async getUserByName(name: string): Promise<User | undefined> {
        return users.find(user => user.username === name);
    }

    async updateUser(id: number, updates: Partial<User>): Promise<User | undefined> {
        const userIndex = users.findIndex(user => user.id === id);
        if (userIndex === -1) return undefined;
        const updatedUser = { ...users[userIndex], ...updates };
        users[userIndex] = updatedUser;
        return updatedUser;
    }

    async deleteUser(id: number): Promise<boolean> {
        const index = users.findIndex(user => user.id === id);
        if (index === -1) return false;
        users.splice(index, 1);//splice从指定索引移除一个元素
        return true;
    }

    //TODO 相似的实现方法用于帖子和兴趣圈
    async getBlogs(): Promise<Blog[]> {
        return blogs;
    }
    async getBlogById(id: number): Promise<Blog | undefined> {
        return blogs.find(blog => blog.id === id);
    }

    async getBlogByName(name: string): Promise<Blog | undefined> {
        return blogs.find(blog => blog.name === name);
    }
    async getBlogByCircle(circle: string): Promise<Blog | undefined> {
        return blogs.find(blog => blog.circle === circle);
    }

    async createBlog(blog: Blog): Promise<Blog> {

        const newBlog = { ...blog, id: Date.now() };
        blogs.push(newBlog);
        console.log("后端返回前blogs", blogs);
        return newBlog;
    }
    //
    async getCircles(): Promise<Circle[]> {
        return circles;
    }
}