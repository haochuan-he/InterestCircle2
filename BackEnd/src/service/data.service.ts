/*
 * @Author: HHC
 * @Date: 2024-08-10 20:21:22
 * @LastEditTime: 2024-08-10 23:14:19
 */
import { Provide } from '@midwayjs/core';
import { User, Blog, InterestCircle, users, blogs, interestCircles } from '../model/data.model'

@Provide()
export class DataService {
    async createUser(user: User): Promise<User> {
        if (this.getUserByName == undefined)//避免用户名重复
        {
            const newUser = { ...user, id: Date.now() };//id采用时间戳保证唯一性；解构赋值（...user）来复制传入的 user 对象的所有属性
            users.push(newUser);
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
    //
    async getInterestCircles(): Promise<InterestCircle[]> {
        return interestCircles;
    }
}