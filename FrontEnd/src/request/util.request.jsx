/*
 * @Author: HHC
 * @Date: 2024-08-10 14:16:37
 * @LastEditTime: 2024-08-10 14:53:31
 */
import * as axios from 'axios'

const client = axios.default;

const base = "http://127.0.0.1:7001/api";

export async function getTitle() {
    const result = await client.get(base);
    return result.data;
}

export async function checkLogin(data) {
    const result = await client.get('http://127.0.0.1:7001/api/checkLogin', { params: data });
    return result;
}