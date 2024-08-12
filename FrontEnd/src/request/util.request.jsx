/*
 * @Author: HHC
 * @Date: 2024-08-10 14:16:37
 * @LastEditTime: 2024-08-12 15:17:23
 */
import * as axios from 'axios'

const client = axios.default;

const base = "http://127.0.0.1:7001/api";

export async function getTitle() {
    const result = await client.get(base);
    return result.data;
}

export async function checkLogin(data) {
    const result = await client.get(base + '/checkLogin', { params: data });
    return result;
}

export async function register(data) {
    // console.log("前端register中", data)
    const result = await client.post(base + '/register', data);
    return result;
}

export async function homeGetUser(uid) {
    console.log("前端homeGetUser中", uid)
    const result = await client.get(base + '/getUser', { params: { uid } });//注意uid有括号！！！
    console.log("前端homeGetUser准备返回", result.data);
    return result.data;
}

export async function imageUpload(formData, anotherData) {
    console.log("前端request imageUpload中");
    console.log("formData", formData);
    console.log("anotherData", anotherData);

    const result = await client.post(base + '/uploadImage', formData, anotherData);

    console.log("前端收到结果", result.data.imageURL);
    return result.data.imageURL;
}

export async function getAllBlogs() {
    const result = await client.get(base + '/getAllUser');

    console.log("前端getAllblogs收到结果", result.data);
    return result.data;
}

